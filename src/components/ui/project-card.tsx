import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md overflow-hidden transition-all hover:shadow-lg">
      <div className="w-full aspect-[4/5] overflow-hidden rounded-t-lg">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2 py-0 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={link} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          View Project <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
