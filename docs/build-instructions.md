# Build Instructions

This guide explains how to build and run each demo implementation.

## 📋 Prerequisites

- **Node.js 16+** (for React + Vite demo only)
- **Modern web browser** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **Local web server** (optional, for serving static files)

## 🚀 Quick Start Commands

### Install Dependencies (One-time setup)
```bash
# Install dependencies for React + Vite demo
npm run install-all
```

### Development
```bash
# Start React + Vite development server
npm run dev:react-vite
```

### Production Build
```bash
# Build React + Vite for production
npm run build:react-vite

# Build all demos that require building
npm run build:all
```

## 🏗 Individual Demo Instructions

### 1. Pure Vanilla JS/CSS Demo

**No build process required!**

```bash
# Method 1: Open directly in browser
open demos/pure-vanilla-css-js/index.html

# Method 2: Serve with local server (recommended)
cd demos/pure-vanilla-css-js
python -m http.server 8000
# Then open: http://localhost:8000

# Method 3: Using Node.js serve
npx serve demos/pure-vanilla-css-js
```

**Features:**
- ✅ Zero dependencies
- ✅ No build process
- ✅ Works offline
- ✅ ~15KB total size

### 2. React + Vanilla CSS Demo

**No build process required!**

```bash
# Method 1: Open directly in browser
open demos/react-vanilla-css/index.html

# Method 2: Serve with local server (recommended)
cd demos/react-vanilla-css
python -m http.server 8001
# Then open: http://localhost:8001

# Method 3: Using Node.js serve
npx serve demos/react-vanilla-css
```

**Features:**
- ✅ React via CDN
- ✅ No build process
- ✅ ES modules support
- ✅ ~45KB total size

### 3. React + Tailwind CSS Demo

**No build process required!**

```bash
# Method 1: Open directly in browser
open demos/react-tailwind-css/index.html

# Method 2: Serve with local server (recommended)
cd demos/react-tailwind-css
python -m http.server 8002
# Then open: http://localhost:8002

# Method 3: Using Node.js serve
npx serve demos/react-tailwind-css
```

**Features:**
- ✅ React via CDN
- ✅ Tailwind CSS via CDN
- ✅ No build process
- ✅ ~50KB total size

### 4. React + Vite + TypeScript Demo

**Build process required for development and production.**

#### Development
```bash
cd demos/react-vite

# Install dependencies (first time only)
npm install

# Start development server with hot reload
npm run dev

# Opens at: http://localhost:5173
```

#### Production Build
```bash
cd demos/react-vite

# Build for production
npm run build

# Preview production build
npm run preview

# Serve built files
npx serve dist
```

**Features:**
- ✅ TypeScript support
- ✅ Hot module replacement
- ✅ Optimized production builds
- ✅ Modern development experience

## 🌐 Deployment Instructions

### GitHub Pages Deployment

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions" or "Deploy from a branch"
3. **For React + Vite demo**, build first:
   ```bash
   cd demos/react-vite
   npm run build
   # Commit the dist/ folder or use GitHub Actions
   ```

### Static Hosting (Netlify, Vercel, etc.)

#### For Pure HTML Demos
- Simply upload the demo folder
- Set the root directory to the specific demo folder
- No build commands needed

#### For React + Vite Demo
- **Build command:** `cd demos/react-vite && npm run build`
- **Publish directory:** `demos/react-vite/dist`
- **Node version:** 16+

### Local Development Server

#### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js
```bash
# Install serve globally
npm install -g serve

# Serve current directory
serve .

# Serve specific demo
serve demos/pure-vanilla-css-js
```

#### Using PHP
```bash
php -S localhost:8000
```

## 🔧 Build Customization

### React + Vite Configuration

The `demos/react-vite/vite.config.ts` file can be customized:

```typescript
export default defineConfig({
  plugins: [react()],
  base: './', // For relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // Enable for debugging
    minify: 'esbuild', // or 'terser'
  },
  server: {
    port: 5173,
    open: true, // Auto-open browser
  }
});
```

### Environment Variables

Create `.env` files in `demos/react-vite/`:

```bash
# .env.local
VITE_TOAST_DURATION=3000
VITE_MAX_TOASTS=5
VITE_ANIMATION_SPEED=300
```

## 📦 Production Optimization

### Bundle Analysis
```bash
cd demos/react-vite

# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

### Performance Tips

1. **Enable gzip compression** on your server
2. **Set proper cache headers** for static assets
3. **Use CDN** for better global performance
4. **Optimize images** if you add any
5. **Enable HTTP/2** on your server

## 🧪 Testing Builds

### Automated Testing
```bash
# Test all demos work correctly
npm run test:demos

# Test specific demo
npm run test:vanilla
npm run test:react-vite
```

### Manual Testing Checklist

- [ ] All toast types display correctly
- [ ] Animations work smoothly
- [ ] Stacking behavior functions properly
- [ ] Auto-dismiss timers work
- [ ] Manual close buttons work
- [ ] Responsive design on mobile
- [ ] Accessibility features work
- [ ] No console errors

## 🚨 Troubleshooting

### Common Issues

#### "Module not found" errors
```bash
# Clear node_modules and reinstall
cd demos/react-vite
rm -rf node_modules package-lock.json
npm install
```

#### CORS errors when opening HTML files
- Use a local server instead of `file://` protocol
- Modern browsers block local file access for security

#### Build fails with memory errors
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

#### TypeScript errors in React + Vite
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Update dependencies
npm update
```

### Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| ES Modules | 61+ | 60+ | 10.1+ | 16+ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 16+ |
| Fetch API | 42+ | 39+ | 10.1+ | 14+ |

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Need help?** Open an issue in the repository with details about your setup and the problem you're experiencing.