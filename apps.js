/*
 * Liste des applications du portail.
 * Pour ajouter une application : déposer son fichier HTML dans /apps
 * et ajouter une entrée ci-dessous (id unique, fichier, textes, couleur, icône).
 */
window.PORTAIL_APPS = [
  {
    id: "portail-client",
    file: "apps/portail-client.html",
    name: "Portail client",
    audience: "Pour les clients enseignes",
    summary: "L'espace où un magasin suit ses commandes en cours, consulte son historique 2025–2026, suit les ventes de nos produits et ouvre une demande SAV.",
    points: ["Tableau de bord", "Commandes en cours", "Historique", "Ventes produits", "SAV"],
    color: "var(--orange)",
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 20 11 9h26l3 11" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M8 20c0 3 2.5 5 5.3 5s5.3-2 5.3-5c0 3 2.4 5 5.4 5s5.4-2 5.4-5c0 3 2.4 5 5.3 5S40 23 40 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M11 25v14h26V25" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M20 39v-8h8v8" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>`
  },
  {
    id: "crm",
    file: "apps/crm.html",
    name: "CRM commercial",
    audience: "Pour l'équipe commerciale",
    summary: "Un exemple de CRM pour préparer et tracer les visites : agenda, comptes rendus, prises de commande, opportunités et fiche complète de chaque client.",
    points: ["Agenda des visites", "Comptes rendus", "Prises de commande", "Opportunités", "Contacts"],
    color: "var(--green)",
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="17" r="6.5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M6 38c0-7 5.4-11.5 12-11.5S30 31 30 38" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="33" cy="15" r="5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M33 25c5.5 0 9 3.8 9 9.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`
  },
  {
    id: "migration",
    file: "apps/migration.html",
    name: "Suivi de la migration Divalto",
    audience: "Pour les équipes internes",
    summary: "Le suivi des ateliers de migration service par service : chronologie des sessions, participants, fiches de tests et points bloquants à lever.",
    points: ["Chronologie", "Vue par service", "Fiches participants", "Points bloquants"],
    color: "var(--plum-light)",
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="15" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="3"/><rect x="28" y="27" width="15" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="3"/><path d="M12.5 21v6.5a4 4 0 0 0 4 4H28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="m24 27.5 4 4-4 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.5 27v-6.5a4 4 0 0 0-4-4H20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".45"/></svg>`
  }
];
