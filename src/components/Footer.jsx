import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    code: 'en',
    label: 'EN',
    flag: 'https://flagcdn.com/us.svg',
    alt: 'English',
  },
  {
    code: 'fr',
    label: 'FR',
    flag: 'https://flagcdn.com/fr.svg',
    alt: 'Français',
  },
];

export default function Footer() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100); // Show after 100px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Back to Top and Language Switcher - right on mobile, left on desktop */}
      <div className="fixed bottom-44 md:bottom-32 z-50 flex flex-col items-end md:items-start right-4 md:left-4 md:right-auto">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`mb-2 flex items-center justify-center w-10 h-10 bg-green-700 hover:bg-green-900 text-yellow-100 rounded-full shadow-lg focus:outline-none transition-opacity duration-300 ${showBackToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        {/* Language Switcher */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center focus:outline-none px-2 py-1 rounded hover:bg-green-900 bg-green-700 text-yellow-100 transition-colors"
          >
            <img src={currentLang.flag} alt={currentLang.alt} className="w-6 h-6 rounded-full border border-gray-300 mr-2" />
            <span className="text-sm font-medium">{currentLang.label}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {open && (
            <div className="absolute z-10 mt-2 w-28 bg-white rounded shadow-lg border border-gray-200">
              {languages.filter(l => l.code !== currentLang.code).map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-800 hover:bg-green-100 focus:outline-none"
                >
                  <img src={lang.flag} alt={lang.alt} className="w-5 h-5 rounded-full border border-gray-300 mr-2" />
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Modern Footer with extra bottom margin */}
      <footer className="bg-green-900 text-yellow-100 pt-10 pb-16 md:pb-10 px-4 mt-8 rounded-t-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Mission Statement */}
          <div className="md:col-span-2 flex flex-col items-start mb-6 md:mb-0">
            <span className="font-bold text-2xl text-yellow-300 mb-2">ChurchName</span>
            <p className="text-yellow-100 text-sm mb-4">A place to worship, grow, and serve together. We are dedicated to sharing the love of Christ and serving our neighbors with faith, hope, and love.</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-yellow-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.77c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.91 3.99 2.94A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col space-y-2 text-sm">
            <span className="font-semibold text-yellow-200">Contact</span>
            <span>Email: <a href="mailto:info@churchname.org" className="hover:text-yellow-300">info@churchname.org</a></span>
            <span>Phone: <a href="tel:+1234567890" className="hover:text-yellow-300">+1 (234) 567-890</a></span>
            <span>123 Church St, City, Country</span>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col space-y-2 text-sm">
            <span className="font-semibold text-yellow-200">Quick Links</span>
            <a href="#" className="hover:text-yellow-300">Home</a>
            <a href="#" className="hover:text-yellow-300">About Us</a>
            <a href="#" className="hover:text-yellow-300">Events</a>
            <a href="#" className="hover:text-yellow-300">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-green-800">
          <div className="mb-2 md:mb-0">
            <span className="font-semibold text-lg text-yellow-300">ChurchName</span> &copy; {new Date().getFullYear()}
          </div>
          <div className="space-x-4 text-sm">
            <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
} 