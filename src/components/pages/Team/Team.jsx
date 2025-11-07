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
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762456273/dean_ypprav.jpg",
        // bio: "Visionary academic leader steering Cieszyc with strategic direction, mentorship, and a culture of collaboration across teams.",
        // social: {
        //   linkedin: "",
        //   twitter: "",
        //   instagram: "",
        //   github: "",
        //   email: ""
        // }
      },
      {
        id: 2,
        name: "Dr. Ramna Tripathi",
        role: "Festival Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762537342/ramnatripathi_tcrkoa.png",
        // bio: "",
      },
      {
        id: 3,
        name: "Mr. Mandeep Guleria",
        role: "Festival Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762537339/TPO_isylax.png",
        // bio: "",
      },
      {
        id: 15,
        name: "Mr. Sameer Verma",
        role: "Festival Co-Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762537367/1757794446200_1_b9nhjk.png",
        // bio: "",
      },
      {
        id: 16,
        name: "Mr. Mahesh Aghwaria",
        role: "Festival Co-Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762537381/1670867357387_j66v1e.png",
        // bio: "",
      },
      {
        id: 4,
        name: "Akshat Kestwal",
        role: "Festival Student Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762534535/WhatsApp_Image_2025-11-07_at_22.20.39_2dbde634_wpdppu.jpg",
        // bio: "Design‑first coordinator focused on intuitive journeys, inclusive visuals, and consistent brand storytelling.",
        social: {
          linkedin: "https://www.linkedin.com/in/akshat-kestwal-4798a6259/",
          // twitter: "",
          instagram: "https://www.instagram.com/akshat_kestwal4/",
          email: "akshatkestwal@gmail.com"
        }
      },
      {
        id: 5,
        name: "Mr. Rajwardhan Arya",
        role: "Event Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762537494/WhatsApp_Image_2025-11-07_at_22.01.08_pnoqfc.png",
        // bio: "Event coordinator specializing in content narratives, creator partnerships, and audience engagement that converts.",
        // social: {
        //   linkedin: "https://linkedin.com/in/socialmedia",
        //   twitter: "https://twitter.com/thdc_social",
        //   instagram: "https://instagram.com/thdc.social",
        //   github: "",
        //   email: "social@thdc.edu"
        // }
      },
      {
        id: 6,
        name: "Shreya Kukreti",
        role: "Event Student Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762379150/20250908_132007_-_shreya_kukreti_uuufbg.jpg",
        // bio: "Event coordinator specializing in content narratives, creator partnerships, and audience engagement that converts.",
        social: {
          // linkedin: "https://linkedin.com/in/socialmedia",
          // twitter: "https://twitter.com/thdc_social",
          instagram: "https://www.instagram.com/_shee_yaah?igsh=MXRpeGhyaDBvcjA1Nw==",
          // github: "",
          email: "sskle22ce43@thdcihet.ac.in"
        }
      }
    ],
    technical: [
      {
        id: 7,
        name: "Mr. Pallav Aswal",
        role: "Technical Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762539796/WhatsApp_Image_2025-11-07_at_23.52.22_jgip7l.jpg",
        // bio: "Primary technical POC ensuring smooth infrastructure, timely support, and rapid incident response.",
        // social: {
        //   linkedin: "https://linkedin.com/in/webdev",
        //   twitter: "",
        //   instagram: "https://instagram.com/webdev_thdc",
        //   github: "https://github.com/webdev",
        //   email: "webdev@thdc.edu"
        // }
      },
      {
        id: 8,
        name: "Vaibhav Pokhriyal",
        role: "Technical Student Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762358486/WhatsApp_Image_2025-09-07_at_00.07.56_de79fd97-removebg-preview_nfpxqj.png",
        // bio: "Technical coordinator leading outreach tooling, analytics pipelines, and performance monitoring for campaigns.",
        social: {
          linkedin: "https://www.linkedin.com/in/vaibhav-pokhriyal-237b86259/",
          // twitter: "https://twitter.com/marketing_thdc",
          instagram: "https://www.instagram.com/vaibhav_11_3/",
          github: "https://github.com/VaibhavPo",
          email: "vp22cs55@thdcihet.ac.in"
        }
      }
    ],
    socialmedia: [
      {
        id: 9,
        name: "Mr. Neeraj Bisht",
        role: "Social Media Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762544115/WhatsApp_Image_2025-11-08_at_01.04.22_qiipng.jpg",
        // bio: "Social media coordinator crafting data‑led campaigns, timely storytelling, and community amplification.",
        // social: {
        //   linkedin: "https://linkedin.com/in/graphicdesigner",
        //   twitter: "",
        //   instagram: "https://instagram.com/design.thdc",
        //   github: "",
        //   email: "design@thdc.edu"
        // }
      },
      {
        id: 10,
        name: "Paras Sundriyal",
        role: "Social Media StudentCoordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762379150/IMG-20250510-WA0214_-_Paras_Sundriyal_r2xnxi.jpg",
        // bio: "Social media coordinator curating platform‑native content, trends, and interactive audience formats.",
        social: {
          linkedin: "https://www.linkedin.com/in/paras-sundriyal-b6270218a/",
          // twitter: "",
          instagram: "https://www.instagram.com/okay_paras/",
          // github: "",
          email: "paras.starkmarkup@gmail.com"
        }
      },],
      marketing: [
      {
        id: 11,
        name: "Mr. Satendra Pathak",
        role: "Marketing Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762538137/Gemini_Generated_Image_m8tdl9m8tdl9m8td_o9civ7.png",
        // bio: "Marketing coordinator focusing on partnerships, on‑ground visibility, and measurable growth.",
        // social: {
        //   linkedin: "https://linkedin.com/in/graphicdesigner",
        //   twitter: "",
        //   instagram: "https://instagram.com/design.thdc",
        //   github: "",
        //   email: "design@thdc.edu"
        // }
      },
      {
        id: 12,
        name: "Shivain Sharma",
        role: "Marketing Student Coordinator",
        image: "",
        // bio: "",
      },
      {
        id: 13,
        name: "Ayushree Vyas",
        role: "Marketing Student Coordinator",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762540192/WhatsApp_Image_2025-11-07_at_21.33.13_mlvptg.jpg",
        // bio: "",
        social: {
          linkedin: "https://www.linkedin.com/in/ayushree-vyas?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      
          instagram: "https://www.instagram.com/ayushree_vyas?igsh=N3E3ZXB1dXljcWM%3D&utm_source=qr",
         
          
        }
      }
    ],
    techteam: [
      {
        id: 17,
        name: "Rachit Dwivedi",
        role: "Front End Developer ",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762542967/IMG_20251105_215901_-_Rachit_Dwivedi_nmqgme.jpg",
       
        social: {
          linkedin: "https://www.linkedin.com/in/rachit-dwivedi-818a052b1",      
          instagram: "https://www.instagram.com/rachit_dwivedi_rdx?igsh=ZTBvNWp3enV1eGV0",
          github: "https://github.com/rachit-dwivedi-rdx",
          
        }
      },
      {
        id: 18,
        name: "Suraj Singh",
        role: "Frontend Developer and UI/UX Designer",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762542968/IMG_20250629_111700_164_-_Suraj_Singh_eb3hng.webp",
       
        social: {
          linkedin: "https://www.linkedin.com/in/suraj-singh-39b954298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",      
          instagram: "https://www.instagram.com/singh_suraj_8267?igsh=MXVhaXQ2czBveTUwZA==",
          github: "https://github.com/Suraj8267",
          
        }
      },
      {
        id: 19,
        name: "Mayank Mehta",
        role: "Frontend developer/UIUX Designer",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762542967/IMG-20251105-WA0048_-_Mayank_Mehta_ngu8tq.jpg",
       
        social: {
          linkedin: "https://www.linkedin.com/in/mayank-mehta-915b79386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",      
          instagram: "https://www.instagram.com/mayank_mehtaa_?igsh=aTY4YzZxZ3gxbWd4",
          github: "https://github.com/Mayank-Mehta242",
          
        }
      },
      {
        id: 20,
        name: "Divyanshi Joshi",
        role: "Web developer",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762542966/divvvvv_-_DIVYANSHI_JOSHI_akr3c0.jpg",
       
        social: {
          // linkedin: "",      
          instagram: "https://www.instagram.com/itsannu4932?utm_source=qr&igsh=bWNvenh5MzM4ZGF0",
          // github: "",
          
        }
      },
      {
        id: 21,
        name: "SHEETAL",
        role: "Web developer",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762542966/IMG-20251106-WA0052_-_Sheetal_Kohli_fs7ora.jpg",
       
        social: {
          // linkedin: "",      
          // instagram: "",
          // github: "",
          
        }
      },
      {
        id: 22,
        name: "Shruti Semwal ",
        role: "Web developer",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762542967/IMG-20250817-WA0007_-_Shruti_xjyyzx.jpg",
       
        social: {
          // linkedin: "",      
          // instagram: "",
          // github: "",
          
        }
      },
      {
        id: 23,
        name: "Pradumna Singh Hada",
        role: "Co-Coordinator Graphic Designing ",
        image: "https://res.cloudinary.com/duyzpk8ym/image/upload/v1762542967/Snapchat-1185126490_-_CRPX7_gj3akv.jpg",
       
        social: {
          linkedin: "https://www.linkedin.com/in/pradumna-singh-hada-a41a78326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",      
          instagram: "https://www.instagram.com/pradumnasinghhada?igsh=amJuZTk0N3c3ZWEz",
          // github: "",
          
        }
      },
      {
        id: 24,
        name: "Prakhar Gupta",
        role: "Graphic Designing Co-Coordinator ",
        image: "",
       
        social: {
          linkedin: "https://www.linkedin.com/in/prakhar-gupta-31704a26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",      
          instagram: "https://www.instagram.com/hailprakhar?igsh=djlwcXo3cXB5dDk1",
          // github: "",
          
        }
      },
     

    ]
  };

  const categories = [
    { id: 'all', name: 'All' },
    // { id: 'team', name: 'Team' },
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
                
                {/* Social Media Icons - Vertical Stack on Left Side */
                }
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                  {member.social?.linkedin && (
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
                  
                  {member.social?.instagram && (
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
                  
                  {member.social?.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-12 h-12 flex items-center justify-center bg-white/95 hover:bg-rose-600 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group/icon"
                      title="Send Message"
                    >
                      <Mail size={22} className="text-rose-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                  
                  {member.social?.twitter && (
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
                  
                  {member.social?.github && (
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
                <p className="text-purple-300 text-sm font-semibold uppercase tracking-wider mb-2">{member.role}</p>
                {member.bio && (
                  <p className="text-white/80 text-sm mb-4">{member.bio}</p>
                )}

                {/* Social Links */}
                <div className="flex gap-3 justify-center pt-4 border-t border-white/10">
                  {member.social?.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="text-white/60 hover:text-blue-400 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-sky-400 transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social?.instagram && (
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-pink-400 transition-colors">
                      <Instagram size={20} />
                    </a>
                  )}
                  {member.social?.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-purple-400 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {member.social?.email && (
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
