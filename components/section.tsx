import React from 'react';
import type { SectionProps } from '@/types';

export function Section({ 
  children, 
  className = '', 
  id 
}: SectionProps): JSX.Element {
  return (
    <section 
      id={id}
      className={`py-20 ${className}`}
    >
      {children}
    </section>
  );
}
