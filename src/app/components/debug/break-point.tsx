"use client";
import { useState, useEffect } from 'react';

export function Breakpoint() {
  const [breakpoint, setBreakpoint] = useState('xs');

  useEffect(() => {
    // Media queries matching Bootstrap's SCSS map
    const queries: any = {
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      xxl: '(min-width: 1400px)',
    };

    const handler = () => {
      // Find the largest matching breakpoint
      const current = Object.keys(queries).reverse().find(
        (key) => window.matchMedia(queries[key]).matches
      ) || 'xs';
      setBreakpoint(current);
    };

    // Listen for window resize
    window.addEventListener('resize', handler);
    handler(); // Initial check

    return () => window.removeEventListener('resize', handler);
  }, []);

  return breakpoint;
}
