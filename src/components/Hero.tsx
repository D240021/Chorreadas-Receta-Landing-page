import React from 'react';
export function Hero() {
  return <section id="hero" className="w-full bg-[url('./imagen-chorreadas.png')] bg-cover bg-center">
      <div className="w-full min-h-screen bg-black bg-opacity-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 mt-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-6 animate-fade-in">
            Deliciosas Chorreadas
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Una receta tradicional costarricense de tortillas dulces de maíz,
            perfectas para el desayuno o merienda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => document.getElementById('recipe')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Ver Receta
            </button>
            <button onClick={() => document.getElementById('register')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-transparent border-2 border-amber-100 text-amber-100 font-bold py-3 px-8 rounded-full hover:bg-amber-100 hover:text-amber-900 transition-all transform hover:scale-105">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </section>;
}