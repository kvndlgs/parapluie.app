// pages/+config.ts

import vikeReact from "vike-react/config"; // <--- AJOUTE CET IMPORT
import type { Config } from "vike/types";

export default {
  // C'est cette ligne qui manquait !
  extends: [vikeReact], 

  title: "Parapluie - Protection contre la fraude",
  description: "Protection contre les arnaques au Québec",
} satisfies Config;