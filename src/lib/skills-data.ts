import { User, Skill, SkillCategory, ProficiencyLevel } from '@/types';

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Sarah Chen',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92e2ca1e-f5c1-4ab3-a58a-0761668d524d.png',
    bio: 'Full-stack developer with 5+ years of experience in React and Node.js. Passionate about clean code and mentoring.',
    email: 'sarah.chen@example.com',
    location: 'San Francisco, CA',
    skills: ['skill-1', 'skill-2', 'skill-15'],
    connections: ['user-2', 'user-3'],
    endorsements: { 'skill-1': 8, 'skill-2': 12, 'skill-15': 5 },
    joinDate: '2023-01-15',
    portfolioUrl: 'https://sarahchen.dev',
    githubUrl: 'https://github.com/sarahchen',
    linkedinUrl: 'https://linkedin.com/in/sarahchen'
  },
  {
    id: 'user-2',
    name: 'Marcus Johnson',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a88430e9-f8c8-47c3-9cf2-24a9f6a878ab.png',
    bio: 'UI/UX Designer specializing in mobile apps and design systems. Love creating intuitive user experiences.',
    email: 'marcus.johnson@example.com',
    location: 'Austin, TX',
    skills: ['skill-3', 'skill-4', 'skill-16'],
    connections: ['user-1', 'user-4'],
    endorsements: { 'skill-3': 15, 'skill-4': 22, 'skill-16': 8 },
    joinDate: '2023-02-20',
    portfolioUrl: 'https://marcusdesigns.com',
    linkedinUrl: 'https://linkedin.com/in/marcusjohnson'
  },
  {
    id: 'user-3',
    name: 'Elena Rodriguez',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f68c30e-8cc9-4a15-9dc0-49b1cc45d83e.png',
    bio: 'Business analyst and project manager with expertise in agile methodologies and data analytics.',
    email: 'elena.rodriguez@example.com',
    location: 'New York, NY',
    skills: ['skill-5', 'skill-6', 'skill-17'],
    connections: ['user-1', 'user-5'],
    endorsements: { 'skill-5': 18, 'skill-6': 25, 'skill-17': 12 },
    joinDate: '2023-03-10',
    linkedinUrl: 'https://linkedin.com/in/elenarodriguez'
  },
  {
    id: 'user-4',
    name: 'David Kim',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47617d8b-87e8-4542-9237-a68ae7335e6d.png',
    bio: 'Data scientist and machine learning engineer. Turning data into actionable insights.',
    email: 'david.kim@example.com',
    location: 'Seattle, WA',
    skills: ['skill-7', 'skill-8', 'skill-18'],
    connections: ['user-2', 'user-6'],
    endorsements: { 'skill-7': 20, 'skill-8': 16, 'skill-18': 10 },
    joinDate: '2023-04-05',
    githubUrl: 'https://github.com/davidkim',
    portfolioUrl: 'https://davidkim.ai'
  },
  {
    id: 'user-5',
    name: 'Amelia Thompson',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9d5c727-5629-4b97-9b19-ec5ad1e12666.png',
    bio: 'Creative writer and content strategist. Crafting compelling stories that connect brands with audiences.',
    email: 'amelia.thompson@example.com',
    location: 'Portland, OR',
    skills: ['skill-9', 'skill-10', 'skill-19'],
    connections: ['user-3', 'user-7'],
    endorsements: { 'skill-9': 14, 'skill-10': 19, 'skill-19': 7 },
    joinDate: '2023-05-12',
    portfolioUrl: 'https://ameliawrites.com',
    linkedinUrl: 'https://linkedin.com/in/ameliathompson'
  },
  {
    id: 'user-6',
    name: 'Alex Petrov',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/988309ef-ca9d-4339-bed4-cc597c00829b.png',
    bio: 'DevOps engineer focused on cloud infrastructure and automation. Building scalable systems.',
    email: 'alex.petrov@example.com',
    location: 'Denver, CO',
    skills: ['skill-11', 'skill-12', 'skill-20'],
    connections: ['user-4', 'user-8'],
    endorsements: { 'skill-11': 22, 'skill-12': 18, 'skill-20': 11 },
    joinDate: '2023-06-18',
    githubUrl: 'https://github.com/alexpetrov'
  }
];

// Mock Skills Data
export const mockSkills: Skill[] = [
  {
    id: 'skill-1',
    title: 'React Development',
    description: 'Building modern web applications using React, including hooks, context, and state management.',
    category: 'Technology',
    proficiency: 'Expert',
    tags: ['React', 'JavaScript', 'Frontend', 'Hooks', 'JSX'],
    userId: 'user-1',
    createdAt: '2023-01-20T10:00:00Z',
    updatedAt: '2023-01-20T10:00:00Z',
    endorsements: 8,
    rating: 4.8,
    ratingCount: 12,
    isVerified: true,
    examples: ['E-commerce dashboard', 'Social media app', 'Analytics platform'],
    learningResources: ['https://reactjs.org/docs', 'https://react-hooks.dev']
  },
  {
    id: 'skill-2',
    title: 'Node.js Backend Development',
    description: 'Server-side development with Node.js, Express, and database integration.',
    category: 'Technology',
    proficiency: 'Advanced',
    tags: ['Node.js', 'Express', 'Backend', 'API', 'Database'],
    userId: 'user-1',
    createdAt: '2023-01-25T14:30:00Z',
    updatedAt: '2023-01-25T14:30:00Z',
    endorsements: 12,
    rating: 4.6,
    ratingCount: 15,
    isVerified: true,
    examples: ['RESTful APIs', 'Microservices', 'Authentication systems'],
    learningResources: ['https://nodejs.org/docs', 'https://expressjs.com']
  },
  {
    id: 'skill-3',
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with focus on user experience.',
    category: 'Design',
    proficiency: 'Expert',
    tags: ['UI Design', 'UX Research', 'Prototyping', 'Figma', 'User Testing'],
    userId: 'user-2',
    createdAt: '2023-02-22T09:15:00Z',
    updatedAt: '2023-02-22T09:15:00Z',
    endorsements: 15,
    rating: 4.9,
    ratingCount: 20,
    isVerified: true,
    examples: ['Mobile app redesigns', 'Design systems', 'User research studies'],
    learningResources: ['https://figma.com/resources', 'https://nngroup.com']
  },
  {
    id: 'skill-4',
    title: 'Mobile App Design',
    description: 'Designing mobile applications for iOS and Android with platform-specific considerations.',
    category: 'Design',
    proficiency: 'Advanced',
    tags: ['Mobile Design', 'iOS', 'Android', 'App Store', 'Material Design'],
    userId: 'user-2',
    createdAt: '2023-02-28T16:45:00Z',
    updatedAt: '2023-02-28T16:45:00Z',
    endorsements: 22,
    rating: 4.7,
    ratingCount: 18,
    isVerified: true,
    examples: ['Fitness tracking app', 'E-commerce mobile app', 'Social networking app'],
    learningResources: ['https://developer.apple.com/design', 'https://material.io/design']
  },
  {
    id: 'skill-5',
    title: 'Project Management',
    description: 'Leading cross-functional teams and managing projects using agile methodologies.',
    category: 'Business',
    proficiency: 'Expert',
    tags: ['Agile', 'Scrum', 'Leadership', 'Team Management', 'Planning'],
    userId: 'user-3',
    createdAt: '2023-03-12T11:20:00Z',
    updatedAt: '2023-03-12T11:20:00Z',
    endorsements: 18,
    rating: 4.8,
    ratingCount: 22,
    isVerified: true,
    examples: ['Product launches', 'Team reorganizations', 'Process improvements'],
    learningResources: ['https://scrum.org', 'https://pmi.org']
  },
  {
    id: 'skill-6',
    title: 'Data Analytics',
    description: 'Analyzing business data to derive insights and support decision-making.',
    category: 'Business',
    proficiency: 'Advanced',
    tags: ['Analytics', 'Data Visualization', 'SQL', 'Excel', 'Business Intelligence'],
    userId: 'user-3',
    createdAt: '2023-03-15T13:30:00Z',
    updatedAt: '2023-03-15T13:30:00Z',
    endorsements: 25,
    rating: 4.6,
    ratingCount: 28,
    isVerified: true,
    examples: ['Sales performance dashboards', 'Customer behavior analysis', 'Market research'],
    learningResources: ['https://tableau.com/learn', 'https://powerbi.microsoft.com/learning']
  },
  {
    id: 'skill-7',
    title: 'Machine Learning',
    description: 'Developing ML models for predictive analytics and automated decision-making.',
    category: 'Technology',
    proficiency: 'Expert',
    tags: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science', 'AI'],
    userId: 'user-4',
    createdAt: '2023-04-07T10:15:00Z',
    updatedAt: '2023-04-07T10:15:00Z',
    endorsements: 20,
    rating: 4.9,
    ratingCount: 16,
    isVerified: true,
    examples: ['Recommendation systems', 'Image classification', 'Fraud detection'],
    learningResources: ['https://tensorflow.org/tutorials', 'https://scikit-learn.org/stable/tutorial']
  },
  {
    id: 'skill-8',
    title: 'Data Visualization',
    description: 'Creating compelling visual representations of complex data sets.',
    category: 'Technology',
    proficiency: 'Advanced',
    tags: ['D3.js', 'Tableau', 'Power BI', 'Charts', 'Dashboards'],
    userId: 'user-4',
    createdAt: '2023-04-10T15:45:00Z',
    updatedAt: '2023-04-10T15:45:00Z',
    endorsements: 16,
    rating: 4.5,
    ratingCount: 20,
    isVerified: true,
    examples: ['Interactive dashboards', 'Real-time monitoring', 'Executive reports'],
    learningResources: ['https://d3js.org', 'https://observablehq.com']
  }
];

// Helper functions for data manipulation
export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return mockSkills.filter(skill => skill.category === category);
};

export const getSkillsByProficiency = (proficiency: ProficiencyLevel): Skill[] => {
  return mockSkills.filter(skill => skill.proficiency === proficiency);
};

export const getUserById = (userId: string): User | undefined => {
  return mockUsers.find(user => user.id === userId);
};

export const getSkillById = (skillId: string): Skill | undefined => {
  return mockSkills.find(skill => skill.id === skillId);
};

export const getSkillsByUserId = (userId: string): Skill[] => {
  return mockSkills.filter(skill => skill.userId === userId);
};

export const searchSkills = (query: string): Skill[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockSkills.filter(skill => 
    skill.title.toLowerCase().includes(lowercaseQuery) ||
    skill.description.toLowerCase().includes(lowercaseQuery) ||
    skill.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getTopSkills = (limit: number = 6): Skill[] => {
  return mockSkills
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getRecentSkills = (limit: number = 6): Skill[] => {
  return mockSkills
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

// Stats calculations
export const getAppStats = () => {
  return {
    totalSkills: mockSkills.length,
    totalUsers: mockUsers.length,
    totalEndorsements: mockSkills.reduce((sum, skill) => sum + skill.endorsements, 0),
    totalConnections: mockUsers.reduce((sum, user) => sum + user.connections.length, 0),
    averageRating: mockSkills.reduce((sum, skill) => sum + skill.rating, 0) / mockSkills.length,
    categories: Array.from(new Set(mockSkills.map(skill => skill.category))).length
  };
};