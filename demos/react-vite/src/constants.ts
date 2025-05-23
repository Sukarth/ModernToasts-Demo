
export const DEFAULT_TOAST_DURATION = 3000; // ms

// Stacking visual effect parameters
export const MAX_VISIBLE_STACK_TOASTS = 3; // Number of toasts that get varied styling for stack effect (0, 1, 2)
export const STACK_OFFSET_Y_PER_LEVEL = 6; // px vertical offset for stacked items
export const STACK_OFFSET_X_PER_LEVEL = 4; // px horizontal offset for stacked items
export const SCALE_DECREMENT_PER_LEVEL = 0.05;
export const OPACITY_DECREMENT_PER_LEVEL = 0.2;

// Absolute maximum number of toasts allowed in the system.
// Older toasts are removed if this limit is exceeded upon adding a new one.
// This also dictates the maximum number of toasts considered for rendering by ToastContainer.
export const MAX_RENDERED_TOASTS = MAX_VISIBLE_STACK_TOASTS + 2; // e.g., 3 visible stack + 2 faded out = 5 total
