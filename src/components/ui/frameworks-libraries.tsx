import { SkillBadge } from "./skill-badge";

//Add frameworks & libraries and icons here
//Icons from https://devicon.dev/
const frameworks = [
    {
        name: "Bootstrap",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
        name: "Tailwind",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "DOTNET MVC",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg",
    },
    {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        name: "NEXT.js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
];

export function FrameworksLibraries() {
    return (
      <section>
        <h3 className="text-lg font-semibold mb-3">Frameworks & Libraries</h3>
        <div className="flex flex-wrap gap-2">
          {frameworks.map(frame => (
            <SkillBadge
              key={frame.name}
              name={frame.name}
              icon={<img src={frame.url} alt={frame.name} className="h-5 w-5" />}
            />
          ))}
        </div>
      </section>
    );
  }