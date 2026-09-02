# My React App

A modern React application built with Vite, Tailwind CSS, and React Router.

## Features

- ⚡️ **Vite** - Lightning-fast development server and build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework with Inter font
- 🚀 **React Router** - Client-side routing for seamless navigation
- 📱 **Responsive Design** - Mobile-first approach with beautiful UI
- 🧩 **Component Architecture** - Reusable and maintainable components
- 🛠️ **Modern Tooling** - ESLint, PostCSS, and Autoprefixer

## Project Structure

```
my-react-app/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Modal.jsx
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       ├── Footer.jsx
│   │       └── Sidebar.jsx
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   └── NotFound/
│   │       └── NotFound.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Components

### Common Components

- **Button** - Customizable button component with multiple variants
- **Loader** - Animated loading spinner with customizable size and color
- **Modal** - Reusable modal component with backdrop and keyboard support

### Layout Components

- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Site footer with links and social media
- **Sidebar** - Collapsible sidebar for navigation

### Pages

- **Home** - Landing page with hero section and features
- **About** - Company information and tech stack
- **Contact** - Contact form with validation
- **NotFound** - 404 error page with helpful navigation

## Utility Functions

The `src/utils/helpers.js` file contains various utility functions:

- `formatDate()` - Format dates in different styles
- `debounce()` - Debounce function calls
- `isValidEmail()` - Email validation
- `isEmpty()` - Check if string is empty
- `capitalize()` - Capitalize first letter
- `generateId()` - Generate random IDs
- `truncate()` - Truncate strings
- `slugify()` - Convert strings to URL-friendly slugs
- `isValidUrl()` - URL validation
- `formatFileSize()` - Format file sizes
- `deepClone()` - Deep clone objects
- `copyToClipboard()` - Copy text to clipboard
- And many more...

## Styling

This project uses Tailwind CSS with the Inter font. The configuration is set up in:

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Global styles and Tailwind imports

## Routing

The application uses React Router for client-side routing. Routes are defined in `src/App.jsx`:

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `*` - 404 page (catch-all route)

## Build & Deployment

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

If you have any questions or need support, please contact us at support@myreactapp.com.
