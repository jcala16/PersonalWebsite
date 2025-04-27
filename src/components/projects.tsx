//All project-cards are consolidated into this component
import { ProjectCard } from "./ui/project-card";

const projects = [ //add, remove, or edit projects here
    {
        title:"Distributed ML Framework",
        description:"A scalable framework for training machine learning models across distributed systems.",
        tags:["Python","TensorFlow", "Kubernetes"],
        image:"/placeholder.svg?height=200&width=300",
        link:"#"
    },
    {
        title:"Project 2 Testing",
        description:"A scalable framework for training machine learning models across distributed systems.",
        tags:["Python","TensorFlow", "Kubernetes"],
        image:"/placeholder.svg?height=200&width=300",
        link:"#"
    },
    {
        title:"Project 3 Testing",
        description:"A scalable framework for training machine learning models across distributed systems.",
        tags:["Python","TensorFlow", "Kubernetes"],
        image:"/placeholder.svg?height=200&width=300",
        link:"#"
    },
    {
        title:"Project 4 Testing",
        description:"A scalable framework for training machine learning models across distributed systems.",
        tags:["Python","TensorFlow", "Kubernetes"],
        image:"/placeholder.svg?height=200&width=300",
        link:"#"
    },
    {
        title:"Project 5 Testing",
        description:"A scalable framework for training machine learning models across distributed systems.",
        tags:["Python","TensorFlow", "Kubernetes"],
        image:"/placeholder.svg?height=200&width=300",
        link:"#"
    },
    {
        title:"Project 6 Testing",
        description:"A scalable framework for training machine learning models across distributed systems.",
        tags:["Python","TensorFlow", "Kubernetes"],
        image:"/placeholder.svg?height=200&width=300",
        link:"#"
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