# Portfolio React SPA

A modern, single-page portfolio application built with React, Vite, and Tailwind CSS.

## 📋 Project Structure

```
react-portfolio/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx      # Left navigation sidebar
│   │   ├── Hero.jsx         # Main hero/intro section
│   │   ├── TechStack.jsx    # Tech stack showcase
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── Contact.jsx      # Contact form & social links
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   ├── index.css            # Tailwind & custom styles
│   └── data.js              # Portfolio content data
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
└── postcss.config.js        # PostCSS configuration
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Production Build

Build the optimized production version:

```bash
npm run build
```

This generates:
- `dist/index.html` - The SPA entry point
- `dist/assets/` - Bundled CSS and JavaScript files

### Preview Build Locally

```bash
npm run preview
```

## 📝 Customization

### Update Portfolio Content

Edit `src/data.js` to customize:
- Profile information
- Tech stack items
- Portfolio projects
- Contact information
- Social media links
- Footer details

### Styling

The project uses Tailwind CSS with custom theme colors:
- **Primary Color**: `#2DD4BF` (Teal)
- **Background**: `#0A0C10` (Dark)
- **Surface**: `#12171D` (Lighter Dark)
- **Border**: `#1E293B` (Slate)

Modify `tailwind.config.js` to adjust the color scheme.

### Fonts

The project uses:
- **Sans**: Plus Jakarta Sans (from Google Fonts)
- **Mono**: JetBrains Mono (from Google Fonts)
- **Icons**: Material Symbols Outlined

## 🎨 Components

- **Sidebar**: Fixed navigation on desktop with smooth hover tooltips
- **Hero**: Terminal-style intro section with ASCII-like styling
- **TechStack**: Card-based tech expertise grid
- **Projects**: Alternating project showcase with case study links
- **Contact**: Contact form and social media links
- **Footer**: Copyright and build information

## 🔧 Build Output

The production build outputs a complete single-page application ready for deployment. The `dist/index.html` file is the main entry point and includes:

- All CSS bundled and minified
- All JavaScript bundled and minified
- Optimized assets for best performance

## 📦 Dependencies

- **React** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation

## 🌐 Deployment

The `dist/` folder is ready to deploy to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply deploy the contents of the `dist/` folder.

## ✨ Features

- ✅ Single-page application (SPA)
- ✅ Fully responsive design
- ✅ Dark theme with accent colors
- ✅ Smooth scroll navigation
- ✅ Terminal/dev aesthetic
- ✅ Form handling
- ✅ Mobile-optimized sidebar navigation
- ✅ Fast performance with Vite

## 📄 License

Part of the Axcelion portfolio project.
