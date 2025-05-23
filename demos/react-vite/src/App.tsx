import React, { useState, useCallback } from 'react';
import { ToastContainer } from './components/ToastContainer';
import { ToastData, ToastType } from './types';
import { DEFAULT_TOAST_DURATION, MAX_RENDERED_TOASTS } from './constants';
import { PlusCircleIcon, InformationCircleIcon, ExclamationTriangleIcon, ShieldExclamationIcon } from './components/Icons';

const App: React.FC = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((message: string, type: ToastType, duration: number = DEFAULT_TOAST_DURATION) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2,9);
    const newToast: ToastData = { id, message, type, duration };
    
    setToasts(currentToasts => {
      let updatedToasts = [newToast, ...currentToasts];
      if (updatedToasts.length > MAX_RENDERED_TOASTS) {
        updatedToasts = updatedToasts.slice(0, MAX_RENDERED_TOASTS);
      }
      return updatedToasts;
    });
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  }, []);
  
  const triggerSuccessToast = () => addToast("Your operation was completed successfully.", ToastType.Success);
  const triggerErrorToast = () => addToast("Something went wrong. Please try again.", ToastType.Error);
  const triggerInfoToast = () => addToast("Here is some useful information for you.", ToastType.Info);
  const triggerWarningToast = () => addToast("Please be aware of potential issues.", ToastType.Warning);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4 text-slate-100">
      <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
          Stacked Toast Demo
        </h1>
        <p className="mb-8 text-slate-400 max-w-md mx-auto">
          Click buttons to trigger different types of toasts. They will appear stacked in the bottom-right corner. Max {MAX_RENDERED_TOASTS} toasts are active at once.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button
            onClick={triggerSuccessToast}
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            aria-label="Trigger Success Toast"
          >
            <PlusCircleIcon className="h-5 w-5 mr-2" /> Success
          </button>
          <button
            onClick={triggerErrorToast}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            aria-label="Trigger Error Toast"
          >
            <ShieldExclamationIcon className="h-5 w-5 mr-2" /> Error
          </button>
          <button
            onClick={triggerInfoToast}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            aria-label="Trigger Info Toast"
          >
            <InformationCircleIcon className="h-5 w-5 mr-2" /> Info
          </button>
          <button
            onClick={triggerWarningToast}
            className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
            aria-label="Trigger Warning Toast"
          >
            <ExclamationTriangleIcon className="h-5 w-5 mr-2" /> Warning
          </button>
        </div>
      </div>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
       <footer className="absolute bottom-4 text-center w-full text-slate-500 text-sm">
        Crafted with React, TypeScript, and Tailwind CSS.
      </footer>
    </div>
  );
};

export default App;