import { redirect } from "vike/abort";
import type { PageContextServer } from 'vike/types';
import postsData from '../../../src/content/posts.json'; 

// On définit l'interface pour le typage TypeScript
export interface Post {
    slug: string;
        title: string;
            excerpt: string;
                date: string;
                    author: string;
                        readTime: string;
                            tags: string[];
                                content: string;
                                    description?: string;
                                    }

                                    // 1. Logique d'extraction (Cast du JSON en type Guide[])
                                    const posts = postsData as Post[];

                                    const getPostBySlug = (slug: string) => posts.find(g => g.slug === slug);
                                    const getAllPosts = () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                                    // 2. La fonction DATA (Serveur)
                                    export const data = async (pageContext: PageContextServer) => {
                                      const { slug } = pageContext.routeParams;
                                        const post = getPostBySlug(slug);
                                          
                                            if (!post) {
                                                throw redirect("/blog");
                                                  }
                                                    
                                                      const allPosts = getAllPosts
                                                        const otherPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2);

                                                          
                                                            return {
                                                                post, 
                                                                    otherPosts,
                                                                        title: `${post.title} - Parapluie`,
                                                                            description: post.excerpt,
                                                                                canonical: `https://parapluie.app/post/${slug}`,
                                                                                    blogJsonLd
                                                                                      };
                                                                                      };

                                                                                      export type Data = Awaited<ReturnType<typeof data>>;
                                                                                      