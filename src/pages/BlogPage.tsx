import { useState, useMemo } from 'react';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { BlogCategories } from '@/components/blog/BlogCategories';
import { sampleBlogPosts } from '@/data/blogData';
import { BlogSearchFilters, PaginationInfo } from '@/types/blog';

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [filters, setFilters] = useState<BlogSearchFilters>({});
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and paginate posts
  const filteredPosts = useMemo(() => {
    let posts = [...sampleBlogPosts];

    // Filter by search query
    if (filters.query) {
      const query = filters.query.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (filters.category) {
      posts = posts.filter(post => post.category.slug === filters.category);
    }

    // Filter by threat level
    if (filters.threatLevel) {
      posts = posts.filter(post => post.threatLevel === filters.threatLevel);
    }

    // Sort by featured first, then by date
    posts.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    return posts;
  }, [filters]);

  // Pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const pagination: PaginationInfo = {
    currentPage,
    totalPages,
    totalPosts,
    postsPerPage: POSTS_PER_PAGE
  };

  // Reset to page 1 when filters change
  const handleFiltersChange = (newFilters: BlogSearchFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  // Get featured posts for hero section
  const featuredPosts = sampleBlogPosts.filter(post => post.featured).slice(0, 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BlogHero />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
                <p className="text-gray-600">Essential reading for your digital safety</p>
              </div>
            </div>
            <div className="grid gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* Categories Section */}
        <section className="mb-16">
          <BlogCategories />
        </section>

        {/* Search and Filter */}
        <section className="mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Articles</h2>
            <p className="text-gray-600">
              Browse our complete collection of cybersecurity guides and tips
            </p>
          </div>
          <BlogSearch filters={filters} onFiltersChange={handleFiltersChange} />
        </section>

        {/* Results Summary */}
        {filters.query || filters.category || filters.threatLevel ? (
          <div className="mb-6">
            <p className="text-gray-600">
              {totalPosts === 0 
                ? "No articles found matching your criteria."
                : `Found ${totalPosts} article${totalPosts !== 1 ? 's' : ''} matching your criteria.`
              }
            </p>
          </div>
        ) : null}

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <BlogPagination 
              pagination={pagination} 
              onPageChange={setCurrentPage} 
            />
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => handleFiltersChange({})}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}