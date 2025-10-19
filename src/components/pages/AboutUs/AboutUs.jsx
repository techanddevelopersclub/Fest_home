import { Link } from "react-router-dom";
import bgVideo from "../../../assets/video/video.mp4";
import campusMap from "../../../assets/images/campus-map.png";
import { MapPin, Navigation } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Video Section - Full Width */}
      <div className="relative w-full lg:h-[100vh] md:h-[80vh] h-[70vh] overflow-hidden">
        <video
          className="object-cover h-full w-full brightness-125 contrast-110"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 flex items-center justify-center">
          <div data-aos="fade-up" className="text-center text-white px-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-2xl">
              About THDC IHET
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
              Asia's First Hydropower Engineering College
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="space-y-16">
          {/* Institute Description */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white text-center">
              THDC Institute of Hydropower Engineering and Technology
            </h2>
            <div className="text-white space-y-8 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
              <p data-aos="fade-up" data-aos-delay="100" className="drop-shadow-lg">
                <span className="font-bold">THDC Institute of Hydropower Engineering and Technology</span> is Asia's first Hydropower Engineering college and also the first constituent institute of Uttarakhand Technical University to become a world-class comprehensive institute with a mission of high-quality undergraduate programs and high-caliber research development in cutting-edge areas.
              </p>
              <p data-aos="fade-up" data-aos-delay="200" className="drop-shadow-lg">
                The institute is situated at B. Puram, Tehri, approximately 150 km from the capital city – Dehradun on the beautiful site of the THDC project.
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="drop-shadow-lg">
                THDC Institute of Hydropower Engineering and Technology, Tehri has received the <span className="font-bold">"Excellent Institute for Promoting Hydropower in Uttarakhand"</span> in the 2nd National Uttarakhand Education Summit and Awards 2015 by the CMAI Association of India.
              </p>
            </div>
          </div>

          {/* Decorative Divider */}
          <div data-aos="zoom-in" className="flex justify-center py-8">
            <div className="w-40 h-1 bg-white/50 rounded-full"></div>
          </div>

          {/* College Photo Section */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white text-center">
              Our Campus
            </h2>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/50 border-4 border-white/20 hover:border-pink-400/60 transition-all duration-500 group">
              <img
                src={campusMap}
                alt="THDC IHET Campus Map"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-contain bg-gradient-to-br from-amber-50 to-amber-100 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-2xl">
                    THDC Institute of Hydropower Engineering and Technology
                  </p>
                  <p className="text-pink-300 text-lg md:text-xl font-semibold mt-2 drop-shadow-lg">
                    B. Puram, Tehri, Uttarakhand • Bhagirathi River
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div data-aos="zoom-in" className="flex justify-center py-8">
            <div className="w-40 h-1 bg-white/50 rounded-full"></div>
          </div>

          {/* About Cieszyc Festival */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white text-center">
              About Cieszyc Festival
            </h2>
            <div className="text-white space-y-8 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
              <p data-aos="fade-up" data-aos-delay="100" className="drop-shadow-lg">
                The college festival, <span className="font-bold">Cieszyc</span>, is an opportunity to serve the purpose of exhilarating innovative ideas into the students up to a great extent. A competition between the best minds existing in or around the college will allow the best of the ideas to come out.
              </p>
              
              <h3 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 mb-8 drop-shadow-lg">
                Purpose of Cieszyc:
              </h3>
              <ul className="space-y-6 list-none">
                <li data-aos="fade-up" data-aos-delay="250" className="flex items-start hover:translate-x-2 transition-transform duration-300">
                  <span className="text-white mr-4 text-2xl md:text-3xl font-bold">•</span>
                  <span className="text-lg sm:text-xl md:text-2xl drop-shadow-lg">It will help the institution to bring together students from across the country.</span>
                </li>
                <li data-aos="fade-up" data-aos-delay="300" className="flex items-start hover:translate-x-2 transition-transform duration-300">
                  <span className="text-white mr-4 text-2xl md:text-3xl font-bold">•</span>
                  <span className="text-lg sm:text-xl md:text-2xl drop-shadow-lg">The fest will promote innovative ideas and allow students to share their knowledge and ideas with other students.</span>
                </li>
                <li data-aos="fade-up" data-aos-delay="350" className="flex items-start hover:translate-x-2 transition-transform duration-300">
                  <span className="text-white mr-4 text-2xl md:text-3xl font-bold">•</span>
                  <span className="text-lg sm:text-xl md:text-2xl drop-shadow-lg">Attending the fest will give information on the different fields of study.</span>
                </li>
              </ul>

              <p data-aos="fade-up" data-aos-delay="400" className="mt-10 text-lg sm:text-xl md:text-2xl drop-shadow-lg">
                Events, quizzes, seminars, music, and dance are part of the college fest, making it a <span className="font-bold">vibrant celebration of talent, creativity, and innovation</span>.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="500" className="mt-16 flex justify-center">
              <Link
                to="/events"
                className="text-white text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 border-2 border-white/20"
              >
                Explore Events
              </Link>
            </div>
          </div>

          {/* Decorative Divider */}
          <div data-aos="zoom-in" className="flex justify-center py-8">
            <div className="w-40 h-1 bg-white/50 rounded-full"></div>
          </div>

          {/* How to Reach Section */}
          <div data-aos="fade-up" data-aos-duration="1000" className="pb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <MapPin className="text-pink-400 animate-pulse" size={48} />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  How to Reach Us
                </h2>
                <Navigation className="text-pink-400 animate-pulse" size={48} />
              </div>
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-lg">
                Click the map to get directions from your location
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/y8iy56XiBtBSAGnj9"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-5xl mx-auto group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/50 border-4 border-white/20 hover:border-pink-400/80 transition-all duration-500 cursor-pointer">
                {/* Map Preview Image - Using a static map placeholder */}
                <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
                    alt="Campus Location Map"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                  />
                  
                  {/* Overlay with Instructions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/50 transition-all duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                      <div className="bg-white/10 backdrop-blur-xl rounded-full p-8 mb-6 group-hover:scale-110 transition-transform duration-500 border-4 border-white/30 group-hover:border-pink-400/60">
                        <MapPin size={64} className="text-pink-400 group-hover:animate-bounce" />
                      </div>
                      <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-4 drop-shadow-2xl">
                        Get Directions
                      </h3>
                      <p className="text-pink-300 text-xl md:text-2xl font-bold mb-6 drop-shadow-xl">
                        THDC IHET, B. Puram, Tehri
                      </p>
                      <div className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-full shadow-2xl group-hover:shadow-pink-500/50 group-hover:scale-110 transition-all duration-300">
                        <Navigation size={24} className="text-white" />
                        <span className="text-white text-lg md:text-xl font-bold">
                          Click to Navigate
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pulsing Location Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                    <div className="relative">
                      <MapPin size={48} className="text-pink-500 drop-shadow-2xl animate-pulse" />
                      <div className="absolute inset-0 animate-ping">
                        <MapPin size={48} className="text-pink-400 opacity-75" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Helper Text */}
              <div className="text-center mt-6">
                <p className="text-white/80 text-lg font-semibold">
                  📍 Opens in Google Maps with directions from your current location
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
