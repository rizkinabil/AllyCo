'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isWhiteLabelNav = pathname === '/' || pathname === '/contact' || pathname === '/framework';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Capabilities', href: '/services' },
    { name: 'Framework', href: '/framework' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white backdrop-blur-sm border-b border-[#0002ba]/5 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-300">
              <Image
                src={scrolled ? '/logo-nobg.png' : '/invert-logo.png'}
                alt="AllyCo"
                width={50}
                height={50}
                priority
                className="object-contain sm:w-[60px] sm:h-[60px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={`nav-item-${item.name}-${index}`}
                  href={item.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isWhiteLabelNav && !scrolled
                      ? 'text-white hover:text-white/80'
                      : 'text-[#31312d] hover:text-[#0002ba]'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px ${isWhiteLabelNav ? 'bg-white' : 'bg-[#0002ba]'} transition-all duration-300 group-hover:w-4/5`}
                  ></span>
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-4 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#0002ba] text-white text-xs sm:text-sm font-medium hover:bg-[#000000] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 ${
                isWhiteLabelNav && !scrolled ? 'text-white hover:text-white/80' : 'text-[#31312d] hover:text-[#0002ba]'
              } focus:outline-none transition-colors duration-300`}
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[#0002ba]/5 bg-white">
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={`nav-item-${item.name}-${index}`}
                href={item.href}
                className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-[#31312d] hover:text-[#0002ba] hover:bg-[#f5f5f5]/50 transition-all duration-300 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 sm:px-4 py-2.5 sm:py-3 mt-3 sm:mt-4 bg-[#0002ba] text-white text-sm sm:text-base font-medium text-center hover:bg-[#000000] transition-all duration-300 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
