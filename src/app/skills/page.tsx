'use client';

import { useState, useMemo } from 'react';
import { SearchFilters as SearchFiltersType } from '@/types';
import { SearchFilters } from '@/components/SearchFilters';
import { SkillGrid } from '@/components/SkillGrid';
import { mockSkills } from '@/lib/skills-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SkillsPage() {
  const [filters, setFilters] = useState<SearchFiltersType>({});


  const filteredSkills = useMemo(() => {
    let results = [...mockSkills];

    // Apply filters
    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(skill => 
        skill.title.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (filters.category) {
      results = results.filter(skill => skill.category === filters.category);
    }

    if (filters.proficiency) {
      results = results.filter(skill => skill.proficiency === filters.proficiency);
    }

    if (filters.minRating) {
      results = results.filter(skill => skill.rating >= filters.minRating!);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'newest':
        results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        results.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'endorsements':
        results.sort((a, b) => b.endorsements - a.endorsements);
        break;
      case 'alphabetical':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Default relevance sort (by rating)
        results.sort((a, b) => b.rating - a.rating);
    }

    return results;
  }, [filters]);

  const handleFiltersChange = (newFilters: SearchFiltersType) => {
    setFilters(newFilters);
  };

  const handleSearch = () => {
    // Search is handled automatically through filters
  };

  const handleEndorse = (skillId: string) => {
    // TODO: Implement endorsement logic
    console.log('Endorsing skill:', skillId);
  };

  const handleViewDetails = (skillId: string) => {
    // TODO: Navigate to skill details page
    console.log('Viewing skill details:', skillId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Discover Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our community's diverse skill sets and connect with experts in your field of interest
          </p>
          <div className="flex justify-center">
            <Link href="/skills/add">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Share Your Skills
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onSearch={handleSearch}
          resultsCount={filteredSkills.length}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {filteredSkills.length} Skills Found
            </h2>
            <p className="text-gray-600">
              {filters.query && `Showing results for "${filters.query}"`}
              {filters.category && ` in ${filters.category}`}
              {filters.proficiency && ` • ${filters.proficiency} level`}
            </p>
          </div>
          
          {/* Quick Category Filters */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-sm text-gray-600 mr-2">Quick filters:</span>
            {['Technology', 'Design', 'Business'].map((category) => (
              <Button
                key={category}
                variant={filters.category === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFiltersChange({ ...filters, category: category as any })}
              >
                {category}
              </Button>
            ))}
            {filters.category && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFiltersChange({ ...filters, category: undefined })}
                className="text-gray-500"
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <SkillGrid
          skills={filteredSkills}
          onEndorse={handleEndorse}
          onViewDetails={handleViewDetails}
          emptyMessage={
            Object.keys(filters).length > 0 
              ? "No skills match your current filters. Try adjusting your search criteria."
              : "No skills available at the moment. Be the first to share your expertise!"
          }
        />

        {/* Load More Section */}
        {filteredSkills.length > 0 && filteredSkills.length % 9 === 0 && (
          <div className="text-center pt-8">
            <Button variant="outline" size="lg">
              Load More Skills
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}