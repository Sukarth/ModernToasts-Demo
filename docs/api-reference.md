# API Reference

Complete API documentation for the ModernToasts-demo implementations.

## 🎯 Core API

### Toast Types

All implementations support four toast types:

```typescript
enum ToastType {
  Success = 'success',
  Error = 'error', 
  Info = 'info',
  Warning = 'warning'
}
```

### Toast Configuration

```typescript
interface ToastConfig {
  DEFAULT_TOAST_DURATION: number;   // Default: 3000ms
  MAX_VISIBLE_STACK_TOASTS: number;    // Default: 3
  STACK_OFFSET_Y_PER_LEVEL: number;    // Default: 6px
  STACK_OFFSET_X_PER_LEVEL: number;    // Default: 4px
  SCALE_DECREMENT_PER_LEVEL: number;   // Default: 0.05
  OPACITY_DECREMENT_PER_LEVEL: number; // Default: 0.2
  MAX_RENDERED_TOASTS: number;         // Default: 5
}
```

## 🍞 Pure Vanilla JS/CSS API

### Core Functions

#### `addToast(message, type, duration?)`

Creates and displays a new toast notification.

**Parameters:**

- `message` (string): The text content of the toast
- `type` (ToastType): The type of toast (success, error, info, warning)
- `duration` (number, optional): Display duration in milliseconds (default: 3000)

**Example:**

```javascript
addToast("Operation completed successfully!", ToastType.Success);
addToast("Something went wrong!", ToastType.Error, 5000);
```

#### `removeToast(id)`

Manually removes a toast by its ID.

**Parameters:**

- `id` (string): The unique identifier of the toast to remove

**Example:**

```javascript
removeToast("toast-123456789");
```

### Internal Functions

#### `createToastElement(toastData)`

Creates the DOM element for a toast.

**Parameters:**

- `toastData` (object): Toast configuration object

**Returns:** HTMLDivElement

#### `updateToastStackStyles()`

Updates the positioning and styling of all active toasts.

### Global Variables

#### `activeToasts`

Array containing all currently active toast objects.

```javascript
// Toast object structure
{
  id: string,
  message: string,
  type: ToastType,
  duration: number,
  element: HTMLDivElement,
  closeTimer: number,
  isClosing: boolean
}
```

#### `toastContainer`

Reference to the main toast container DOM element.

#### `toastContainerInner`

Reference to the inner container for toast positioning.

### Constants

```javascript
const ToastConstants = {
  DEFAULT_TOAST_DURATION: 3000,
  MAX_VISIBLE_STACK_TOASTS: 3,
  STACK_OFFSET_Y_PER_LEVEL: 6,
  STACK_OFFSET_X_PER_LEVEL: 4,
  SCALE_DECREMENT_PER_LEVEL: 0.05,
  OPACITY_DECREMENT_PER_LEVEL: 0.2,
  MAX_RENDERED_TOASTS: 5,
  TOAST_EXIT_ANIMATION_DURATION: 350
};
```

## ⚛️ React API (All React Implementations)

### Components

#### `<Toast />`

Individual toast component with animations and interactions.

**Props:**

```typescript
interface ToastProps {
  id: string;                           // Unique identifier
  message: string;                      // Toast content
  type: ToastType;                      // Toast type
  duration: number;                     // Display duration (ms)
  onClose: (id: string) => void;        // Close callback
  stackStyle: React.CSSProperties;      // Positioning styles
}
```

**Example:**

```jsx
<Toast
  id="toast-123"
  message="Success message"
  type={ToastType.Success}
  duration={3000}
  onClose={handleClose}
  stackStyle={{ transform: 'translateY(0px)' }}
/>
```

#### `<ToastContainer />`

Container component that manages multiple toasts and their positioning.

**Props:**

```typescript
interface ToastContainerProps {
  toasts: Toast[];                      // Array of toast objects
  removeToast: (id: string) => void;    // Remove toast function
}
```

**Example:**

```jsx
<ToastContainer 
  toasts={toasts} 
  removeToast={removeToast} 
/>
```

### Hooks (React + Vite Implementation)

#### `useToasts()`

Custom hook for managing toast state and operations.

**Returns:**

```typescript
{
  toasts: Toast[];                      // Current toast array
  addToast: (message: string, type: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}
```

**Example:**

```typescript
const { toasts, addToast, removeToast } = useToasts();

// Add a toast
addToast("Hello World!", ToastType.Info);

// Remove a toast
removeToast("toast-id");
```

### State Management

#### Toast State Structure

```typescript
interface Toast {
  id: string;                           // Unique identifier
  message: string;                      // Display message
  type: ToastType;                      // Toast type
  duration: number;                     // Display duration
}
```

#### State Operations

```typescript
// Add toast to state
setToasts(prev => [newToast, ...prev]);

// Remove toast from state
setToasts(prev => prev.filter(toast => toast.id !== id));

// Update toast in state
setToasts(prev => prev.map(toast => 
  toast.id === id ? { ...toast, ...updates } : toast
));
```

## 🎨 Styling API

### CSS Classes (Pure Vanilla JS/CSS & React + CSS)

#### Container Classes

```css
.toast-container          /* Main container */
.toast-container-inner    /* Inner positioning container */
```

#### Toast Classes

```css
.toast                    /* Base toast styles */
.toast-success           /* Success toast variant */
.toast-error             /* Error toast variant */
.toast-info              /* Info toast variant */
.toast-warning           /* Warning toast variant */
.toast.visible           /* Visible state class */
```

#### Content Classes

```css
.toast-content           /* Toast content wrapper */
.toast-icon              /* Icon container */
.toast-text              /* Text content wrapper */
.toast-title             /* Toast title */
.toast-message           /* Toast message */
.toast-close             /* Close button container */
.toast-close-button      /* Close button */
```

#### Animation Classes

```css
.border-element          /* Animated border elements */
.border-left-top         /* Top-left border animation */
.border-left-bottom      /* Bottom-left border animation */
.border-top              /* Top border animation */
.border-bottom           /* Bottom border animation */
.border-right-top        /* Top-right border animation */
.border-right-bottom     /* Bottom-right border animation */
.fill-progress           /* Progress fill animation */
```

### Tailwind Classes (React + Tailwind)

#### Layout Classes

```css
/* Container */
fixed bottom-4 right-4 w-[calc(100%-2rem)] max-w-sm z-50

/* Toast */
pointer-events-auto w-full rounded-lg shadow-lg overflow-hidden
bg-gray-900 border transition-all duration-300 ease-out

/* Content */
flex items-center p-4 relative z-10
```

#### Type-specific Classes

```css
/* Success */
border-green-500/50 text-green-500

/* Error */
border-red-500/50 text-red-500

/* Info */
border-blue-500/50 text-blue-500

/* Warning */
border-yellow-500/50 text-yellow-500
```

### CSS Custom Properties

#### Animation Duration

```css
:root {
  --duration: 3s;        /* Toast display duration */
}
```

#### Color Theming

```css
:root {
  --toast-bg: #111827;
  --toast-text: #ffffff;
  --toast-border: rgba(255, 255, 255, 0.1);
  --success-color: #22c55e;
  --error-color: #ef4444;
  --info-color: #3b82f6;
  --warning-color: #eab308;
}
```

## 🔧 Configuration API

### Runtime Configuration

#### Update Constants (Pure Vanilla JS/CSS)

```javascript
// Modify global constants
ToastConstants.DEFAULT_TOAST_DURATION = 3000;
ToastConstants.MAX_VISIBLE_STACK_TOASTS = 5;

// Update CSS custom property
document.documentElement.style.setProperty(
  '--duration', 
  (ToastConstants.DEFAULT_TOAST_DURATION / 1000) + 's'
);
```

#### Component Configuration (React)

```typescript
// Pass configuration as props
const config = {
  maxVisible: 5,
  defaultDuration: 3000,
  position: 'bottom-right'
};

<ToastProvider config={config}>
  <App />
</ToastProvider>
```

### Build-time Configuration (Vite)

#### Vite Config

```typescript
// vite.config.ts
export default defineConfig({
  define: {
    __TOAST_CONFIG__: JSON.stringify({
      defaultDuration: 3000,
      maxVisible: 5
    })
  }
});
```

#### Environment Variables

```bash
# .env
VITE_TOAST_DURATION=3000
VITE_MAX_TOASTS=5
VITE_ANIMATION_SPEED=300
```

## 🎭 Animation API

### CSS Keyframes

#### Entry Animation

```css
@keyframes toast-in {
  0% { 
    opacity: 0; 
    transform: translateY(20px) scale(0.9); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0px) scale(1); 
  }
}
```

#### Exit Animation

```css
@keyframes toast-out {
  0% { 
    opacity: 1; 
    transform: translateY(0px) scale(1); 
  }
  100% { 
    opacity: 0; 
    transform: translateY(20px) scale(0.9); 
  }
}
```

#### Progress Animation

```css
@keyframes fill-progress {
  0% { width: 0%; }
  6% { width: 0%; }
  100% { width: 150%; }
}
```

### JavaScript Animation Control

#### Manual Animation Triggers

```javascript
// Trigger entry animation
toast.classList.add('visible');

// Trigger exit animation
toast.classList.remove('visible');

// Wait for animation completion
toast.addEventListener('transitionend', handleAnimationEnd);
```

## 🔍 Event API

### Event Listeners

#### Toast Events (Pure Vanilla JS/CSS)

```javascript
// Close button click
closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  removeToast(toastId);
});

// Animation end
toast.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'opacity') {
    // Handle animation completion
  }
});
```

#### React Events

```typescript
// Close handler
const handleClose = useCallback(() => {
  onClose(id);
}, [id, onClose]);

// Animation end handler
const handleTransitionEnd = useCallback((event: TransitionEvent) => {
  if (event.propertyName === 'opacity') {
    // Handle animation completion
  }
}, []);
```

### Custom Events

#### Dispatch Custom Events

```javascript
// Toast created event
window.dispatchEvent(new CustomEvent('toast:created', {
  detail: { id, message, type }
}));

// Toast removed event
window.dispatchEvent(new CustomEvent('toast:removed', {
  detail: { id }
}));
```

#### Listen for Custom Events

```javascript
window.addEventListener('toast:created', (event) => {
  console.log('Toast created:', event.detail);
});

window.addEventListener('toast:removed', (event) => {
  console.log('Toast removed:', event.detail);
});
```

## 🧪 Testing API

### Test Utilities (React + Vite)

#### Render Helpers

```typescript
import { render, screen } from '@testing-library/react';

const renderToast = (props = {}) => {
  const defaultProps = {
    id: 'test-toast',
    message: 'Test message',
    type: ToastType.Success,
    duration: 3000,
    onClose: jest.fn(),
    stackStyle: {}
  };
  
  return render(<Toast {...defaultProps} {...props} />);
};
```

#### Interaction Helpers

```typescript
import { fireEvent } from '@testing-library/react';

const clickCloseButton = () => {
  const closeButton = screen.getByLabelText('Close notification');
  fireEvent.click(closeButton);
};

const waitForToastRemoval = async () => {
  await waitFor(() => {
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
};
```

This API reference provides comprehensive documentation for integrating and customizing the toast notification system across all implementations.
