/*
 * Liste des applications du portail.
 * Pour ajouter une application : déposer son fichier HTML dans /apps
 * et ajouter une entrée ci-dessous (id unique, fichier, textes, couleur, icône).
 */
window.PORTAIL_APPS = [
  {
    id: "portail-client",
    file: "portail-client.html",
    name: "Portail client",
    audience: "Pour les clients enseignes",
    summary: "L'espace où un magasin suit ses commandes en cours, consulte son historique 2025–2026, suit les ventes de nos produits et ouvre une demande SAV.",
    points: ["Tableau de bord", "Commandes en cours", "Historique", "Ventes produits", "SAV"],
    note: {
      pitch: "Rendre nos clients autonomes sur le suivi de leurs commandes.",
      idea: "Un espace client branché à notre site internet. Chaque client consulte lui-même, à tout moment, l'état de ses commandes, sans devoir appeler ou écrire à nos équipes.",
      blocks: [
        { title: "Ce que le client voit", items: [
          "Ses commandes en cours et leur état, de façon claire et précise",
          "Les délais et les dates de livraison prévues",
          "Ses livraisons et l'historique complet de ses commandes",
          "Les points bloquants sur une commande, dès qu'ils apparaissent",
          "Sa cagnotte PS en cours"
        ]},
        { title: "Ce que ça change pour nous", items: [
          "Moins d'appels et de mails de relance à traiter",
          "La même information pour le client et pour nos équipes",
          "Une relation client plus transparente et un service perçu comme moderne"
        ]}
      ]
    },
    color: "var(--orange)",
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 20 11 9h26l3 11" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M8 20c0 3 2.5 5 5.3 5s5.3-2 5.3-5c0 3 2.4 5 5.4 5s5.4-2 5.4-5c0 3 2.4 5 5.3 5S40 23 40 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M11 25v14h26V25" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M20 39v-8h8v8" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>`
  },
  {
    id: "crm",
    file: "crm.html",
    name: "CRM commercial",
    audience: "Pour l'équipe commerciale",
    summary: "Un exemple de CRM pour préparer et tracer les visites : agenda, comptes rendus, prises de commande, opportunités et fiche complète de chaque client.",
    points: ["Agenda des visites", "Comptes rendus", "Prises de commande", "Opportunités", "Contacts"],
    note: {
      pitch: "Un CRM qui fait exactement ce que nous voulons, sans licence annuelle.",
      idea: "Plutôt que de payer chaque année un abonnement et de dépendre de l'éditeur pour les évolutions, nous construisons notre propre outil, taillé pour notre façon de travailler.",
      blocks: [
        { title: "Pourquoi c'est intéressant", items: [
          "Aucune licence à acheter : n'importe quelle personne de la société peut avoir un accès",
          "Les évolutions sont décidées par nous, au rythme de nos besoins",
          "Aucun blocage lié à un contrat ou à la feuille de route d'un éditeur"
        ]},
        { title: "Un exemple concret", items: [
          "Le mobilier urbain pour Chamorin : 2 comptes à suivre, un accès ouvert sans coût supplémentaire"
        ]},
        { title: "Les prochaines évolutions possibles", items: [
          "Les OP promotions, suivies directement dans l'outil",
          "Les challenges commerciaux, avec le suivi des résultats par commercial"
        ]}
      ]
    },
    color: "var(--green)",
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="17" r="6.5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M6 38c0-7 5.4-11.5 12-11.5S30 31 30 38" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="33" cy="15" r="5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M33 25c5.5 0 9 3.8 9 9.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`
  },
  {
    id: "migration",
    file: "migration.html",
    name: "Suivi de la migration Divalto",
    audience: "Pour les équipes internes",
    summary: "Le suivi des ateliers de migration service par service : chronologie des sessions, participants, fiches de tests et points bloquants à lever.",
    points: ["Chronologie", "Vue par service", "Fiches participants", "Points bloquants"],
    note: {
      pitch: "Un point central pour mener la migration tous ensemble.",
      idea: "Un outil commun à tous les services, connecté entre les équipes, où chacun voit où en est le projet et ce qui bloque.",
      blocks: [
        { title: "Ce que ça apporte", items: [
          "Une vision précise et partagée de l'avancement, service par service",
          "Fini la recherche d'informations dans les emails : tout est au même endroit",
          "Les points bloquants sont visibles de tous et suivis jusqu'à leur résolution",
          "Un vrai projet commun des équipes, plutôt qu'une somme de sujets isolés"
        ]},
        { title: "Ce que contient l'outil", items: [
          "La chronologie des ateliers et de la phase de test",
          "La vue par service et les fiches de chaque participant",
          "La liste des points bloquants à lever"
        ]}
      ]
    },
    color: "var(--plum-light)",
    icon: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="15" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="3"/><rect x="28" y="27" width="15" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="3"/><path d="M12.5 21v6.5a4 4 0 0 0 4 4H28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="m24 27.5 4 4-4 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.5 27v-6.5a4 4 0 0 0-4-4H20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".45"/></svg>`
  }
];
