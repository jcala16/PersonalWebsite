import { SkillBadge } from "./skill-badge";

//Add tools and icons here
//Icons from https://devicon.dev/
const tools = [
    {
        name: "Jetbrains",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg",
    },
    {
        name: "VS Code",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
        name: "SQLite",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    },
];

export function Tools() {
    return (
      <section>
        <h3 className="text-lg font-semibold mb-3">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map(tool => (
            <SkillBadge
              key={tool.name}
              name={tool.name}
              icon={<img src={tool.url} alt={tool.name} className="h-5 w-5" />}
            />
          ))}
        </div>
      </section>
    );
  }