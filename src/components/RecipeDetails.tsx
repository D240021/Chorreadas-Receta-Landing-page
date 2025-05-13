import React from 'react';
import { ChevronRightIcon, ClockIcon, UsersIcon, ScaleIcon } from 'lucide-react';
export function RecipeDetails() {
  const ingredients = ['2 tazas de maíz tierno desgranado (o elote)', '2 huevos', '3 cucharadas de harina', '2 cucharadas de azúcar', '1/4 cucharadita de sal', '1/2 taza de leche', '1 cucharadita de polvo de hornear', '2 cucharadas de mantequilla derretida', 'Queso fresco rallado (opcional, para servir)', 'Natilla o crema agria (opcional, para servir)'];
  const steps = ['En un procesador de alimentos, licúe el maíz tierno hasta obtener una pasta suave.', 'En un tazón grande, mezcle el maíz licuado con los huevos, harina, azúcar, sal y polvo de hornear.', 'Agregue la leche y la mantequilla derretida, mezclando bien hasta obtener una masa homogénea.', 'Caliente un sartén antiadherente a fuego medio y engrase ligeramente con mantequilla o aceite.', 'Vierta aproximadamente 1/4 de taza de la mezcla para cada chorreada, extendiéndola ligeramente.', 'Cocine por aproximadamente 2-3 minutos por cada lado, o hasta que estén doradas.', 'Sirva caliente con queso fresco rallado y natilla o crema agria al gusto.'];
  return <section id="recipe" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-12 text-center">
          Receta de Chorreadas
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg shadow-md flex items-center justify-center space-x-4">
            <ClockIcon className="text-amber-600" size={32} />
            <div>
              <h3 className="text-lg font-medium text-amber-900">
                Tiempo de Preparación
              </h3>
              <p className="text-amber-700">30 minutos</p>
            </div>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-md flex items-center justify-center space-x-4">
            <UsersIcon className="text-amber-600" size={32} />
            <div>
              <h3 className="text-lg font-medium text-amber-900">Porciones</h3>
              <p className="text-amber-700">6-8 chorreadas</p>
            </div>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-md flex items-center justify-center space-x-4">
            <ScaleIcon className="text-amber-600" size={32} />
            <div>
              <h3 className="text-lg font-medium text-amber-900">Dificultad</h3>
              <p className="text-amber-700">Media</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-amber-50 p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              Ingredientes
            </h3>
            <ul className="space-y-3">
              {ingredients.map((ingredient, index) => <li key={index} className="flex items-start">
                  <ChevronRightIcon className="text-amber-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span className="text-amber-900">{ingredient}</span>
                </li>)}
            </ul>
          </div>
          <div className="bg-amber-50 p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              Preparación
            </h3>
            <ol className="space-y-4">
              {steps.map((step, index) => <li key={index} className="flex">
                  <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-amber-900">{step}</span>
                </li>)}
            </ol>
          </div>
        </div>
        <div className="mt-12 bg-amber-100 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-amber-800 mb-4">Consejos</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ChevronRightIcon className="text-amber-600 mt-1 mr-2 flex-shrink-0" size={18} />
              <span className="text-amber-900">
                Si no tiene maíz fresco, puede usar maíz congelado descongelado.
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRightIcon className="text-amber-600 mt-1 mr-2 flex-shrink-0" size={18} />
              <span className="text-amber-900">
                Para una versión más dulce, añada una cucharada extra de azúcar.
              </span>
            </li>
            <li className="flex items-start">
              <ChevronRightIcon className="text-amber-600 mt-1 mr-2 flex-shrink-0" size={18} />
              <span className="text-amber-900">
                Las chorreadas se pueden refrigerar y recalentar al día
                siguiente.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>;
}