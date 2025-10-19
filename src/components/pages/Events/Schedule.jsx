import directorImage from "../../../assets/video/director.jpg";
import deanImage from "../../../assets/video/dean.jpg";
const Schedule = () => {

  return (
      <div className="flex flex-col px-4 md:px-8 gap-20 mt-16 max-w-screen-2xl mx-auto">
        {/* Director Section - Photo Left, Text Right */}
        <div data-aos="fade-right" className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 group">
          <div className="flex flex-col items-center gap-4 transform transition-all duration-500 group-hover:scale-105">
            <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-gradient-to-br from-rose-500/20 to-purple-600/20 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl hover:shadow-rose-400/50 transition-all duration-500 hover:scale-105 border-4 border-rose-400/30 hover:border-rose-400/60">
              <img src={directorImage} alt="Director" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800" style={{display: 'none'}}>
                <span className="text-gray-400 text-lg text-center px-4">Director Photo</span>
              </div>
            </div>
            <div className="text-center space-y-2 mt-2">
              <p className="text-white font-black text-lg sm:text-xl md:text-2xl drop-shadow-lg">Dr. Sharad K. Pradhan</p>
              <p className="text-rose-300 text-sm sm:text-base font-semibold uppercase tracking-widest">Director</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-center lg:text-left drop-shadow-2xl">Director's Message</h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full mx-auto lg:mx-0 shadow-lg shadow-rose-400/50"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-rose-400/40 transition-all duration-500 hover:shadow-rose-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-rose-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white leading-relaxed text-lg sm:text-xl md:text-2xl relative z-10 font-medium drop-shadow-lg">
                <span className="text-4xl text-rose-400 float-left mr-3 leading-none font-serif">"</span>
                With great excitement, I welcome you all to <span className="font-bold">Cieszyc</span>, our vibrant annual cultural festival.
                Organized by our passionate students and dedicated management, Cieszyc celebrates creativity, unity, and talent.
                Through thrilling competitions, captivating performances, and lively showcases, we come together to create unforgettable memories.
                I encourage everyone to participate wholeheartedly, celebrate each moment, and contribute to the spirit of joy and togetherness.
                Let's make this edition of Cieszyc a grand success!
                <span className="text-4xl text-rose-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Dean Section - Photo Right, Text Left */}
        <div data-aos="fade-left" className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10 lg:gap-12 group">
          <div className="flex flex-col items-center gap-4 transform transition-all duration-500 group-hover:scale-105">
            <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl hover:shadow-blue-400/50 transition-all duration-500 hover:scale-105 border-4 border-blue-400/30 hover:border-blue-400/60">
              <img src={deanImage} alt="Dean" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800" style={{display: 'none'}}>
                <span className="text-gray-400 text-lg text-center px-4">Dean Photo</span>
              </div>
            </div>
            <div className="text-center space-y-2 mt-2">
              <p className="text-white font-black text-lg sm:text-xl md:text-2xl drop-shadow-lg">Mr. Himanshu Nautiyal</p>
              <p className="text-blue-300 text-sm sm:text-base font-semibold uppercase tracking-widest">Dean</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-center lg:text-right drop-shadow-2xl">Message from the Dean</h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto lg:ml-auto lg:mr-0 shadow-lg shadow-blue-400/50"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-blue-400/40 transition-all duration-500 hover:shadow-blue-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white leading-relaxed text-lg sm:text-xl md:text-2xl relative z-10 font-medium drop-shadow-lg">
                <span className="text-4xl text-blue-400 float-left mr-3 leading-none font-serif">"</span>
                With immense pride and joy, I extend my warm greetings to everyone participating in <span className="font-bold">Cieszyc</span>, our much-awaited cultural festival. This festival embodies the creativity and enthusiasm that define our student community. It is heartening to witness the collaborative efforts of students, faculty, and organizers in bringing together such a vibrant celebration. I urge all participants to embrace this opportunity to express themselves, explore their talents, and strengthen bonds of friendship and unity. May this edition of Cieszyc shine with energy, inspiration, and unforgettable experiences for all!
                <span className="text-4xl text-blue-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Coordinator Section - Photo Left, Text Right */}
        <div data-aos="fade-right" className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 group">
          <div className="flex flex-col items-center gap-4 transform transition-all duration-500 group-hover:scale-105">
            <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl hover:shadow-purple-400/50 transition-all duration-500 hover:scale-105 border-4 border-purple-400/30 hover:border-purple-400/60">
              <img src="/faculty.jpg" alt="Faculty Coordinator" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800" style={{display: 'none'}}>
                <span className="text-gray-400 text-lg text-center px-4">Faculty Photo</span>
              </div>
            </div>
            <div className="text-center space-y-2 mt-2">
              <p className="text-white font-black text-lg sm:text-xl md:text-2xl drop-shadow-lg">Dr. Ramna Tripathi</p>
              <p className="text-purple-300 text-sm sm:text-base font-semibold uppercase tracking-widest">Faculty Coordinator</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative mb-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-center lg:text-left drop-shadow-2xl">Faculty Coordinator's Message</h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto lg:mx-0 shadow-lg shadow-purple-400/50"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white leading-relaxed text-lg sm:text-xl md:text-2xl relative z-10 font-medium drop-shadow-lg">
                <span className="text-4xl text-purple-400 float-left mr-3 leading-none font-serif">"</span>
                It gives me great pleasure to be part of <span className="font-bold">Cieszyc</span>, our institution's annual celebration of culture, art, and innovation. This festival reflects the dedication, imagination, and teamwork of our students, supported by the guidance of our entire faculty and management. Each event, performance, and activity highlights the enthusiasm that makes our campus life so special. I encourage everyone to engage wholeheartedly, showcase their unique abilities, and foster a spirit of collaboration and mutual respect. Let's make Cieszyc a festival that truly echoes our collective passion and creativity!
                <span className="text-4xl text-purple-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>

        {/* About Cieszyc Section */}
        <div data-aos="fade-up" className="mt-24 mb-20 relative w-full">
          {/* Header */}
          <div className="relative text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
              About Cieszyc
            </h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-rose-400 via-purple-500 to-blue-500 rounded-full mx-auto shadow-lg shadow-purple-400/50 mb-4"></div>
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-medium drop-shadow-lg">
              Our Cultural Festival
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {/* First Paragraph */}
            <div data-aos="fade-up" data-aos-delay="100" className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-rose-400/40 transition-all duration-500 hover:shadow-rose-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-rose-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white leading-relaxed text-lg sm:text-xl md:text-2xl relative z-10 font-medium drop-shadow-lg">
                <span className="text-4xl text-rose-400 float-left mr-3 leading-none font-serif">"</span>
                Welcome to <span className="font-bold">Cieszyc</span>, where the vibrant tapestry of cultures converges in a celebration of diversity and unity! Cieszyc, our annual college cultural festival, is a kaleidoscope of creativity, talent, and traditions that come together to create an unforgettable experience.
                <span className="text-4xl text-rose-400 ml-2">"</span>
              </p>
            </div>

            {/* Second Paragraph */}
            <div data-aos="fade-up" data-aos-delay="200" className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-blue-400/40 transition-all duration-500 hover:shadow-blue-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white leading-relaxed text-lg sm:text-xl md:text-2xl relative z-10 font-medium drop-shadow-lg">
                <span className="text-4xl text-blue-400 float-left mr-3 leading-none font-serif">"</span>
                <span className="font-bold">Cieszyc's</span> events are a high-spirited mix of dance, music, discussions, and global flavors. From thrilling competitions to artistic exhibitions, each moment is a burst of creativity and cultural celebration. Join us for a dynamic experience that transcends boundaries!
                <span className="text-4xl text-blue-400 ml-2">"</span>
              </p>
            </div>

            {/* Third Paragraph */}
            <div data-aos="fade-up" data-aos-delay="300" className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-purple-400/30 hover:shadow-2xl hover:scale-[1.02]">
              <div className="absolute top-6 left-6 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
              <p className="text-white leading-relaxed text-lg sm:text-xl md:text-2xl relative z-10 font-medium drop-shadow-lg">
                <span className="text-4xl text-purple-400 float-left mr-3 leading-none font-serif">"</span>
                <span className="font-bold">Cieszyc</span> is not just a festival; it is a symbol of unity amidst diversity. It serves as a powerful platform for cultural exchange, fostering understanding and connections that transcend boundaries. Through vibrant performances and engaging discussions, Cieszyc promotes inclusivity, friendship, and the celebration of our shared humanity. It is not just an event; it is a vital expression of our collective identity and values.
                <span className="text-4xl text-purple-400 ml-2">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Schedule;
