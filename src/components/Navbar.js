'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../app/images/logo.svg';

export default function Navbar({ isHome = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHome) {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHome]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Innovation', href: isHome ? '#innovation' : '/#innovation' },
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'Portfolio', href: isHome ? '#portfolio' : '/#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact', isButton: true }
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#CC6600] text-white px-4 py-2 rounded-full font-bold">
        Skip to Content
      </a>

      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" aria-label="Blue Lotus Media Home">
            <Image
              src={logo}
              alt="Blue Lotus Media Logo"
              width={250}
              height={40}
              className={`transition-all duration-300 ${
                isScrolled || isMenuOpen ? 'brightness-0' : 'brightness-0 invert'
              } hover:opacity-80`}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHash = link.href.startsWith('#') || (link.href.startsWith('/#') && isHome);
              const targetId = isHash ? (link.href.includes('#') ? link.href.split('#')[1] : null) : null;

              const handleClick = (e) => {
                if (isHash && targetId) {
                  e.preventDefault();
                  const element = document.getElementById(targetId);
                  if (element) {
                    const offset = 80; // Navbar height compensation
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                    
                    if (isMenuOpen) setIsMenuOpen(false);
                  }
                }
              };

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleClick}
                  className={link.isButton ? 
                    "bg-[#CC6600] text-white px-6 py-2 rounded-full font-bold hover:bg-[#A34F00] transition-all shadow-md hover:shadow-lg active:scale-95" :
                    `font-medium transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-[#CC6600]' : 'text-white hover:text-gray-300'
                    }`
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-16">
              <Image
                src={logo}
                alt="Blue Lotus Media Logo"
                width={200}
                height={32}
                className="brightness-0"
              />
              <button
                onClick={toggleMenu}
                className="text-gray-900 p-2"
                aria-label="Close Menu"
              >
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 items-center justify-center flex-grow">
              {navLinks.map((link) => {
                const isHash = link.href.startsWith('#') || (link.href.startsWith('/#') && isHome);
                const targetId = isHash ? (link.href.includes('#') ? link.href.split('#')[1] : null) : null;

                const handleClick = (e) => {
                  if (isHash && targetId) {
                    e.preventDefault();
                    const element = document.getElementById(targetId);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      setIsMenuOpen(false);
                    }
                  } else {
                    setIsMenuOpen(false);
                  }
                };

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleClick}
                    className={`text-3xl font-bold ${
                      link.isButton ? 'text-[#CC6600]' : 'text-gray-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
