import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps): JSX.Element {
  return (
    <div
      className="border-border hover-lift group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6 text-center space-y-4">
        <div className="relative w-32 h-32 mx-auto">
          <div className="w-full h-full rounded-full overflow-hidden bg-muted ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                <span className="text-2xl font-bold">TBD</span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
            {member.year}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {member.name}
          </h3>
          <p className="text-primary font-medium">{member.position}</p>
          <p className="text-sm text-muted-foreground font-medium">{member.major}</p>
          <div className="bg-muted/50 rounded-lg p-2 mt-2">
            <p className="text-xs text-muted-foreground font-medium">{member.achievements}</p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{member.bio}</p>
        
        <div className="flex justify-center space-x-3 pt-2">
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
