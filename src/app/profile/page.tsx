'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SkillGrid } from '@/components/SkillGrid';
import { mockUsers, mockSkills, getSkillsByUserId } from '@/lib/skills-data';
import { User } from '@/types';
import Link from 'next/link';

export default function ProfilePage() {
  // Mock current user - in real app, this would come from authentication
  const [currentUser] = useState<User>(mockUsers[0]); // Sarah Chen
  const userSkills = getSkillsByUserId(currentUser.id);
  
  const stats = {
    totalSkills: userSkills.length,
    totalEndorsements: Object.values(currentUser.endorsements).reduce((sum: number, count: number) => sum + count, 0),
    totalConnections: currentUser.connections.length,
    averageRating: userSkills.length > 0 
      ? userSkills.reduce((sum, skill) => sum + skill.rating, 0) / userSkills.length 
      : 0,
  };

  const handleEndorse = (skillId: string) => {
    console.log('Endorsing skill:', skillId);
  };

  const handleViewDetails = (skillId: string) => {
    console.log('Viewing skill details:', skillId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Avatar and Basic Info */}
              <div className="flex items-center gap-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback className="text-2xl">
                    {currentUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-gray-900">{currentUser.name}</h1>
                  <p className="text-gray-600">{currentUser.location}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>📅 Joined {new Date(currentUser.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:ml-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stats.totalSkills}</div>
                  <div className="text-sm text-blue-800">Skills</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.totalEndorsements}</div>
                  <div className="text-sm text-green-800">Endorsements</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{stats.totalConnections}</div>
                  <div className="text-sm text-purple-800">Connections</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">
                    {stats.averageRating.toFixed(1)}
                  </div>
                  <div className="text-sm text-yellow-800">Avg Rating</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-gray-700 leading-relaxed">{currentUser.bio}</p>
            </div>

            {/* Links */}
            <div className="mt-4 flex flex-wrap gap-3">
              {currentUser.portfolioUrl && (
                <a 
                  href={currentUser.portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  🌐 Portfolio
                </a>
              )}
              {currentUser.linkedinUrl && (
                <a 
                  href={currentUser.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  💼 LinkedIn
                </a>
              )}
              {currentUser.githubUrl && (
                <a 
                  href={currentUser.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  🔗 GitHub
                </a>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="skills">My Skills</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="endorsements">Endorsements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Your Skills ({userSkills.length})
                </h2>
                <p className="text-gray-600">
                  Manage and showcase your expertise
                </p>
              </div>
              <Link href="/skills/add">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Add New Skill
                </Button>
              </Link>
            </div>

            {userSkills.length > 0 ? (
              <SkillGrid
                skills={userSkills}
                onEndorse={handleEndorse}
                onViewDetails={handleViewDetails}
                emptyMessage="You haven't shared any skills yet. Start by adding your first skill!"
              />
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">No Skills Yet</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Start building your professional profile by sharing your first skill. 
                      Let others discover your expertise!
                    </p>
                    <Link href="/skills/add">
                      <Button size="lg" className="mt-4">
                        Add Your First Skill
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Connections Tab */}
          <TabsContent value="connections" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Your Network ({currentUser.connections.length} connections)
              </h2>
              <p className="text-gray-600">
                People you're connected with in the SkillShare community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentUser.connections.map((connectionId) => {
                const connectedUser = mockUsers.find(user => user.id === connectionId);
                if (!connectedUser) return null;

                return (
                  <Card key={connectionId} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={connectedUser.avatar} alt={connectedUser.name} />
                          <AvatarFallback>
                            {connectedUser.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{connectedUser.name}</h3>
                          <p className="text-sm text-gray-600">{connectedUser.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                        {connectedUser.bio}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {getSkillsByUserId(connectedUser.id).slice(0, 3).map((skill) => (
                          <Badge key={skill.id} variant="secondary" className="text-xs">
                            {skill.title}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Endorsements Tab */}
          <TabsContent value="endorsements" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Endorsements Received
              </h2>
              <p className="text-gray-600">
                Recognition from the community for your skills
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(currentUser.endorsements).map(([skillId, count]) => {
                const skill = mockSkills.find(s => s.id === skillId);
                if (!skill) return null;

                return (
                  <Card key={skillId}>
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{skill.title}</h3>
                          <p className="text-sm text-gray-600">{skill.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{count}</div>
                          <div className="text-sm text-gray-600">endorsements</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Edit Profile Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Notification Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Export Profile Data
                  </Button>
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}