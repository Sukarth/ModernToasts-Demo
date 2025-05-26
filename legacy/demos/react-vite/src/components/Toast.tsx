
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ToastProps, ToastType } from '../types';
import { DEFAULT_TOAST_DURATION } from '../constants';
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon, ExclamationTriangleIcon, XMarkIcon } from './Icons';

interface TypeConfig {
  base: string;
  accentColor: string;
  icon: React.ReactNode;
  title: string;
  ariaRole: 'alert' | 'status';
  textColor: string;
  iconColor: string;
  closeButtonHoverBg: string;
  closeButtonTextColor: string;
  closeButtonHoverTextColor: string;
}

const typeConfigMap: Record<ToastType, TypeConfig> = {
  [ToastType.Success]: {
    base: 'bg-gray-900 text-white  border-green-500/50',
    accentColor: 'bg-gradient-to-r from-green-500/30 via-green-500/20 to-transparent',
    icon: <CheckCircleIcon className="h-5 w-5" />,
    title: 'Success',
    ariaRole: 'status',
    textColor: 'text-white',
    iconColor: 'text-green-500',
    closeButtonHoverBg: 'hover:bg-gray-800',
    closeButtonTextColor: 'text-gray-400',
    closeButtonHoverTextColor: 'hover:text-white',
  },
  [ToastType.Error]: {
    base: 'bg-gray-900 text-white  border-red-500/50',
    accentColor: 'bg-gradient-to-r from-red-500/30 via-red-500/20 to-transparent',
    icon: <XCircleIcon className="h-5 w-5" />,
    title: 'Error',
    ariaRole: 'alert',
    textColor: 'text-white',
    iconColor: 'text-red-500',
    closeButtonHoverBg: 'hover:bg-gray-800',
    closeButtonTextColor: 'text-gray-400',
    closeButtonHoverTextColor: 'hover:text-white',
  },
  [ToastType.Info]: {
    base: 'bg-gray-900 text-white  border-blue-500/50',
    accentColor: 'bg-gradient-to-r from-blue-500/30 via-blue-500/20 to-transparent',
    icon: <InformationCircleIcon className="h-5 w-5" />,
    title: 'Info',
    ariaRole: 'status',
    textColor: 'text-white',
    iconColor: 'text-blue-500',
    closeButtonHoverBg: 'hover:bg-gray-800',
    closeButtonTextColor: 'text-gray-400',
    closeButtonHoverTextColor: 'hover:text-white',
  },
  [ToastType.Warning]: {
    base: 'bg-gray-900 text-white  border-yellow-500/50',
    accentColor: 'bg-gradient-to-r from-yellow-500/30 via-yellow-500/20 to-transparent',
    icon: <ExclamationTriangleIcon className="h-5 w-5" />,
    title: 'Warning',
    ariaRole: 'status',
    textColor: 'text-white',
    iconColor: 'text-yellow-500',
    closeButtonHoverBg: 'hover:bg-gray-800',
    closeButtonTextColor: 'text-gray-400',
    closeButtonHoverTextColor: 'hover:text-white',
  },
};

// Helper function to get border color class
const getBorderColorClass = (type: ToastType): string => {
  switch (type) {
    case ToastType.Success: return 'bg-green-500/50';
    case ToastType.Error: return 'bg-red-500/50';
    case ToastType.Info: return 'bg-blue-500/50';
    case ToastType.Warning: return 'bg-yellow-500/50';
    default: return 'bg-gray-500/50';
  }
};


export const Toast: React.FC<ToastProps> = ({ id, message, type, duration, onClose, stackStyle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);

  const currentTypeConfig = typeConfigMap[type];

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (toastRef.current) {
        setIsVisible(true);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const stableOnClose = useCallback(() => {
    onClose(id);
  }, [id, onClose]);

  useEffect(() => {
    if (!isVisible && closingRef.current && toastRef.current) {
      const node = toastRef.current;
      let fallbackTimerId: number | undefined;

      const handleTransitionEnd = (event: TransitionEvent) => {
        if (event.target === node && (event.propertyName === 'opacity' || event.propertyName === 'transform')) {
          if (fallbackTimerId) clearTimeout(fallbackTimerId);
          node.removeEventListener('transitionend', handleTransitionEnd);
          stableOnClose();
        }
      };

      node.addEventListener('transitionend', handleTransitionEnd);
      fallbackTimerId = window.setTimeout(() => {
        node.removeEventListener('transitionend', handleTransitionEnd);
        stableOnClose();
      }, 350);

      return () => {
        if (fallbackTimerId) clearTimeout(fallbackTimerId);
        if (node) {
            node.removeEventListener('transitionend', handleTransitionEnd);
        }
      };
    }
  }, [isVisible, stableOnClose]);

  const handleClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setIsVisible(false);
  }, []);

  // Auto-close after border animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, DEFAULT_TOAST_DURATION); // Use the constant from constants.ts
    return () => clearTimeout(timer);
  }, [handleClose, id]);


  const combinedStyle: React.CSSProperties = {
    ...stackStyle,
    opacity: isVisible ? stackStyle.opacity : 0,
    transform: isVisible ? stackStyle.transform : `${stackStyle.transform || ''} translateY(20px) scale(0.9)`,
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
  };

  // Fix: Properly type the icon element and merge className with iconColor.
  // Cast currentTypeConfig.icon to React.ReactElement<React.SVGProps<SVGSVGElement>>.
  // This ensures its props (like className) are correctly typed, resolving issues with
  // React.cloneElement's type inference and subsequent props access.
  // It also handles cases where the original className might be undefined, preventing
  // it from being stringified as "undefined" in the new className.
  const iconElement = currentTypeConfig.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>;
  const originalClassName = iconElement.props.className || '';
  const newClassName = `${originalClassName} ${currentTypeConfig.iconColor}`.trim();
  const iconWithColor = React.cloneElement(iconElement, { className: newClassName });

  return (
    <div
      ref={toastRef}
      role={currentTypeConfig.ariaRole}
      style={combinedStyle}
      className={`pointer-events-auto w-full rounded-lg shadow-xl overflow-hidden relative ${currentTypeConfig.base}`}
    >
      {/* Animated left border - top half */}
      <div
        className={`absolute left-0 w-0.5 ${getBorderColorClass(type)} animate-border-left-top`}
        style={{ height: '0%', top: '50%' }}
      />

      {/* Animated left border - bottom half */}
      <div
        className={`absolute left-0 w-0.5 ${getBorderColorClass(type)} animate-border-left-bottom`}
        style={{ height: '0%', bottom: '50%' }}
      />

      {/* Animated top border */}
      <div
        className={`absolute top-0 left-0 h-0.5 ${getBorderColorClass(type)} animate-border-top`}
        style={{ width: '0%' }}
      />
      
      {/* Animated bottom border */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 ${getBorderColorClass(type)} animate-border-bottom`}
        style={{ width: '0%' }}
      />
      
      {/* Animated right border - top half */}
      <div
        className={`absolute right-0 w-0.5 ${getBorderColorClass(type)} animate-border-right-top`}
        style={{ height: '0%', top: '0%' }}
      />
      
      {/* Animated right border - bottom half */}
      <div
        className={`absolute right-0 w-0.5 ${getBorderColorClass(type)} animate-border-right-bottom`}
        style={{ height: '0%', bottom: '0%' }}
      />
      
      {/* Animated fill overlay */}
      <div
        className={`absolute inset-0 ${currentTypeConfig.accentColor} animate-fill-progress`}
        style={{ width: '0%' }}
      />
      
      <div className="relative flex items-center p-4 z-10">
        <div className="flex-shrink-0 mr-3">
          {iconWithColor}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium ${currentTypeConfig.textColor}`}>{currentTypeConfig.title}</p>
          <p className={`mt-0.5 text-sm ${currentTypeConfig.textColor} opacity-90`}>{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <button
            onClick={handleClose}
            className={`inline-flex rounded-md p-1.5 ${currentTypeConfig.closeButtonTextColor} ${currentTypeConfig.closeButtonHoverBg} ${currentTypeConfig.closeButtonHoverTextColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-colors duration-150`}
            aria-label="Close notification"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
