# React + Vanilla CSS Toast Demo

A React implementation of stacked toast notifications using custom CSS styling and ES modules via CDN.

## 🚀 Features

- **React Components** - Modern functional components with hooks
- **Custom CSS** - Hand-crafted styles without CSS frameworks
- **ES Modules** - Direct browser imports via CDN
- **No Build Process** - Runs directly in the browser
- **TypeScript-like** - JSX syntax with modern JavaScript

## 🏗 Implementation Details

### Architecture
- **Single HTML File** - Self-contained React application
- **CDN Dependencies** - React loaded via esm.sh
- **Functional Components** - Modern React patterns with hooks
- **Custom CSS** - Vanilla CSS with CSS custom properties

### Key Components
```javascript
// Toast Component - Individual toast with animations
const Toast = ({ id, message, type, duration, onClose, stackStyle }) => {
  // Component logic with useEffect and useState
};

// ToastContainer - Manages multiple toasts and stacking
const ToastContainer = ({ toasts, removeToast }) => {
  // Container logic with positioning and layout
};

// Main App - Application entry point
const App = () => {
  // State management and toast operations
};
```

### React Patterns Used
- **useState** - Local state management for toasts
- **useEffect** - Lifecycle management and cleanup
- **useCallback** - Performance optimization for callbacks
- **useRef** - Direct DOM access for animations

## 🎨 Styling Approach

### CSS Architecture
- **Component-scoped** - Styles organized by component
- **CSS Custom Properties** - Dynamic values via CSS variables
- **Keyframe Animations** - Smooth enter/exit transitions
- **Responsive Design** - Mobile-first approach

### Animation System
```css
/* Toast entrance animation */
@keyframes toast-in {
  0% { opacity: 0; transform: translateY(20px) scale(0.9); }
  100% { opacity: 1; transform: translateY(0px) scale(1); }
}

/* Toast exit animation */
@keyframes toast-out {
  0% { opacity: 1; transform: translateY(0px) scale(1); }
  100% { opacity: 0; transform: translateY(20px) scale(0.9); }
}
```

## 🔧 Configuration

### Toast Constants
```javascript
const ToastConstants = {
  DEFAULT_TOAST_DURATION: 3000,
  MAX_VISIBLE_STACK_TOASTS: 3,
  STACK_OFFSET_Y_PER_LEVEL: 6,
  STACK_OFFSET_X_PER_LEVEL: 4,
  SCALE_DECREMENT_PER_LEVEL: 0.05,
  OPACITY_DECREMENT_PER_LEVEL: 0.2,
  MAX_RENDERED_TOASTS: 5
};
```

### Component Props
```javascript
// Toast component props
interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration: number;
  onClose: (id: string) => void;
  stackStyle: CSSProperties;
}
```

## 🎯 React Concepts Demonstrated

### State Management
- **Local State** - useState for toast array management
- **State Updates** - Immutable updates with spread operator
- **State Cleanup** - Proper cleanup in useEffect

### Component Lifecycle
- **Mounting** - Initial setup and animation triggers
- **Updates** - Re-rendering with new props
- **Unmounting** - Cleanup and memory management

### Event Handling
- **Synthetic Events** - React's event system
- **Event Delegation** - Efficient event handling
- **Callback Props** - Parent-child communication

## 🚀 Getting Started

1. **Open the file** - Open `index.html` in a modern browser
2. **No installation** - Everything loads from CDN
3. **Instant feedback** - Click buttons to see toasts
4. **Inspect code** - View source to see React implementation

## 📚 Learning Objectives

This demo teaches:

- **React Fundamentals** - Components, props, state, effects
- **Modern JavaScript** - ES6+ features and patterns
- **CSS Animations** - Keyframes and transitions
- **Component Architecture** - Separation of concerns
- **Performance** - Optimization techniques with React

## 🔄 Comparison with Other Implementations

### vs Pure Vanilla JS/CSS
- ✅ **Better Organization** - Component-based architecture
- ✅ **Easier State Management** - React hooks
- ✅ **Better Maintainability** - Declarative approach
- ❌ **Larger Bundle** - React dependency overhead

### vs React + Tailwind
- ✅ **Custom Styling** - Full control over CSS
- ✅ **Learning CSS** - Better understanding of styling
- ❌ **More Code** - Hand-written CSS vs utility classes
- ❌ **Slower Development** - Custom CSS takes more time

### vs React + Vite
- ✅ **No Build Process** - Direct browser execution
- ✅ **Simpler Setup** - Single HTML file
- ❌ **No TypeScript** - Missing type safety
- ❌ **No Hot Reload** - Manual refresh required

## 🌐 Browser Compatibility

- **Modern Browsers** - Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **ES Modules** - Native ES module support required
- **React 19** - Latest React features via CDN

Perfect for learning React concepts without the complexity of build tools!