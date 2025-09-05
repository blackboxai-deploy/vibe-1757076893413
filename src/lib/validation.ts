import { z } from 'zod';
import { SkillCategory, ProficiencyLevel } from '@/types';

export const skillCategories: SkillCategory[] = [
  'Technology',
  'Design', 
  'Business',
  'Creative',
  'Academic',
  'Language',
  'Other'
];

export const proficiencyLevels: ProficiencyLevel[] = [
  'Beginner',
  'Intermediate', 
  'Advanced',
  'Expert'
];

export const addSkillSchema = z.object({
  title: z.string()
    .min(2, 'Title must be at least 2 characters')
    .max(100, 'Title must be less than 100 characters'),
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters'),
  category: z.enum(['Technology', 'Design', 'Business', 'Creative', 'Academic', 'Language', 'Other']),
  proficiency: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
  tags: z.array(z.string()).min(1, 'At least one tag is required').max(10, 'Maximum 10 tags allowed'),
  examples: z.array(z.string()).max(5, 'Maximum 5 examples allowed').optional(),
  learningResources: z.array(z.string().url('Must be a valid URL')).max(5, 'Maximum 5 resources allowed').optional(),
});

export const userProfileSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  bio: z.string()
    .max(300, 'Bio must be less than 300 characters')
    .optional(),
  location: z.string()
    .max(100, 'Location must be less than 100 characters')
    .optional(),
  portfolioUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  linkedinUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  githubUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

export const searchSchema = z.object({
  query: z.string().optional(),
  category: z.enum(['Technology', 'Design', 'Business', 'Creative', 'Academic', 'Language', 'Other']).optional(),
  proficiency: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']).optional(),
  minRating: z.number().min(1).max(5).optional(),
  sortBy: z.enum(['newest', 'oldest', 'rating', 'endorsements', 'alphabetical']).optional(),
});

export const endorsementSchema = z.object({
  skillId: z.string().min(1, 'Skill ID is required'),
  comment: z.string().max(200, 'Comment must be less than 200 characters').optional(),
});

export const ratingSchema = z.object({
  skillId: z.string().min(1, 'Skill ID is required'),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  comment: z.string().max(300, 'Comment must be less than 300 characters').optional(),
});

export const connectionSchema = z.object({
  receiverUserId: z.string().min(1, 'User ID is required'),
  message: z.string().max(200, 'Message must be less than 200 characters').optional(),
});

export type AddSkillForm = z.infer<typeof addSkillSchema>;
export type UserProfileForm = z.infer<typeof userProfileSchema>;
export type SearchForm = z.infer<typeof searchSchema>;
export type EndorsementForm = z.infer<typeof endorsementSchema>;
export type RatingForm = z.infer<typeof ratingSchema>;
export type ConnectionForm = z.infer<typeof connectionSchema>;