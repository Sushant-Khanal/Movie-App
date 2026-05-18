# CineWatch - Movie Explorer

A modern, professional movie discovery and management application built with React and Vite. Explore thousands of movies, search by title, and maintain a personalized collection of your favorite films.

![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **Movie Discovery**: Browse and discover thousands of popular movies
- **Smart Search**: Real-time search functionality to find movies by title
- **Favorites Management**: Save your favorite movies locally with persistent storage
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional dark theme with smooth animations and intuitive interactions
- **Real-time Data**: Powered by The Movie Database (TMDB) API for up-to-date movie information

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Movie-App/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` folder.

## 📁 Project Structure

```
Movie-App/frontend/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── NavBar.jsx       # Navigation bar
│   │   └── MovieCard.jsx    # Movie card component
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page with search
│   │   └── Favorites.jsx    # Favorites collection page
│   ├── contexts/            # React Context API
│   │   └── MovieContext.jsx # Global movie state management
│   ├── services/            # API services
│   │   └── api.js           # TMDB API integration
│   ├── css/                 # Stylesheets
│   │   ├── index.css        # Global styles
│   │   ├── App.css          # App layout
│   │   ├── Navbar.css       # Navbar styles
│   │   ├── Home.css         # Home page styles
│   │   ├── MovieCard.css    # Movie card styles
│   │   └── Favorites.css    # Favorites page styles
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

## 🏗️ Architecture & Key Components

### State Management
- **MovieContext**: Centralized state management using React Context API
  - Manages favorites list
  - Persists favorites to localStorage
  - Provides utility functions: `addToFavorites`, `removeFromFavorites`, `isFavorite`

### Pages

**Home Page**
- Displays popular movies on initial load
- Search functionality to find movies by title
- Movie grid with responsive layout
- Loading and error states

**Favorites Page**
- Shows all saved favorite movies
- Empty state message when no favorites exist
- Persistent storage across sessions

### Components

**NavBar**
- Gradient branding with app name
- Navigation links to Home and Favorites
- Responsive design with mobile optimization

**MovieCard**
- Movie poster with hover effects
- Title and release year information
- Heart button for adding/removing from favorites
- Smooth animations and transitions

## 🛠️ Technologies Used

- **React 19.2**: Modern UI library with hooks and context
- **React Router DOM 7.15**: Client-side routing
- **Vite 8.0**: Lightning-fast build tool
- **CSS3**: Modern styling with flexbox and grid
- **The Movie Database API**: Movie data source
- **localStorage**: Client-side data persistence

## 🎨 Design Features

- **Modern Dark Theme**: Carefully crafted color palette with red accent (#ff6b6b)
- **Smooth Animations**: Fade-in effects and hover transitions
- **Better Visual Hierarchy**: Improved typography, spacing, and shadows
- **Professional Shadows**: Depth perception with layered box-shadows
- **Responsive Grid**: Auto-fill grid layout adapting to screen size
- **Touch-Friendly**: Larger interactive elements on mobile devices

## 📚 Learning Outcomes

### React Concepts
- Functional components with hooks (useState, useEffect, useContext)
- React Context API for global state management
- Custom hooks (`useMovieContext`)
- Client-side routing with React Router

### API Integration
- Async/await for API calls
- Error handling and loading states
- Query parameters and URL encoding

### CSS & Design
- CSS Grid and Flexbox layouts
- Media queries for responsive design
- CSS transitions and animations
- Modern design principles

### Development Tools
- Vite for fast development and optimized builds
- ESLint for code quality
- Module bundling and code splitting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Data Privacy

- Favorites are stored locally in your browser using localStorage
- No user data is sent to external servers (except TMDB API calls)
- No authentication or user accounts required

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [The Movie Database API](https://www.themoviedb.org/settings/api)
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

Made with ❤️ using React and Vite
