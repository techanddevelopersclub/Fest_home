import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockSponsors } from './mockSponsor';
import { Award, ExternalLink, Quote, TrendingUp, Users, Target, Sparkles } from 'lucide-react';
import './SponsorPage.css';

const SponsorsPage = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const getTierColor = (tier) => {
    switch(tier) {
      case 'Platinum':
        return '#E5E7EB';
      case 'Gold':
        return '#FCD34D';
      case 'Silver':
        return '#D1D5DB';
      default:
        return '#60A5FA';
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Animated Background */}
        <div className="background-container">
          <div className="stars-layer stars-layer-1"></div>
          <div className="stars-layer stars-layer-2"></div>
          <div className="stars-layer stars-layer-3"></div>
          <div className="gradient-overlay"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Award className="text-yellow-400 animate-pulse" size={48} />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">
              Our Sponsors
            </h1>
            <Award className="text-yellow-400 animate-pulse" size={48} />
          </div>
          <div className="h-1.5 w-48 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full mx-auto shadow-lg shadow-orange-400/50 mb-6"></div>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium drop-shadow-lg max-w-4xl mx-auto mb-8">
            We are grateful to our esteemed partners who believe in our vision and support our journey towards excellence in education and innovation.
          </p>
        </div>

        {/* Investment Opportunity Section */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="text-yellow-400" size={40} />
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-2xl">
                  Why Invest in Cieszyc Festival?
                </h2>
                <Sparkles className="text-yellow-400" size={40} />
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-yellow-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-yellow-400" size={32} />
                  <h3 className="text-2xl font-bold text-white">Massive Reach</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  Connect with thousands of students, faculty, and industry professionals. Your brand will be seen by a highly engaged audience passionate about innovation and technology.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-yellow-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-yellow-400" size={32} />
                  <h3 className="text-2xl font-bold text-white">Targeted Audience</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  Reach the next generation of engineers, innovators, and leaders. Our festival attracts top talent from premier institutions, creating the perfect platform for talent acquisition and brand building.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-yellow-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-yellow-400" size={32} />
                  <h3 className="text-2xl font-bold text-white">Prestigious Association</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  Align your brand with excellence in education and innovation. Join industry leaders who recognize the value of investing in the future of technology and engineering.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Your Investment Delivers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <p className="text-lg">Premium brand visibility across all festival platforms and marketing materials</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <p className="text-lg">Direct engagement opportunities with top students and industry professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <p className="text-lg">Exclusive access to networking events and talent recruitment opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <p className="text-lg">Customized sponsorship packages tailored to your marketing objectives</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <p className="text-lg">Social media amplification and digital marketing support</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <p className="text-lg">Long-term partnership opportunities and community impact recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="sponsors-grid">
          {mockSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="sponsor-card"
              onMouseEnter={() => setHoveredId(sponsor.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Tier Badge */}
              <div 
                className="tier-badge"
                style={{ backgroundColor: getTierColor(sponsor.tier) }}
              >
                {sponsor.tier}
              </div>

              {/* Card Glow */}
              <div className="card-glow"></div>

              {/* Logo */}
              <div className="logo-container">
                <div className="logo-wrapper">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                  <div className="logo-overlay"></div>
                </div>
              </div>

              {/* Company Name */}
              <h3 className="company-name">
                {sponsor.name}
              </h3>

              {/* Description */}
              <p className="company-description">
                {sponsor.description}
              </p>

              {/* Quote Section (Visible on Hover) */}
              <div className={`quote-section ${hoveredId === sponsor.id ? 'visible' : ''}`}>
                <div className="quote-content">
                  <Quote size={24} className="quote-icon" />
                  <p className="quote-text">
                    "{sponsor.quote}"
                  </p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    Visit Website
                    <ExternalLink size={16} className="link-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">
              Partner With Us Today
            </h2>
            <p className="cta-text mb-8">
              Take the first step towards building a powerful connection with the next generation of innovators. 
              Discover how your sponsorship can create lasting impact while achieving your business objectives.
            </p>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to enhance brand visibility, recruit top talent, or demonstrate your commitment to education and innovation, 
              we have a sponsorship package designed to meet your goals. Join industry leaders who are shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/brouchre"
                className="cta-button inline-flex items-center justify-center gap-2"
              >
                Read Our Brouchre
                <ExternalLink size={20} />
              </Link>
              <Link 
                to="/contact-us"
                className="cta-button inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Contact Us
                <ExternalLink size={20}  />
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-6">
              Ready to make an impact? Download our comprehensive brochure or reach out to our team for a personalized consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;