import React, { createElement } from 'react';
import { useInView, type UseInViewOptions } from '../../hooks/useInView';

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  trigger?: UseInViewOptions['trigger'];
  threshold?: number;
  once?: boolean;
  children?: React.ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({
  as = 'div',
  variant = 'fade-up',
  delay = 0,
  trigger = 'scroll',
  threshold,
  once,
  className = '',
  style,
  children,
  ...rest
}) => {
  const { ref, isInView } = useInView<HTMLElement>({ trigger, threshold, once });
  const revealClass = {
    'fade-up': 'reveal',
    'fade-in': 'reveal-fade',
    'slide-left': 'reveal-left',
    'slide-right': 'reveal-right',
  }[variant];

  return createElement(
    as,
    {
      ref,
      'data-inview': isInView,
      className: `${revealClass} ${className}`.trim(),
      style: {
        ...style,
        transitionDelay: isInView && delay ? `${delay}ms` : undefined,
      },
      ...rest,
    },
    children
  );
};
