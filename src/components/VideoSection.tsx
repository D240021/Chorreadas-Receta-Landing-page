import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from 'lucide-react';

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 'video1',
      title: 'Chorreadas de maíz 🌽Chorreadas de maíz costarricenses 🌽',
      description: 'Aprende a preparar las auténticas chorreadas costarricenses paso a paso.',
      thumbnail: 'https://img.youtube.com/vi/ShxQIQ63lGY/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/ShxQIQ63lGY',
    },
    {
      id: 'video2',
      title: 'Deliciosas Chorreadas Ticas con el Chef Rafael | GastroTour 🌽🇨🇷',
      description: 'Descubre diferentes formas de preparar y servir chorreadas.',
      thumbnail: 'https://img.youtube.com/vi/Cd8pJbxdXig/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/Cd8pJbxdXig',
    },
    {
      id: 'video3',
      title: 'CHORREADAS DE MAIZ🌽 RECETAS DE COSTA RICA',
      description: 'Los secretos mejor guardados para unas chorreadas perfectas.',
      thumbnail: 'https://img.youtube.com/vi/Mq8l64ueeCI/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/Mq8l64ueeCI?si=91ud1TACSwZJ8Kvu',
    },
  ];

  return (
    <section id="videos" className="py-20 bg-amber-900 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-12 text-center">
          Videos de la Receta
        </h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Video principal + texto */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden shadow-xl aspect-video">
              <iframe
                src={videos[activeVideo].videoUrl}
                className="w-full h-full"
                title={videos[activeVideo].title}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-amber-50">{videos[activeVideo].title}</h3>
              <p className="text-amber-200 mt-2">{videos[activeVideo].description}</p>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-50 mb-4">Más Videos</h3>
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                  activeVideo === index ? 'bg-amber-700 shadow-md' : 'hover:bg-amber-800'
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="relative w-24 h-16 flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded">
                    <PlayIcon size={20} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-amber-50">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
