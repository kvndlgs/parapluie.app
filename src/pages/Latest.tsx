import { useSeo } from '../hooks/useSeo';
import { Layout } from '../components/Layout';
import { Link, Navigate } from 'react-router-dom'; // Added Navigate
import ReactMarkdown from 'react-markdown'; // Ensure this is installed
import { getAllPosts } from '../content/posts';
import  stripIndent  from "../utils/stripIndent";

export default function Latest() {
    // 1. Get all posts sorted by date
    const allPosts = getAllPosts();
    
    // 2. The "Latest" post is simply the first one in the sorted array
    const post = allPosts[0];

    // 3. Get the "next" two posts for the "Read More" section
    const otherPosts = allPosts.slice(1, 3);

    // Safety check: if no posts exist yet
    if (!post) {
        return <Navigate to="/" replace />;
    }

    // Process markdown content
    const content = stripIndent(post.content);
    
    useSeo({
        title: `${post.title} - Parapluie`,
        canonical: "https://parapluie.app/blog/latest"
    });

    return (
        <Layout>
            {/* Article Header */}
            <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-base-50 to-white">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-sm text-neutral-500 mb-8">
                        <Link to="/blog" className="hover:text-neutral-800 hover:underline">
                            Blog
                        </Link>
                        <span className="text-neutral-400">/</span>
                        <span className="text-neutral-700">Dernier article</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-base-700 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-neutral-500 text-sm">
                        <span className="font-medium text-neutral-900">{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span>•</span>
                        <span>{post.readTime} de lecture</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12 px-6 bg-white">
                <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
                    <ReactMarkdown
                        components={{
                            h2: ({ children }) => <h2 className="text-2xl font-bold text-neutral-800 mt-12 mb-6">{children}</h2>,
                            p: ({ children }) => <p className="text-neutral-600 leading-relaxed mb-6">{children}</p>,
                            // ... keep your other custom components
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </article>

            {/* Read More Section */}
            {otherPosts.length > 0 && (
                <section className="py-16 px-6 bg-neutral-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-neutral-800 mb-8">Autres articles récents</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {otherPosts.map((otherPost) => (
                                <Link
                                    key={otherPost.slug}
                                    to={`/post/${otherPost.slug}`}
                                    className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow"
                                >
                                    <h3 className="font-bold text-neutral-800 mb-2">{otherPost.title}</h3>
                                    <p className="text-sm text-neutral-500">{otherPost.readTime} de lecture</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
}
