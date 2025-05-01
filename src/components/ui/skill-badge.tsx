import { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string;
  icon: ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
      {icon}
      {name}
    </Badge>
  );
}