import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'contributions', label: 'Contributions' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((link) => link.id), 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl sm:text-2xl font-bold text-muted-900 hover:text-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-lg px-2"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                  activeSection === link.id
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-muted-700 hover:text-accent-600 hover:bg-muted-50'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-muted-900" />
            ) : (
              <Menu className="w-6 h-6 text-muted-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-muted-200 py-4 bg-white">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                    activeSection === link.id
                      ? 'text-accent-600 bg-accent-50'
                      : 'text-muted-700 hover:text-accent-600 hover:bg-muted-50'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
