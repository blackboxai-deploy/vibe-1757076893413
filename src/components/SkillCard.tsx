'use client';

import { Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUserById } from '@/lib/skills-data';

interface SkillCardProps {
  skill: Skill;
  onEndorse?: (skillId: string) => void;
  onViewDetails?: (skillId: string) => void;
  showActions?: boolean;
}

export function SkillCard({ 
  skill, 
  onEndorse, 
  onViewDetails, 
  showActions = true 
}: SkillCardProps) {
  const user = getUserById(skill.userId);
  
  if (!user) return null;

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Beginner': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Advanced': return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'Expert': return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Design': return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'Business': return 'bg-green-50 text-green-700 border-green-200';
      case 'Creative': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Academic': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Language': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
              {skill.title}
            </CardTitle>
            <div className="flex items-center gap-2 mb-3">
              <Badge 
                variant="outline" 
                className={getProficiencyColor(skill.proficiency)}
              >
                {skill.proficiency}
              </Badge>
              <Badge 
                variant="outline" 
                className={getCategoryColor(skill.category)}
              >
                {skill.category}
              </Badge>
              {skill.isVerified && (
                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-xs">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.location}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {skill.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {skill.tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {tag}
            </Badge>
          ))}
          {skill.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              +{skill.tags.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              {skill.rating.toFixed(1)} ({skill.ratingCount})
            </span>
            <span className="flex items-center gap-1">
              <span>👍</span>
              {skill.endorsements} endorsements
            </span>
          </div>
        </div>

        {showActions && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEndorse?.(skill.id)}
              className="flex-1 text-xs"
            >
              Endorse
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => onViewDetails?.(skill.id)}
              className="flex-1 text-xs"
            >
              View Details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}