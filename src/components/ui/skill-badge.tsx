import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  // Generate stars based on skill level (1-5)
  const stars = "★".repeat(level) + "☆".repeat(5 - level)

  return (
    <Badge variant="secondary" className="px-3 py-1">
      {name} <span className="ml-1 text-xs text-muted-foreground">{stars}</span>
    </Badge>
  )
}
