'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';
import { CgClose, CgMenuRight } from 'react-icons/cg';

export default function Header() {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateScroll = () => {
      setScroll(window.scrollY >= 90);
    };

    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  const navs = [
    'home',
    'about',
    'skills',
    'projects',
    'certifications',
    'experience',
    'education',
    'services',
    'contact',
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg transition-all duration-300
        ${
          scroll
            ? 'bg-white/90 dark:bg-grey-900/90 border-b border-gray-200 dark:border-grey-700'
            : 'bg-white/80 dark:bg-grey-900/80'
        }
      `}
    >
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-black dark:text-white whitespace-nowrap"
        >
          Adima
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5">

          {navs.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              offset={-70}
              smooth={true}
              duration={500}
              className="
                cursor-pointer
                capitalize
                text-base
                font-medium
                hover:text-violet-600
                transition-colors
              "
            >
              {item}
            </ScrollLink>
          ))}

          {/* Resume Button */}
          <a
            href="/resume/Shaikh_Adima_Zareen.pdf"
            download
            className="
              px-4 py-2
              rounded-lg
              bg-violet-600
              hover:bg-violet-700
              text-white
              font-medium
              transition-all
            "
          >
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }
            className="
              p-2
              rounded-full
              hover:bg-gray-100
              dark:hover:bg-grey-800
              transition-colors
            "
          >
            {theme === 'dark' ? (
              <FiSun size={20} />
            ) : (
              <FiMoon size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden items-center justify-between px-4 py-4">

        <Link
          href="/"
          className="text-xl font-bold text-violet-600"
        >
          Adima
        </Link>

        <div className="flex items-center gap-4">

          <button
            onClick={() =>
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }
            className="
              p-2
              rounded-full
              bg-gray-100
              dark:bg-grey-800
            "
          >
            {theme === 'dark' ? (
              <FiSun />
            ) : (
              <FiMoon />
            )}
          </button>

          <CgMenuRight
            size={24}
            onClick={() => setNavCollapse(false)}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 h-screen w-full flex lg:hidden transition-all duration-300
          ${navCollapse ? 'right-[-100%]' : 'right-0'}
        `}
      >
        <div
          className="w-1/4"
          onClick={() => setNavCollapse(true)}
        />

        <div
          className="
            w-3/4
            bg-white dark:bg-grey-900
            p-5
            flex flex-col gap-4
          "
        >
          <CgClose
            size={24}
            className="self-end cursor-pointer"
            onClick={() => setNavCollapse(true)}
          />

          {navs.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              offset={-70}
              smooth={true}
              duration={500}
              onClick={() => setNavCollapse(true)}
              className="
                px-4 py-2
                rounded-lg
                capitalize
                cursor-pointer
                hover:bg-violet-100
                dark:hover:bg-grey-800
              "
            >
              {item}
            </ScrollLink>
          ))}

          <a
            href="/resume/Shaikh_Adima_Zareen.pdf"
            download
            className="
              bg-violet-600
              hover:bg-violet-700
              text-white
              rounded-lg
              px-4 py-2
              text-center
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}