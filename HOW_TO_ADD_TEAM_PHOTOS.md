# How to Add Team Member Photos - Quick Guide

## Step-by-Step Process

### 1. Add Photos to Team Folder

**Location**: `src/assets/team/`

**Photo Requirements**:
- Square format (400x400px to 800x800px)
- Clear, professional headshot
- Good lighting
- File formats: .jpg, .png, or .webp
- Naming: `firstname-lastname.jpg` (lowercase, no spaces)

**Example filenames**:
- `john-doe.jpg`
- `sarah-smith.png`
- `alex-chen.jpg`

---

### 2. Import Photos in Team Component

**File**: `src/components/pages/Team/Team.jsx`

Add these imports at the **top of the file** (around line 2-3):

```javascript
// Example: Import team photos
import johnDoe from '../../../assets/team/john-doe.jpg';
import sarahSmith from '../../../assets/team/sarah-smith.png';
import alexChen from '../../../assets/team/alex-chen.jpg';
```

---

### 3. Update Team Member Data

In the `teamMembers` object, replace the Unsplash URLs with your imported photos:

#### Before (Using Placeholder):
```javascript
{
  id: 1,
  name: "Mr. Himanshu Nautiyal",
  role: "Festival Dean",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  // ... rest of data
}
```

#### After (Using Your Photo):
```javascript
{
  id: 1,
  name: "Mr. Himanshu Nautiyal",
  role: "Festival Dean",
  image: johnDoe, // Use the imported variable name
  // ... rest of data
}
```

---

## Complete Example

### Step 1: Save Photo
Save your photo as: `src/assets/team/himanshu-nautiyal.jpg`

### Step 2: Import Photo
```javascript
// At top of Team.jsx (line 2)
import { Users, Linkedin, Twitter, Instagram, Github, Mail } from 'lucide-react';
import himanshuNautiyal from '../../../assets/team/himanshu-nautiyal.jpg';
```

### Step 3: Use in Data
```javascript
const teamMembers = {
  leadership: [
    {
      id: 1,
      name: "Mr. Himanshu Nautiyal",
      role: "Festival Dean",
      image: himanshuNautiyal, // ← Use imported variable
      bio: "Visionary leader guiding the festival to new heights",
      social: {
        linkedin: "https://linkedin.com/in/himanshu",
        twitter: "",
        instagram: "https://instagram.com/himanshu",
        github: "",
        email: "dean@thdc.edu"
      }
    }
  ]
}
```

---

## Dynamic Contact Details Feature

### When You Hover on Image:
✨ **Contact details overlay appears showing:**
- Name and role
- Bio description
- **LinkedIn** - Clickable link with blue hover
- **Instagram** - Clickable link with pink hover
- **Twitter** - Clickable link with sky blue hover
- **Send Message** (Email) - Opens email client
- **GitHub** - Clickable link with purple hover

### How It Works:
1. Hover your cursor over any team member's photo
2. Full-screen overlay appears with gradient background
3. All contact details are prominently displayed
4. Click any button to open the respective platform
5. Move cursor away to hide the overlay

### Contact Buttons Only Show When:
- You've added the respective social link in the `social` object
- Link is not an empty string `""`

---

## Quick Reference Table

| Import Name Format | File Name | Usage |
|-------------------|-----------|-------|
| `johnDoe` | `john-doe.jpg` | `image: johnDoe` |
| `sarahSmith` | `sarah-smith.png` | `image: sarahSmith` |
| `alexChen` | `alex-chen.jpg` | `image: alexChen` |

---

## Tips for Best Results

### ✅ Do:
- Use high-quality, clear photos (minimum 400x400px)
- Ensure good lighting and professional background
- Crop photos to square format before saving
- Use consistent naming: `firstname-lastname.extension`
- Test hover effect after adding

### ❌ Don't:
- Use photos with text or watermarks
- Upload photos larger than 2MB (optimize first)
- Forget to import the photo at the top
- Use spaces in filenames (use hyphens instead)
- Mix portrait and landscape orientations

---

## Full Code Example

```javascript
import React, { useState } from 'react';
import { Users, Linkedin, Twitter, Instagram, Github, Mail } from 'lucide-react';

// Import all team photos
import himanshuNautiyal from '../../../assets/team/himanshu-nautiyal.jpg';
import surajSingh from '../../../assets/team/suraj-singh.jpg';
import priyaSharma from '../../../assets/team/priya-sharma.jpg';

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState('all');

  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Mr. Himanshu Nautiyal",
        role: "Festival Dean",
        image: himanshuNautiyal, // ← Local photo
        bio: "Visionary leader guiding the festival",
        social: {
          linkedin: "https://linkedin.com/in/himanshu",
          twitter: "",
          instagram: "https://instagram.com/himanshu",
          github: "",
          email: "dean@thdc.edu"
        }
      }
    ],
    technical: [
      {
        id: 2,
        name: "Suraj Singh",
        role: "Technical Lead",
        image: surajSingh, // ← Local photo
        bio: "Leading technical innovations",
        social: {
          linkedin: "https://linkedin.com/in/suraj",
          twitter: "https://twitter.com/suraj",
          instagram: "https://instagram.com/suraj",
          github: "https://github.com/suraj",
          email: "suraj@thdc.edu"
        }
      }
    ],
    marketing: [
      {
        id: 3,
        name: "Priya Sharma",
        role: "Marketing Head",
        image: priyaSharma, // ← Local photo
        bio: "Driving brand awareness",
        social: {
          linkedin: "https://linkedin.com/in/priya",
          twitter: "",
          instagram: "https://instagram.com/priya",
          github: "",
          email: "priya@thdc.edu"
        }
      }
    ]
  };

  // ... rest of component code
};
```

---

## Troubleshooting

### Photo Not Showing?
1. Check the file exists in `src/assets/team/`
2. Verify import path: `'../../../assets/team/filename.jpg'`
3. Ensure variable name matches in `image: variableName`
4. Clear cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Contact Details Not Appearing on Hover?
1. Check that social links are filled in (not empty strings)
2. Hover directly over the image area
3. Verify the `social` object has the correct structure

### Overlay Not Clickable?
1. Make sure URLs include `https://`
2. Verify no typos in URLs
3. Test in different browsers

---

## Need More Help?

Refer to:
- `TEAM_PAGE_README.md` - Full team page documentation
- `src/assets/team/README.md` - Photo folder instructions
- Browser console for error messages

---

**Quick Summary**: 
1. Add photo to `src/assets/team/`
2. Import at top of `Team.jsx`
3. Use imported variable in `image` field
4. Hover on image to see contact details! ✨
