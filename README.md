# PPG Contractor Portal

A modern, professional contractor resource portal for Paradigm Productions Group, built with Next.js and Tailwind CSS.

## Overview

The PPG Contractor Portal provides a centralized hub for contractor resources, forms, and guidelines. The design is inspired by clean, professional interfaces like Brand Central, offering easy access to essential contractor documentation and resources.

## Features

### 🚀 Quick Access Tools
- **W9 Tax Forms**: Download and submit tax forms
- **Code of Conduct**: Professional behavior guidelines
- **Dress Code**: Appearance and attire standards
- **Direct Deposit**: Banking setup forms
- **Insurance Submission**: Upload insurance documentation
- **Support**: Contact contractor support team

### 📋 Resource Categories
- **Essential Forms**: Required contractor documentation
- **Guidelines & Policies**: Professional standards
- **Resources & Tools**: Brand assets, templates, and training materials

### 🎨 Design Features
- Responsive design for all devices
- Professional blue and gray color scheme
- Clean, intuitive navigation
- Accessibility-focused interface
- Fast loading and optimized performance

## Technology Stack

- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ppg-contractor-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment on Netlify

This project is optimized for deployment on Netlify:

### Automatic Deployment
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Deploy automatically on every push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── QuickAccessGrid.tsx # Quick access tools grid
│   └── ResourcesSection.tsx # Resources overview
└── ...
```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── QuickAccessGrid.tsx  # Quick access tools grid
│   ├── ResourcesSection.tsx # Resources overview
│   └── Footer.tsx       # Site footer
```

## Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration

## Customization

### Colors
The project uses a professional blue and gray color scheme defined in `tailwind.config.js`:
- Primary: Blue (#3b82f6)
- Gray scale: #f9fafb to #111827

### Adding New Resources
To add new contractor resources:
1. Update the `quickAccessItems` array in `QuickAccessGrid.tsx`
2. Update the `resourceCategories` array in `ResourcesSection.tsx`
3. Create corresponding pages in the `src/app/` directory

## Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform supporting Node.js

For Vercel deployment:
```bash
npm run build
```

## Contributing

1. Follow the existing code style and TypeScript patterns
2. Use Tailwind CSS for styling
3. Ensure responsive design
4. Test on multiple screen sizes
5. Update documentation as needed

## Support

For questions or support regarding the contractor portal:
- Email: contractors@paradigmproductionsgroup.com
- Website: https://paradigmproductionsgroup.com

## License

© 2025 Paradigm Productions Group. All rights reserved.
