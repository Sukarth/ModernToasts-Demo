# Integration Examples

Real-world examples of how to integrate the toast notification system into different types of applications.

## 🚀 Quick Integration

### Basic HTML Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App with Toasts</title>
</head>
<body>
    <!-- Your app content -->
    <div id="app">
        <button onclick="showSuccess()">Success</button>
        <button onclick="showError()">Error</button>
    </div>

    <!-- Include the vanilla JS toast system -->
    <script src="path/to/toast-system.js"></script>
    <script>
        function showSuccess() {
            addToast("Operation successful!", ToastType.Success);
        }
        
        function showError() {
            addToast("Something went wrong!", ToastType.Error);
        }
    </script>
</body>
</html>
```

### React Application
```jsx
import React, { useState, useCallback } from 'react';
import { ToastContainer, useToasts } from './components/Toast';

function App() {
    const { toasts, addToast, removeToast } = useToasts();

    const handleApiCall = async () => {
        try {
            const response = await fetch('/api/data');
            if (response.ok) {
                addToast('Data loaded successfully!', 'success');
            } else {
                addToast('Failed to load data', 'error');
            }
        } catch (error) {
            addToast('Network error occurred', 'error');
        }
    };

    return (
        <div className="app">
            <button onClick={handleApiCall}>Load Data</button>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </div>
    );
}
```

## 🔧 Framework Integrations

### Next.js Integration

#### pages/_app.js
```jsx
import { ToastProvider } from '../components/Toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <ToastProvider>
            <Component {...pageProps} />
        </ToastProvider>
    );
}

export default MyApp;
```

#### components/Toast/ToastProvider.jsx
```jsx
import React, { createContext, useContext, useState, useCallback } from 'react';
import { ToastContainer } from './ToastContainer';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type, duration = 3000) => {
        const id = Date.now().toString();
        const newToast = { id, message, type, duration };
        setToasts(prev => [newToast, ...prev]);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
};
```

#### Usage in pages
```jsx
import { useToast } from '../components/Toast';

export default function HomePage() {
    const { addToast } = useToast();

    const handleSubmit = async (formData) => {
        try {
            await submitForm(formData);
            addToast('Form submitted successfully!', 'success');
        } catch (error) {
            addToast('Failed to submit form', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form content */}
        </form>
    );
}
```

### Vue.js Integration

#### main.js
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import ToastPlugin from './plugins/toast';

const app = createApp(App);
app.use(ToastPlugin);
app.mount('#app');
```

#### plugins/toast.js
```javascript
import { reactive } from 'vue';

const toastState = reactive({
    toasts: []
});

export default {
    install(app) {
        app.config.globalProperties.$toast = {
            success: (message, duration = 3000) => {
                addToast(message, 'success', duration);
            },
            error: (message, duration = 3000) => {
                addToast(message, 'error', duration);
            },
            info: (message, duration = 3000) => {
                addToast(message, 'info', duration);
            },
            warning: (message, duration = 3000) => {
                addToast(message, 'warning', duration);
            }
        };

        app.provide('toasts', toastState);
    }
};

function addToast(message, type, duration) {
    const id = Date.now().toString();
    toastState.toasts.unshift({ id, message, type, duration });
}
```

#### Component usage
```vue
<template>
    <div>
        <button @click="showSuccess">Success</button>
        <button @click="showError">Error</button>
        <ToastContainer />
    </div>
</template>

<script>
export default {
    methods: {
        showSuccess() {
            this.$toast.success('Operation completed!');
        },
        showError() {
            this.$toast.error('Something went wrong!');
        }
    }
};
</script>
```

### Angular Integration

#### toast.service.ts
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration: number;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toastsSubject = new BehaviorSubject<Toast[]>([]);
    public toasts$ = this.toastsSubject.asObservable();

    addToast(message: string, type: Toast['type'], duration = 3000) {
        const id = Date.now().toString();
        const newToast: Toast = { id, message, type, duration };
        
        const currentToasts = this.toastsSubject.value;
        this.toastsSubject.next([newToast, ...currentToasts]);

        setTimeout(() => {
            this.removeToast(id);
        }, duration);
    }

    removeToast(id: string) {
        const currentToasts = this.toastsSubject.value;
        this.toastsSubject.next(currentToasts.filter(toast => toast.id !== id));
    }

    success(message: string, duration?: number) {
        this.addToast(message, 'success', duration);
    }

    error(message: string, duration?: number) {
        this.addToast(message, 'error', duration);
    }

    info(message: string, duration?: number) {
        this.addToast(message, 'info', duration);
    }

    warning(message: string, duration?: number) {
        this.addToast(message, 'warning', duration);
    }
}
```

#### toast-container.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService, Toast } from './toast.service';

@Component({
    selector: 'app-toast-container',
    template: `
        <div class="toast-container">
            <div 
                *ngFor="let toast of toasts$ | async; trackBy: trackByToast"
                class="toast toast-{{toast.type}}"
                [style.transform]="getStackTransform(i)"
            >
                <div class="toast-content">
                    <span>{{toast.message}}</span>
                    <button (click)="removeToast(toast.id)">×</button>
                </div>
            </div>
        </div>
    `
})
export class ToastContainerComponent implements OnInit {
    toasts$: Observable<Toast[]>;

    constructor(private toastService: ToastService) {}

    ngOnInit() {
        this.toasts$ = this.toastService.toasts$;
    }

    removeToast(id: string) {
        this.toastService.removeToast(id);
    }

    trackByToast(index: number, toast: Toast) {
        return toast.id;
    }

    getStackTransform(index: number) {
        const yOffset = index * 6;
        const xOffset = index * 4;
        const scale = 1 - (index * 0.05);
        return `translate(-${xOffset}px, -${yOffset}px) scale(${scale})`;
    }
}
```

## 🌐 API Integration Examples

### REST API Integration
```javascript
class ApiService {
    constructor(toastSystem) {
        this.toast = toastSystem;
    }

    async request(url, options = {}) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            
            // Show success toast for successful operations
            if (options.method && ['POST', 'PUT', 'DELETE'].includes(options.method)) {
                this.toast.success('Operation completed successfully');
            }

            return data;
        } catch (error) {
            // Show error toast for failed requests
            this.toast.error(`Request failed: ${error.message}`);
            throw error;
        }
    }

    // Convenience methods
    async get(url) {
        return this.request(url);
    }

    async post(url, data) {
        return this.request(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async put(url, data) {
        return this.request(url, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    async delete(url) {
        return this.request(url, {
            method: 'DELETE'
        });
    }
}

// Usage
const api = new ApiService(toastSystem);

// Automatic success/error toasts
await api.post('/api/users', userData);
await api.delete('/api/users/123');
```

### GraphQL Integration
```javascript
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
    uri: '/graphql'
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            toastSystem.error(`GraphQL error: ${message}`);
        });
    }

    if (networkError) {
        toastSystem.error(`Network error: ${networkError.message}`);
    }
});

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
});

// Usage with mutations
const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => {
        toastSystem.success('User created successfully!');
    },
    onError: (error) => {
        toastSystem.error(`Failed to create user: ${error.message}`);
    }
});
```

## 📱 Mobile Integration

### React Native (using similar patterns)
```jsx
import React, { createContext, useContext, useState } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type) => {
        const id = Date.now().toString();
        setToasts(prev => [...prev, { id, message, type }]);
        
        setTimeout(() => {
            removeToast(id);
        }, 3000);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <View style={styles.container}>
                {toasts.map((toast, index) => (
                    <ToastItem 
                        key={toast.id} 
                        toast={toast} 
                        index={index}
                        onRemove={() => removeToast(toast.id)}
                    />
                ))}
            </View>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, index, onRemove }) => {
    const opacity = new Animated.Value(0);

    React.useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.toast, { opacity }]}>
            <Text style={styles.message}>{toast.message}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};
```

### Ionic Integration
```typescript
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class CustomToastService {
    constructor(private toastController: ToastController) {}

    async presentToast(message: string, type: string, duration = 3000) {
        const toast = await this.toastController.create({
            message,
            duration,
            cssClass: `toast-${type}`,
            buttons: [
                {
                    text: '×',
                    role: 'cancel'
                }
            ]
        });

        await toast.present();
    }

    success(message: string) {
        this.presentToast(message, 'success');
    }

    error(message: string) {
        this.presentToast(message, 'error');
    }
}
```

## 🔧 Advanced Integration Patterns

### Redux Integration
```javascript
// actions/toast.js
export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

export const addToast = (message, type, duration = 3000) => ({
    type: ADD_TOAST,
    payload: {
        id: Date.now().toString(),
        message,
        type,
        duration
    }
});

export const removeToast = (id) => ({
    type: REMOVE_TOAST,
    payload: { id }
});

// reducers/toast.js
const initialState = {
    toasts: []
};

export default function toastReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TOAST:
            return {
                ...state,
                toasts: [action.payload, ...state.toasts]
            };
        case REMOVE_TOAST:
            return {
                ...state,
                toasts: state.toasts.filter(toast => toast.id !== action.payload.id)
            };
        default:
            return state;
    }
}

// middleware/toastMiddleware.js
export const toastMiddleware = store => next => action => {
    const result = next(action);
    
    // Auto-remove toasts after duration
    if (action.type === ADD_TOAST) {
        setTimeout(() => {
            store.dispatch(removeToast(action.payload.id));
        }, action.payload.duration);
    }
    
    return result;
};
```

### Zustand Integration
```javascript
import { create } from 'zustand';

const useToastStore = create((set, get) => ({
    toasts: [],
    
    addToast: (message, type, duration = 3000) => {
        const id = Date.now().toString();
        const newToast = { id, message, type, duration };
        
        set(state => ({
            toasts: [newToast, ...state.toasts]
        }));
        
        setTimeout(() => {
            get().removeToast(id);
        }, duration);
    },
    
    removeToast: (id) => {
        set(state => ({
            toasts: state.toasts.filter(toast => toast.id !== id)
        }));
    }
}));

// Usage
const { toasts, addToast, removeToast } = useToastStore();
```

### Context + Reducer Pattern
```jsx
import React, { createContext, useContext, useReducer } from 'react';

const ToastContext = createContext();

const toastReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [action.payload, ...state.toasts]
            };
        case 'REMOVE_TOAST':
            return {
                ...state,
                toasts: state.toasts.filter(toast => toast.id !== action.payload)
            };
        default:
            return state;
    }
};

export const ToastProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, { toasts: [] });
    
    const addToast = (message, type, duration = 3000) => {
        const id = Date.now().toString();
        dispatch({
            type: 'ADD_TOAST',
            payload: { id, message, type, duration }
        });
        
        setTimeout(() => {
            dispatch({ type: 'REMOVE_TOAST', payload: id });
        }, duration);
    };
    
    const removeToast = (id) => {
        dispatch({ type: 'REMOVE_TOAST', payload: id });
    };
    
    return (
        <ToastContext.Provider value={{ ...state, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};
```

These integration examples demonstrate how to adapt the toast notification system to work with various frameworks, state management solutions, and application architectures.