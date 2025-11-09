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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to Cieszyc
        </h2>

        {/* Subtitle */}
        <h3 
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-10 drop-shadow-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Caravan of the Wonders
        </h3>

        {/* Description */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-body font-light text-white/90 leading-relaxed max-w-4xl mx-auto mb-8 drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
Get ready to experience the electrifying energy, non-stop excitement, and unforgettable moments at CIESZYC – the Annual Fest of THDC-IHET!
Join us as we bring together the best of talent, music, art, and entertainment for an epic celebration of student life that you’ll remember forever!


        </p>
{/* === NEWLY ADDED BROCHURE LINK === */}
<div data-aos="fade-up" data-aos-delay="350">
          <a
            href="/CIESZYC_2025_BROCHURE.pdf" // <-- *** UPDATE THIS PATH ***
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-body font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out transform"
          >
            View This Year's Brochure
          </a>
        </div>


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
