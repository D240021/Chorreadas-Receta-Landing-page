import React from 'react';
import { ChevronRightIcon, ClockIcon, UsersIcon, ScaleIcon } from 'lucide-react';
export function RecipeDetails() {
  
    const ingredients = ['3 tazas de maíz tierno', '1/2 taza de azúcar', '1/4 de taza de leche', '1 huevo', '1 cucharadita de vainilla', '1/2 cucharadita de sal', '1 cucharadita de polvo de hornear', '1/2 taza de harina de trigo', '2 cucharadas de mantequilla derretida'];


  const steps = ['Limpiar y rallar el maíz en caso de utilizar maíz tierno fresco. Si se utiliza maíz seco, este debe de ser molido para obtener una consistencia suave.', 'En un tazón grande, se mezcla el maíz rallado, el azúcar, la leche, el huevo, la vainilla y la sal. Se agrega la harina de trigo y el polvo de hornear. Se debe mezclar hasta obtener una masa suave pero espesa, en caso de estar muy líquida, se debe agregar un poco más de harina.', 'Se calienta un sartén a fuego medio y se añade un poco de mantequilla para que no se peguen a la superficie. Después, se vierte una porción de la mezcla en el sartén, formando pequeñas tortas. Por último, se cocina de 3 a 4 minutos por cada lado de la torta hasta que estén bien cocidas por dentro.', 'Se sirven las chorreadas calientes. Estas pueden ser acompañadas con crema, miel, queso fresco o natilla.'];
  return <section id="recipe" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-12 text-center">
          Receta de Chorreadas
        </h2>
                {/* New History Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">
            Historia de las Chorreadas
          </h3>
          <div className="bg-amber-50 p-8 rounded-lg shadow-md">
            <p className="text-amber-900 leading-relaxed mb-4">
              Las chorreadas son tortillas dulces de maíz que tienen una
              preparación sencilla. En el cantón de Turrialba, son utilizados
              ingredientes frescos y locales para darle un toque especial e
              identidad a esta receta. Su sabor dulce y textura suave hace que
              sea una delicia, más aún cuando son acompañadas con miel o
              natilla.
            </p>
            <p className="text-amber-900 leading-relaxed mb-4">
              Este platillo tiene su origen en tierras agrícolas de Costa Rica,
              especialmente en áreas montañosas como lo es Turrialba. Este era
              preparado comúnmente en fincas a la hora del desayuno o como un
              aperitivo entre comidas.
            </p>
          </div>
        </div>
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