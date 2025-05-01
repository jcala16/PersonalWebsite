import { SkillBadge } from "./skill-badge";

//Add languages and icons here
//Icons from https://devicon.dev/
const languages = [
    {
        name: "Python",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
        name: "Java",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
        name: "C",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    {
        name: "C++",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
        name: "C#",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
        name: "JavaScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        name: "TypeScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
        name: "HTML",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
        name: "CSS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
];

export function ProgrammingLanguages() {
    return (
      <section>
        <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map(lang => (
            <SkillBadge
              key={lang.name}
              name={lang.name}
              icon={<img src={lang.url} alt={lang.name} className="h-5 w-5" />}
            />
          ))}
        </div>
      </section>
    );
  }

