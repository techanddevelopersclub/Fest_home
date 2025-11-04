import React, { useState } from 'react';
import { Award, ExternalLink, Quote } from 'lucide-react';
import './SponsorPage.css';

const SponsorsPage = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const mockSponsors = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop",
      description: "Leading provider of enterprise software solutions",
      quote: "Partnering with this institution has been instrumental in nurturing the next generation of tech innovators.",
      tier: "Platinum",
      website: "https://techcorp.example.com"
    },
    {
      id: 2,
      name: "InnovateLabs",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop",
      description: "Innovation-driven research and development company",
      quote: "The talent and creativity we've witnessed here inspires us to push boundaries in technology.",
      tier: "Gold",
      website: "https://innovatelabs.example.com"
    },
    {
      id: 3,
      name: "Digital Dynamics",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop",
      description: "Digital transformation and consulting services",
      quote: "Investing in education is investing in the future. Proud to support such an esteemed institution.",
      tier: "Gold",
      website: "https://digitaldynamics.example.com"
    },
    {
      id: 4,
      name: "CloudNine Technologies",
      logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop",
      description: "Cloud infrastructure and security solutions",
      quote: "Together, we're building a smarter, more connected future through collaboration and innovation.",
      tier: "Silver",
      website: "https://cloudnine.example.com"
    },
    {
      id: 5,
      name: "FutureTech Industries",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop",
      description: "AI and machine learning solutions provider",
      quote: "The exceptional standards of education here align perfectly with our vision for technological advancement.",
      tier: "Platinum",
      website: "https://futuretech.example.com"
    },
    {
      id: 6,
      name: "Quantum Systems",
      logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=400&h=400&fit=crop",
      description: "Next-generation computing solutions",
      quote: "Supporting education means supporting innovation. We're honored to be part of this journey.",
      tier: "Silver",
      website: "https://quantumsys.example.com"
    }
  ];

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
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Award className="text-yellow-400 animate-pulse" size={48} />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white drop-shadow-2xl">
              Our Sponsors
            </h1>
            <Award className="text-yellow-400 animate-pulse" size={48} />
          </div>
          <div className="h-1.5 w-48 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full mx-auto shadow-lg shadow-orange-400/50 mb-6"></div>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-body font-light drop-shadow-lg max-w-4xl mx-auto">
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
            <button className="cta-button font-display">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
