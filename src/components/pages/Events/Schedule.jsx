import directorImage from "../../../assets/video/director.jpg";
import deanImage from "../../../assets/video/dean.jpg";
const Schedule = () => {

  return (
      <div className="flex flex-col px-4 md:px-8 gap-20 mt-16 max-w-screen-2xl mx-auto">
        {/* Director Section - Photo Left, Text Right */}
        <div data-aos="fade-right" className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 group">
          <div className="flex flex-col items-center gap-4 transform transition-all duration-500 group-hover:scale-105">
            <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl hover:shadow-purple-400/50 transition-all duration-500 hover:scale-105 border-4 border-purple-400/30 hover:border-purple-400/60">
              <img src='https://res.cloudinary.com/duyzpk8ym/image/upload/v1762456273/director_or7i3j.jpg' alt="Director" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800" style={{display: 'none'}}>
                <span className="text-gray-400 text-lg text-center px-4">Director Photo</span>
              </div>
            </div>
            <div className="text-center space-y-2 mt-2">
              <p className="text-white font-black text-lg sm:text-xl md:text-2xl drop-shadow-lg">Dr. Sharad K. Pradhan</p>
              <p className="text-purple-300 text-sm sm:text-base font-display font-semibold uppercase tracking-widest">Director</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 text-center lg:text-left drop-shadow-2xl">Director's Message</h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto lg:mx-0 shadow-lg shadow-purple-500/50"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg md:text-xl relative z-10 font-body font-light drop-shadow-lg">
                <span className="text-3xl text-purple-400 float-left mr-2 leading-none font-display">"</span>
                With great excitement, I welcome you all to <span className="font-display font-semibold text-white">Cieszyc</span>, our vibrant annual cultural festival.
                Organized by our passionate students and dedicated management, Cieszyc celebrates creativity, unity, and talent.
                Through thrilling competitions, captivating performances, and lively showcases, we come together to create unforgettable memories.
                I encourage everyone to participate wholeheartedly, celebrate each moment, and contribute to the spirit of joy and togetherness.
                Let's make this edition of Cieszyc a grand success!
                <span className="text-3xl text-purple-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Dean Section - Photo Right, Text Left */}
        <div data-aos="fade-left" className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10 lg:gap-12 group">
          <div className="flex flex-col items-center gap-4 transform transition-all duration-500 group-hover:scale-105">
            <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl hover:shadow-purple-400/50 transition-all duration-500 hover:scale-105 border-4 border-purple-400/30 hover:border-purple-400/60">
              <img src='https://res.cloudinary.com/duyzpk8ym/image/upload/v1762456273/dean_ypprav.jpg' alt="Dean" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800" style={{display: 'none'}}>
                <span className="text-gray-400 text-lg text-center px-4">Dean Photo</span>
              </div>
            </div>
            <div className="text-center space-y-2 mt-2">
              <p className="text-white font-black text-lg sm:text-xl md:text-2xl drop-shadow-lg">Mr. Himanshu Nautiyal</p>
              <p className="text-purple-300 text-sm sm:text-base font-display font-semibold uppercase tracking-widest">Dean</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 text-center lg:text-right drop-shadow-2xl">Message from the Dean</h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto lg:ml-auto lg:mr-0 shadow-lg shadow-purple-500/50"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 right-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg md:text-xl relative z-10 font-body font-light drop-shadow-lg">
                <span className="text-3xl text-purple-400 float-left mr-2 leading-none font-display">"</span>
                With immense pride and joy, I extend my warm greetings to everyone participating in <span className="font-display font-semibold text-white">Cieszyc</span>, our much-awaited cultural festival. This festival embodies the creativity and enthusiasm that define our student community. It is heartening to witness the collaborative efforts of students, faculty, and organizers in bringing together such a vibrant celebration. I urge all participants to embrace this opportunity to express themselves, explore their talents, and strengthen bonds of friendship and unity. May this edition of Cieszyc shine with energy, inspiration, and unforgettable experiences for all!
                <span className="text-3xl text-purple-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Coordinator Section - Photo Left, Text Right */}
        <div data-aos="fade-right" className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 group">
          <div className="flex flex-col items-center gap-4 transform transition-all duration-500 group-hover:scale-105">
            <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl hover:shadow-purple-400/50 transition-all duration-500 hover:scale-105 border-4 border-purple-400/30 hover:border-purple-400/60">
              <img src="https://res.cloudinary.com/duyzpk8ym/image/upload/v1762537342/ramnatripathi_tcrkoa.png" alt="Faculty Coordinator" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800" style={{display: 'none'}}>
                <span className="text-gray-400 text-lg text-center px-4">Faculty Photo</span>
              </div>
            </div>
            <div className="text-center space-y-2 mt-2">
              <p className="text-white font-black text-lg sm:text-xl md:text-2xl drop-shadow-lg">Dr. Ramna Tripathi</p>
              <p className="text-purple-300 text-sm sm:text-base font-display font-semibold uppercase tracking-widest">Faculty Coordinator</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 text-center lg:text-left drop-shadow-2xl">Faculty Coordinator's Message</h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto lg:mx-0 shadow-lg shadow-purple-500/50"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg md:text-xl relative z-10 font-body font-light drop-shadow-lg">
                <span className="text-3xl text-purple-400 float-left mr-2 leading-none font-display">"</span>
                It gives me great pleasure to be part of <span className="font-display font-semibold text-white">Cieszyc</span>, our institution's annual celebration of culture, art, and innovation. This festival reflects the dedication, imagination, and teamwork of our students, supported by the guidance of our entire faculty and management. Each event, performance, and activity highlights the enthusiasm that makes our campus life so special. I encourage everyone to engage wholeheartedly, showcase their unique abilities, and foster a spirit of collaboration and mutual respect. Let's make Cieszyc a festival that truly echoes our collective passion and creativity!
                <span className="text-3xl text-purple-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>

        {/* About Cieszyc Section */}
        <div data-aos="fade-up" className="mt-24 mb-20 relative w-full">
          {/* Header */}
          <div className="relative text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-6 drop-shadow-2xl">
              About Cieszyc
            </h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full mx-auto shadow-lg shadow-purple-500/50 mb-4"></div>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-body font-light drop-shadow-lg">
              Our Cultural Festival
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {/* First Paragraph */}
            <div data-aos="fade-up" data-aos-delay="100" className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg md:text-xl relative z-10 font-body font-light drop-shadow-lg">
                <span className="text-3xl text-purple-400 float-left mr-2 leading-none font-display">"</span>
                Welcome to <span className="font-display font-semibold text-white">Cieszyc</span>, where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Cieszyc, our annual college cultural festival, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.
                <span className="text-3xl text-purple-400 ml-2">"</span>
              </p>
            </div>

            {/* Second Paragraph */}
            <div data-aos="fade-up" data-aos-delay="200" className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-pink-400/40 transition-all duration-500 hover:shadow-pink-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 right-6 w-16 h-16 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg md:text-xl relative z-10 font-body font-light drop-shadow-lg">
                <span className="text-3xl text-pink-400 float-left mr-2 leading-none font-display">"</span>
                <span className="font-display font-semibold text-white">Cieszyc's</span> events are a high-spirited mix of dance, music, discussions, and global flavors. From thrilling competitions to artistic exhibitions, each moment is a burst of creativity and cultural celebration. Join us for a dynamic experience that transcends boundaries!
                <span className="text-3xl text-pink-400 ml-2">"</span>
              </p>
            </div>

            {/* Third Paragraph */}
            <div data-aos="fade-up" data-aos-delay="300" className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg md:text-xl relative z-10 font-body font-light drop-shadow-lg">
                <span className="text-3xl text-purple-400 float-left mr-2 leading-none font-display">"</span>
                <span className="font-display font-semibold text-white">Cieszyc</span> is not just a festival; it is a symbol of unity amidst diversity. It serves as a powerful platform for cultural exchange, fostering understanding and connections that transcend boundaries. Through vibrant performances and engaging discussions, Cieszyc promotes inclusivity, friendship, and the celebration of our shared humanity. It is not just an event; it is a vital expression of our collective identity and values.
                <span className="text-3xl text-purple-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Schedule;
