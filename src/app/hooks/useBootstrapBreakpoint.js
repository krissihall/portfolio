import { useState, useEffect } from 'react';

const breakpoints = {
  xs: '(max-width: 575.98px)',
  sm: '(min-width: 576px) and (max-width: 767.98px)',
  md: '(min-width: 768px) and (max-width: 991.98px)',
  lg: '(min-width: 992px) and (max-width: 1199.98px)',
  xl: '(min-width: 1200px) and (max-width: 1399.98px)',
  xxl: '(min-width: 1400px)',
};

export function useBootstrapBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('xs');

  useEffect(() => {
    // Check current breakpoint on mount
    const updateBreakpoint = () => {
      for (const [key, query] of Object.entries(breakpoints)) {
        if (window.matchMedia(query).matches) {
          setBreakpoint(key);
          break;
        }
      }
    };

    updateBreakpoint();
    window.addEventListener('bs.bp.resize', updateBreakpoint);
    return () => window.removeEventListener('bs.bp.resize', updateBreakpoint);
  }, []);

  return breakpoint;
}
