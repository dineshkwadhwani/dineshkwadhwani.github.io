# Leadership Authority

A modern, interactive web platform designed to establish thought leadership and executive expertise. Features an integrated AI-powered chat assistant, interactive quizzes, leadership tools, and comprehensive professional showcasing.

## Project Overview

Leadership Authority is a responsive, single-page application that showcases professional credentials, expertise, and thought leadership through an engaging, interactive experience. The platform includes advanced features like real-time AI chat, assessment quizzes, and personalized leadership styling tools.

### Key Features

- **Executive Chat**: Global floating AI-powered chat assistant available throughout the application
- **Interactive Quiz**: Customizable assessment system with API integration
- **Leadership Tool**: Personalized styling and professional insights tool
- **Professional Sections**:
  - Hero section with compelling value proposition
  - Executive journey and background
  - Credentials and certifications
  - Client testimonials
  - Advisory services overview
  - AI section showcasing technology integration
  - Contact and engagement options

## Technology Stack

This project is built with:

- **HTML5** - Semantic markup
- **Vanilla JavaScript** - No framework dependencies; modular component architecture
- **CSS3** - Custom styling with Tailwind CSS framework
- **Tailwind CSS** - Utility-first styling
- **JavaScript Modules** - Component-based architecture for maintainability

## Project Structure

```
mobile-masterpiece-main/
├── index.html              # Main application entry point
├── README.md              # This file
├── assets/                # Static assets (images, etc.)
├── css/
│   └── styles.css         # Compiled CSS (Tailwind + custom)
└── js/
    ├── main.js            # Application router and initialization
    ├── components/        # Modular UI components
    │   ├── advisory.js
    │   ├── ai-section.js
    │   ├── contact.js
    │   ├── credentials.js
    │   ├── executive-chat.js    # AI chat system
    │   ├── footer.js
    │   ├── header.js
    │   ├── hero.js
    │   ├── journey.js
    │   ├── leadership-tool.js
    │   └── testimonials.js
    └── quiz/              # Quiz system
        ├── api.js         # Quiz API integration
        ├── questions.js   # Quiz questions and data
        ├── quiz.js        # Quiz logic and flow
        └── ui.js          # Quiz UI components
```

## Getting Started

### Prerequisites

- No build tools required - runs directly in the browser
- For local development, you can use any simple HTTP server

### Development

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd mobile-masterpiece-main
   ```

2. **Run a local server** (choose one):
   
   **Using Python:**
   ```sh
   python -m http.server 8000
   ```
   
   **Using Node.js (http-server):**
   ```sh
   npx http-server
   ```
   
   **Using Live Server in VS Code:**
   - Install the "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Open in browser**
   - Navigate to `http://localhost:8000` (or the port shown by your server)
   - The application will load and be ready to use

### Editing Code

- Edit files directly in your preferred IDE
- Changes are reflected immediately with live server or after page refresh
- The component-based architecture in `js/components/` makes it easy to modify individual sections
- Modify `css/styles.css` for styling changes

## Component System

Each component follows a consistent pattern:

- **Render Function**: `render[ComponentName]()` - Returns HTML markup
- **Init Function**: `init[ComponentName]()` - Handles initialization and event listeners

Example from a component:
```javascript
function renderHero() {
  return `<!-- Hero markup -->`
}

function initHero() {
  // Event listeners and interactions
}
```

## Quiz System

The quiz module is self-contained and includes:
- Question definitions and management
- API integration for submissions
- UI rendering and user interactions
- Customizable question bank

Access quiz functionality via `quiz/` directory modules.

## Executive Chat

The AI-powered chat assistant is available globally via the `executive-chat.js` component. It renders as a floating button/overlay and provides real-time interaction throughout the application.

## Customization

### Update Content
- Edit text content directly in component files (`js/components/`)
- Update styling in `css/styles.css`
- Modify quiz questions in `js/quiz/questions.js`

### Add New Sections
1. Create a new component file in `js/components/`
2. Implement `render[ComponentName]()` and `init[ComponentName]()` functions
3. Import in `index.html`
4. Add to page in `main.js`'s `renderIndexPage()` function

## Deployment

### Static Hosting
This project can be deployed to any static hosting service:

- **GitHub Pages** - Push to repository
- **Netlify** - Connect GitHub repository for auto-deploy
- **Vercel** - Import project for seamless deployment
- **AWS S3 + CloudFront** - Upload files to S3 bucket
- **Any Web Server** - Copy files and serve via HTTP

Simply upload all files to your hosting provider, and the application will run immediately.

## License

[Add your license information here]

## Support

For questions or issues, please contact or open an issue in the repository.
