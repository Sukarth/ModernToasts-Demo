# ModernToasts-Demo

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A comprehensive showcase of modern stacked overlay toast notification implementations using different technologies and approaches. This project demonstrates the same toast functionality across multiple frameworks and styling methodologies.

## 🚀 Live Demos

| Implementation                | Technology Stack          | Features                             | Live Demo | Source Code |
| ----------------------------- | ------------------------- | ------------------------------------ | --------- | ----------- |
| **Pure Vanilla JS/CSS** | HTML + CSS + JavaScript   | Pure implementation, no dependencies | [🚀 Live Demo](https://sukarth.github.io/ModernToasts-Demo/demos/pure-vanilla-css-js/) | [📁 Source](./demos/pure-vanilla-css-js/) |
| **React + Vanilla CSS** | React + Custom CSS        | Component-based with custom styling  | [🚀 Live Demo](https://sukarth.github.io/ModernToasts-Demo/demos/react-vanilla-css/) | [📁 Source](./demos/react-vanilla-css/) |
| **React + Tailwind**    | React + Tailwind CSS      | Utility-first CSS framework          | [🚀 Live Demo](https://sukarth.github.io/ModernToasts-Demo/demos/react-tailwind-css/) | [📁 Source](./demos/react-tailwind-css/) |
| **React + Vite**        | React + TypeScript + Vite | Type-safe development build          | [🚀 Live Demo](https://sukarth.github.io/ModernToasts-Demo/demos/react-vite/dist/) | [📁 Source](./demos/react-vite/) |

## ✨ Features

- 🎯 **Stacked Toast Animations** - Smooth enter/exit animations with stacking effects
- 🎨 **Multiple Toast Types** - Success, Error, Info, and Warning variants
- ⏰ **Auto-dismiss Functionality** - Configurable timeout with progress indicators
- ❌ **Manual Close Buttons** - User-controlled dismissal
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- ♿ **Accessibility Support** - ARIA labels, roles, and keyboard navigation
- 🎭 **Smooth Animations** - CSS transitions and keyframe animations
- 🔧 **Configurable** - Customizable duration, positioning, and styling

## 🛠 Implementation Comparison

| Feature                        | Pure Vanilla JS/CSS | React + CSS | React + Tailwind | React + Vite |
| ------------------------------ | ---------- | ----------- | ---------------- | ------------ |
| **Bundle Size**          | ~15KB      | ~45KB       | ~50KB            | ~45KB        |
| **Type Safety**          | ❌         | ❌          | ❌               | ✅           |
| **Build Process**        | None       | Basic       | Basic            | Advanced     |
| **Maintainability**      | Good       | Better      | Better           | Best         |
| **Learning Curve**       | Easy       | Medium      | Medium           | Medium       |
| **Performance**          | Excellent  | Good        | Good             | Good         |
| **Developer Experience** | Basic      | Good        | Great            | Excellent    |

## 🏗 Project Structure

```
ModernToasts-Demo/
├── demos/
│   ├── pure-vanilla-css-js/  # Pure HTML/CSS/JS implementation
│   ├── react-vanilla-css/    # React with custom CSS
│   ├── react-tailwind-css/   # React with Tailwind CSS
│   └── react-vite/          # React + TypeScript + Vite
│       ├── src/
│       │   ├── components/   # Reusable toast components
│       │   ├── App.tsx      # Main application
│       │   └── index.tsx    # Entry point
│       └── package.json     # Dependencies and scripts
├── docs/                    # Additional documentation
├── examples/               # Integration examples
└── README.md              # This file
```

## 🚀 Quick Start

### Pure Vanilla JS/CSS Version
```bash
# No build process required
open demos/pure-vanilla-css-js/index.html
```

### React + Vite Version (Recommended for Development)
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

📖 **For detailed build instructions and deployment guides, see [Build Instructions](./docs/build-instructions.md)**

## 🎨 Customization

Each implementation supports customization of:

- **Toast Duration** - How long toasts remain visible
- **Stack Limit** - Maximum number of visible toasts
- **Animation Timing** - Speed of enter/exit animations
- **Positioning** - Toast container placement
- **Styling** - Colors, fonts, and visual effects

### Example: Pure Vanilla JS/CSS Customization

```javascript
const ToastConstants = {
    DEFAULT_TOAST_DURATION: 3000,    // 3 seconds
    MAX_VISIBLE_STACK_TOASTS: 5,     // Show 5 toasts max
    STACK_OFFSET_Y_PER_LEVEL: 8,     // Vertical spacing
    STACK_OFFSET_X_PER_LEVEL: 6,     // Horizontal spacing
};
```

### Example: React + TypeScript Customization

```typescript
interface ToastConfig {
    duration?: number;
    position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
    maxVisible?: number;
    showProgress?: boolean;
}
```

## 🧪 Features Demonstrated

### Core Toast Functionality

- **Toast Creation** - Programmatic toast generation
- **Type Variants** - Success, error, info, warning styles
- **Auto-dismiss** - Configurable timeout behavior
- **Manual Dismiss** - Close button functionality
- **Progress Indicators** - Visual countdown animations

### Advanced Features

- **Stacking Behavior** - Multiple toasts with depth effects
- **Animation System** - Smooth enter/exit transitions
- **Responsive Layout** - Mobile-friendly positioning
- **Accessibility** - Screen reader support and keyboard navigation
- **Performance** - Optimized rendering and memory management

## 🎯 Use Cases

This project serves as:

- **Learning Resource** - Compare implementation approaches
- **Component Library** - Copy components for your projects
- **Performance Benchmark** - Analyze different tech stack impacts
- **Design Reference** - Modern UI/UX patterns
- **Integration Guide** - See how to implement in various frameworks

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- Add new implementation variants
- Improve existing code
- Fix bugs or issues
- Enhance documentation
- Suggest new features

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** - For the excellent React framework
- **Vite Team** - For the fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Heroicons** - For the beautiful SVG icons

---

Made with ❤️ by Sukarth Acharya
