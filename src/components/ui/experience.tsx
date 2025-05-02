import { ExperienceCard } from "./experience-card";

//edit experience here
const experiences = [
    {
        date: "2021 - Present",
        position: "Senior Research Scientist",
        company: "Google AI",
        description:
            "Leading research in distributed machine learning systems and algorithm optimization. Developed novel approaches to training large language models across distributed computing clusters, resulting in 40% reduction in training time.",
    },
    {
        date: "2018 - 2021",
        position: "Software Engineer",
        company: "Microsoft Research",
        description:
          "Worked on quantum computing simulation frameworks and distributed systems for large-scale data processing. Published 5 papers in top-tier conferences and contributed to open-source projects.",
    },
    {
        date: "2016 - 2018",
        position: "Research Assistant",
        company: "Stanford University",
        description:
          "Conducted research in algorithm design and computational complexity theory. Assisted in teaching undergraduate computer science courses and mentored junior researchers.",
    },
];

export function Experience() {
    return (
      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.date + exp.company}
            date={exp.date}
            position={exp.position}
            company={exp.company}
            description={exp.description}
          />
        ))}
      </div>
    );
  }