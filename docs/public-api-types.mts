// Objectif : vérifier que les types publics sont importables.
import { projectCase, findFundAnalogue } from "../src/index.mjs";
const dossier = projectCase({
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
});
void findFundAnalogue(dossier, { decide: async () => ({}) });
