// pages/+config.ts

import vikeReact from "vike-react/config"; // <--- AJOUTE CET IMPORT
import type { Config } from "vike/types";
// import Layout from "./+Layout";


export default {
  lang: 'fr',
//  Layout,
  stream: true,
  // C'est cette ligne qui manquait !
  extends: [vikeReact], 

  title: "Parapluie - Protection contre la fraude",
  description: "Protection contre les arnaques au Québec",
} satisfies Config;