import React, { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (onIntersection: IntersectionObserverCallback) => {
  const elementRef = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    });

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, [onIntersection]);

  return elementRef;
};

export default useIntersectionObserver;
