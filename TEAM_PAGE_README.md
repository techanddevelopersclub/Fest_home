# Team Page - Complete Guide

## Overview
The new Team page is a modern, filterable showcase of your festival team members with:
- Category filtering (All, Leadership, Technical, Marketing)
- Hover effects with bio display
- Social media integration
- Responsive grid layout
- Professional card design

---

## How to Add/Update Team Members

### Step 1: Open the Team Component
File location: `src/components/pages/Team/Team.jsx`

### Step 2: Find the `teamMembers` Object
Located at the top of the component, around line 8.

### Step 3: Choose the Appropriate Category

There are three categories:
1. **leadership** - Directors, coordinators, and senior management
2. **technical** - Developers, designers, and tech team
3. **marketing** - Marketing heads, social media managers, content creators

### Step 4: Add or Update a Member

Copy this template and add it to the appropriate category array:

```javascript
{
  id: 9, // Use next available number
  name: "John Doe",
  role: "Position Title",
  image: "URL_TO_IMAGE",
  bio: "Short description about the person and their role",
  social: {
    linkedin: "https://linkedin.com/in/johndoe", // Full URL or empty string
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    github: "https://github.com/johndoe",
    email: "johndoe@example.com"
  }
}
```

---

## Image Guidelines

### Option 1: Use Unsplash (Placeholder/Demo)
```javascript
image: "https://images.unsplash.com/photo-PHOTO_ID?w=400&h=400&fit=crop"
```

### Option 2: Use Local Images
1. Create folder: `src/assets/team/`
2. Add photo: `john-doe.jpg`
3. Import at top of file:
   ```javascript
   import johnDoe from '../../../assets/team/john-doe.jpg';
   ```
4. Use in member object:
   ```javascript
   image: johnDoe
   ```

### Image Requirements:
- **Size**: 400x400px minimum (square ratio)
- **Format**: .jpg, .png, or .webp
- **Quality**: High resolution, clear face
- **Background**: Professional or solid color preferred

---

## Social Media Links

### Format:
- **LinkedIn**: `https://linkedin.com/in/username`
- **Twitter**: `https://twitter.com/username`
- **Instagram**: `https://instagram.com/username`
- **GitHub**: `https://github.com/username`
- **Email**: `email@domain.com`

### If No Account:
Leave as empty string: `""`

Example:
```javascript
social: {
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "", // No Twitter
  instagram: "https://instagram.com/johndoe",
  github: "", // No GitHub
  email: "johndoe@thdc.edu"
}
```

---

## Complete Example - Adding a New Member

### Leadership Team Member:
```javascript
// In teamMembers.leadership array
{
  id: 10,
  name: "Dr. Sarah Johnson",
  role: "Festival Director",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  bio: "Leading the festival with passion and excellence for over 5 years",
  social: {
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    instagram: "",
    github: "",
    email: "director@thdc.edu"
  }
}
```

### Technical Team Member:
```javascript
// In teamMembers.technical array
{
  id: 11,
  name: "Alex Chen",
  role: "Frontend Developer",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  bio: "Creating stunning user interfaces and seamless experiences",
  social: {
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "",
    instagram: "https://instagram.com/alexchen",
    github: "https://github.com/alexchen",
    email: ""
  }
}
```

### Marketing Team Member:
```javascript
// In teamMembers.marketing array
{
  id: 12,
  name: "Maria Garcia",
  role: "Content Strategist",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  bio: "Crafting engaging content that resonates with our audience",
  social: {
    linkedin: "",
    twitter: "https://twitter.com/mariagarcia",
    instagram: "https://instagram.com/mariagarcia",
    github: "",
    email: "maria@thdc.edu"
  }
}
```

---

## Features Explained

### Category Filtering
- Users can filter team members by category
- "All Members" shows everyone
- Each category button highlights when active

### Hover Effects
- Card scales up on hover
- Bio text appears over the image
- Smooth transitions throughout

### Social Media Icons
- Only shows icons for filled-in links
- Icons change color on hover
- Opens in new tab (external links)

### Responsive Design
- 1 column on mobile
- 2 columns on tablets
- 3-4 columns on desktop
- Maintains aspect ratio across all screens

---

## Tips for Best Results

### ✅ Do:
- Use high-quality, professional photos
- Write concise, engaging bios (1-2 sentences)
- Keep names and roles consistent in format
- Test all social media links before publishing
- Use square images for best display

### ❌ Don't:
- Use low-resolution or blurry images
- Write overly long bios (keep under 100 characters)
- Forget to update the ID number
- Leave broken or incorrect social links
- Mix image sizes (stick to 400x400px)

---

## Troubleshooting

### Images Not Showing?
1. Check the URL is correct and accessible
2. For local images, verify the import path
3. Clear browser cache (Ctrl+Shift+R)

### Social Icons Not Appearing?
1. Ensure the URL includes `https://`
2. Check for typos in the URL
3. Make sure it's not an empty string `""`

### Card Layout Issues?
1. Verify all member objects have the same structure
2. Check for missing commas between objects
3. Ensure IDs are unique numbers

### Filter Not Working?
1. Check category names match exactly: 'leadership', 'technical', 'marketing'
2. Verify member is in the correct category array

---

## Quick Reference

### File Location
```
src/components/pages/Team/Team.jsx
```

### Data Structure
```
teamMembers = {
  leadership: [...],
  technical: [...],
  marketing: [...]
}
```

### Required Fields
- id (number)
- name (string)
- role (string)
- image (string URL or imported variable)
- bio (string)
- social (object with 5 properties)

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify JSON syntax (commas, brackets, quotes)
3. Make sure all required fields are filled
4. Test with dummy data first
5. Compare with existing working examples

For any questions or issues, refer to this guide or check the existing team member examples in the code.
