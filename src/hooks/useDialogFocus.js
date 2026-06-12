import { useEffect } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function useDialogFocus(dialogRef, initialFocusRef, returnFocusElement) {
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const focusInitialElement = () => {
      const initialElement = initialFocusRef.current;
      if (initialElement) {
        initialElement.focus();
        return;
      }

      dialog.querySelector(FOCUSABLE_SELECTOR)?.focus();
    };

    const handleTab = event => {
      if (event.key !== 'Tab') return;

      const focusableElements = Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR));
      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    focusInitialElement();
    dialog.addEventListener('keydown', handleTab);

    return () => {
      dialog.removeEventListener('keydown', handleTab);
      if (returnFocusElement?.isConnected) {
        returnFocusElement.focus();
      }
    };
  }, [dialogRef, initialFocusRef, returnFocusElement]);
}
