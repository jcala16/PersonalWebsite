import { ExperienceCard } from "./experience-card";

//edit experience here
const experiences = [
    {
        date: "2020 - 2022",
        position: "Heavy Equipmemt Dispatcher",
        company: "United States Marine Corps",
        description:
            "Coordinated 253 missions supporting 25 units by dispatching and tracking 52 heavy equipment assets. Maintained accurate records of hours, usage, and maintenance, and generated detailed reports for leadership. Ensured operational readiness by monitoring asset status, optimizing equipment allocation, and facilitating communication between units and command. Demonstrated strong organizational skills and attention to detail in a high-tempo environment.",
    },
    {
        date: "2021 - 2022",
        position: "Tool Room Operations Supervisor",
        company: "United States Marine Corps",
        description:
          "Oversaw quarterly inventories and inspections for 100+ heavy equipment tools valued at over $2 million, ensuring full accountability and operational readiness. Managed and tracked service requests for broken or missing tools, maintained detailed logs, and coordinated timely replacements. Developed an Excel-based process to monitor inventory completion and service request status, improving efficiency and accuracy in tool room operations.",
    },
    {
        date: "2023 - Present",
        position: "Computer Science Student",
        company: "Lewis University",
        description:
          "Currently pursuing a Bachelor's degree in Computer Science with a focus on software development, data structures, networking, and systems analysis. Engaged in hands-on projects using modern languages and technology. Actively involved in collaborative coursework, coding challenges, and personal projects to deepen practical skills and industry knowledge.",
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