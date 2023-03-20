import React, { useEffect, useRef, useState } from 'react';

export interface IntersectionObserverProps extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const useIntersectionObserver = ({
                                   root = null,
                                   rootMargin,
                                   threshold = 0,
                                   freezeOnceVisible = false,
                                 }: IntersectionObserverProps): [React.RefObject<Element>, boolean, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasFrozen, setFrozen] = useState(false);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (freezeOnceVisible) {
            setFrozen(true);
          }
          observer.unobserve(node);
        } else {
          setIntersecting(false);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [freezeOnceVisible, root, rootMargin, threshold]);

  return [ref, isIntersecting, hasFrozen];
};

export default useIntersectionObserver;
