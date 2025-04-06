# Edil CSM Website

A modern, accessible, and performant website for Edil CSM construction and restoration services.

## Features

- **Responsive Design**: Fully responsive layout that works across all devices
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA attributes
- **Performance**: Optimized images, lazy loading, and bundle splitting
- **SEO**: Structured data, meta tags, and semantic HTML
- **Interactive Portfolio**: Filtered project showcase
- **Contact Form**: Validated contact form with responsive feedback

## Technologies Used

- Next.js 15
- React 19
- CSS Modules
- Sharp (for image optimization)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - Reusable React components
- `lib/` - Data and utility functions
- `public/` - Static assets
- `styles/` - CSS modules for styling

## Performance Optimization

- Image optimization with Sharp
- Dynamic imports for code splitting
- Bundle analysis with @next/bundle-analyzer
- Resource hints for faster page loads
- CSS optimization with experimental features

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Skip to main content link
- Color contrast compliance

## SEO Implementation

- Structured data for organization and blog posts
- OpenGraph meta tags
- Dynamic meta titles and descriptions
- Semantic HTML
- Sitemap generation

## Code Comments

All code in this repository is well-documented with comments to ensure clarity and maintainability. Each function, component, and module includes descriptive comments explaining its purpose, parameters, and usage.

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

### Code Style

- ESLint for code quality
- Consistent component structure
- CSS Modules for scoped styling
- Semantic HTML practices

## Deployment

The site is optimized for production deployment with:

- Minified bundles
- Optimized images
- Gzipped assets
- Cache headers
- Environment configurations

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
