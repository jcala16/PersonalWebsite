import {Code, Database, Server } from "lucide-react";
import {SkillCard } from "@/components/ui/skill-card";

//edit the skill cards here
export function SkillsList() {
    const skills = [
      {
        icon: <Database className="h-5 w-5" />,
        title: "Software Engineering",
        description:
          "Developing scalable, maintainable software solutions with a focus on performance and user experience.",
      },
      {
        icon: <Database className="h-5 w-5" />,
        title: "Data Science & ML",
        description:
          "Applying statistical methods and machine learning algorithms to extract insights from complex datasets.",
      },
      {
        icon: <Server className="h-5 w-5" />,
        title: "Distributed Systems",
        description:
          "Designing and implementing fault-tolerant, scalable distributed systems and cloud architectures.",
      },
    ];
  
    return (
      <ul className="grid gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    );
  }