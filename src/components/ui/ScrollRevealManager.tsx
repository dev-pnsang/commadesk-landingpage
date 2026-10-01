'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(
      '.scroll-blur-reveal, .scroll-fade-up, .scroll-scale-up, .text-blur-wipe'
    );

    if (!revealElements.length) return;

    // Ngay khi mount hoặc chuyển route: Kích hoạt ngay các phần tử trong viewport
    const checkViewport = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Nếu phần tử đang ở trong màn hình hoặc ở nửa trên màn hình
        if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= -50) {
          el.classList.add('is-revealed');
          el.querySelectorAll('.text-blur-wipe').forEach((w) =>
            w.classList.add('is-revealed')
          );
        }
      });
    };

    // Chạy ngay lần đầu
    checkViewport();
    // Chạy lại sau 100ms để đảm bảo CSS & font render xong
    const timeoutId = setTimeout(checkViewport, 120);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('is-revealed');
            target.querySelectorAll('.text-blur-wipe').forEach((w) =>
              w.classList.add('is-revealed')
            );
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '50px 0px 50px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      checkViewport();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
}
