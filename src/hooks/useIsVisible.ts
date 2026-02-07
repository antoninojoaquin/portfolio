import { useEffect, useState, useRef } from 'react';

export function useIsVisible() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Esto cambia a true cuando la sección entra a la vista
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Se activa cuando se ve el 10% de la sección
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}