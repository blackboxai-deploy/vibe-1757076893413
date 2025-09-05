export type SkillCategory = 
  | 'Technology' 
  | 'Design' 
  | 'Business' 
  | 'Creative' 
  | 'Academic' 
  | 'Language' 
  | 'Other';

export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  location?: string;
  skills: string[]; // Array of skill IDs
  connections: string[]; // Array of user IDs
  endorsements: Record<string, number>; // skill ID -> endorsement count
  joinDate: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  tags: string[];
  userId: string; // User who added this skill
  createdAt: string;
  updatedAt: string;
  endorsements: number;
  rating: number; // Average rating from 1-5
  ratingCount: number;
  isVerified: boolean;
  examples?: string[]; // Examples of work or projects
  learningResources?: string[]; // Helpful resources for learning
}

export interface SkillEndorsement {
  id: string;
  skillId: string;
  endorserId: string;
  endorseeId: string;
  comment?: string;
  createdAt: string;
}

export interface SkillRating {
  id: string;
  skillId: string;
  raterId: string;
  rating: number; // 1-5
  comment?: string;
  createdAt: string;
}

export interface Connection {
  id: string;
  requesterUserId: string;
  receiverUserId: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: string;
  acceptedAt?: string;
  message?: string;
}

export interface SearchFilters {
  category?: SkillCategory;
  proficiency?: ProficiencyLevel;
  query?: string;
  tags?: string[];
  minRating?: number;
  sortBy?: 'newest' | 'oldest' | 'rating' | 'endorsements' | 'alphabetical';
}

export interface SkillMatch {
  userId: string;
  skillId: string;
  matchScore: number; // 0-100
  reason: string;
}