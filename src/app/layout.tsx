import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SkillShare - Connect Through Expertise',
  description: 'Discover, share, and connect through skills. Build professional networks based on expertise and learning opportunities.',
  keywords: 'skills, expertise, networking, learning, professional development, collaboration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="bg-white border-t mt-16">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">SkillShare</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Connect through expertise and build meaningful professional relationships.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Explore</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="/skills" className="hover:text-gray-900 transition-colors">Browse Skills</a></li>
                    <li><a href="/skills/add" className="hover:text-gray-900 transition-colors">Share Your Skills</a></li>
                    <li><a href="/profile" className="hover:text-gray-900 transition-colors">Your Profile</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="/skills?category=Technology" className="hover:text-gray-900 transition-colors">Technology</a></li>
                    <li><a href="/skills?category=Design" className="hover:text-gray-900 transition-colors">Design</a></li>
                    <li><a href="/skills?category=Business" className="hover:text-gray-900 transition-colors">Business</a></li>
                    <li><a href="/skills?category=Creative" className="hover:text-gray-900 transition-colors">Creative</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Community</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Guidelines</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Feedback</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-gray-600">
                  © 2024 SkillShare. Empowering professional growth through knowledge sharing.
                </p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}