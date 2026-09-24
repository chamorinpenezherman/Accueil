# Portail applicatif — Chamorin & Penez Herman

Page d'accueil commune qui regroupe trois applications derrière un code d'accès :

| Application | Fichier | Public |
|---|---|---|
| Portail client | `portail-client.html` | Clients enseignes |
| CRM commercial (exemple) | `crm.html` | Équipe commerciale |
| Suivi de la migration Divalto | `migration.html` | Équipes internes |

## Structure

```
index.html          Connexion + page d'accueil de présentation
app.html            Visionneuse : affiche une application avec la barre de navigation
apps/               Les 3 applications HTML
auth.js      Vérification du code d'accès (empreinte SHA-256)
apps.js      Liste des applications (noms, textes, icônes, couleurs)
assets/style.css    Styles communs
assets/*.jpg        Logos Chamorin et Penez Herman
.nojekyll           Indique à GitHub Pages de servir les fichiers tels quels
```

## Mise en ligne sur GitHub Pages

1. Créer un dépôt sur GitHub (ex. `portail-chamorin`).
2. Déposer tout le contenu de ce dossier à la racine du dépôt :
   ```bash
   git init
   git add .
   git commit -m "Portail applicatif"
   git branch -M main
   git remote add origin https://github.com/<organisation>/portail-chamorin.git
   git push -u origin main
   ```
3. Dans le dépôt : **Settings → Pages → Build and deployment**, source *Deploy from a branch*, branche `main`, dossier `/ (root)`.
4. Le portail est disponible après une minute à `https://<organisation>.github.io/portail-chamorin/`.

> `crm.html` pèse environ 7 Mo : c'est sous la limite GitHub (100 Mo par fichier), aucun réglage particulier.

## Code d'accès

Code actuel : `chamorin` (insensible à la casse). La session dure 8 heures ou jusqu'à la fermeture de l'onglet.

Pour changer le code, calculer l'empreinte SHA-256 du nouveau code **en minuscules** et la coller dans `ACCESS_HASH` (`auth.js`) :

- Linux / Mac : `echo -n "nouveaucode" | sha256sum`
- PowerShell :
  ```powershell
  $b=[Text.Encoding]::UTF8.GetBytes("nouveaucode"); -join ([Security.Cryptography.SHA256]::Create().ComputeHash($b) | % { $_.ToString("x2") })
  ```

## Mettre à jour une application

Remplacer le fichier à la racine en gardant, juste après `<head>`, les deux lignes de protection :

```html
<script src="../auth.js"></script>
<script>if(!window.PortailAuth||!PortailAuth.isLogged()){try{window.top.location.replace("index.html?next=ID")}catch(e){location.replace("index.html?next=ID")}}</script>
```

(`ID` = `portail-client`, `crm` ou `migration`.)

## Ajouter une application

Déposer le fichier à la racine, ajouter les lignes de protection, puis ajouter une entrée dans `apps.js`. Elle apparaît automatiquement sur l'accueil et dans la barre de navigation.

## Limite de sécurité

GitHub Pages sert des fichiers statiques publics : le code d'accès filtre l'entrée du portail mais une personne qui connaît l'adresse exacte d'un fichier et sait lire du code peut le contourner. Ne pas y mettre de données confidentielles réelles. Pour une vraie protection : dépôt privé avec GitHub Pages restreint à l'organisation (GitHub Enterprise), ou hébergement derrière une authentification serveur (Azure Static Web Apps + Entra ID, Cloudflare Access).
