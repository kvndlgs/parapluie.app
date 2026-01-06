// pages/+config.ts

import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import favicon from "../assets/icon0.svg";

export default {
  lang: "fr",
  //title: "Parapluie - Protection contre la fraude.",
  favicon,
  stream: true,
  extends: [vikeReact],
  prerender: true,
} satisfies Config;
