# React + Vite + TypeScript Toast Demo

A modern, type-safe React implementation of stacked toast notifications using Vite as the build tool and TypeScript for enhanced developer experience.

## 🚀 Features

- **TypeScript** - Full type safety and IntelliSense support
- **Vite** - Lightning-fast development and build tool
- **React 19** - Latest React features and patterns
- **Modern Tooling** - ESLint, hot reload, and optimized builds
- **Component Architecture** - Well-structured, reusable components

## 🏗 Project Structure

```
demos/react-vite/
├── src/
│   ├── components/
│   │   ├── Icons.tsx          # SVG icon components
│   │   ├── Toast.tsx          # Individual toast component
│   │   └── ToastContainer.tsx # Toast management container
│   ├── App.tsx                # Main application component
│   ├── index.tsx              # Application entry point
│   ├── constants.ts           # Configuration constants
│   └── types.ts               # TypeScript type definitions
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── styles.css                 # Global styles
```

## 🔧 Development Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
cd demos/react-vite
npm install
```

### Development
```bash
npm run dev
# Opens development server at http://localhost:5173
```

### Build
```bash
npm run build
# Creates optimized production build in dist/
```

### Preview
```bash
npm run preview
# Preview production build locally
```

## 📝 TypeScript Implementation

### Type Definitions
```typescript
// types.ts
export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

export enum ToastType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
}

export interface ToastConfig {
  baseClass: string;
  accentColor: string;
  icon: React.ComponentType<IconProps>;
  title: string;
  ariaRole: string;
}
```

### Component Props
```typescript
// Toast component with strict typing
interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  onClose: (id: string) => void;
  stackStyle: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = ({ 
  id, 
  message, 
  type, 
  duration, 
  onClose, 
  stackStyle 
}) => {
  // Component implementation
};
```

### Custom Hooks
```typescript
// Custom hook for toast management
const useToasts = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  const addToast = useCallback((
    message: string, 
    type: ToastType, 
    duration: number = DEFAULT_TOAST_DURATION
  ) => {
    // Implementation
  }, []);
  
  const removeToast = useCallback((id: string) => {
    // Implementation
  }, []);
  
  return { toasts, addToast, removeToast };
};
```

## 🎨 Component Architecture

### Icon Components
```typescript
// Icons.tsx - Reusable SVG components
export const CheckCircleIcon: React.FC<IconProps> = (props) => (
  <svg {...props}>
    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
```

### Toast Component
```typescript
// Toast.tsx - Individual toast with animations
export const Toast: React.FC<ToastProps> = ({ 
  id, message, type, duration, onClose, stackStyle 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
  
  // Animation and lifecycle logic
  useEffect(() => {
    // Entry animation
  }, []);
  
  // Auto-dismiss timer
  useEffect(() => {
    const timer = setTimeout(() => handleClose(), duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);
  
  return (
    <div ref={toastRef} style={stackStyle} className={typeConfig.baseClass}>
      {/* Toast content */}
    </div>
  );
};
```

### Container Component
```typescript
// ToastContainer.tsx - Manages multiple toasts
export const ToastContainer: React.FC<ToastContainerProps> = ({ 
  toasts, 
  removeToast 
}) => {
  return (
    <div className="toast-container">
      {toasts.slice(0, MAX_RENDERED_TOASTS).map((toast, index) => {
        const stackStyle = calculateStackStyle(index, toasts.length);
        
        return (
          <Toast
            key={toast.id}
            {...toast}
            onClose={removeToast}
            stackStyle={stackStyle}
          />
        );
      })}
    </div>
  );
};
```

## ⚡ Vite Configuration

### Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
});
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 🎯 Advanced Features

### Performance Optimizations
- **React.memo** - Prevent unnecessary re-renders
- **useCallback** - Memoized event handlers
- **useMemo** - Expensive calculations caching
- **Code Splitting** - Dynamic imports for large components

### Error Boundaries
```typescript
class ToastErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Toast error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with toasts.</div>;
    }
    
    return this.props.children;
  }
}
```

### Testing Setup
```typescript
// Example test with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import { Toast } from './Toast';

test('renders toast with message', () => {
  render(
    <Toast
      id="test"
      message="Test message"
      type={ToastType.Success}
      duration={3000}
      onClose={jest.fn()}
      stackStyle={{}}
    />
  );
  
  expect(screen.getByText('Test message')).toBeInTheDocument();
});
```

## 🔄 Comparison with Other Implementations

### vs Pure Vanilla JS/CSS
- ✅ **Type Safety** - Compile-time error checking
- ✅ **Better DX** - IntelliSense and refactoring tools
- ✅ **Modern Tooling** - Hot reload, build optimization
- ✅ **Component Reusability** - Modular architecture
- ❌ **Build Complexity** - Requires build process
- ❌ **Larger Bundle** - Framework overhead

### vs React + CDN
- ✅ **Development Tools** - Hot reload, debugging
- ✅ **Type Safety** - TypeScript benefits
- ✅ **Build Optimization** - Tree shaking, minification
- ✅ **Package Management** - npm ecosystem
- ❌ **Setup Complexity** - More configuration required

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   - Navigate to `http://localhost:5173`
   - Hot reload enabled for instant feedback

4. **Build for production**
   ```bash
   npm run build
   ```

## 📚 Learning Objectives

This implementation demonstrates:

- **Modern React** - Hooks, functional components, latest patterns
- **TypeScript** - Type safety, interfaces, generics
- **Vite** - Modern build tooling and development experience
- **Component Design** - Separation of concerns, reusability
- **Performance** - Optimization techniques and best practices
- **Testing** - Unit testing with React Testing Library
- **Build Process** - Modern JavaScript toolchain

Perfect for production-ready applications and learning modern React development!