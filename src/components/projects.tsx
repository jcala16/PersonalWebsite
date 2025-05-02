//All project-cards are consolidated into this component
import { ProjectCard } from "./ui/project-card";

const projects = [ //add, remove, or edit projects here
    {
        title:"Weather App",
        description:"Built with JavaScript and openweathermap API to retrieve and display real time weather data",
        tags:["JavaScript","DOM", "RESTful API", "CSS"],
        image:"/WeatherAppIcon.png",
        link:"https://github.com/jcala16/WeatherApp"
    },
    {
        title:"Pass the Pigs",
        description:"A simple jeopardy dice game where players roll a die to accumulate points, but risk losing their turn's score if they roll a 1. Uses session state to persist data between requests. Created using DOTNET MVC"
        ,
        tags:["DOTNET","C#", "State Management"],
        image:"/PigsAppIcon.png",
        link:"https://github.com/jcala16/PigsApp"
    },
    {
        title:"Portfolio Website",
        description:"You're looking at it! Built using React + Next.js + Tailwind CSS",
        tags:["React","Next.js", "Tailwind", "JavaScript", "TypeScript"],
        image:"/YouAreHere.png",
        link:"https://github.com/jcala16/PersonalWebsite"
    }, 
];
export default function Projects(){
    return (
        <section id="projects" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="mx-auto grid max-w-5xl gap-6 py-12"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {projects.map((project) => ( //map the array of project data into each project card
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>
      );



}