'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(
      '.scroll-blur-reveal, .scroll-fade-up, .scroll-scale-up, .text-blur-wipe'
    );

    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('is-revealed');
            const childWipes = target.querySelectorAll('.text-blur-wipe');
            childWipes.forEach((w) => w.classList.add('is-revealed'));
          } else {
            if (entry.boundingClientRect.top > window.innerHeight) {
              target.classList.remove('is-revealed');
              const childWipes = target.querySelectorAll('.text-blur-wipe');
              childWipes.forEach((w) => w.classList.remove('is-revealed'));
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight * 0.75) {
        el.classList.add('is-revealed');
        const childWipes = el.querySelectorAll('.text-blur-wipe');
        childWipes.forEach((w) => w.classList.add('is-revealed'));
      } else {
        el.classList.remove('is-revealed');
      }
      observer.observe(el);
    });

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
          if (!el.classList.contains('is-revealed')) {
            el.classList.add('is-revealed');
            el.querySelectorAll('.text-blur-wipe').forEach((w) =>
              w.classList.add('is-revealed')
            );
          }
        } else if (rect.top > window.innerHeight) {
          if (el.classList.contains('is-revealed')) {
            el.classList.remove('is-revealed');
            el.querySelectorAll('.text-blur-wipe').forEach((w) =>
              w.classList.remove('is-revealed')
            );
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
