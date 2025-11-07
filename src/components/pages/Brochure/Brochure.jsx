import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ArrowLeft, CheckCircle, Award, Users, Target, TrendingUp } from 'lucide-react';

const Brochure = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FileText className="text-yellow-400 animate-pulse" size={48} />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-2xl">
              Sponsorship Brochure
            </h1>
            <FileText className="text-yellow-400 animate-pulse" size={48} />
          </div>
          <div className="h-1.5 w-48 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full mx-auto shadow-lg shadow-orange-400/50 mb-6"></div>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium drop-shadow-lg max-w-4xl mx-auto">
            Discover how partnering with Cieszyc Festival can elevate your brand and connect you with the future of innovation.
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/sponsors"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Sponsors</span>
          </Link>
        </div>

        {/* Brochure Content */}
        <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <Award className="text-yellow-400" size={32} />
                About Cieszyc Festival
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Cieszyc Festival is a premier technical and cultural event that brings together thousands of students, 
                faculty members, and industry professionals. Our festival serves as a platform for innovation, 
                creativity, and excellence in engineering and technology education.
              </p>
            </section>

            {/* Why Sponsor */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="text-yellow-400" size={32} />
                Why Sponsor Cieszyc Festival?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Users className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Massive Audience Reach</h3>
                      <p className="text-white/80">
                        Connect with thousands of engaged students, faculty, and industry professionals from premier institutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Target className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Targeted Marketing</h3>
                      <p className="text-white/80">
                        Reach the exact demographic you need - future engineers, innovators, and technology leaders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Brand Association</h3>
                      <p className="text-white/80">
                        Align your brand with excellence in education and innovation in the technology sector.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Talent Acquisition</h3>
                      <p className="text-white/80">
                        Access top-tier students for internships, placements, and recruitment opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sponsorship Tiers */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Sponsorship Tiers</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-300/20 to-gray-400/20 backdrop-blur-sm border-2 border-gray-300/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white">Platinum Tier</h3>
                  </div>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Premium logo placement on all marketing materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Exclusive speaking opportunities at main events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>VIP access to all festival events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Customized sponsorship package</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm border-2 border-yellow-400/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white">Gold Tier</h3>
                  </div>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Prominent logo placement on festival materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Booth space at the festival venue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Social media promotion and mentions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Access to networking events</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gray-200/20 to-gray-300/20 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white">Silver Tier</h3>
                  </div>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Logo placement on select marketing materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Social media acknowledgment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span>Festival program listing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Get Started</h2>
              <p className="text-white/90 text-lg mb-6">
                Ready to become a sponsor? Contact our team to discuss customized sponsorship packages 
                that align with your marketing objectives and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/sponsors"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg border border-white/20 transition-all duration-300"
                >
                  View Current Sponsors
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <p className="text-white/70 text-sm mb-4">
            For a detailed PDF version of this brochure, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brochure;

