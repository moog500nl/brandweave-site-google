
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Using shadcn button

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Why It Matters', path: '/why-it-matters' },
  { name: 'The AI Audit', path: '/ai-audit' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Pricing & Contact', path: '/pricing-contact' },
  { name: 'Blog', path: '/blog' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-brand-navy">
              Brandweave AI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-brand-navy hover:bg-brand-lightGray hover:text-brand-navy px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
               <Button asChild className="ml-4 bg-brand-orange text-brand-black hover:bg-opacity-90">
                <Link to="/pricing-contact">Get Audit</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-navy hover:bg-brand-lightGray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-brand-navy hover:bg-brand-lightGray hover:text-brand-navy block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 bg-brand-orange text-brand-black hover:bg-opacity-90">
              <Link to="/pricing-contact" onClick={() => setIsOpen(false)}>Get Audit</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
