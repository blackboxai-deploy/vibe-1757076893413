'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', description: 'Discover and explore skills' },
    { href: '/skills', label: 'Browse Skills', description: 'Find skills and expertise' },
    { href: '/skills/add', label: 'Add Skill', description: 'Share your expertise' },
    { href: '/profile', label: 'Profile', description: 'Manage your skills' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">SkillShare</h1>
                <p className="text-xs text-gray-600 -mt-1">Connect through expertise</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? 'default' : 'ghost'}
                  size="sm"
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer list-none">
                <Button variant="ghost" size="sm">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </summary>
              
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className={cn(
                      'block px-4 py-3 text-sm border-l-4 transition-colors',
                      pathname === item.href
                        ? 'bg-blue-50 border-l-blue-600 text-blue-900'
                        : 'border-l-transparent text-gray-700 hover:bg-gray-50 hover:border-l-gray-300'
                    )}>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}