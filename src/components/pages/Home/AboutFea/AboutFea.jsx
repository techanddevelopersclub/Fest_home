const AboutFea = () => {
  return (
    <div className="relative px-6 py-16 md:py-20 max-w-6xl mx-auto">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-rose-600/10 rounded-3xl blur-3xl"></div>
      
      <div className="relative z-10 text-center">
        {/* Top Decorative Line */}
        <div className="flex items-center justify-center mb-8" data-aos="zoom-in">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
          <div className="mx-4 text-pink-500 text-2xl">✦</div>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
        </div>

        {/* Main Heading */}
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to Cieszyc
        </h2>

        {/* Subtitle */}
        <h3 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 drop-shadow-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Caravan of the Wonders
        </h3>

        {/* Description */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed max-w-4xl mx-auto mb-8 drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Step into the Caravan of Wonders — where every stop unveils a new marvel, every moment sparks wonder, and every soul becomes a traveler through realms of imagination, art, and discovery.
        </p>

        {/* Bottom Decorative Elements */}
        <div 
          className="flex items-center justify-center gap-3 mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutFea;
