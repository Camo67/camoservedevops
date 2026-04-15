'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Skills', href: '#skills' },
  { label: 'Platform', href: '/platform' },
  { label: 'AV Explorer', href: '/av-explorer' },
  { label: 'Contact', href: '#contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Navigation Panel */}
          <div 
            id="mobile-nav"
            className="fixed top-0 right-0 h-full w-80 max-w-sm bg-background border-l border-primary/20 shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-primary/20">
                <span className="font-mono text-sm tracking-widest font-bold text-primary">
                  NAVIGATION
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block w-full px-4 py-3 rounded-md text-left text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="p-4 border-t border-primary/20 text-xs text-muted-foreground text-center">
                CamoServDevops © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}