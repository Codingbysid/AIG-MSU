import React, { memo } from 'react';
import type { Feature } from '@/types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export const FeatureCard = memo(function FeatureCard({ feature, index }: FeatureCardProps): JSX.Element {
  const IconComponent = feature.icon;
  
  return (
    <div 
      className="text-center space-y-4 group hover:scale-105 transition-transform duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110">
        <IconComponent className="h-8 w-8 text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
      <p className="text-muted-foreground text-pretty">{feature.description}</p>
    </div>
  );
});
