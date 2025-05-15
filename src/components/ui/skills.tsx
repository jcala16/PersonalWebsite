import { Boxes, Code, Handshake } from "lucide-react";
import {SkillCard } from "@/components/ui/skill-card";

//edit the skill cards here
//icons from https://lucide.dev/icons/
export function SkillsList() {
    const skills = [
      {
        icon: <Boxes className="h-5 w-5" />,
        title: "Asset Management",
        description:
          "Allocating, tracking, and maintaining high-value equipment, tools, and personnel to ensure operational readiness and accountibility.",
      },
      {
        icon: <Code className="h-5 w-5" />,
        title: "Software Development",
        description:
          "Building and improving software projects while learning modern programming languages and development tools.",
      },
      {
        icon: <Handshake className="h-5 w-5" />,
        title: "Leadership",
        description:
          "Mentoring and guiding marines whilst maintaining high standards of performance and communication to accomplish critical missions.",
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