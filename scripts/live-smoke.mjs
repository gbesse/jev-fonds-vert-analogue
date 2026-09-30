// Objectif : effectuer un appel Jev synthétique uniquement sur demande explicite.
import { createJevClient } from "../src/jev.mjs";
import { findFundAnalogue } from "../src/index.mjs";
const client = createJevClient();
const résultat = await findFundAnalogue({
  "id": "exemple-1",
  "text": "Désimperméabilisation d’une cour d’école de 2 100 m² avec îlots de fraîcheur.",
  "source": {
    "url": "https://example.test/donnee-source",
    "date": "2026-09-15"
  },
  "details": {
    "territoire": "Commune Exemple",
    "origine": "donnée synthétique"
  }
}, client);
console.log(JSON.stringify({ décision: résultat.decision, confiance: résultat.confidence, usage: résultat.usage }, null, 2));
