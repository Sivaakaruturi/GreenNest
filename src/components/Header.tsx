import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-green-nest-600">
            GreenNest
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-green-nest-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">
            Book Consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-600 hover:text-green-nest-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-green-nest-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block btn btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 