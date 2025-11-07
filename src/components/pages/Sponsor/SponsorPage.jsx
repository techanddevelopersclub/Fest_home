import React, { useState } from 'react';
import { mockSponsors } from './mockSponsor';
import { Award, ExternalLink, Quote } from 'lucide-react';
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
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium drop-shadow-lg max-w-4xl mx-auto">
            We are grateful to our esteemed partners who believe in our vision and support our journey towards excellence in education and innovation.
          </p>
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
              Become a Sponsor
            </h2>
            <p className="cta-text">
              Join our community of forward-thinking partners and help shape the future of education and innovation.
            </p>
            <button className="cta-button">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;