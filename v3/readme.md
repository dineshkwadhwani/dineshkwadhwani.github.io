# Your Code Companion

A modern, fully-responsive personal portfolio and code companion website built with React, TypeScript, and shadcn-ui. Showcase your skills, projects, education, and experience with an elegant, interactive compass-based navigation system.

## Project Overview

This is a single-page application designed to present a professional portfolio with multiple sections including hero, about, education, testimonials, projects, skills, and contact information. Features a responsive compass-based navigation that adapts to desktop and mobile devices.

## 🎯 Key Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Compass Navigation**: Unique desktop compass sidebar and mobile drawer navigation
- **Multiple Portfolio Sections**: 
  - Hero section with CTA
  - About section
  - Education timeline
  - Client testimonials
  - Projects showcase
  - Skills display
  - Contact information
- **Modern UI Components**: Built with shadcn-ui for consistent, accessible design
- **Smooth Scrolling**: Animated section navigation with active section tracking
- **Type-Safe**: Full TypeScript support throughout the codebase

## 📁 Project Structure

```
src/
├── components/
│   ├── compass/                 # Navigation compass components
│   │   ├── DesktopCompass.tsx  # Sidebar compass for desktop
│   │   └── MobileCompass.tsx   # Drawer compass for mobile
│   ├── sections/                # Main page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                      # shadcn-ui component library
│   ├── NavLink.tsx             # Navigation link component
│   └── ...
├── hooks/
│   ├── useActiveSection.ts     # Hook for tracking active scroll section
│   ├── use-mobile.tsx          # Responsive design hook
│   └── use-toast.ts            # Toast notifications hook
├── lib/
│   └── utils.ts                # Utility functions
├── pages/
│   ├── Index.tsx               # Main portfolio page
│   └── NotFound.tsx            # 404 page
├── App.tsx                     # Main app component with routing
├── main.tsx                    # App entry point
└── ...
```

## 🎨 How to Update Structure & Design

### Adding a New Section

1. **Create a new section component** in `src/components/sections/`:
   ```tsx
   // src/components/sections/NewSection.tsx
   export const NewSection = () => {
     return (
       <section id="new-section" className="py-16 px-6">
         <h2 className="text-3xl font-bold mb-8">New Section</h2>
         {/* Your content here */}
       </section>
     );
   };
   ```

2. **Import and add to the main page** in `src/pages/Index.tsx`:
   ```tsx
   import { NewSection } from '@/components/sections/NewSection';
   
   // Inside the main component:
   <NewSection />
   ```

3. **Add navigation link** in the compass components if needed

### Customizing Navigation

- **Desktop Compass**: Edit `src/components/compass/DesktopCompass.tsx` to modify the sidebar navigation
- **Mobile Compass**: Edit `src/components/compass/MobileCompass.tsx` to modify the mobile drawer
- Navigation links are controlled via the `useActiveSection` hook

### Styling & Theme

- **Tailwind CSS**: Global styles in `src/index.css` and component-level in `tailwind.config.ts`
- **Component Styling**: Modify individual section components using Tailwind classes
- **shadcn-ui Components**: Located in `src/components/ui/` - customize colors and spacing there

### Updating Section Content

1. Edit the corresponding section file in `src/components/sections/`
2. Update text, images, and layout using Tailwind CSS classes
3. Maintain responsive design by using Tailwind's responsive prefixes (md:, lg:, etc.)

### Adding New UI Components

Add new shadcn-ui components as needed:
```sh
npx shadcn-ui@latest add <component-name>
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun package manager

### Local Development

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm i
# or
bun install

# Step 4: Start the development server
npm run dev
# or
bun run dev
```

The app will be available at `http://localhost:5173`

### Available Commands

```sh
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build locally
npm run lint         # Run ESLint to check code quality
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## 💻 How to Edit This Code

### Option 1: Use Lovable (Recommended for AI-Assisted Development)

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting. Changes will be committed automatically.

### Option 2: Use Your Preferred IDE

Clone the repo, make changes locally, and push them. Changes will be reflected in Lovable.

### Option 3: Edit Directly in GitHub

- Navigate to the desired file(s)
- Click the "Edit" button (pencil icon) at the top right
- Make changes and commit

### Option 4: Use GitHub Codespaces

- Go to your repository main page
- Click "Code" → "Codespaces" → "New codespace"
- Edit files and commit/push when done

## 🛠️ Technologies Used

This project is built with modern web technologies:

- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn-ui](https://ui.shadcn.com/)** - High-quality, accessible React components
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[React Query (TanStack Query)](https://tanstack.com/query/latest)** - Data fetching and caching
- **[React Hook Form](https://react-hook-form.com/)** - Efficient form handling
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Vitest](https://vitest.dev/)** - Unit testing framework
- **[ESLint](https://eslint.org/)** - Code quality and consistency

## 📤 Deployment

### Deploy to Production

1. Visit [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)
2. Click **Share** → **Publish**
3. Your site will be live

### Connect a Custom Domain

1. Navigate to **Project** → **Settings** → **Domains**
2. Click **Connect Domain**
3. Follow the setup instructions

Refer to the [custom domain documentation](https://docs.lovable.dev/features/custom-domain#custom-domain) for detailed steps.

## 🔧 Common Customization Tasks

### Change Colors/Theme

1. Edit `tailwind.config.ts` to customize your color palette
2. Update `src/index.css` for global styles
3. Modify individual components' Tailwind classes as needed

### Update Content

- **Hero Section**: Edit `src/components/sections/HeroSection.tsx`
- **About**: Edit `src/components/sections/AboutSection.tsx`
- **Projects**: Edit `src/components/sections/ProjectsSection.tsx`
- And so on for other sections...

### Add External Links

Update internal section links by modifying the `useActiveSection` hook or adding routes in `App.tsx`:

```tsx
<Route path="/new-page" element={<NewPage />} />
```

### Responsive Adjustments

Use Tailwind's responsive prefixes to adjust layouts:
```tsx
<div className="flex flex-col md:flex-row lg:grid lg:grid-cols-3">
  {/* Mobile: column, Tablet: row, Desktop: 3-column grid */}
</div>
```

## 📝 Project Info

**Project URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## 💡 Tips

- Use the `useActiveSection` hook to track which section is in view
- Leverage Tailwind's `container` and `max-w-*` classes for responsive design
- Test your changes locally with `npm run dev` before pushing
- Use `npm run build` to check for any build errors before deployment
