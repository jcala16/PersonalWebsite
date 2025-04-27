"use client";

import { ReactNode } from "react";

interface SkillCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
    return (
        <li className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            {icon}
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </li>
      );
    }