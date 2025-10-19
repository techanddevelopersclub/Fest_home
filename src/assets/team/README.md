# Team Photos Folder

## How to Add Team Member Photos

### Step 1: Add Photo to This Folder
1. Save your team member's photo in this folder
2. Use a meaningful filename: `firstname-lastname.jpg` or `firstname-lastname.png`
3. Example: `john-doe.jpg`, `sarah-smith.png`

### Step 2: Image Requirements
- **Format**: .jpg, .png, or .webp
- **Size**: 400x400px to 800x800px (square ratio)
- **Quality**: High resolution, clear face
- **Background**: Professional or simple background preferred

### Step 3: Use in Team Component
After adding the photo here, import it in the Team.jsx file:

```javascript
// At the top of Team.jsx
import johnDoe from '../../../assets/team/john-doe.jpg';

// Then use it in the member object
{
  id: 1,
  name: "John Doe",
  image: johnDoe,
  ...
}
```

---

## Current Photos in This Folder
- Add your team photos here
- This folder is ready to store all team member images
- Delete this README.md file after you understand the instructions
