// Accessibility utilities for AIG MSU website

/**
 * Generates a unique ID for accessibility purposes
 */
export function generateId(prefix: string = 'aig'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Creates ARIA labels for better screen reader support
 */
export function createAriaLabel(text: string, context?: string): string {
  return context ? `${text}, ${context}` : text;
}

/**
 * Validates that required ARIA attributes are present
 */
export function validateAriaAttributes(element: HTMLElement): boolean {
  const hasRole = element.hasAttribute('role');
  const hasAriaLabel = element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby');
  const hasAriaDescribedBy = element.hasAttribute('aria-describedby');
  
  // For interactive elements, we need at least a role or aria-label
  if (element.tagName === 'BUTTON' || element.tagName === 'A') {
    return hasRole || hasAriaLabel;
  }
  
  return true;
}

/**
 * Focus management utilities
 */
export class FocusManager {
  private static trapStack: HTMLElement[] = [];

  static trapFocus(container: HTMLElement): void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    this.trapStack.push(container);

    // Focus the first element
    firstElement.focus();
  }

  static releaseFocus(): void {
    const container = this.trapStack.pop();
    if (container) {
      // Remove event listeners (simplified - in production you'd want to store references)
      container.removeEventListener('keydown', this.handleTabKey);
    }
  }

  private static handleTabKey(e: KeyboardEvent): void {
    // This would be the actual handler implementation
  }
}

/**
 * Screen reader announcements
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Keyboard navigation helpers
 */
export const KeyboardKeys = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

/**
 * Checks if an element is visible to screen readers
 */
export function isVisibleToScreenReader(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    element.getAttribute('aria-hidden') !== 'true'
  );
}
