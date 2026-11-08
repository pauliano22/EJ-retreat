/*
 * Lead attribution for E&J Retreats.
 * Captures utm_source / utm_medium / utm_campaign, the referrer, the landing
 * page and the first visit time on every page, keeps them in sessionStorage
 * for the rest of the visit, and fills any hidden inputs with those names.
 * Forms call window.ejAttribution() to merge the values into their payload.
 */
(function () {
  var KEY = 'ej_attribution';
  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
  var ALL_KEYS = UTM_KEYS.concat(['referrer', 'landing_page', 'first_visit_time']);

  function readStore() {
    try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  function writeStore(obj) {
    try { sessionStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) { /* storage blocked, fall back to this page only */ }
  }

  function capture() {
    var params = new URLSearchParams(window.location.search);
    var stored = readStore();
    var hasUtmInUrl = UTM_KEYS.some(function (k) { return params.get(k); });

    if (!stored) {
      stored = {
        utm_source: '', utm_medium: '', utm_campaign: '',
        referrer: document.referrer || 'direct',
        landing_page: window.location.href,
        first_visit_time: new Date().toISOString()
      };
    }
    // A fresh UTM-tagged arrival mid-session wins over whatever was stored.
    if (hasUtmInUrl) {
      UTM_KEYS.forEach(function (k) { stored[k] = params.get(k) || ''; });
      stored.landing_page = window.location.href;
      if (document.referrer && document.referrer.indexOf(window.location.host) === -1) {
        stored.referrer = document.referrer;
      }
    }
    writeStore(stored);
    return stored;
  }

  var attr = capture();

  function fillHiddenFields() {
    ALL_KEYS.forEach(function (k) {
      var els = document.querySelectorAll('input[type="hidden"][name="' + k + '"]');
      for (var i = 0; i < els.length; i++) els[i].value = attr[k] || '';
    });
  }

  window.ejAttribution = function () {
    var out = {};
    ALL_KEYS.forEach(function (k) { out[k] = attr[k] || ''; });
    return out;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fillHiddenFields);
  } else {
    fillHiddenFields();
  }
})();
