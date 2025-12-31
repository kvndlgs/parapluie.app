// pages/post/@slug/+config.ts
import { Config } from "vike/types";

const onBeforePrerenderStart = "import:./prerender:onBeforePrerenderStart"

export default {
  onBeforePrerenderStart 
} satisfies Config;
