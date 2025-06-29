# Personal Portfolio Website

A modern, responsive portfolio website built with React and Webpack.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Components**: 
  - Smooth scrolling navigation
  - Typewriter effect in hero section
  - Animated skill bars
  - Project filtering
  - Contact form
  - Scroll-to-top button
  - Loading screen
- **Video Background**: Dynamic hero section with video background
- **Font Awesome Icons**: Beautiful icons throughout the site

## Sections

1. **Hero Section**: Eye-catching introduction with typewriter effect
2. **About**: Personal information and statistics
3. **Skills**: Animated progress bars showing technical skills
4. **Projects**: Filterable portfolio showcase
5. **Contact**: Contact form and information
6. **Footer**: Additional links and social media

## Technologies Used

- React 18
- Webpack 5
- Babel
- CSS3 with modern features
- Font Awesome icons
- Google Fonts (Poppins)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3001`

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.js` - Name and title
- `src/components/About.js` - About text and statistics
- `src/components/Skills.js` - Your skills and proficiency levels
- `src/components/Projects.js` - Your projects
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Footer information

### Styling

The main styles are in `src/styles.css`. You can customize:

- Color scheme (search for color variables)
- Fonts
- Animations
- Layout

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Add corresponding styles to `src/styles.css`
4. Update navigation in `src/components/Header.js`

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with video background
│   ├── About.js           # About section
│   ├── Skills.js          # Skills with animated bars
│   ├── Projects.js        # Projects showcase
│   ├── Contact.js         # Contact form
│   ├── Footer.js          # Footer
│   ├── ScrollToTop.js     # Scroll to top button
│   └── Loading.js         # Loading screen
├── App.js                 # Main app component
├── index.js              # Entry point
└── styles.css            # Main stylesheet
```

## Performance Features

- Smooth scrolling
- Optimized animations
- Responsive images
- Efficient component rendering
- Loading screen for better UX

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/personal-portfolio](https://github.com/yourusername/personal-portfolio)

## Acknowledgments

- React team for the amazing framework
- Font Awesome for the icons
- Google Fonts for the typography
- All the open-source contributors