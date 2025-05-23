
import React from 'react';
import { Toast } from './Toast';
import { ToastData } from '../types';
import { 
  MAX_VISIBLE_STACK_TOASTS, 
  STACK_OFFSET_Y_PER_LEVEL, 
  STACK_OFFSET_X_PER_LEVEL, 
  SCALE_DECREMENT_PER_LEVEL, 
  OPACITY_DECREMENT_PER_LEVEL,
  MAX_RENDERED_TOASTS
} from '../constants';

interface ToastContainerProps {
  toasts: ToastData[];
  removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  const containerHeight = 100 + (MAX_VISIBLE_STACK_TOASTS - 1) * STACK_OFFSET_Y_PER_LEVEL;

  return (
    <div 
      aria-live="polite" 
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100%-2rem)] max-w-xs sm:max-w-sm z-[1000]"
      style={{ minHeight: `${containerHeight}px` }}
    >
      <div className="relative w-full h-full">
        {toasts.slice(0, MAX_RENDERED_TOASTS).map((toast, index) => {
          const effectiveIndex = Math.min(index, MAX_VISIBLE_STACK_TOASTS -1) ;
          
          let currentOpacity = 1 - effectiveIndex * OPACITY_DECREMENT_PER_LEVEL;
          let currentScale = 1 - effectiveIndex * SCALE_DECREMENT_PER_LEVEL;
          let yOffset = effectiveIndex * STACK_OFFSET_Y_PER_LEVEL;
          let xOffset = effectiveIndex * STACK_OFFSET_X_PER_LEVEL;
          let zIndex = (toasts.length - index) * 10; 

          if (index >= MAX_VISIBLE_STACK_TOASTS) {
            currentOpacity = Math.max(0, 1 - (MAX_VISIBLE_STACK_TOASTS -1 + (index - (MAX_VISIBLE_STACK_TOASTS -1))*0.5) * OPACITY_DECREMENT_PER_LEVEL);
            currentScale = 1 - (MAX_VISIBLE_STACK_TOASTS - 1) * SCALE_DECREMENT_PER_LEVEL;
            yOffset = (MAX_VISIBLE_STACK_TOASTS - 1) * STACK_OFFSET_Y_PER_LEVEL;
            xOffset = (MAX_VISIBLE_STACK_TOASTS - 1) * STACK_OFFSET_X_PER_LEVEL;
          }
          
          const stackStyle: React.CSSProperties = {
            position: 'absolute',
            bottom: `0px`, 
            right: `0px`,
            width: '100%',
            zIndex: zIndex,
            opacity: Math.max(0.05, currentOpacity), 
            transform: `translate(-${xOffset}px, -${yOffset}px) scale(${currentScale})`,
            transformOrigin: 'bottom right',
          };

          return (
            <Toast
              key={toast.id}
              {...toast}
              onClose={removeToast} // Pass the stable removeToast function directly
              stackStyle={stackStyle}
            />
          );
        })}
      </div>
    </div>
  );
};
