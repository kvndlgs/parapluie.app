import { useParams, Navigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { sampleBlogPosts, blogCategories } from '@/data/blogData';
import { BlogSearchFilters, PaginationInfo } from '@/types/blog';
import * as Icons from 'lucide-react';

const POSTS_PER_PAGE = 9;

export function BlogCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [filters, setFilters] = useState<BlogSearchFilters>({ category: categorySlug });
  const [currentPage, setCurrentPage] = useState(1);

  const category = blogCategories.find(c => c.slug === categorySlug);
  
  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  // Filter and paginate posts
  const filteredPosts = useMemo(() => {
    let posts = sampleBlogPosts.filter(post => post.category.slug === categorySlug);

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
  }, [filters, categorySlug]);

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
    setFilters({ ...newFilters, category: categorySlug });
    setCurrentPage(1);
  };

  const IconComponent = (Icons as any)[category.icon] || Icons.Shield;

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-4 rounded-lg text-white ${category.color}`}>
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {category.name}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {category.description}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {totalPosts} article{totalPosts !== 1 ? 's' : ''} in this category
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <BlogSearch 
            filters={filters} 
            onFiltersChange={handleFiltersChange}
          />
        </div>

        {/* Results Summary */}
        {filters.query || filters.threatLevel ? (
          <div className="mb-6">
            <p className="text-gray-600">
              {totalPosts === 0 
                ? "No articles found matching your criteria in this category."
                : `Found ${totalPosts} article${totalPosts !== 1 ? 's' : ''} in ${category.name}.`
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
              <IconComponent className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">
              {filters.query || filters.threatLevel 
                ? "Try adjusting your search terms or filters."
                : "No articles have been published in this category yet."
              }
            </p>
            {(filters.query || filters.threatLevel) && (
              <button
                onClick={() => handleFiltersChange({ category: categorySlug })}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}