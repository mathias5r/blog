import { useEffect } from 'react';

export default (src: string, callback: () => void): void =>
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = (): void => callback();
  }, [src, callback]);
