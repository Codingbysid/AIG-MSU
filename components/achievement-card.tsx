import React, { memo } from 'react';
import type { Achievement } from '@/types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export const AchievementCard = memo(function AchievementCard({ achievement, index }: AchievementCardProps): JSX.Element {
  const IconComponent = achievement.icon;
  
  return (
    <div 
      className="text-center space-y-3 animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative w-20 h-20 mx-auto">
        <div className="w-full h-full bg-accent/10 rounded-full flex items-center justify-center">
          <IconComponent className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div className="text-2xl font-bold text-accent animate-counter">{achievement.value}</div>
      <p className="text-sm text-muted-foreground">{achievement.label}</p>
    </div>
  );
});
