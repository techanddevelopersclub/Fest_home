import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <MessageSquare className="text-purple-400 animate-pulse" size={48} />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white drop-shadow-2xl">
              Contact Us
            </h1>
            <MessageSquare className="text-pink-400 animate-pulse" size={48} />
          </div>
          <div className="h-1.5 w-48 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full mx-auto shadow-lg shadow-purple-500/50 mb-6"></div>
          <p className="text-white/90 text-xl sm:text-2xl md:text-3xl font-body font-light drop-shadow-lg max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Get in Touch
              </h2>
              <p className="text-white/80 text-lg leading-relaxed font-body font-light">
                Have questions about Cieszyc Festival? Want to connect with our team? 
                Reach out to the right person below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* General Coordinator */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-2">Coordinator</h3>
                    <p className="text-white/80 font-body font-light">For general queries or assistance.</p>
                    <a 
                      href="tel:+916396834004"
                      className="text-purple-300 hover:text-pink-300 transition-colors block mt-1"
                    >
                      +91 6396834004
                      Akshat Kestwal
                    </a>
                  </div>
                </div>
              </div>

              {/* Technical Issue */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-2">Technical Issue</h3>
                    <p className="text-white/80">Facing any problem accessing or using the site?</p>
                    <a 
                      href="tel:+919548179856"
                      className="text-purple-300 hover:text-pink-300 transition-colors block mt-1"
                    >
                      +919548179856
                      Paras Sundriyal
                    </a>
                  </div>
                </div>
              </div>

              {/* Tech Coordinator */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-2">Tech Coordinator</h3>
                    <p className="text-white/80">For website or technical collaboration.</p>
                    <a 
                      href="tel:+919528187139"
                      className="text-purple-300 hover:text-pink-300 transition-colors block mt-1"
                    >
                      +91 9528187139
                      Vaibhav Pokhriyal
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-2">Email Us</h3>
                    <a 
                      href="mailto:cieszyc@thdcihet.ac.in" 
                      className="text-purple-300 hover:text-pink-300 transition-colors break-all"
                    >
                      cieszyc@thdcihet.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-2">Visit Us</h3>
                    <p className="text-white/80 font-body font-light">
                      THDC Institute of Hydropower Engineering and Technology<br />
                      B. Puram, Tehri, Uttarakhand - 249001
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-2">Office Hours</h3>
                    <p className="text-white/80 font-body font-light">
                      Monday - Saturday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Removed Form Section */}
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
            Follow Us
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/cieszyc_ihet/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-transparent"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
