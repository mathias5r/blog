import { useEffect } from 'react';

const useIntersectionObserver = (
  id: string,
  threshold: number[],
  onIntersect: (entries: any) => void
): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold });
    const target = document.getElementById(id) as Element;
    
    observer.observe(target);

    return (): void => {
      observer.unobserve(target);
    };
  }, []);
};

export default useIntersectionObserver ;
