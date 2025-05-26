# Legacy ModernToasts Implementations

This folder contains the original implementations that were created during the development process of the ModernToasts library. These examples serve as historical reference and show the evolution from basic concepts to the modern, feature-rich library.

## 📚 Legacy Examples

| Implementation | Technology Stack | Features | Live Demo | Source Code |
| -------------- | ---------------- | -------- | --------- | ----------- |
| **Pure Vanilla JS/CSS** | HTML + CSS + JavaScript | Basic toast functionality | [🚀 Demo](https://sukarth.github.io/ModernToasts-Demo/legacy/demos/pure-vanilla-css-js/) | [📁 Source](./demos/pure-vanilla-css-js/) |
| **React + Vanilla CSS** | React + Custom CSS | Component-based with custom styling | [🚀 Demo](https://sukarth.github.io/ModernToasts-Demo/legacy/demos/react-vanilla-css/) | [📁 Source](./demos/react-vanilla-css/) |
| **React + Tailwind** | React + Tailwind CSS | Utility-first CSS framework | [🚀 Demo](https://sukarth.github.io/ModernToasts-Demo/legacy/demos/react-tailwind-css/) | [📁 Source](./demos/react-tailwind-css/) |
| **React + Vite** | React + TypeScript + Vite | Type-safe development build | [🚀 Demo](https://sukarth.github.io/ModernToasts-Demo/legacy/demos/react-vite/dist/) | [📁 Source](./demos/react-vite/) |

## 🔄 Evolution to Modern Library

These legacy implementations provided the foundation and inspiration for the modern **ModernToasts** library. Here's what evolved:

### Legacy Limitations
- ❌ Limited to 4 basic toast types (success, error, info, warning)
- ❌ Single animation style (left-to-right only)
- ❌ Fixed positioning (bottom-right only)
- ❌ No event system
- ❌ Limited customization options
- ❌ No TypeScript support in most examples
- ❌ Basic accessibility features
- ❌ No memory management
- ❌ Inconsistent API across implementations

### Modern Library Improvements
- ✅ **Rich Animation System** - 4 animation directions with customizable timing
- ✅ **Flexible Positioning** - 6 position options with custom offsets
- ✅ **Event System** - Complete lifecycle event handling
- ✅ **TypeScript Ready** - Full type safety and excellent DX
- ✅ **Accessibility First** - ARIA compliant, keyboard navigation, screen reader support
- ✅ **Memory Safe** - Proper cleanup of event listeners and timers
- ✅ **Highly Customizable** - Themes, colors, animations, and more
- ✅ **Consistent API** - Unified interface across all usage methods
- ✅ **Zero Dependencies** - Lightweight and self-contained
- ✅ **Security** - XSS protection with input sanitization

## 📊 Comparison Table

| Feature | Legacy Examples | Modern Library |
|---------|----------------|----------------|
| **Bundle Size** | ~15-50KB | ~7.8KB gzipped |
| **Animation Directions** | 1 (left-to-right) | 4 (all directions) |
| **Positions** | 1 (bottom-right) | 6 (all corners + centers) |
| **TypeScript Support** | Partial | Full |
| **Event System** | None | Complete |
| **Accessibility** | Basic | ARIA compliant |
| **Memory Management** | Manual | Automatic |
| **Customization** | Limited | Extensive |
| **API Consistency** | Varies | Unified |
| **Testing** | None | 92%+ coverage |

## 🏗 Legacy Project Structure

```
legacy/
├── demos/                      # Original demo implementations
│   ├── pure-vanilla-css-js/   # Pure HTML/CSS/JS implementation
│   ├── react-vanilla-css/     # React with custom CSS
│   ├── react-tailwind-css/    # React with Tailwind CSS
│   └── react-vite/           # React + TypeScript + Vite
├── docs/                      # Original documentation
├── examples/                  # Additional legacy examples
├── node_modules/              # Legacy dependencies
├── package.json              # Legacy package configuration
├── package-lock.json         # Legacy dependency lock
└── README.md                 # This file
```

## 🚀 Quick Start with Legacy Examples

### Pure Vanilla JS/CSS Version
```bash
# No build process required
open demos/pure-vanilla-css-js/index.html
```

### React + Vite Version
```bash
cd demos/react-vite
npm install
npm run dev
```

### React + Vanilla CSS Version
```bash
# Open directly in browser
open demos/react-vanilla-css/index.html
```

### React + Tailwind Version
```bash
# Open directly in browser
open demos/react-tailwind-css/index.html
```

## 📖 Legacy Documentation

- **[API Reference](./docs/api-reference.md)** - Original API documentation
- **[Implementation Comparison](./docs/implementation-comparison.md)** - Comparison between legacy approaches
- **[Build Instructions](./docs/build-instructions.md)** - Setup and deployment guide

## 🎯 Learning Value

These legacy examples are valuable for:

- **Understanding Evolution** - See how the library developed over time
- **Learning Different Approaches** - Compare implementation strategies
- **Framework Comparison** - Understand pros/cons of different tech stacks
- **Historical Reference** - Preserve the development journey
- **Educational Purpose** - Learn from the progression of ideas

## ⚠️ Important Notes

- **Not Recommended for Production** - Use the modern library instead
- **Limited Features** - Missing many capabilities of the modern library
- **No Active Maintenance** - These are preserved for reference only
- **Security Considerations** - May lack modern security features
- **Performance** - Not optimized like the modern library

## 🔗 Upgrade to Modern Library

Ready to use the modern, feature-rich library? Check out:

- **[ModernToasts Library](https://github.com/sukarth/ModernToasts)** - Main library repository
- **[NPM Package](https://www.npmjs.com/package/modern-toasts)** - Install via NPM
- **[Modern Examples](../)** - See the new implementations
- **[Migration Guide](https://github.com/sukarth/ModernToasts#migration-from-other-libraries)** - How to upgrade

---

<div align="center">
  <strong>Legacy implementations preserved for historical reference</strong>
  <br>
  <a href="../">← Back to Modern Examples</a> • 
  <a href="https://github.com/sukarth/ModernToasts">Modern Library</a>
</div>