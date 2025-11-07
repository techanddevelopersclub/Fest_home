made by suraj singh and rachit dwivedi
# 🎉 Event Management React App

A modern, feature-rich event management application built with React, Vite, and TailwindCSS. This application provides a complete solution for managing tech events, teams, and showcasing event information with stunning 3D visualizations.

## ✨ Features

- **Event Management**: Browse and manage tech events with detailed information
- **Team Showcase**: Display team members with photos and roles
- **Interactive 3D Components**: Built with Three.js and React Three Fiber
- **Responsive Design**: Fully responsive UI using TailwindCSS and DaisyUI
- **Modern UI Components**: Leveraging Material Tailwind and custom components
- **Smooth Animations**: Integrated AOS (Animate On Scroll) library
- **Client-Side Routing**: React Router for seamless navigation
- **Bookmark Functionality**: Save favorite events
- **Toast Notifications**: User feedback with React Toastify

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.2** - Modern React with Hooks
- **Vite 4.4** - Fast build tool and dev server

### Styling & UI
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Material Tailwind** - Material Design components
- **Lucide React** - Beautiful icon library

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **React Three Postprocessing** - Post-processing effects

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **AOS** - Animate On Scroll
- **React Toastify** - Toast notifications
- **LocalForage** - Offline storage

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0 or higher)
- **npm** or **yarn** package manager
- **Git**

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/event-management-react-project.git
   cd event-management-react-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
event-management-react-project/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, team photos, and other assets
│   ├── components/      # Reusable React components
│   ├── Router/          # Routing configuration
│   ├── Root/            # Root layout components
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .gitignore
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 👥 Team Management

For detailed instructions on how to add or update team member photos and information, please refer to:
- [HOW_TO_ADD_TEAM_PHOTOS.md](./HOW_TO_ADD_TEAM_PHOTOS.md)
- [TEAM_PAGE_README.md](./TEAM_PAGE_README.md)
- [TEAM_UPDATE_GUIDE.md](./TEAM_UPDATE_GUIDE.md)
- [IMAGE_INSTRUCTIONS.md](./IMAGE_INSTRUCTIONS.md)

## 🎨 Customization

### Tailwind Configuration
Customize the theme in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      // Add your custom styles here
    },
  },
}
```

### Adding Components
Create new components in the `src/components/` directory and import them where needed.

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy
You can deploy the `dist` folder to any static hosting service:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: `firebase deploy`

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Ensure all dependencies are installed and Node.js version is compatible:
```bash
node --version  # Should be v16 or higher
npm --version
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- TailwindCSS for the utility-first CSS framework
- All open-source contributors whose libraries made this project possible

---

**Made with ❤️ and React**

