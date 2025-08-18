export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // in minutes
  image: {
    url: string;
    alt: string;
    caption?: string;
  };
  tags: string[];
  category: BlogCategory;
  featured: boolean;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords: string[];
    canonicalUrl?: string;
  };
  socialSharing: {
    twitterCard?: string;
    ogImage?: string;
    ogDescription?: string;
  };
  isAiGenerated?: boolean;
  threatLevel?: 'low' | 'medium' | 'high' | 'critical';
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export interface BlogSearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  threatLevel?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}

export interface BlogStats {
  totalPosts: number;
  totalViews: number;
  categoriesCount: number;
  mostPopularCategory: string;
}