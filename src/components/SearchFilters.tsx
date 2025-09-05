'use client';

import { useState } from 'react';
import { SearchFilters as SearchFiltersType } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillCategories, proficiencyLevels } from '@/lib/validation';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  onSearch: () => void;
  resultsCount?: number;
}

export function SearchFilters({ 
  filters, 
  onFiltersChange, 
  onSearch,
  resultsCount 
}: SearchFiltersProps) {
  const [localQuery, setLocalQuery] = useState(filters.query || '');

  const handleQueryChange = (value: string) => {
    setLocalQuery(value);
    onFiltersChange({ ...filters, query: value });
  };

  const handleCategoryChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      category: value === 'all' ? undefined : value as any 
    });
  };

  const handleProficiencyChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      proficiency: value === 'all' ? undefined : value as any 
    });
  };

  const handleSortChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      sortBy: value === 'relevance' ? undefined : value as any 
    });
  };

  const handleRatingChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      minRating: value === 'all' ? undefined : parseInt(value) 
    });
  };

  const clearFilters = () => {
    setLocalQuery('');
    onFiltersChange({});
  };

  const activeFilterCount = Object.keys(filters).filter(key => 
    filters[key as keyof SearchFiltersType] !== undefined && 
    filters[key as keyof SearchFiltersType] !== ''
  ).length;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Search & Filter Skills</CardTitle>
          {resultsCount !== undefined && (
            <Badge variant="outline" className="px-2 py-1">
              {resultsCount} results
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Search Query */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Search skills, descriptions, or tags</label>
          <Input
            type="text"
            placeholder="e.g., React, Python, Design..."
            value={localQuery}
            onChange={(e) => handleQueryChange(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <Select 
              value={filters.category || 'all'} 
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {skillCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Proficiency Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Proficiency Level</label>
            <Select 
              value={filters.proficiency || 'all'} 
              onValueChange={handleProficiencyChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="All levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All levels</SelectItem>
                {proficiencyLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Rating Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Minimum Rating</label>
            <Select 
              value={filters.minRating?.toString() || 'all'} 
              onValueChange={handleRatingChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Any rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any rating</SelectItem>
                <SelectItem value="4">4+ stars</SelectItem>
                <SelectItem value="3">3+ stars</SelectItem>
                <SelectItem value="2">2+ stars</SelectItem>
                <SelectItem value="1">1+ stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Sort By</label>
            <Select 
              value={filters.sortBy || 'relevance'} 
              onValueChange={handleSortChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Relevance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
                <SelectItem value="rating">Highest rated</SelectItem>
                <SelectItem value="endorsements">Most endorsed</SelectItem>
                <SelectItem value="alphabetical">A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            {activeFilterCount > 0 && (
              <>
                <Badge variant="secondary">
                  {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} active
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-sm"
                >
                  Clear all
                </Button>
              </>
            )}
          </div>
          
          <Button 
            onClick={onSearch}
            className="min-w-[100px]"
          >
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}