import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/bg (1)_1751819625887.png',
      '/OC 05 (3)_1751839575431.png',
      '/Frame 2_1751840429819.png',
      '/Frame 5 (3)_1751840850825.png'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Reduced scroll listeners for better performance
    
    // Lazy load non-critical resources
    const lazyLoadElements = document.querySelectorAll('[data-lazy]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    lazyLoadElements.forEach(el => imageObserver.observe(el));

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
}