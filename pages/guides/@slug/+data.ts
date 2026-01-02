import { redirect } from "vike/abort";
import type { PageContextServer } from 'vike/types';
import guidesData from '../../../src/content/guides.json'; 

// On définit l'interface pour le typage TypeScript
export interface Guide {
    slug: string;
        title: string;
            excerpt: string;
                date: string;
                    author: string;
                        readTime: string;
                            tags: string[];
                                content: string;

                                    image?: string;
                                        description?: string;
                                        }

                                        // 1. Logique d'extraction (Cast du JSON en type Guide[])
                                        const guides = guidesData as Guide[];

                                        const getGuideBySlug = (slug: string) => guides.find(g => g.slug === slug);
                                        const getAllGuides = () => [...guides].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                                        // 2. La fonction DATA (Serveur)
                                        export const data = async (pageContext: PageContextServer) => {
                                          const { slug } = pageContext.routeParams;
                                            const guide = getGuideBySlug(slug);
                                              
                                                if (!guide) {
                                                    throw redirect("/guides");
                                                      }

                                                        const allGuides = getAllGuides();
                                                          const otherGuides = allGuides.filter(p => p.slug !== slug).slice(0, 2);

                                                            const guideJsonLd = {
                                                                "@context": "https://schema.org",
                                                                    "@type": "HowTo",   
                                                                        "name": guide.title,    
                                                                            "description": guide.excerpt || guide.description || "",  
                                                                                "image": guide.image || "https://parapluie.app/og-guides.png",       
                                                                                    "step": guide.steps?.map((step, index) => ({  
                                                                                          "@type": "HowToStep",
                                                                                                "position": index + 1,
                                                                                                      "name": step.title || `Étape ${index + 1}`, 
                                                                                                            "itemListElement": [{   
                                                                                                                    "@type": "HowToDirection", 
                                                                                                                            "text": step.content || ""
                                                                                                                                  }]
                                                                                                                                      })) || []     
                                                                                                                                        };

                                                                                                                                          // IMPORTANT: On retourne les données pour qu'elles soient accessibles
                                                                                                                                            return {
                                                                                                                                                guide, 
                                                                                                                                                    otherGuides,
                                                                                                                                                        title: `${guide.title} - Parapluie`,
                                                                                                                                                            description: guide.excerpt,
                                                                                                                                                                canonical: `https://parapluie.app/guide/${slug}`,     
                                                                                                                                                                    image: "https://parapluie.app/og-guides.png", // Utilise une URL absolue idéalement      
                                                                                                                                                                        guideJsonLd
                                                                                                                                                                          };
                                                                                                                                                                          };

                                                                                                                                                                          export type Data = Awaited<ReturnType<typeof data>>;
                                                                                                                                                                          