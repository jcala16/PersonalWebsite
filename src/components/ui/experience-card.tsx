interface ExperienceCardProps {
    date: string;
    position: string;
    company: string;
    description: string;
}

export function ExperienceCard({
    date,
    position,
    company,
    description
}: ExperienceCardProps){
    return(
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="md:w-1/3">
          <div className="font-semibold">{date}</div>
          <div className="text-sm text-muted-foreground">{position}</div>
          <div className="text-sm font-medium">{company}</div>
        </div>
        <div className="md:w-2/3">
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    );
}
   

