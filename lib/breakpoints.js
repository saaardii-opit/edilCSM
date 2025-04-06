// Breakpoint values in pixels
export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

// Media query strings for consistent use across components
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  xxl: `@media (min-width: ${breakpoints.xxl}px)`,
};

// Utility function to check if we're on a mobile device
export function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints.md;
}

// Utility function to check if we're on a tablet device
export function isTablet() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
}

// Utility function to check if we're on a desktop device
export function isDesktop() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.lg;
}

// Hook to get current breakpoint
export function useBreakpoint() {
  if (typeof window === 'undefined') return 'md';
  
  const width = window.innerWidth;
  
  if (width < breakpoints.sm) return 'xs';
  if (width < breakpoints.md) return 'sm';
  if (width < breakpoints.lg) return 'md';
  if (width < breakpoints.xl) return 'lg';
  if (width < breakpoints.xxl) return 'xl';
  return 'xxl';
}

// Constants for common device sizes
export const deviceSizes = {
  mobileSm: '320px',
  mobileMd: '375px',
  mobileLg: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopLg: '1440px',
  desktop: '1920px',
  desktop4K: '2560px',
};

// Container max-widths for each breakpoint
export const containerMaxWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
};