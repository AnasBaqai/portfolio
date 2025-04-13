# Anas Baqai's Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations with Framer Motion.

## Live Demo

The site is deployed at [anas-portfolio.vercel.app](https://anas-portfolio.vercel.app)

## Features

- **Modern UI/UX**: Clean, minimalist design with smooth transitions and animations
- **Responsive Design**: Fully responsive layout that looks great on all devices
- **Project Showcase**: Detailed project pages with descriptions, technologies, and links
- **Component-Based Architecture**: Modular components for easy maintenance and updates
- **Smooth Animations**: Implemented with Framer Motion for a polished user experience
- **Optimized Performance**: Fast loading times with code splitting and lazy loading

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next generation frontend tooling for faster development
- **Framer Motion**: Animation library for React components
- **Styled Components**: CSS-in-JS for component-scoped styling
- **React Router**: Client-side routing for single page applications
- **React Icons**: Comprehensive icon library

## Projects Featured

### 1. Car Parts Management System

A comprehensive system for managing car parts inventory, orders, and sales. Features user authentication, inventory management, order processing, and sales reporting. Built with React, Node.js, Express, and MongoDB.

- [GitHub Repository](https://github.com/AnasBaqai/car-parts-system)
- [Live Demo](https://car-parts-system-ars.vercel.app/login)
- Demo Credentials: demo@example.com / demo123

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser

## Customization

### Personal Information

Update your personal information in the components:

- Edit your name, title, and description in `src/components/Hero.jsx`
- Update the about section in `src/components/About.jsx`
- Add your projects in `src/components/Projects.jsx`

### Project Details

Project details are stored in `src/pages/ProjectDetails.jsx`. To add a new project:

1. Add a new project object to the `projects` array
2. Include all relevant details (title, description, technologies, etc.)
3. Upload project images to the `public` directory

### Styling

- Global styles are in `src/styles/GlobalStyles.js`
- Each component has its own styled components for component-specific styling

## Deployment

This site can be easily deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static site hosting service

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons library
