import React from 'react';
import { SocialLinks } from './SocialLinks';
import { ChevronUpIcon } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-amber-900 text-amber-100 w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-200">Don Pepe</h3>
            <p className="text-sm">
              Las mejores recetas tradicionales para compartir con toda la
              familia.
            </p>
            <SocialLinks brand="donpepe" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-200">elguche.com</h3>
            <p className="text-sm">
              Tu portal para descubrir la auténtica gastronomía latinoamericana.
            </p>
            <SocialLinks brand="elguche" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-200">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('hero')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm hover:text-amber-200 transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('recipe')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm hover:text-amber-200 transition-colors">
                  Receta
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('videos')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm hover:text-amber-200 transition-colors">
                  Videos
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('register')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm hover:text-amber-200 transition-colors">
                  Registro
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-200">Contacto</h3>
            <p className="text-sm">
              ¿Tienes preguntas o sugerencias? Escríbenos a:
              <br />
              <a href="mailto:info@donpepe.com" className="hover:text-amber-200 transition-colors">
                info@donpepe.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-amber-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Don Pepe & elguche.com. Todos los
            derechos reservados.
          </p>
          <button onClick={scrollToTop} className="flex items-center space-x-2 text-amber-300 hover:text-amber-200 transition-colors" aria-label="Volver arriba">
            <span>Volver arriba</span>
            <ChevronUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>;
}