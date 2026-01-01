import { redirect } from "vike/abort";
import type { PageContextServer } from 'vike/types';
import guides from '@/content/guides.json'; 
import ogImg from "../../assets/og-guides.png";

export interface Guide {
    slug: string;

    title: string;

    excerpt: string;

    date: string;
          
    author: string;

    readTime: string;

      tags: string[];

      content: string;
      
      steps: { title: string; content: string }[];
}

export const data = async (pageContext: PageContextServer) => {

                    
    const { slug } = pageContext.routeParams;
           
           
              
          // On trouve le guide dans le JSON importé

          const guide = (guides as Guide[]).find(g => g.slug === slug);


               
             if (!guide) {
               
                 throw redirect("/guides");
                
                  }

 // Logique pour les guides suggérés (Optionnel)

               
                       const otherGuides = (guides as Guide[]).filter(g => g.slug !== slug)
                                              .slice(0, 2);

                                                return {
                                                    guide,
                                                    otherGuides,
                                                    title: `${guide.title} - Parapluie`,
                                                    description: guide.excerpt,
                                                    canonical: `https://parapluie.app/guide/${slug}`,
                                                    image: ogImg,
                                                                        // Le JSON-LD HowTo que nous avons construit ensemble
                                                    guideJsonLd: {
                                                        "@context": "https://schema.org",
                                                                                        "@type": "HowTo",
                                                                                              "name": guide.title,
                                                                                                    "description": guide.excerpt,
                                                                                                          "step": guide.steps.map((s, i) => ({
                                                                                                                  "@type": "HowToStep",
                                                                                                                          "position": i + 1,
                                                                                                                                  "name": s.title,
                                                                                                                                          "itemListElement": [{ "@type": "HowToDirection", "text": s.content }]
                                                                                                                                                }))
                                                                                                                                                    }
                                                                                                                                                      };
              
                                                                                                                                        };


                                                                                                                                                      
export type Data = Awaited<ReturnType<typeof data>>;
      
                                                                                                                                                      
