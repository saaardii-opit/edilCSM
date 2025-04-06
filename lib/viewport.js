/**
 * Smoothly scroll to an element
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset from the top in pixels
 */
export function scrollToElement(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Create an intersection observer for lazy loading
 * @param {Function} callback - Function to call when element is in view
 * @param {Object} options - IntersectionObserver options
 * @returns {IntersectionObserver}
 */
export function createIntersectionObserver(callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target, observer);
      }
    });
  }, defaultOptions);
}

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Offset from viewport edges
 * @returns {boolean}
 */
export function isInViewport(element, offset = 0) {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top + offset <= window.innerHeight &&
    rect.bottom - offset >= 0 &&
    rect.left + offset <= window.innerWidth &&
    rect.right - offset >= 0
  );
}

/**
 * Create a viewport size observer
 * @param {Function} callback - Function to call when viewport size changes
 * @returns {Function} Cleanup function
 */
export function createViewportObserver(callback) {
  function handleResize() {
    callback({
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    });
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Initial call

  return () => window.removeEventListener('resize', handleResize);
}

/**
 * Detect when an element enters or leaves the viewport
 * @param {HTMLElement} element - The element to watch
 * @param {Object} callbacks - Enter and leave callbacks
 * @returns {Function} Cleanup function
 */
export function watchViewport(element, { onEnter, onLeave }) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onEnter?.(entry);
      } else {
        onLeave?.(entry);
      }
    });
  }, {
    threshold: 0.1
  });

  if (element) {
    observer.observe(element);
  }

  return () => observer.disconnect();
}