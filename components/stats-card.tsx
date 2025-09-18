import React from 'react';
import type { StatItem } from '@/types';

interface StatsCardProps {
  stat: StatItem;
  index: number;
}

export function StatsCard({ stat, index }: StatsCardProps): JSX.Element {
  const IconComponent = stat.icon;
  
  return (
    <div 
      className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}
