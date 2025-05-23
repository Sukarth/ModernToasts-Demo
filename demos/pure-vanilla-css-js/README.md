# Pure Vanilla JS/CSS Toast Demo

A pure HTML, CSS, and JavaScript implementation of stacked toast notifications with no external dependencies.

## 🚀 Features

- **Zero Dependencies** - Pure vanilla JavaScript implementation
- **Lightweight** - ~15KB total bundle size
- **Smooth Animations** - CSS keyframes and transitions
- **Stacked Layout** - Multiple toasts with depth effects
- **Auto-dismiss** - Configurable timeout with progress indicators
- **Responsive Design** - Works on all screen sizes

## 🏗 Implementation Details

### Architecture
- **Single HTML File** - Everything contained in one file for easy deployment
- **CSS Animations** - Keyframe-based border and fill animations
- **Pure JavaScript** - No frameworks, just pure JavaScript
- **Event-driven** - Clean event handling for user interactions

### Key Components
- **Toast Manager** - Handles toast lifecycle and stacking
- **Animation System** - CSS-based enter/exit animations
- **Progress Indicators** - Animated border and fill effects
- **Responsive Layout** - Mobile-first design approach

### Performance
- **Memory Efficient** - Automatic cleanup of removed toasts
- **Smooth Animations** - Hardware-accelerated CSS transforms
- **Minimal DOM** - Efficient element creation and removal

## 🎨 Customization

### Toast Configuration
```javascript
const ToastConstants = {
    DEFAULT_TOAST_DURATION: 3000,        // Toast display time (ms)
    MAX_VISIBLE_STACK_TOASTS: 3,         // Maximum visible toasts
    STACK_OFFSET_Y_PER_LEVEL: 6,         // Vertical spacing (px)
    STACK_OFFSET_X_PER_LEVEL: 4,         // Horizontal spacing (px)
    SCALE_DECREMENT_PER_LEVEL: 0.05,     // Scale reduction per level
    OPACITY_DECREMENT_PER_LEVEL: 0.2,    // Opacity reduction per level
    MAX_RENDERED_TOASTS: 5,              // Total toasts in DOM
    TOAST_EXIT_ANIMATION_DURATION: 350   // Exit animation time (ms)
};
```

### Styling
All styles are contained within the `<style>` tag and can be easily customized:

- **Colors** - Modify CSS custom properties for theme colors
- **Animations** - Adjust keyframe timings and effects
- **Layout** - Change positioning and spacing values
- **Typography** - Update font families and sizes

## 🔧 Usage

### Basic Implementation
```javascript
// Add a success toast
addToast("Operation completed successfully!", ToastType.Success);

// Add an error toast with custom duration
addToast("Something went wrong!", ToastType.Error, 5000);
```

### Toast Types
- `ToastType.Success` - Green theme for successful operations
- `ToastType.Error` - Red theme for errors and failures
- `ToastType.Info` - Blue theme for informational messages
- `ToastType.Warning` - Yellow theme for warnings and alerts

## 🎯 Browser Support

- **Modern Browsers** - Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **CSS Features** - CSS Grid, Flexbox, CSS Animations, CSS Custom Properties
- **JavaScript Features** - ES6+ syntax, Arrow functions, Template literals

## 📱 Responsive Behavior

- **Mobile** - Single column layout with full-width toasts
- **Tablet** - Optimized spacing and touch targets
- **Desktop** - Multi-column button grid with hover effects

## 🚀 Getting Started

1. **Open the file** - Simply open `index.html` in any modern browser
2. **No build process** - Everything works out of the box
3. **Customize** - Edit the constants and styles as needed
4. **Deploy** - Upload the single HTML file to any web server

## 💡 Learning Points

This implementation demonstrates:

- **Pure JavaScript** - DOM manipulation without frameworks
- **CSS Animations** - Complex keyframe animations
- **Event Handling** - Clean event delegation patterns
- **State Management** - Simple but effective state handling
- **Performance** - Efficient DOM operations and memory management

Perfect for understanding the fundamentals of web development without the complexity of modern frameworks!