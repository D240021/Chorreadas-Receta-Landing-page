import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-amber-800 bg-opacity-95 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-amber-50">
          <span className="text-amber-200">Chorreadas</span> de Don Pepe
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-amber-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {[{
          name: 'Inicio',
          id: 'hero'
        }, {
          name: 'Receta',
          id: 'recipe'
        }, {
          name: 'Videos',
          id: 'videos'
        }, {
          name: 'Registrarse',
          id: 'register'
        }].map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-amber-50 hover:text-amber-200 transition-colors font-medium">
              {item.name}
            </button>)}
        </nav>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-amber-800 bg-opacity-95">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[{
          name: 'Inicio',
          id: 'hero'
        }, {
          name: 'Receta',
          id: 'recipe'
        }, {
          name: 'Videos',
          id: 'videos'
        }, {
          name: 'Registrarse',
          id: 'register'
        }].map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-amber-50 hover:text-amber-200 transition-colors font-medium py-2 text-left">
                {item.name}
              </button>)}
          </div>
        </div>}
    </header>;
}