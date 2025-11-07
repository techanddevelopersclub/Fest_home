import React, { useState } from 'react';
import { X, ZoomIn, Calendar, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      url: "src/assets/images/cultural_night_perfromance.jpeg",
      category: "events",
      title: "Cultural Night Performance",
      date: "Oct 2024",
    },
    {
      id: 2,
      url: "src/assets/images/tech_workshop.jpg",
      category: "events",
      title: "Tech Workshop",
      date: "Sep 2024",
    },
    {
      id: 3,
      url: "src/assets/images/hackathon.jpg",
      category: "competitions",
      title: "Hackathon 2024",
      date: "Aug 2024",
    },
    {
      id: 4,
      url: "src/assets/images/dance.JPG",
      category: "campus",
      title: "Campus Life",
      date: "Oct 2024",
    },
    {
      id: 5,
      url: "src/assets/images/music_festival.jpg",
      category: "events",
      title: "Music Festival",
      date: "Sep 2024",
    },
    {
      id: 6,
      url: "src/assets/images/campus.jpg",
      category: "campus",
      title: "Campus View",
      date: "Jul 2024",
    },
    {
      id: 7,
      url: "src/assets/images/cultural_performance.JPG",
      category: "competitions",
      title: "Dance Competition",
      date: "Oct 2024",
    },
    {
      id: 8,
      url: "src/assets/images/final_of_event.jpeg",
      category: "events",
      title: "Opening Ceremony",
      date: "Oct 2024",
    },
    {
      id: 9,
      url: "src/assets/images/hardware_hackathon.JPG",
      category: "campus",
      title: "Student Activity",
      date: "Sep 2024",
    },
    {
      id: 10,
      url: "src/assets/images/award_cerimony_on_stage.jpeg",
      category: "events",
      title: "Award Ceremony",
      date: "Aug 2024",
    },
    {
      id: 11,
      url: "src/assets/images/quiz.JPG",
      category: "competitions",
      title: "Quiz Competition",
      date: "Sep 2024",
    },
    {
      id: 12,
      url: "src/assets/images/labroratory.JPG",
      category: "campus",
      title: "Study Session",
      date: "Oct 2024",
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'competitions', name: 'Competitions' },
    { id: 'campus', name: 'Campus Life' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Camera className="text-pink-400 animate-pulse" size={48} />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white drop-shadow-2xl">
              Gallery
            </h1>
            <Camera className="text-pink-400 animate-pulse" size={48} />
          </div>
          <div className="h-1.5 w-48 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full mx-auto shadow-lg shadow-purple-500/50 mb-6"></div>
          <p className="text-white/90 text-xl sm:text-2xl md:text-3xl font-body font-light drop-shadow-lg">
            Capturing the vibrant moments of Cieszyc
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-full font-display font-bold text-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/50 scale-110'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 border-2 border-white/10 hover:border-pink-400/40"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-display font-black text-xl mb-2 drop-shadow-lg">{image.title}</h3>
                    <div className="flex items-center gap-2 text-pink-300 text-sm font-body font-light">
                      <Calendar size={16} />
                      <span>{image.date}</span>
                    </div>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full shadow-2xl">
                      <ZoomIn className="text-white" size={24} />
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-600/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full text-white transition-all duration-300 hover:scale-110 font-display"
              title="Close"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/50">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain bg-black"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <h2 className="text-white text-3xl md:text-4xl font-display font-black mb-4 drop-shadow-2xl">{selectedImage.title}</h2>
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Calendar size={20} className="text-pink-400" />
                    <span className="font-body font-light">{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Camera size={20} className="text-purple-400" />
                    <span className="capitalize font-body font-light">{selectedImage.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-32">
          <Camera size={80} className="mx-auto text-pink-400 mb-6 animate-pulse" />
          <p className="text-white text-2xl font-display font-bold">No images found in this category</p>
          <p className="text-white/60 text-lg mt-2 font-body font-light">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
