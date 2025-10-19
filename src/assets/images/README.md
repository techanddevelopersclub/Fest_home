# Campus Images Folder

This folder contains campus-related images for the website.

## Current Images:

### campus-map.jpg
**Usage:** About Us page - Our Campus section
**Description:** The beautiful illustrated map of THDC-IHET Campus showing the Bhagirathi River and campus layout

## How to Add/Replace Images:

1. **Save your image** to this folder (`src/assets/images/`)
2. **Use it in components** by importing:
   ```javascript
   import yourImage from "../../../assets/images/your-image.jpg";
   ```
3. **Then use in JSX:**
   ```jsx
   <img src={yourImage} alt="Description" />
   ```

## Image Guidelines:

- Use `.jpg` for photos and complex images
- Use `.png` for images with transparency
- Use `.webp` for optimized modern format
- Keep file sizes reasonable (under 2MB)
- Use descriptive file names (kebab-case)

## Current Structure:
```
src/assets/
├── images/
│   ├── campus-map.jpg     (Campus map illustration)
│   └── README.md          (This file)
├── team/                  (Team member photos)
└── video/                 (Background videos)
```
