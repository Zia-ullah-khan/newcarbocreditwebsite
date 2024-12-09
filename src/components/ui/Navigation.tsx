import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: 'feature' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 transition-all duration-300 z-50 
      ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <span className={`text-xl font-bold transition-colors duration-300
              ${scrolled ? 'text-green-600' : 'text-green-700'}`}>
              CarboCredit
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-gray-600 hover:text-green-600 transition-colors duration-200
                  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 
                  before:h-0.5 before:bg-green-600 before:transition-all before:duration-300
                  hover:before:w-full`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className={`transform transition-all duration-300 hover:scale-105
                ${scrolled ? 'bg-green-600' : 'bg-green-700'} hover:bg-green-600`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-180" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transform transition-all duration-300 origin-top
            ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t mt-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md
                  transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;