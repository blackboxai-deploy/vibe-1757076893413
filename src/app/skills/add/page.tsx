'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SkillForm } from '@/components/SkillForm';
import { AddSkillForm } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AddSkillPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: AddSkillForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      console.log('Adding skill:', data);
      
      // Mock success - in real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to skills page or show success message
      router.push('/skills');
    } catch (error) {
      console.error('Error adding skill:', error);
      // Handle error - show toast, etc.
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link href="/skills" className="hover:text-gray-900">Skills</Link>
            <span>/</span>
            <span className="text-gray-900">Add New Skill</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900">
            Share Your Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help others discover your skills and build meaningful professional connections. 
            Your expertise could be exactly what someone else is looking for.
          </p>
        </div>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              💡 Tips for a Great Skill Profile
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Be specific:</strong> "React Development" is better than just "Programming"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Include examples:</strong> Showcase your experience with concrete projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Add relevant tags:</strong> Help others discover your skill easily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Share resources:</strong> Include helpful links for others to learn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skill Form */}
        <SkillForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isLoading={isSubmitting}
        />

        {/* Additional Help */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Need Help Getting Started?
            </h3>
            <p className="text-gray-600">
              Not sure how to present your skills? Check out our community guidelines and examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="w-full sm:w-auto">
                View Examples
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Community Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}