import { SkillBadge } from "./skill-badge";

//Add tools and icons here
//Icons from https://devicon.dev/
const tools = [
    {
        name: "Windows",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
    },
    {
        name: "MacOS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
    },
    {
        name: "Ubuntu",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    },
];

export function Operating_Systems() {
    return (
      <section>
        <h3 className="text-lg font-semibold mb-3">Operating Systems</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map(os => (
            <SkillBadge
              key={os.name}
              name={os.name}
              icon={<img src={os.url} alt={os.name} className="h-5 w-5" />}
            />
          ))}
        </div>
      </section>
    );
  }