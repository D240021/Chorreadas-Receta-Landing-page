import React, { useState } from 'react';
import { PlayIcon } from 'lucide-react';
export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = [{
    id: 'video1',
    title: 'Preparación de Chorreadas Tradicionales',
    description: 'Aprende a preparar las auténticas chorreadas costarricenses paso a paso.',
    thumbnail: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/76979871' // Placeholder video
  }, {
    id: 'video2',
    title: 'Variaciones de la Receta',
    description: 'Descubre diferentes formas de preparar y servir chorreadas.',
    thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/76979871' // Placeholder video
  }, {
    id: 'video3',
    title: 'Secretos de Don Pepe',
    description: 'Los secretos mejor guardados para unas chorreadas perfectas.',
    thumbnail: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/76979871' // Placeholder video
  }];
  return <section id="videos" className="py-20 bg-amber-900 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-12 text-center">
          Videos de la Receta
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden shadow-xl aspect-video">
              <iframe src={videos[activeVideo].videoUrl} className="w-full h-full" title={videos[activeVideo].title} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-amber-50">
                {videos[activeVideo].title}
              </h3>
              <p className="text-amber-200 mt-2">
                {videos[activeVideo].description}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-50 mb-4">Más Videos</h3>
            {videos.map((video, index) => <div key={video.id} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${activeVideo === index ? 'bg-amber-700 shadow-md' : 'hover:bg-amber-800'}`} onClick={() => setActiveVideo(index)}>
                <div className="relative w-24 h-16 flex-shrink-0">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover rounded" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded">
                    <PlayIcon size={20} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-amber-50">
                    {video.title}
                  </h4>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}