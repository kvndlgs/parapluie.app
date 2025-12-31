// renderer/+config.ts
import type { Config } from 'vike/types';

export default {
  prerender: {
    partial: true  // Allows dynamic routes without warning if not all prerendered
  }
} satisfies Config;