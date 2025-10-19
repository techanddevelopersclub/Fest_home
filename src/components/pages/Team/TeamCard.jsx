import React, { useState } from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const TeamCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="team-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`team-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="team-card-front">
          <div className="card-image-wrapper">
            <img
              src={member.image}
              alt={member.name}
              className="card-image"
            />
            <div className="card-overlay"></div>
          </div>
          <div className="card-info">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        </div>

        {/* Back Side - Social Links */}
        <div className="team-card-back">
          <div className="social-content">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <Linkedin size={28} />
                <span>LinkedIn</span>
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link twitter"
              >
                <Twitter size={28} />
                <span>Twitter</span>
              </a>
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <Instagram size={28} />
                <span>Instagram</span>
              </a>
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <Github size={28} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
