export const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const getFocusableElements = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

export const getFirstFocusableElement = (root: HTMLElement) =>
  root.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);

export const getActiveHTMLElement = () =>
  document.activeElement instanceof HTMLElement ? document.activeElement : null;

export const lockBodyScroll = () => {
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  return () => {
    document.body.style.overflow = previousOverflow;
  };
};

export const addDocumentListener = <K extends keyof DocumentEventMap>(
  type: K,
  listener: (event: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
) => {
  document.addEventListener(type, listener as EventListener, options);

  return () => {
    document.removeEventListener(type, listener as EventListener, options);
  };
};
