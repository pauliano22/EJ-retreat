#!/usr/bin/env python3
"""Weekly blog post generator for E&J Retreats using the Anthropic API."""

import anthropic
import datetime
import hashlib
import json
import os
import re
import sys

# ---------------------------------------------------------------------------
# Topic rotation
# ---------------------------------------------------------------------------
TOPICS = [
    {
        "title": "How to Find a Reliable Airbnb Property Management Company",
        "slug": "how-to-find-airbnb-property-management-company",
        "keyword": "Airbnb property management company",
        "category": "Property Management",
        "description": "What to look for when hiring an Airbnb management company — fees, transparency, communication, and results.",
    },
    {
        "title": "Short-Term Rental vs Long-Term Rental: Which Earns More?",
        "slug": "short-term-rental-vs-long-term-rental",
        "keyword": "short-term rental vs long-term rental",
        "category": "STR Strategy",
        "description": "A data-backed comparison of STR vs LTR revenue, management burden, and tax implications for US property owners.",
    },
    {
        "title": "How Dynamic Pricing Works for Vacation Rentals",
        "slug": "dynamic-pricing-vacation-rentals",
        "keyword": "dynamic pricing vacation rentals",
        "category": "Pricing Strategy",
        "description": "How dynamic pricing tools automatically adjust nightly rates to maximize occupancy and revenue.",
    },
    {
        "title": "Airbnb Occupancy Rate Benchmarks by US Market (2025)",
        "slug": "airbnb-occupancy-rate-benchmarks-us-markets",
        "keyword": "Airbnb occupancy rate benchmarks",
        "category": "Market Data",
        "description": "Average occupancy rates for short-term rentals across major US markets and how to benchmark your property.",
    },
    {
        "title": "How to Maximize Your Airbnb Income Without Lowering Your Rates",
        "slug": "maximize-airbnb-income-without-lowering-rates",
        "keyword": "maximize Airbnb income",
        "category": "Revenue Management",
        "description": "Strategies to boost Airbnb revenue through listing optimization, amenities, and channel distribution — not rate cuts.",
    },
    {
        "title": "What Does Vacation Rental Property Management Cost?",
        "slug": "vacation-rental-property-management-cost",
        "keyword": "vacation rental property management cost",
        "category": "Property Management",
        "description": "A transparent breakdown of STR management fees — percentage models, flat fees, and what's worth paying for.",
    },
    {
        "title": "Channel Manager for Vacation Rentals: Is It Worth It?",
        "slug": "channel-manager-vacation-rentals",
        "keyword": "channel manager vacation rentals",
        "category": "Technology",
        "description": "How channel managers sync calendars across Airbnb, VRBO, Booking.com, and direct booking sites to prevent double bookings.",
    },
    {
        "title": "How to Get More 5-Star Reviews on Airbnb",
        "slug": "how-to-get-5-star-reviews-airbnb",
        "keyword": "how to get 5-star reviews on Airbnb",
        "category": "Guest Experience",
        "description": "Actionable tactics that STR management companies use to consistently earn 5-star guest reviews.",
    },
    {
        "title": "Airbnb Superhost Requirements and Why It Matters for Revenue",
        "slug": "airbnb-superhost-requirements-revenue",
        "keyword": "Airbnb Superhost requirements",
        "category": "STR Strategy",
        "description": "What it takes to become an Airbnb Superhost and the measurable revenue impact of the badge.",
    },
    {
        "title": "How to Set the Right Nightly Rate for Your Vacation Rental",
        "slug": "set-right-nightly-rate-vacation-rental",
        "keyword": "vacation rental nightly rate",
        "category": "Pricing Strategy",
        "description": "A data-driven approach to setting competitive nightly rates that maximize both occupancy and revenue.",
    },
    {
        "title": "VRBO vs Airbnb for Property Owners: Which Platform Earns More?",
        "slug": "vrbo-vs-airbnb-for-property-owners",
        "keyword": "VRBO vs Airbnb for property owners",
        "category": "STR Strategy",
        "description": "A side-by-side comparison of VRBO and Airbnb fees, audience reach, and revenue potential for vacation rental owners.",
    },
    {
        "title": "Short-Term Rental Laws by State: What Owners Need to Know",
        "slug": "short-term-rental-laws-by-state",
        "keyword": "short-term rental laws by state",
        "category": "Regulations",
        "description": "A state-by-state overview of STR regulations, permit requirements, and restrictions property owners should know.",
    },
    {
        "title": "How to Optimize Your Airbnb Listing for More Bookings",
        "slug": "optimize-airbnb-listing-for-more-bookings",
        "keyword": "optimize Airbnb listing",
        "category": "Listing Optimization",
        "description": "Title, description, photos, and amenity strategies that improve Airbnb search ranking and booking conversion.",
    },
    {
        "title": "What Is RevPAN and Why It Matters for Short-Term Rentals",
        "slug": "what-is-revpan-short-term-rentals",
        "keyword": "RevPAN short-term rental",
        "category": "Revenue Management",
        "description": "Revenue per available night — the STR metric that reveals true earning efficiency beyond simple occupancy.",
    },
    {
        "title": "How to Turn Your Vacation Home Into a Rental Property",
        "slug": "turn-vacation-home-into-rental-property",
        "keyword": "turn vacation home into rental property",
        "category": "Getting Started",
        "description": "A step-by-step guide to listing your vacation home on Airbnb or VRBO and maximizing its rental income.",
    },
    {
        "title": "Vacation Rental Insurance: What Coverage Do You Actually Need?",
        "slug": "vacation-rental-insurance-coverage",
        "keyword": "vacation rental insurance",
        "category": "Property Management",
        "description": "The difference between standard homeowner's insurance and short-term rental coverage, and what policies actually protect you.",
    },
    {
        "title": "How Professional STR Photography Increases Booking Revenue",
        "slug": "professional-str-photography-increases-revenue",
        "keyword": "vacation rental photography",
        "category": "Listing Optimization",
        "description": "Data on how professional listing photos affect click-through rates, bookings, and nightly rates for vacation rentals.",
    },
    {
        "title": "Airbnb Cleaning Fees: How to Price Them Without Losing Bookings",
        "slug": "airbnb-cleaning-fees-how-to-price",
        "keyword": "Airbnb cleaning fees",
        "category": "Pricing Strategy",
        "description": "The psychology and strategy behind Airbnb cleaning fees and how to set them without hurting your search ranking.",
    },
    {
        "title": "How to Build a Direct Booking Website for Your Vacation Rental",
        "slug": "direct-booking-website-vacation-rental",
        "keyword": "direct booking website vacation rental",
        "category": "Technology",
        "description": "Why STR owners increasingly rely on direct booking sites to avoid OTA fees and build repeat guest relationships.",
    },
    {
        "title": "Top Markets for Short-Term Rental Investment in 2025",
        "slug": "top-short-term-rental-investment-markets-2025",
        "keyword": "short-term rental investment markets",
        "category": "Market Data",
        "description": "The US markets showing the strongest STR cap rates, occupancy, and ADR growth for new vacation rental investments.",
    },
    {
        "title": "How to Reduce Airbnb Vacancy and Keep Your Calendar Full",
        "slug": "reduce-airbnb-vacancy-keep-calendar-full",
        "keyword": "reduce Airbnb vacancy",
        "category": "Revenue Management",
        "description": "Proven calendar management strategies to minimize vacancy, target the right booking windows, and maximize revenue.",
    },
    {
        "title": "Airbnb Property Management Agreement: What to Look For",
        "slug": "airbnb-property-management-agreement",
        "keyword": "Airbnb property management agreement",
        "category": "Property Management",
        "description": "Key clauses to review in a vacation rental management contract — termination rights, fee transparency, and performance guarantees.",
    },
    {
        "title": "How Much Can You Make on Airbnb? A Realistic Income Guide",
        "slug": "how-much-can-you-make-on-airbnb",
        "keyword": "how much can you make on Airbnb",
        "category": "Getting Started",
        "description": "Realistic Airbnb income expectations by property type, market, and management approach — backed by STR market data.",
    },
    {
        "title": "How to Handle Difficult Guests as a Vacation Rental Owner",
        "slug": "handle-difficult-guests-vacation-rental",
        "keyword": "vacation rental difficult guests",
        "category": "Guest Experience",
        "description": "How professional STR managers handle noise complaints, damage claims, and problem guests while protecting your property.",
    },
    {
        "title": "Airbnb vs Hotel: Why Guests Choose Vacation Rentals",
        "slug": "airbnb-vs-hotel-why-guests-choose-vacation-rentals",
        "keyword": "Airbnb vs hotel",
        "category": "Market Data",
        "description": "The guest preferences driving vacation rental demand growth and what it means for property owners and STR managers.",
    },
    {
        "title": "How to Price Your Airbnb for Peak Season vs Off-Season",
        "slug": "price-airbnb-peak-season-off-season",
        "keyword": "Airbnb peak season pricing",
        "category": "Pricing Strategy",
        "description": "Seasonal pricing strategies that maximize ADR during peak demand and maintain occupancy during slower months.",
    },
    {
        "title": "What Is a Short-Term Rental Management Company and Do You Need One?",
        "slug": "what-is-short-term-rental-management-company",
        "keyword": "short-term rental management company",
        "category": "Property Management",
        "description": "A clear breakdown of what full-service STR management includes, who it's right for, and what it costs.",
    },
    {
        "title": "How to Write an Airbnb Listing Description That Books More Guests",
        "slug": "airbnb-listing-description-that-books-more-guests",
        "keyword": "Airbnb listing description",
        "category": "Listing Optimization",
        "description": "The structure, tone, and keywords that make Airbnb listing descriptions convert browsers into booked guests.",
    },
    {
        "title": "The Real Cost of Self-Managing a Vacation Rental",
        "slug": "real-cost-self-managing-vacation-rental",
        "keyword": "self-managing vacation rental cost",
        "category": "Property Management",
        "description": "The hidden time, stress, and revenue costs of self-managing an Airbnb — and when professional management pays off.",
    },
    {
        "title": "How to Increase Your Airbnb Average Daily Rate (ADR)",
        "slug": "increase-airbnb-average-daily-rate",
        "keyword": "Airbnb average daily rate",
        "category": "Revenue Management",
        "description": "Specific tactics to increase ADR without sacrificing occupancy — from listing upgrades to strategic minimum stays.",
    },
]


# ---------------------------------------------------------------------------
# Pick this week's topic based on current week number (cycles through list)
# ---------------------------------------------------------------------------
def pick_topic() -> dict:
    week_number = datetime.date.today().isocalendar()[1]
    year = datetime.date.today().year
    index = (year * 52 + week_number) % len(TOPICS)
    return TOPICS[index]


# ---------------------------------------------------------------------------
# Generate post HTML with Claude
# ---------------------------------------------------------------------------
def generate_post(topic: dict) -> str:
    client = anthropic.Anthropic()

    system_prompt = """You are an expert content writer for E&J Retreats, a national Airbnb and short-term rental (STR) management company based in the US.

Your job is to write SEO-optimized blog post BODY CONTENT in HTML. You will write informative, valuable content that helps vacation rental owners — while naturally positioning E&J Retreats as the expert solution.

Rules:
- Write in a confident, helpful, professional tone (not salesy)
- Target national US audience (not just one city)
- Use the primary keyword naturally 3-5 times
- Structure: lead paragraph → 2-3 H2 sections → each H2 has 1-2 H3 subsections → closing CTA block
- Include at least one <ul class="blog-list"> with <li><strong>term:</strong> explanation</li> items
- Include one <div class="blog-callout"><h4><i class="fa-solid fa-lightbulb"></i> Tip title</h4><p>tip text</p></div>
- Include one inline CTA early in the post: <div class="blog-cta-inline"><p><strong>CTA text</strong></p><a href="../index.html#revenue-report" class="btn btn-primary">Get Your Free Revenue Potential Report</a></div>
- End with: <div class="blog-cta-bottom"><h3>Ready to see what your property should really be making?</h3><p>We compare your property against 20+ nearby short-term rentals with similar bed and bath counts using professional STR market analytics. Free, no obligation.</p><div style="display:flex;gap:12px;flex-wrap:wrap;"><a href="../index.html#revenue-report" class="btn btn-primary">Get My Free Revenue Report</a><a href="../contact.html" class="btn btn-secondary">Talk to Our Team</a></div></div>
- Do NOT include <html>, <head>, <body>, or navigation tags — only the article body content
- Start with <p class="blog-lead"> for the opening paragraph
- Word count: 700-900 words of visible text
- Naturally mention "E&J Retreats" 1-2 times as a national STR management company"""

    user_prompt = f"""Write a blog post for the following topic:

Title: {topic['title']}
Primary keyword: {topic['keyword']}
Category: {topic['category']}
Summary: {topic['description']}

Today's date: {datetime.date.today().strftime('%B %d, %Y')}

Return ONLY the HTML body content for the <article class="blog-post-content"> element."""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=2500,
        messages=[{"role": "user", "content": user_prompt}],
        system=system_prompt,
    )

    return message.content[0].text


# ---------------------------------------------------------------------------
# Build the full HTML page
# ---------------------------------------------------------------------------
def build_html_page(topic: dict, article_body: str) -> str:
    today = datetime.date.today()
    date_display = today.strftime("%B %d, %Y")
    date_iso = today.isoformat()
    slug = topic["slug"]
    title = topic["title"]
    keyword = topic["keyword"]
    category = topic["category"]
    description = topic["description"]

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} — E&amp;J Retreats</title>
  <meta name="description" content="{description}" />
  <meta name="keywords" content="{keyword}, short-term rental management, Airbnb management company, vacation rental management USA, STR management" />
  <link rel="canonical" href="https://www.ejretreats.com/blog/{slug}.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{description}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.ejretreats.com/blog/{slug}.html" />
  <meta property="og:image" content="https://www.ejretreats.com/images/download-1.jpg" />
  <meta property="og:site_name" content="E&amp;J Retreats" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="../css/style.css" />
  <link rel="icon" type="image/png" href="../images/logo.png" />

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TJJL0RNSEL"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', 'G-TJJL0RNSEL');
  </script>

  <!-- Article Schema -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{title}",
    "description": "{description}",
    "author": {{ "@type": "Organization", "name": "E&J Retreats" }},
    "publisher": {{ "@type": "Organization", "name": "E&J Retreats", "url": "https://www.ejretreats.com" }},
    "datePublished": "{date_iso}",
    "url": "https://www.ejretreats.com/blog/{slug}.html"
  }}
  </script>
</head>
<body>

<!-- ── Navigation ───────────────────────────────── -->
<header id="site-header">
  <div class="container">
    <nav class="nav-inner">
      <a href="../index.html" class="nav-logo">
        <img src="../images/logo.png" alt="E&amp;J Retreats" />
        <span class="nav-tagline">Helping your property perform at its full revenue potential</span>
      </a>
      <div class="nav-links">
        <a href="../index.html">Home</a>
        <a href="../index.html#pricing">Pricing</a>
        <a href="https://ejretreats.bookeddirectly.host/" target="_blank">Properties</a>
        <a href="../management.html">Our Management</a>
        <a href="../blog/index.html" class="active">Blog</a>
        <a href="../contact.html">Contact</a>
      </div>
      <div class="nav-cta">
        <a href="../index.html#revenue-report" class="btn btn-primary">Get Free Revenue Report</a>
        <button class="hamburger" id="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </div>
</header>

<nav class="mobile-nav" id="mobile-nav">
  <a href="../index.html">Home</a>
  <a href="../index.html#pricing">Pricing</a>
  <a href="https://ejretreats.bookeddirectly.host/" target="_blank">Properties</a>
  <a href="../management.html">Our Management</a>
  <a href="../blog/index.html">Blog</a>
  <a href="../contact.html">Contact</a>
  <a href="../index.html#revenue-report" class="btn btn-primary btn-full mobile-cta">Get Free Revenue Report</a>
</nav>
<div class="mobile-overlay" id="mobile-overlay"></div>

<!-- ── Blog Post Hero ────────────────────────────── -->
<section class="blog-post-hero">
  <div class="container">
    <div class="blog-post-meta">
      <a href="index.html" class="blog-back"><i class="fa-solid fa-arrow-left"></i> Back to Blog</a>
      <span class="blog-category">{category}</span>
    </div>
    <h1>{title}</h1>
    <div class="blog-post-info">
      <span><i class="fa-regular fa-calendar"></i> {date_display}</span>
      <span><i class="fa-regular fa-clock"></i> 6 min read</span>
      <span><i class="fa-solid fa-tag"></i> STR Strategy</span>
    </div>
  </div>
</section>

<!-- ── Blog Post Content ─────────────────────────── -->
<div class="blog-post-wrap">
  <div class="container">
    <div class="blog-post-layout">

      <!-- Main Content -->
      <article class="blog-post-content">
{article_body}
      </article>

      <!-- Sidebar -->
      <aside class="blog-sidebar">
        <div class="sidebar-widget">
          <h4>Free Revenue Report</h4>
          <p>See how your property compares to nearby listings. No obligation, delivered fast.</p>
          <a href="../index.html#revenue-report" class="btn btn-primary btn-full">Get Mine Free</a>
        </div>

        <div class="sidebar-widget">
          <h4>Our Management</h4>
          <p>Full-service STR management — dynamic pricing, channel distribution, guest experience and more.</p>
          <a href="../management.html" class="btn btn-secondary btn-full">Learn More</a>
        </div>

        <div class="sidebar-widget">
          <h4>Schedule a Call</h4>
          <p>Talk with our team about your property and revenue opportunity.</p>
          <a href="#" onclick="Calendly.initPopupWidget({{url:'https://calendly.com/ejretreats1/30min?primary_color=FF7A00'}});return false;" class="btn btn-secondary btn-full">Book a Time</a>
        </div>
      </aside>

    </div>
  </div>
</div>

<!-- ── Footer ────────────────────────────────────── -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="../images/logo.png" alt="E&amp;J Retreats" />
        <p>Helping your property perform at its full revenue potential. Professional short-term rental management across the US.</p>
      </div>
      <div class="footer-col">
        <h5>Navigation</h5>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="../index.html#pricing">Pricing</a></li>
          <li><a href="../management.html">Our Management</a></li>
          <li><a href="index.html">Blog</a></li>
          <li><a href="../contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Resources</h5>
        <ul>
          <li><a href="../index.html#revenue-report">Free Revenue Report</a></li>
          <li><a href="https://ejretreats.bookeddirectly.host/" target="_blank">Our Properties</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item"><span>📞</span><a href="tel:8136990509">813-699-0509</a></div>
        <div class="footer-contact-item"><span>📧</span><a href="mailto:ejretreats1@gmail.com">ejretreats1@gmail.com</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 E&amp;J Retreats. All rights reserved.</span>
      <span>Helping your property perform at its full revenue potential.</span>
    </div>
  </div>
</footer>

<!-- Calendly -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>

<script>
(function () {{
  'use strict';
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function () {{
    header.classList.toggle('scrolled', window.scrollY > 10);
  }}, {{ passive: true }});
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var overlay   = document.getElementById('mobile-overlay');
  function toggleMobile() {{
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  }}
  hamburger.addEventListener('click', toggleMobile);
  overlay.addEventListener('click', toggleMobile);
  mobileNav.querySelectorAll('a').forEach(function (a) {{
    a.addEventListener('click', function () {{ if (mobileNav.classList.contains('open')) toggleMobile(); }});
  }});
}})();
</script>

</body>
</html>
"""


# ---------------------------------------------------------------------------
# Update blog/index.html to prepend the new card
# ---------------------------------------------------------------------------
def update_blog_index(topic: dict, output_path: str = "blog/index.html") -> None:
    today = datetime.date.today()
    date_display = today.strftime("%B %d, %Y")

    new_card = f"""
      <!-- {topic['slug']} -->
      <article class="blog-card">
        <div class="blog-card-body">
          <span class="blog-card-cat">{topic['category']}</span>
          <h3><a href="{topic['slug']}.html">{topic['title']}</a></h3>
          <p>{topic['description']}</p>
          <div class="blog-card-meta">
            <span><i class="fa-regular fa-calendar"></i> {date_display}</span>
            <span><i class="fa-regular fa-clock"></i> 6 min read</span>
          </div>
        </div>
      </article>
"""

    with open(output_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Check if this slug is already in the index (avoid duplicates on re-run)
    if topic["slug"] in content:
        print(f"  Slug '{topic['slug']}' already exists in blog index — skipping index update.")
        return

    # Insert new card right after <div class="blog-grid">
    marker = '<div class="blog-grid">'
    if marker not in content:
        print("  WARNING: Could not find blog-grid marker in blog/index.html — skipping index update.")
        return

    updated = content.replace(marker, marker + new_card, 1)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"  Updated blog/index.html with new card for '{topic['title']}'")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(repo_root)

    topic = pick_topic()
    print(f"Generating post: {topic['title']}")
    print(f"  Slug: {topic['slug']}")
    print(f"  Keyword: {topic['keyword']}")

    print("  Calling Claude API...")
    article_body = generate_post(topic)

    html = build_html_page(topic, article_body)

    output_file = os.path.join("blog", f"{topic['slug']}.html")

    # Skip if file already exists (prevent overwriting on re-runs in same week)
    if os.path.exists(output_file):
        print(f"  File {output_file} already exists — skipping generation.")
        sys.exit(0)

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Wrote {output_file}")

    update_blog_index(topic, os.path.join("blog", "index.html"))

    print("Done.")


if __name__ == "__main__":
    main()
