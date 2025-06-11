import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { BlogSearchFilters } from '@/types/blog';
import { blogCategories } from '@/data/blogData';

interface BlogSearchProps {
  filters: BlogSearchFilters;
  onFiltersChange: (filters: BlogSearchFilters) => void;
}

export function BlogSearch({ filters, onFiltersChange }: BlogSearchProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleQueryChange = (query: string) => {
    onFiltersChange({ ...filters, query });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({ 
      ...filters, 
      category: category === 'all' ? undefined : category 
    });
  };

  const handleThreatLevelChange = (threatLevel: string) => {
    onFiltersChange({ 
      ...filters, 
      threatLevel: threatLevel === 'all' ? undefined : threatLevel 
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = filters.category || filters.threatLevel || (filters.tags && filters.tags.length > 0);

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search cybersecurity topics, threats, or protection tips..."
          value={filters.query || ''}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="pl-10 pr-4 py-2 text-base"
        />
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Category Filter */}
        <Select 
          value={filters.category || 'all'} 
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="w-auto min-w-[150px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {blogCategories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Threat Level Filter */}
        <Select 
          value={filters.threatLevel || 'all'} 
          onValueChange={handleThreatLevelChange}
        >
          <SelectTrigger className="w-auto min-w-[130px]">
            <SelectValue placeholder="Threat Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="low">Low Risk</SelectItem>
            <SelectItem value="medium">Medium Risk</SelectItem>
            <SelectItem value="high">High Risk</SelectItem>
            <SelectItem value="critical">Critical Risk</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearFilters}
            className="text-gray-600"
          >
            <X className="w-3 h-3 mr-1" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.category && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {blogCategories.find(c => c.slug === filters.category)?.name}
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 ml-1 hover:bg-transparent"
                onClick={() => handleCategoryChange('all')}
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          )}
          {filters.threatLevel && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Risk: {filters.threatLevel}
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 ml-1 hover:bg-transparent"
                onClick={() => handleThreatLevelChange('all')}
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}