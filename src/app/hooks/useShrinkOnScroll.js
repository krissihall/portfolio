// hooks/useShrinkOnScroll.js
import { useEffect, useRef, useState } from 'react';

const useShrinkOnScroll = (options) => {
  const containerRef = useRef(null);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      // If the container is no longer intersecting the root (the top of the viewport
      // or a specific root element with defined margins), the header should shrink.
      setIsShrunk(!entry.isIntersecting);
    }, options); // Options can define the 'root' (the scrollable div)

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [options]);

  return { containerRef, isShrunk };
};

export default useShrinkOnScroll;
