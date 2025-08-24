import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Parapluie
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your personal space for thoughts, ideas, and stories. Explore our blog to discover interesting content.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Visit Blog
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Latest Posts
            </h3>
            <p className="text-gray-600">
              Stay updated with our latest blog posts covering technology, development, and more.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              In-depth Articles
            </h3>
            <p className="text-gray-600">
              Dive deep into comprehensive guides and tutorials on various topics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Community Driven
            </h3>
            <p className="text-gray-600">
              Content created with the community in mind, focusing on practical knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
