'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { Badge } from '@/components/ui/badge';
import { StatsCards } from '@/components/StatsCards';
import { SkillGrid } from '@/components/SkillGrid';
import { getTopSkills, getRecentSkills } from '@/lib/skills-data';

export default function HomePage() {
  const topSkills = getTopSkills(6);
  const recentSkills = getRecentSkills(6);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge 
                variant="outline" 
                className="px-3 py-1 bg-white/80 border-blue-200 text-blue-700 mb-4"
              >
                🚀 Connect Through Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Discover Skills,
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Build Networks
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join a community where expertise meets opportunity. Share your skills, discover others' talents, and build meaningful professional connections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/skills">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-lg">
                  Explore Skills
                </Button>
              </Link>
              <Link href="/skills/add">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-gray-300 px-8 py-3 text-lg hover:border-blue-500 hover:text-blue-600"
                >
                  Share Your Skills
                </Button>
              </Link>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover Expertise</h3>
                <p className="text-gray-600">Find the exact skills you need from verified professionals in our community.</p>
              </div>
              <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Connections</h3>
                <p className="text-gray-600">Connect with like-minded professionals and expand your network authentically.</p>
              </div>
              <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn & Grow</h3>
                <p className="text-gray-600">Access learning resources and get mentored by experts in your field.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Growing Community of Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who are already sharing knowledge and building connections
            </p>
          </div>
          <StatsCards />
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Top-Rated Skills
              </h2>
              <p className="text-lg text-gray-600">
                Discover the highest-rated skills shared by our community
              </p>
            </div>
            <Link href="/skills">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Skills
              </Button>
            </Link>
          </div>
          <SkillGrid 
            skills={topSkills} 
            showActions={false}
            emptyMessage="No featured skills available at the moment."
          />
        </div>
      </section>

      {/* Recent Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Recently Added Skills
              </h2>
              <p className="text-lg text-gray-600">
                Fresh expertise from our growing community
              </p>
            </div>
            <Link href="/skills?sortBy=newest">
              <Button variant="outline" className="mt-4 md:mt-0">
                See Latest
              </Button>
            </Link>
          </div>
          <SkillGrid 
            skills={recentSkills} 
            showActions={false}
            emptyMessage="No recent skills available at the moment."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Share Your Expertise?
            </h2>
            <p className="text-xl text-blue-100">
              Join our community of professionals and start building meaningful connections through your skills and knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/skills/add">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                >
                  Add Your First Skill
                </Button>
              </Link>
              <Link href="/skills">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
                >
                  Browse Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}