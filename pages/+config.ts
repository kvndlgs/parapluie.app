// pages/+config.ts

import vikeReact from "vike-react/config"; // <--- AJOUTE CET IMPORT
// import vikePhoton from "vike-photon/config";
import type { Config } from "vike/types";

export default {
  lang: "fr",
  title: "Parapluie - Protection contre la fraude.",
  stream: true,
  extends: [vikeReact],
  prerender: true,
  description: "Protection contre les arnaques au Québec",
} satisfies Config;
