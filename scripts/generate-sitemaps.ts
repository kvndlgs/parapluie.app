// scripts/generate-sitemaps.ts
import fs from "node:fs/promises";
import path from "node:path";

// ✅ Adapte si besoin
const BASE_URL = "https://parapluie.app";

// ✅ Tes routes "statiques" (sans slugs)
const STATIC_PATHS: Array<{
  loc: string;
  changefreq?: string;
  priority?: number;
}> = [
  { loc: "/", changefreq: "daily", priority: 1.0 },

  { loc: "/a-propos", changefreq: "monthly", priority: 0.7 },
  { loc: "/comment-ca-marche", changefreq: "monthly", priority: 0.8 },
  { loc: "/pour-les-aines", changefreq: "monthly", priority: 0.8 },
  { loc: "/pour-les-proches", changefreq: "monthly", priority: 0.8 },
  { loc: "/pour-les-organisations", changefreq: "monthly", priority: 0.7 },

  { loc: "/support", changefreq: "monthly", priority: 0.6 },
  { loc: "/support/contact", changefreq: "monthly", priority: 0.5 },
  { loc: "/support/faq", changefreq: "weekly", priority: 0.9 },

  { loc: "/blog", changefreq: "weekly", priority: 0.9 },
  { loc: "/guides", changefreq: "weekly", priority: 0.9 },

  { loc: "/media", changefreq: "monthly", priority: 0.4 },
  { loc: "/media/press-kit", changefreq: "monthly", priority: 0.4 },

  { loc: "/partenariats", changefreq: "monthly", priority: 0.5 },

  { loc: "/conditions-generales-d-utilisation", changefreq: "yearly", priority: 0.2 },
  { loc: "/politique-de-confidentialite", changefreq: "yearly", priority: 0.2 },
];

type SitemapEntry = {
  loc: string; // absolute URL
  lastmod?: string; // ISO date
  changefreq?: string;
  priority?: number;
};

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toAbsoluteUrl(p: string) {
  if (!p.startsWith("/")) p = "/" + p;
  return `${BASE_URL}${p}`;
}

function normalizeIsoDate(maybeDate: unknown): string | undefined {
  if (typeof maybeDate !== "string") return undefined;
  // accepte "2024-12-22" ou ISO complet
  const d = new Date(maybeDate);
  if (Number.isNaN(d.getTime())) return undefined;
  // Google aime bien YYYY-MM-DD
  return d.toISOString().slice(0, 10);
}

function buildUrlset(entries: SitemapEntry[]) {
  const body = entries
    .map((e) => {
      const parts = [
        `<loc>${escapeXml(e.loc)}</loc>`,
        e.lastmod ? `<lastmod>${escapeXml(e.lastmod)}</lastmod>` : "",
        e.changefreq
          ? `<changefreq>${escapeXml(e.changefreq)}</changefreq>`
          : "",
        typeof e.priority === "number"
          ? `<priority>${e.priority.toFixed(1)}</priority>`
          : "",
      ].filter(Boolean);

      return `  <url>\n    ${parts.join("\n    ")}\n  </url>`;
    })
    .join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${body}\n` +
    `</urlset>\n`
  );
}

function buildSitemapIndex(sitemaps: Array<{ loc: string; lastmod?: string }>) {
  const body = sitemaps
    .map((s) => {
      const parts = [
        `<loc>${escapeXml(s.loc)}</loc>`,
        s.lastmod ? `<lastmod>${escapeXml(s.lastmod)}</lastmod>` : "",
      ].filter(Boolean);

      return `  <sitemap>\n    ${parts.join("\n    ")}\n  </sitemap>`;
    })
    .join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${body}\n` +
    `</sitemapindex>\n`
  );
}

async function safeImport<T = any>(modulePath: string): Promise<T | null> {
  try {
    // tsx supporte l'import relatif avec extension .ts
    const mod = await import(modulePath);
    return mod as T;
  } catch (err) {
    console.warn(`[sitemap] Import failed for ${modulePath}`);
    console.warn(err);
    return null;
  }
}

async function main() {
  const root = process.cwd();
  const publicDir = path.join(root, "public");
  await fs.mkdir(publicDir, { recursive: true });

  // ---- 1) PAGES (statiques)
  const pagesEntries: SitemapEntry[] = STATIC_PATHS.map((p) => ({
    loc: toAbsoluteUrl(p.loc),
    changefreq: p.changefreq,
    priority: p.priority,
    lastmod: undefined,
  }));

  // ---- 2) BLOG POSTS
  // ✅ ajuste ces chemins si tes contenus sont ailleurs
  const postsMod = await safeImport<{ posts?: any[] }>(
    pathToFileUrl(path.join(root, "src/content/posts.json")),
  );
  const posts = postsMod?.posts ?? [];

  const blogEntries: SitemapEntry[] = posts
    .map((post) => {
      const slug = post?.slug;
      if (!slug || typeof slug !== "string") return null;

      return {
        loc: toAbsoluteUrl(`/post/${slug}`),
        lastmod: normalizeIsoDate(post?.date),
        changefreq: "weekly",
        priority: 0.7,
      } satisfies SitemapEntry;
    })
    .filter(Boolean) as SitemapEntry[];

  // ---- 3) GUIDES
  const guidesMod = await safeImport<{ guides?: any[] }>(
    pathToFileUrl(path.join(root, "src/content/guides.json")),
  );
  const guides = guidesMod?.guides ?? [];

  const guidesEntries: SitemapEntry[] = guides
    .map((g) => {
      const slug = g?.slug;
      if (!slug || typeof slug !== "string") return null;

      return {
        loc: toAbsoluteUrl(`/guide/${slug}`),
        lastmod: normalizeIsoDate(g?.date),
        changefreq: "monthly",
        priority: 0.7,
      } satisfies SitemapEntry;
    })
    .filter(Boolean) as SitemapEntry[];

  // ---- Write files
  const pagesXml = buildUrlset(pagesEntries);
  const blogXml = buildUrlset(blogEntries);
  const guidesXml = buildUrlset(guidesEntries);

  await fs.writeFile(
    path.join(publicDir, "sitemap-pages.xml"),
    pagesXml,
    "utf8",
  );
  await fs.writeFile(path.join(publicDir, "sitemap-blog.xml"), blogXml, "utf8");
  await fs.writeFile(
    path.join(publicDir, "sitemap-guides.xml"),
    guidesXml,
    "utf8",
  );

  // ---- Sitemap index
  const today = new Date().toISOString().slice(0, 10);
  const indexXml = buildSitemapIndex([
    { loc: toAbsoluteUrl("/sitemap-pages.xml"), lastmod: today },
    { loc: toAbsoluteUrl("/sitemap-blog.xml"), lastmod: today },
    { loc: toAbsoluteUrl("/sitemap-guides.xml"), lastmod: today },
  ]);

  await fs.writeFile(path.join(publicDir, "sitemap.xml"), indexXml, "utf8");

  console.log(`[sitemap] ✅ done`);
  console.log(`- public/sitemap.xml`);
  console.log(`- public/sitemap-pages.xml (${pagesEntries.length})`);
  console.log(`- public/sitemap-blog.xml (${blogEntries.length})`);
  console.log(`- public/sitemap-guides.xml (${guidesEntries.length})`);
}

// Node ESM helper: convert absolute path to file:// URL
function pathToFileUrl(p: string) {
  const resolved = path.resolve(p);
  // windows-safe
  const url = new URL(`file://${resolved}`);
  return url.href;
}

main().catch((e) => {
  console.error("[sitemap] ❌ error", e);
  process.exit(1);
});
