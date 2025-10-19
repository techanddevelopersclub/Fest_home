// Import actual team member photos here
import directorImage from '../../../assets/video/director.jpg?url';
import deanImage from '../../../assets/video/dean.jpg?url';

/**
 * TEAM DATA STRUCTURE
 * 
 * To add a new team member:
 * 1. Add their photo to src/assets/team/ folder
 * 2. Import it at the top: import memberName from '../../../assets/team/memberName.jpg';
 * 3. Add a new object in the appropriate team array below
 * 
 * Image format: 
 * - Use square images (1:1 ratio) for best results
 * - Recommended size: 400x400px or higher
 * - Formats: .jpg, .png, .webp
 * 
 * Social links:
 * - Leave empty string "" if the person doesn't have that social account
 * - Use full URL including https://
 */

export const teamData = {
  // Core Team - Festival organizers and leaders
  coreTeam: [
    {
      id: 1,
      name: "Mr. Himanshu Nautiyal", // Replace with actual name
      role: "Festival Dean",
      image: deanImage, // Replace with actual photo
      social: {
        linkedin: "", // Add LinkedIn URL or leave empty
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 2,
      name: "Team Member Name", // Replace with actual name
      role: "Cultural Head",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 3,
      name: "Team Member Name", // Replace with actual name
      role: "SAC Treasurer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    }
  ],
  // Technical Team - Web developers, designers, tech support
  technicalTeam: [
    {
      id: 4,
      name: "Suraj Singh", // Replace with actual name
      role: "Technical Lead",
      image: directorImage, // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 5,
      name: "Team Member Name", // Replace with actual name
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 6,
      name: "Team Member Name", // Replace with actual name
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 7,
      name: "Team Member Name", // Replace with actual name
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 8,
      name: "Team Member Name", // Replace with actual name
      role: "App Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    }
  ],
  
  // Marketing Team - Promotions, social media, content creation
  marketingTeam: [
    {
      id: 9,
      name: "Team Member Name", // Replace with actual name
      role: "Marketing Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 10,
      name: "Team Member Name", // Replace with actual name
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 11,
      name: "Team Member Name", // Replace with actual name
      role: "Content Writer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    },
    {
      id: 12,
      name: "Team Member Name", // Replace with actual name
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=400&h=400&fit=crop", // Replace with actual photo
      social: {
        linkedin: "",
        twitter: "",
        instagram: "",
        github: ""
      }
    }
  ]
};