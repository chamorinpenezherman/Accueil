/*
 * Authentification du portail Chamorin & Penez Herman
 * ---------------------------------------------------
 * Le code d'accès n'est pas écrit en clair : seule son empreinte SHA-256 est stockée.
 * Pour changer le code : calculer l'empreinte du nouveau code (en minuscules)
 *   - Linux / Mac :  echo -n "nouveaucode" | sha256sum
 *   - PowerShell  :  voir README.md
 * puis remplacer la valeur de ACCESS_HASH ci-dessous.
 *
 * Limite : il s'agit d'une protection côté navigateur (site statique GitHub Pages).
 * Elle filtre l'accès au portail mais ne remplace pas une vraie authentification serveur.
 */
(function (global) {
  const ACCESS_HASH = "447b46ce778dd345650c51f3c8c4267f93e9ba95d55df37b024d19e3bd8fc7e6";
  const SESSION_KEY = "cph-portail-session";
  const SESSION_HOURS = 8;

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  function readSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const s = JSON.parse(raw);
      if (!s.exp || Date.now() > s.exp) { sessionStorage.removeItem(SESSION_KEY); return null; }
      return s;
    } catch (e) { return null; }
  }

  const Auth = {
    isLogged() { return readSession() !== null; },

    async login(code) {
      const clean = String(code || "").trim().toLowerCase();
      if (!clean) return false;
      if (!(global.crypto && crypto.subtle)) {
        throw new Error("Ce navigateur bloque le chiffrement local. Ouvrez le portail depuis son adresse https.");
      }
      const ok = (await sha256(clean)) === ACCESS_HASH;
      if (ok) {
        try {
          sessionStorage.setItem(SESSION_KEY, JSON.stringify({ exp: Date.now() + SESSION_HOURS * 3600e3 }));
        } catch (e) { /* stockage indisponible : la session durera le temps de la page */ }
      }
      return ok;
    },

    logout() {
      try { sessionStorage.removeItem(SESSION_KEY); } catch (e) {}
    }
  };

  global.PortailAuth = Auth;
})(window);
