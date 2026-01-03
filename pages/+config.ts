// pages/+config.ts

import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

export default {
  lang: "fr",
  title: "Parapluie - Protection contre la fraude.",
  stream: true,
  extends: [vikeReact],
 // prerender: true,
} satisfies Config;
