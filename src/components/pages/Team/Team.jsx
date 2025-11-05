import React, { useState } from 'react';
import { Users, Linkedin, Twitter, Instagram, Github, Mail } from 'lucide-react';

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState('all');

  // Team data structure
  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Mr. Himanshu Nautiyal",
        role: "Festival Dean",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Visionary academic leader steering Cieszyc with strategic direction, mentorship, and a culture of collaboration across teams.",
        social: {
          linkedin: "https://linkedin.com/in/himanshu-nautiyal",
          twitter: "",
          instagram: "https://instagram.com/himanshu_thdc",
          github: "",
          email: "dean@thdc.edu"
        }
      },
      {
        id: 2,
        name: "Dr.Ramna Tripathi & Mr. Mandeep Guleria",
        role: "Festival Coordinator",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        bio: "Experienced festival coordinators enabling end‑to‑end planning, streamlined operations, and on‑ground excellence across all events.",
        social: {
          linkedin: "https://linkedin.com/in/coordinator",
          twitter: "",
          instagram: "https://instagram.com/fest_coordinator",
          github: "",
          email: "coordinator@thdc.edu"
        }
      },
      {
        id: 3,
        name: "Mr. Sameer Verma & Mr. Mahesh Aghwaria",
        role: "Festival Co-Coordinator",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        bio: "Tech‑forward co‑coordinators driving platform reliability, automation, and scalable tools for the festival experience.",
        social: {
          linkedin: "https://linkedin.com/in/suraj-singh",
          twitter: "",
          instagram: "https://instagram.com/suraj.tech",
          github: "https://github.com/surajsingh",
          email: "suraj@thdc.edu"
        }
      },
      {
        id: 4,
        name: "Akshat Kestwal",
        role: "StudentCoordinator",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
        bio: "Design‑first coordinator focused on intuitive journeys, inclusive visuals, and consistent brand storytelling.",
        social: {
          linkedin: "https://linkedin.com/in/designer",
          twitter: "",
          instagram: "https://instagram.com/design_thdc",
          github: "",
          email: "designer@thdc.edu"
        }
      },
      {
        id: 5,
        name: "Mr. Rajwardhan Arya",
        role: "Event Coordinator",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        bio: "Event coordinator specializing in content narratives, creator partnerships, and audience engagement that converts.",
        social: {
          linkedin: "https://linkedin.com/in/socialmedia",
          twitter: "https://twitter.com/thdc_social",
          instagram: "https://instagram.com/thdc.social",
          github: "",
          email: "social@thdc.edu"
        }
      },
      {
        id: 5,
        name: "Shreya Kukreti",
        role: "Event Student Coordinator",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        bio: "Event coordinator specializing in content narratives, creator partnerships, and audience engagement that converts.",
        social: {
          linkedin: "https://linkedin.com/in/socialmedia",
          twitter: "https://twitter.com/thdc_social",
          instagram: "https://instagram.com/thdc.social",
          github: "",
          email: "social@thdc.edu"
        }
      }
    ],
    technical: [
      {
        id: 6,
        name: "Mr. Pallav Aswal",
        role: "Technical Coordinator",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        bio: "Primary technical POC ensuring smooth infrastructure, timely support, and rapid incident response.",
        social: {
          linkedin: "https://linkedin.com/in/webdev",
          twitter: "",
          instagram: "https://instagram.com/webdev_thdc",
          github: "https://github.com/webdev",
          email: "webdev@thdc.edu"
        }
      },
      {
        id: 7,
        name: "Vaibhav Pokhriyal",
        role: "Technical Student Coordinator",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        bio: "Technical coordinator leading outreach tooling, analytics pipelines, and performance monitoring for campaigns.",
        social: {
          linkedin: "https://linkedin.com/in/marketing-head",
          twitter: "https://twitter.com/marketing_thdc",
          instagram: "https://instagram.com/marketing.thdc",
          github: "",
          email: "marketing@thdc.edu"
        }
      }
    ],
    socialmedia: [
      {
        id: 8,
        name: "Mr. Neeraj Bisht",
        role: "Social Media Student Coordinator",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        bio: "Social media coordinator crafting data‑led campaigns, timely storytelling, and community amplification.",
        social: {
          linkedin: "https://linkedin.com/in/graphicdesigner",
          twitter: "",
          instagram: "https://instagram.com/design.thdc",
          github: "",
          email: "design@thdc.edu"
        }
      },
      {
        id: 9,
        name: "Paras Sundriyal",
        role: "Social Media Coordinator",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        bio: "Social media coordinator curating platform‑native content, trends, and interactive audience formats.",
        social: {
          linkedin: "https://linkedin.com/in/graphicdesigner",
          twitter: "",
          instagram: "https://instagram.com/design.thdc",
          github: "",
          email: "design@thdc.edu"
        }
      },],
      marketing: [
      {
        id: 10,
        name: "Mr. Satendra Pathak",
        role: "Marketing Student Coordinator",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        bio: "Marketing coordinator focusing on partnerships, on‑ground visibility, and measurable growth.",
        social: {
          linkedin: "https://linkedin.com/in/graphicdesigner",
          twitter: "",
          instagram: "https://instagram.com/design.thdc",
          github: "",
          email: "design@thdc.edu"
        }
      },
      {
        id: 11,
        name: "Shivain Sharma & Ayushree Vyas",
        role: "Marketing Coordinators",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        bio: "Marketing coordinators orchestrating multi‑channel promotions, design alignment, and sponsor communications.",
        social: {
          linkedin: "https://linkedin.com/in/graphicdesigner",
          twitter: "",
          instagram: "https://instagram.com/design.thdc",
          github: "",
          email: "design@thdc.edu"
        }
      }
    ],
    techteam: [
      {
        id: 12,
        name: "",
        role: "Social Media Coordinator",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        bio: "Bringing ideas to life through design",
        social: {
          linkedin: "https://linkedin.com/in/graphicdesigner",
          twitter: "",
          instagram: "https://instagram.com/design.thdc",
          github: "",
          email: "design@thdc.edu"
        }
      },
      {
        id: 13,
        name: "",
        role: "Social Media Coordinator",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        bio: "Bringing ideas to life through design",
        social: {
          linkedin: "https://linkedin.com/in/graphicdesigner",
          twitter: "",
          instagram: "https://instagram.com/design.thdc",
          github: "",
          email: "design@thdc.edu"
        }
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'technical', name: 'Technical' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'socialmedia', name: 'Social Media' },
    { id: 'techteam', name: 'Tech Team' }
  ];

  const getFilteredMembers = () => {
    if (selectedTeam === 'all') {
      return [
        ...teamMembers.leadership,
        ...teamMembers.technical,
        ...teamMembers.marketing,
        ...(teamMembers.socialmedia || []),
        ...(teamMembers.techteam || [])
      ];
    }
    if (selectedTeam === 'team') {
      return [
        ...(teamMembers.socialmedia || []),
        ...(teamMembers.techteam || [])
      ];
    }
    return teamMembers[selectedTeam] || [];
  };

  const filteredMembers = getFilteredMembers();

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Users className="text-purple-400" size={48} />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">
              Our Team
            </h1>
            <Users className="text-purple-400" size={48} />
          </div>
          <div className="h-1.5 w-48 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 rounded-full mx-auto shadow-lg shadow-purple-400/50 mb-6"></div>
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-lg">
            Meet the brilliant minds behind Cieszyc
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedTeam(category.id)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                selectedTeam === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50 scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 border-2 border-white/10 hover:border-purple-400/40"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Social Media Icons - Vertical Stack on Left Side */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/95 hover:bg-blue-600 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group/icon"
                      title="LinkedIn"
                    >
                      <Linkedin size={22} className="text-blue-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                  
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/95 hover:bg-pink-600 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group/icon"
                      title="Instagram"
                    >
                      <Instagram size={22} className="text-pink-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                  
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-12 h-12 flex items-center justify-center bg-white/95 hover:bg-rose-600 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group/icon"
                      title="Send Message"
                    >
                      <Mail size={22} className="text-rose-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                  
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/95 hover:bg-sky-600 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group/icon"
                      title="Twitter"
                    >
                      <Twitter size={22} className="text-sky-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                  
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/95 hover:bg-purple-600 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group/icon"
                      title="GitHub"
                    >
                      <Github size={22} className="text-purple-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-300 text-sm font-semibold uppercase tracking-wider mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex gap-3 justify-center pt-4 border-t border-white/10">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="text-white/60 hover:text-blue-400 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-sky-400 transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-pink-400 transition-colors">
                      <Instagram size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-purple-400 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`}
                       className="text-white/60 hover:text-rose-400 transition-colors">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <Users size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-400 text-xl">No team members found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
