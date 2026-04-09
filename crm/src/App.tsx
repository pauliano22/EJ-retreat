import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Pipeline from './components/Pipeline';
import Owners from './components/Owners';
import OwnerDetail from './components/OwnerDetail';
import OutreachLog from './components/OutreachLog';
import LeadModal from './components/modals/LeadModal';
import OwnerModal from './components/modals/OwnerModal';
import PropertyModal from './components/modals/PropertyModal';
import OutreachModal from './components/modals/OutreachModal';
import { useLocalStorage } from './hooks/useLocalStorage';
import { mockLeads, mockOwners, mockOutreach } from './data/mockData';
import type { Lead, Owner, Property, OutreachEntry, View } from './types';

type Modal =
  | { type: 'lead'; lead?: Lead }
  | { type: 'owner'; owner?: Owner }
  | { type: 'property'; ownerId: string; property?: Property }
  | { type: 'outreach'; entry?: OutreachEntry; preselectedOwnerId?: string }
  | null;

export default function App() {
  const [leads, setLeads] = useLocalStorage<Lead[]>('ej_leads', mockLeads);
  const [owners, setOwners] = useLocalStorage<Owner[]>('ej_owners', mockOwners);
  const [outreach, setOutreach] = useLocalStorage<OutreachEntry[]>('ej_outreach', mockOutreach);

  const [view, setView] = useState<View>('dashboard');
  const [selectedOwnerId, setSelectedOwnerId] = useState<string | null>(null);
  const [modal, setModal] = useState<Modal>(null);

  const navigate = (v: View, extra?: string) => {
    setView(v);
    if (v === 'owner-detail' && extra) setSelectedOwnerId(extra);
  };

  // Lead CRUD
  const saveLeadHandler = (lead: Lead) => {
    setLeads(prev => {
      const exists = prev.find(l => l.id === lead.id);
      return exists ? prev.map(l => l.id === lead.id ? lead : l) : [...prev, lead];
    });
    setModal(null);
  };

  // Owner CRUD
  const saveOwnerHandler = (owner: Owner) => {
    setOwners(prev => {
      const exists = prev.find(o => o.id === owner.id);
      return exists ? prev.map(o => o.id === owner.id ? owner : o) : [...prev, owner];
    });
    setModal(null);
  };

  // Property CRUD
  const savePropertyHandler = (ownerId: string, property: Property) => {
    setOwners(prev => prev.map(o => {
      if (o.id !== ownerId) return o;
      const exists = o.properties.find(p => p.id === property.id);
      return {
        ...o,
        properties: exists
          ? o.properties.map(p => p.id === property.id ? property : p)
          : [...o.properties, property],
      };
    }));
    setModal(null);
  };

  const deletePropertyHandler = (ownerId: string, propertyId: string) => {
    setOwners(prev => prev.map(o =>
      o.id === ownerId ? { ...o, properties: o.properties.filter(p => p.id !== propertyId) } : o
    ));
  };

  // Outreach CRUD
  const saveOutreachHandler = (entry: OutreachEntry) => {
    setOutreach(prev => {
      const exists = prev.find(e => e.id === entry.id);
      return exists ? prev.map(e => e.id === entry.id ? entry : e) : [...prev, entry];
    });
    setModal(null);
  };

  const selectedOwner = owners.find(o => o.id === selectedOwnerId);

  return (
    <Layout currentView={view} onNavigate={navigate}>
      {view === 'dashboard' && (
        <Dashboard
          leads={leads}
          owners={owners}
          outreach={outreach}
          onNavigate={navigate}
        />
      )}

      {view === 'pipeline' && (
        <Pipeline
          leads={leads}
          onUpdateLeads={setLeads}
          onOpenLeadModal={(lead) => setModal({ type: 'lead', lead })}
        />
      )}

      {view === 'owners' && (
        <Owners
          owners={owners}
          onViewOwner={(id) => navigate('owner-detail', id)}
          onOpenOwnerModal={(owner) => setModal({ type: 'owner', owner })}
        />
      )}

      {view === 'owner-detail' && selectedOwner && (
        <OwnerDetail
          owner={selectedOwner}
          outreach={outreach}
          onBack={() => navigate('owners')}
          onEdit={() => setModal({ type: 'owner', owner: selectedOwner })}
          onAddProperty={() => setModal({ type: 'property', ownerId: selectedOwner.id })}
          onEditProperty={(property) => setModal({ type: 'property', ownerId: selectedOwner.id, property })}
          onDeleteProperty={(propertyId) => deletePropertyHandler(selectedOwner.id, propertyId)}
          onAddOutreach={() => setModal({ type: 'outreach', preselectedOwnerId: selectedOwner.id })}
        />
      )}

      {view === 'outreach' && (
        <OutreachLog
          outreach={outreach}
          onUpdateOutreach={setOutreach}
          onOpenOutreachModal={(entry) => setModal({ type: 'outreach', entry })}
        />
      )}

      {/* Modals */}
      {modal?.type === 'lead' && (
        <LeadModal
          lead={modal.lead}
          onSave={saveLeadHandler}
          onClose={() => setModal(null)}
        />
      )}

      {modal?.type === 'owner' && (
        <OwnerModal
          owner={modal.owner}
          onSave={saveOwnerHandler}
          onClose={() => setModal(null)}
        />
      )}

      {modal?.type === 'property' && (
        <PropertyModal
          property={modal.property}
          onSave={(property) => savePropertyHandler(modal.ownerId, property)}
          onClose={() => setModal(null)}
        />
      )}

      {modal?.type === 'outreach' && (
        <OutreachModal
          entry={modal.entry}
          preselectedOwnerId={modal.preselectedOwnerId}
          leads={leads}
          owners={owners}
          onSave={saveOutreachHandler}
          onClose={() => setModal(null)}
        />
      )}
    </Layout>
  );
}
