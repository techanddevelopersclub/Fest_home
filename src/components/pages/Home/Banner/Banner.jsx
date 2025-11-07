import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import bgVideo from "../../../../assets/video/video.mp4";

const Banner = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setShowTooltip(false);
    }
  };

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full mx-auto lg:h-[100vh] md:h-[80vh] min-h-[85vh] h-auto overflow-hidden">
      <video
        ref={videoRef}
        className="object-cover h-full w-full absolute top-0 left-0 brightness-125 contrast-110"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Unmute Button */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 flex items-center gap-2 sm:gap-3">
        {showTooltip && isMuted && (
          <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-display font-semibold shadow-lg backdrop-blur-sm border border-white/20 animate-bounce">
            🔊 Click to Enable Sound
          </div>
        )}
        <button
          onClick={toggleMute}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 group shadow-2xl"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX size={24} className="text-white group-hover:text-pink-400 transition-colors sm:w-7 sm:h-7" />
          ) : (
            <Volume2 size={24} className="text-pink-400 group-hover:text-white transition-colors animate-pulse sm:w-7 sm:h-7" />
          )}
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

      <div className="relative min-h-[85vh] w-full flex items-center justify-center px-4 py-8 sm:py-12">
        {/* Large "25" Text Overlay */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-[12rem] sm:text-[20rem] md:text-[30rem] lg:text-[35rem] font-black text-white/10 leading-none select-none pointer-events-none">
            25
          </h1>
        </div>

        {/* Content Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-12 py-8"
        >
          {/* Left Side - Event Title */}
          <div className="text-center lg:text-left w-full lg:w-auto">
            <div className="mb-3 sm:mb-4 drop-shadow-2xl">
              <img 
                src="https://res.cloudinary.com/duyzpk8ym/image/upload/v1762457545/CIESZYC_25_20251014_023007_0000_io68s6.png" 
                alt="CIESZYC '2K25" 
                className="max-w-full h-auto w-auto mx-auto lg:mx-0 object-contain"
                style={{ 
                  maxHeight: 'clamp(60px, 12vw, 150px)',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white drop-shadow-xl">
              Caravan of the Wonders
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mt-3 sm:mt-4 font-body font-light drop-shadow-lg">
              December 4-6, 2025
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <a
              href={import.meta.env.VITE_MAIN_SITE_URL || "#"}
              className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 border-2 border-white/20 inline-block text-center w-full sm:w-auto"
            >
              Register for Events
            </a>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-body font-light drop-shadow-lg">
              Join the Celebration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
