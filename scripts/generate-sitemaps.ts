import fs from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://parapluie.app";

const STATIC_PATHS = [
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
  {
    loc: "/conditions-generales-d-utilisation",
    changefreq: "yearly",
    priority: 0.2,
  },
  { loc: "/politique-de-confidentialite", changefreq: "yearly", priority: 0.2 },
];

// --- Fonctions utilitaires (On les garde !) ---
function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
function toAbsoluteUrl(p: string) {
  return `${BASE_URL}${p.startsWith("/") ? p : "/" + p}`;
}
function normalizeIsoDate(maybeDate: any): string | undefined {
  if (!maybeDate) return undefined;
  const d = new Date(maybeDate);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

function buildUrlset(entries: any[]) {
  const body = entries
    .map(
      (e) => `  <url>
                                                <loc>${escapeXml(e.loc)}</loc>
                                                    ${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}
                                                        ${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}
                                                            ${e.priority ? `<priority>${e.priority.toFixed(1)}</priority>` : ""}
                                                              </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;
}

function buildSitemapIndex(sitemaps: any[]) {
  const body = sitemaps
    .map(
      (s) => `  <sitemap>
                                                                      <loc>${escapeXml(s.loc)}</loc>
                                                                          ${s.lastmod ? `<lastmod>${s.lastmod}</lastmod>` : ""}
                                                                            </sitemap>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>`;
}

// --- Logique principale modifiée ---
async function main() {
  const root = process.cwd();
  const publicDir = path.join(root, "public");
  await fs.mkdir(publicDir, { recursive: true });

  // 1. Pages statiques
  const pagesEntries = STATIC_PATHS.map((p) => ({
    loc: toAbsoluteUrl(p.loc),
    changefreq: p.changefreq,
    priority: p.priority,
  }));

  // 2. Lecture des fichiers JSON (Méthode robuste par lecture de fichier)
  const readJson = async (fileName: string) => {
    try {
      const content = await fs.readFile(
        path.join(root, "src/content", fileName),
        "utf-8",
      );
      const data = JSON.parse(content);
      // Gère si le JSON est [...] ou { "posts": [...] }
      return Array.isArray(data) ? data : data.posts || data.guides || [];
    } catch (e) {
      console.error(`[sitemap] Erreur lecture ${fileName}:`, e);
      return [];
    }
  };

  const posts = await readJson("posts.json");
  const guides = await readJson("guides.json");

  const blogEntries = posts
    .map((p: any) => ({
      loc: toAbsoluteUrl(`/post/${p.slug}`),
      lastmod: normalizeIsoDate(p.date),
      changefreq: "weekly",
      priority: 0.7,
    }))
    .filter((e: any) => e.loc.includes("/post/"));

  const guidesEntries = guides
    .map((g: any) => ({
      loc: toAbsoluteUrl(`/guide/${g.slug}`),
      lastmod: normalizeIsoDate(g.date),
      changefreq: "monthly",
      priority: 0.7,
    }))
    .filter((e: any) => e.loc.includes("/guide/"));

  // 3. Écriture
  await fs.writeFile(
    path.join(publicDir, "sitemap-pages.xml"),
    buildUrlset(pagesEntries),
  );
  await fs.writeFile(
    path.join(publicDir, "sitemap-blog.xml"),
    buildUrlset(blogEntries),
  );
  await fs.writeFile(
    path.join(publicDir, "sitemap-guides.xml"),
    buildUrlset(guidesEntries),
  );

  const today = new Date().toISOString().slice(0, 10);
  await fs.writeFile(
    path.join(publicDir, "sitemap.xml"),
    buildSitemapIndex([
      { loc: toAbsoluteUrl("/sitemap-pages.xml"), lastmod: today },
      { loc: toAbsoluteUrl("/sitemap-blog.xml"), lastmod: today },
      { loc: toAbsoluteUrl("/sitemap-guides.xml"), lastmod: today },
    ]),
  );

  console.log(
    `[sitemap] ✅ Terminé : Pages(${pagesEntries.length}), Blog(${blogEntries.length}), Guides(${guidesEntries.length})`,
  );
}

main().catch(console.error);
