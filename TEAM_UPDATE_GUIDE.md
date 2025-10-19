# Team Page Update Guide

## How to Add/Update Team Member Photos and Information

### Quick Steps:

1. **Prepare the Photo:**
   - Use a square image (1:1 ratio) - e.g., 400x400px or 800x800px
   - Formats: `.jpg`, `.png`, or `.webp`
   - Good quality headshot with clear face
   - Professional or semi-formal attire recommended

2. **Add Photo to Project:**
   - Create folder: `src/assets/team/` (if it doesn't exist)
   - Save your photo there with a meaningful name: `john-doe.jpg`

3. **Update Team Data File:**
   - Open: `src/components/pages/Team/mockTeam.js`
   
   **Step A:** Import the photo at the top:
   ```javascript
   import johnDoe from '../../../assets/team/john-doe.jpg';
   ```
   
   **Step B:** Find the team section (coreTeam, technicalTeam, or marketingTeam)
   
   **Step C:** Update or add a member object:
   ```javascript
   {
     id: 1, // Unique number
     name: "John Doe", // Full name
     role: "Web Developer", // Position/role
     image: johnDoe, // Imported photo variable
     social: {
       linkedin: "https://linkedin.com/in/johndoe", // Full URL or ""
       twitter: "https://twitter.com/johndoe",
       instagram: "https://instagram.com/johndoe",
       github: "https://github.com/johndoe"
     }
   }
   ```

4. **Save and Refresh** - Your changes will appear automatically!

---

## Team Sections:

### Core Team
- Festival organizers and leaders
- Located at: `teamData.coreTeam`

### Technical Team  
- Web developers, designers, tech support
- Located at: `teamData.technicalTeam`

### Marketing Team
- Promotions, social media, content creators
- Located at: `teamData.marketingTeam`

---

## Social Media Links:

- **LinkedIn:** `https://linkedin.com/in/username`
- **Twitter:** `https://twitter.com/username`
- **Instagram:** `https://instagram.com/username`
- **GitHub:** `https://github.com/username`

**Note:** Leave as empty string `""` if the person doesn't have that account.

---

## Example - Complete Member Entry:

```javascript
{
  id: 5,
  name: "Priya Sharma",
  role: "UI/UX Designer",
  image: priyaSharma, // Must be imported first
  social: {
    linkedin: "https://linkedin.com/in/priyasharma",
    twitter: "", // No Twitter account
    instagram: "https://instagram.com/priya.designs",
    github: "https://github.com/priyasharma"
  }
}
```

---

## Tips for Best Results:

✅ **Do:**
- Use high-quality, clear photos
- Keep consistent image sizes (400x400px recommended)
- Use professional headshots
- Center the face in the photo
- Use good lighting

❌ **Don't:**
- Use blurry or low-quality images
- Use group photos or photos with distracting backgrounds
- Use images that are too dark or too bright
- Forget to import the photo at the top of the file
- Reuse the same ID for multiple members

---

## Need Help?

If photos aren't appearing:
1. Check the import statement at the top
2. Verify the file path is correct
3. Make sure the image file exists in the folder
4. Clear browser cache (Ctrl+Shift+R)

For any issues, check the browser console for error messages.
