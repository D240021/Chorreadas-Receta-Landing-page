import React, { useState } from 'react';
export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subscribe: true
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Por favor complete los campos requeridos.'
      });
      return;
    }
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: '¡Gracias por registrarse! Recibirá nuestras recetas pronto.'
    });
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subscribe: true
    });
  };
  return <section id="register" className="py-20 bg-amber-50 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 text-center">
            Regístrese para Recibir Más Recetas
          </h2>
          <p className="text-amber-700 text-center mb-12">
            Únase a nuestra comunidad y reciba recetas exclusivas de Don Pepe
            directamente en su correo electrónico.
          </p>
          {formStatus.submitted ? <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8">
              <p className="text-center font-medium">{formStatus.message}</p>
            </div> : <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              {formStatus.error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p>{formStatus.message}</p>
                </div>}
              <div className="mb-6">
                <label htmlFor="name" className="block text-amber-900 font-medium mb-2">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Su nombre" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-amber-900 font-medium mb-2">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="su.email@ejemplo.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-amber-900 font-medium mb-2">
                  Teléfono (opcional)
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Su número de teléfono" />
              </div>
              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} className="rounded text-amber-600 focus:ring-amber-500 mr-2" />
                  <span className="text-amber-700">
                    Deseo recibir recetas y novedades de Don Pepe
                  </span>
                </label>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105">
                Registrarse
              </button>
              <p className="text-sm text-amber-600 mt-4 text-center">
                Sus datos están protegidos y nunca serán compartidos con
                terceros.
              </p>
            </form>}
        </div>
      </div>
    </section>;
}