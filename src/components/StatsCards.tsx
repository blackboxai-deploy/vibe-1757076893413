'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAppStats } from '@/lib/skills-data';

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <span className="text-2xl">{icon}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-600">
            {description}
          </p>
          {trend && (
            <div className={`flex items-center text-xs ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className={trend.isPositive ? '↗️' : '↘️'}>
                {trend.isPositive ? '↗️' : '↘️'}
              </span>
              <span className="ml-1">{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCards() {
  const stats = getAppStats();

  const statCards: StatCardProps[] = [
    {
      title: 'Total Skills',
      value: stats.totalSkills,
      description: 'Skills shared by community',
      icon: '🎯',
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Active Users',
      value: stats.totalUsers,
      description: 'Members in our community',
      icon: '👥',
      trend: { value: 8, isPositive: true }
    },
    {
      title: 'Skill Categories',
      value: stats.categories,
      description: 'Different areas of expertise',
      icon: '📚',
    },
    {
      title: 'Total Endorsements',
      value: stats.totalEndorsements,
      description: 'Skills endorsed by peers',
      icon: '👍',
      trend: { value: 15, isPositive: true }
    },
    {
      title: 'Connections Made',
      value: stats.totalConnections,
      description: 'Professional connections',
      icon: '🤝',
      trend: { value: 22, isPositive: true }
    },
    {
      title: 'Average Rating',
      value: stats.averageRating.toFixed(1) + '/5.0',
      description: 'Quality of shared skills',
      icon: '⭐',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {statCards.map((stat, index) => (
        <StatCard
          key={index}
          {...stat}
        />
      ))}
    </div>
  );
}