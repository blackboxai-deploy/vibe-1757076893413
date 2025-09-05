'use client';

import { Skill } from '@/types';
import { SkillCard } from './SkillCard';

interface SkillGridProps {
  skills: Skill[];
  onEndorse?: (skillId: string) => void;
  onViewDetails?: (skillId: string) => void;
  showActions?: boolean;
  emptyMessage?: string;
}

export function SkillGrid({ 
  skills, 
  onEndorse, 
  onViewDetails, 
  showActions = true,
  emptyMessage = "No skills found matching your criteria."
}: SkillGridProps) {
  if (skills.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto max-w-md">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-gray-400">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Skills Found
            </h3>
            <p className="text-gray-600 text-sm">
              {emptyMessage}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
          onEndorse={onEndorse}
          onViewDetails={onViewDetails}
          showActions={showActions}
        />
      ))}
    </div>
  );
}