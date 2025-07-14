import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('events'), path: '/events' },
    { name: t('sermons'), path: '/sermons' },
    { name: t('blog'), path: '/blog' },
    { name: t('ministries'), path: '/ministries' },
    { name: t('donate'), path: '/donate' },
    { name: t('contact'), path: '/contact' },
  ];
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <nav className="bg-green-700 text-yellow-100 shadow-lg fixed left-1/2 top-1 transform -translate-x-1/2 z-50 rounded-full max-w-full w-[98vw] px-8 py-3 flex flex-col items-center transition-all duration-300">
      <div className="w-full flex items-center h-12 justify-between">
        {/* Logo on the far left (mobile only) */}
        <img
          src="https://images.pexels.com/photos/18243181/pexels-photo-18243181.jpeg?auto=compress&w=256&h=256&fit=crop"
          alt="Church Logo"
          className="block md:hidden w-12 h-12 rounded-full object-cover mr-2"
        />
        {/* Church Name on the far left (desktop only) */}
        <span className="font-bold text-3xl text-yellow-300 hidden md:inline align-middle">ChurchName</span>
        {/* Desktop nav links on the far right */}
        <div className="hidden md:flex items-center space-x-8 whitespace-nowrap">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Hamburger/X Icon for mobile */}
        <div className="flex-1 flex items-center justify-end md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-yellow-200 hover:text-yellow-400 focus:outline-none transition-all duration-200 w-24 h-24 flex items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              {/* Hamburger (funnel) style */}
              <line x1="28" y1="36" x2="64" y2="36" className={`transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <line x1="36" y1="48" x2="56" y2="48" className={`transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <line x1="44" y1="60" x2="48" y2="60" className={`transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              {/* X icon */}
              <line x1="32" y1="32" x2="64" y2="64" className={`transition-all duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
              <line x1="64" y1="32" x2="32" y2="64" className={`transition-all duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div ref={menuRef} className="md:hidden absolute left-0 right-0 top-16 bg-green-800 rounded-2xl shadow-xl py-6 px-4 flex flex-col space-y-4 animate-fade-in z-40">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
} 