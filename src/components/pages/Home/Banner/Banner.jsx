import { Link } from "react-router-dom";
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
    <div className="relative w-full mx-auto lg:h-[100vh] md:h-[80vh] h-[70vh] overflow-hidden">
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
      <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
        {showTooltip && isMuted && (
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl animate-bounce">
            🔊 Click to Enable Sound
          </div>
        )}
        <button
          onClick={toggleMute}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-full p-4 transition-all duration-300 hover:scale-110 group shadow-2xl"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX size={28} className="text-white group-hover:text-pink-400 transition-colors" />
          ) : (
            <Volume2 size={28} className="text-pink-400 group-hover:text-white transition-colors animate-pulse" />
          )}
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

      <div className="relative h-full w-full flex items-center justify-center px-4">
        {/* Large "25" Text Overlay */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-[20rem] sm:text-[25rem] md:text-[30rem] lg:text-[35rem] font-black text-white/10 leading-none select-none pointer-events-none">
            25
          </h1>
        </div>

        {/* Content Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Left Side - Event Title */}
          <div className="text-center lg:text-left">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-white drop-shadow-2xl">
              CIESZYC
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-xl">
              Caravan of the Wonders
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mt-4 font-semibold drop-shadow-lg">
              October 13, 2025
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <Link
              to="/events"
              className="text-white text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 border-2 border-white/20"
            >
              Explore Events
            </Link>
            <p className="text-white/90 text-base sm:text-lg font-semibold drop-shadow-lg">
              Join the Celebration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
