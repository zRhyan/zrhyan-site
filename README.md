# 🌟 Rhyan’s Blog 🚀

Welcome to the repository for **Rhyan’s Blog**, a sleek and modern personal website built with **Astro** and **Tailwind CSS**! This project is my creative space to share ideas on **Philosophy, AI, Neuroscience, Art, Physics, Mathematics and more**, while showcasing my portfolio for freelance writing. With a elegant design, multilingual support (English/Portuguese), and smooth animations, this site is both a professional portfolio and a foundation for my future content creation! ✨

---

## 🛠️ Installation Guide

Get started with **Astro** and **Tailwind CSS v4** to run this project locally. Follow these steps to set up the environment and style the site with Tailwind’s utility classes. No JavaScript knowledge required—just HTML/CSS basics! 📚

### Prerequisites
- **Node.js** (v18+): Install from [nodejs.org](https://nodejs.org) and verify with `node -v` and `npm -v`.

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/rhyan-blog.git
cd rhyan-blog
```

### Step 2: Install Astro
1. **Initialize Astro**:
   - If starting fresh, create a new Astro project:
     ```bash
     npm create astro@latest
     ```
     - Choose:
       - Project name: `rhyan-blog`
       - Template: “Empty”
       - TypeScript: “No” (to keep it simple)
       - Install dependencies: “Yes”
   - If using this repo, skip to dependencies.

2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Step 3: Install Tailwind CSS v4
Tailwind CSS v4 is integrated via the official Vite plugin. Follow these steps based on your Astro version (Astro docs on [Tailwind](https://docs.astro.build/en/guides/styling/#tailwind)):

#### For Astro >=5.2.0 (Recommended) 🚀
Use the `astro add` command to automatically install and configure Tailwind CSS v4:
```bash
npx astro add tailwind
```
- This installs the **@tailwindcss/vite** plugin and sets up Tailwind in your project.
- It creates `src/styles/global.css` with:
  ```css
  @import "tailwindcss";
  ```
- It updates `astro.config.mjs` to include the Vite plugin.

#### For Astro <5.2.0
Manually add Tailwind CSS v4 by following the [Tailwind CSS Vite integration guide](https://tailwindcss.com/docs/guides/vite):
1. Install Tailwind and Vite plugin:
   ```bash
   npm install -D tailwindcss @tailwindcss/vite
   ```
2. Update `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   import tailwindcss from '@tailwindcss/vite';
   export default defineConfig({
     vite: {
       plugins: [tailwindcss()],
     },
   });
   ```
3. Create `src/styles/global.css`:
   ```css
   @import "tailwindcss";
   ```
4. Initialize `tailwind.config.js`:
   ```bash
   npx tailwindcss init
   ```
   Update it:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

### Step 4: Apply Tailwind Styles
1. **Import Global CSS**:
   - Ensure `src/styles/global.css` exists with:
     ```css
     @import "tailwindcss";
     ```
   - This makes Tailwind classes (e.g., `bg-primary`, `text-white`) available.

2. **Use in Layout**:
   - Import `global.css` in your main layout (`src/layouts/MainLayout.astro`) to apply Tailwind across all pages:
     ```astro
     ---
     import '../styles/global.css';
     ---
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Rhyan’s Blog</title>
       </head>
       <body>
         <slot />
       </body>
     </html>
     ```

3. **Run the Project**:
   ```bash
   npm run dev
   ```
   - Open `http://localhost:4321` to see the site.
   - Test Tailwind by adding `<div class="bg-blue-500 text-white p-4">Test</div>` to `src/pages/index.astro`.

### Troubleshooting
- **Tailwind Not Working?** Check `tailwind.config.js` for correct `content` paths and ensure `global.css` is imported.
- **Astro Errors?** Verify Node.js version (`node -v`) and run `npm install` again.
- **Need Help?** Check [Astro Docs](https://docs.astro.build) or [Tailwind Docs](https://tailwindcss.com/docs) or ping me on X! 🐦

---

## 📂 Folder Structure

The project is organized for **clarity**, **reusability**, and **scalability**, making it easy to maintain and extend. Here’s a breakdown of the key folders and files:

```
rhyan-blog/
├── src/                     🌟 Source code
│   ├── components/          🧩 Reusable UI components
│   │   ├── Header.astro     # Navigation with logo, links, social icons
│   │   ├── Footer.astro     # Footer with copyright and links
│   │   ├── LanguageSwitcher.astro  # Language toggle (English/Portuguese)
│   │   └── PostCard.astro   # Blog post card for recent posts
│   ├── layouts/             📜 Page templates
│   │   └── MainLayout.astro # Main layout with header, footer, styles
│   ├── pages/               🖥️ Routes for the site
│   │   ├── index.astro      # Homepage (intro, recent posts)
│   │   ├── posts.astro      # Blog list page
│   │   ├── posts/[...slug].astro  # Dynamic blog post pages
│   │   └── about.astro      # About Me page
│   ├── content/             📝 Blog posts in markdown
│   │   ├── posts/
│   │   │   ├── en/          # English posts
│   │   │   └── pt/          # Portuguese posts
│   ├── styles/              🎨 Global styles
│   │   └── global.css       # Tailwind imports and custom CSS
│   └── i18n/                🌐 Translations
│       ├── en.json          # English translations
│       └── pt.json          # Portuguese translations
├── public/                  🖼️ Static assets
│   ├── logo.png             # Personal logo
│   ├── favicon.ico          # Site favicon
│   └── photo.jpg            # Optional profile photo
├── astro.config.mjs         ⚙️ Astro configuration
├── tailwind.config.js       🎨 Tailwind configuration (colors, fonts)
└── package.json             📦 Project dependencies
```

### Key Notes
- **Components**: Stored in `src/components/` for reuse (e.g., `Header.astro` across pages).
- **Layouts**: `src/layouts/` ensures consistent structure (header, footer, styles).
- **Content**: Markdown posts in `src/content/posts/` are split by language (`en/`, `pt/`) for multilingual support.
- **Styles**: `src/styles/global.css` centralizes Tailwind and custom CSS to avoid repetition.
- **Assets**: Static files (images, icons) in `public/` are accessible at `/logo.png`, etc.
- **Translations**: `src/i18n/` holds JSON files for English and Portuguese text.

This structure supports **progressive loading**, **animations**, and **accessibility**, making the site both functional and future-proof! 🚀
