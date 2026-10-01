'use client';

import React, { useMemo } from 'react';

interface TextBlurWipeProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export function TextBlurWipe({
  children,
  className = '',
  as: Component = 'div',
}: TextBlurWipeProps) {
  // Trích xuất text thô cho thuộc tính aria-label phục vụ SEO & Accessibility
  const rawText = useMemo(() => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children
        .map((child) => (typeof child === 'string' ? child : ' '))
        .join('');
    }
    return '';
  }, [children]);

  // Phân rã nội dung thành các cụm từ (reveal-word) và từng ký tự (reveal-char)
  const elements = useMemo(() => {
    let globalCharIndex = 0;

    const processText = (text: string) => {
      const parts = text.split(/(\s+)/);
      return parts.map((part, pIdx) => {
        if (!part) return null;
        if (/^\s+$/.test(part)) {
          return (
            <span key={`space-${pIdx}`} className="reveal-space">
              &nbsp;
            </span>
          );
        }

        const chars = Array.from(part).map((char, cIdx) => {
          const idx = globalCharIndex++;
          return (
            <span
              key={`char-${idx}-${cIdx}`}
              className="reveal-char"
              style={{ '--char-idx': idx } as React.CSSProperties}
            >
              {char}
            </span>
          );
        });

        return (
          <span key={`word-${pIdx}`} className="reveal-word">
            {chars}
          </span>
        );
      });
    };

    if (typeof children === 'string') {
      return processText(children);
    }

    if (Array.isArray(children)) {
      return children.map((item, itemIdx) => {
        if (typeof item === 'string') {
          return (
            <React.Fragment key={`frag-${itemIdx}`}>
              {processText(item)}
            </React.Fragment>
          );
        }
        if (React.isValidElement(item) && item.type === 'br') {
          return <br key={`br-${itemIdx}`} />;
        }
        return item;
      });
    }

    return children;
  }, [children]);

  return (
    <Component
      className={`text-blur-wipe ${className}`}
      aria-label={rawText || undefined}
    >
      {elements}
    </Component>
  );
}
