# CodeCrafter - Professional Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Perfect for freelance developers and agencies to showcase their work and attract clients.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimizations
- **Contact Form**: Working contact form using Formspree (no backend required)
- **Project Showcase**: Beautiful portfolio section with project details
- **Pricing Packages**: Clear pricing structure for different services
- **Blog Section**: Ready-to-use blog for content marketing
- **Easy Deployment**: One-click deployment to Vercel or Netlify

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: Formspree integration
- **Deployment**: Vercel/Netlify ready

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd code-crafter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Formspree form ID:
   ```
   VITE_FORMSPREE_ID=your-formspree-id-here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Configuration

### Contact Form Setup

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Add the form ID to your `.env` file as `VITE_FORMSPREE_ID`

### Customization

#### Update Content
- **Home Page**: Edit `src/pages/Home.jsx` to update services and hero content
- **Projects**: Modify `src/pages/Projects.jsx` to showcase your work
- **Pricing**: Update `src/pages/Pricing.jsx` with your service packages
- **Blog**: Add your posts in `src/pages/Blog.jsx`
- **Contact**: Update contact information in `src/pages/Contact.jsx`

#### Styling
- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update Google Fonts link in `index.html`
- **Components**: Customize styles in `src/index.css`

#### Branding
- **Logo**: Replace "CodeCrafter" text in `src/components/Navbar.jsx`
- **Favicon**: Replace `public/vite.svg` with your favicon
- **Meta Tags**: Update SEO information in `index.html`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)
3. Or connect your Git repository for automatic deployments

### Manual Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Projects.jsx    # Portfolio showcase
│   ├── Pricing.jsx     # Service packages
│   ├── Contact.jsx     # Contact form
│   └── Blog.jsx        # Blog posts
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Performance Optimizations

- **Image Optimization**: Uses optimized images from Unsplash
- **Code Splitting**: React Router handles route-based splitting
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Bundle Optimization**: Vite optimizes the build automatically

## SEO Features

- Meta tags for search engines
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design
- Structured data ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on GitHub or contact through the website's contact form.

---

Built with ❤️ using React, Vite, and Tailwind CSS