import Link from "next/link"
import { Github, Linkedin, Mail, FileText, ExternalLink, Code, Database, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/ui/project-card" 
import { SkillBadge } from "@/components/ui/skill-badge"
import { Terminal } from "@/components//ui/terminal"
import Projects from "@/components/projects"
import { SkillsList } from "@/components/ui/skills"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-mono font-bold">jacob-cala.dev</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/jcala16" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/jacob-cala-583a27249" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-primary">Hello World!</span> I'm{" "}
                    <span className="text-primary">Jake Cala</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    U.S. Marine Corps veteran currently pursuing a Bachelor's degree in Computer Science. 
                    Passionate about all things computers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
              </div>
              <Terminal className="hidden lg:flex" />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Veteran | Computer Science Student | Aspiring Developer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a third year Computer Science student with a passion for learning, problem solving, and working with technology.
                  Currently, I'm building my skills in modern front-end frameworks like React and Next.js. I’m looking to explore 
                  different areas of the tech industry to find where my interests and strengths align best.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
               <SkillsList />
              <div className="flex justify-center">
                <img
                  alt="Profile"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center border shadow-xl"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent research and development projects.
                </p>
              </div>
            </div>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
               <Projects />
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Languages, frameworks, and technologies I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Python" level={5} />
                        <SkillBadge name="C++" level={5} />
                        <SkillBadge name="Java" level={4} />
                        <SkillBadge name="JavaScript" level={4} />
                        <SkillBadge name="TypeScript" level={4} />
                        <SkillBadge name="Rust" level={3} />
                        <SkillBadge name="Go" level={3} />
                        <SkillBadge name="Haskell" level={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Frameworks & Libraries</h3>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="TensorFlow" level={5} />
                        <SkillBadge name="PyTorch" level={4} />
                        <SkillBadge name="React" level={4} />
                        <SkillBadge name="Node.js" level={4} />
                        <SkillBadge name="Django" level={3} />
                        <SkillBadge name="Spring Boot" level={3} />
                        <SkillBadge name="Next.js" level={4} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Docker" level={5} />
                        <SkillBadge name="Kubernetes" level={4} />
                        <SkillBadge name="AWS" level={4} />
                        <SkillBadge name="Git" level={5} />
                        <SkillBadge name="Linux" level={5} />
                        <SkillBadge name="CI/CD" level={4} />
                        <SkillBadge name="GraphQL" level={3} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Research Areas</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="px-3 py-1">
                          Distributed Systems
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                          Machine Learning
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                          Algorithm Design
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                          Computational Complexity
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                          Computer Vision
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                          Natural Language Processing
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My academic and industry experience.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="space-y-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="md:w-1/3">
                    <div className="font-semibold">2021 - Present</div>
                    <div className="text-sm text-muted-foreground">Senior Research Scientist</div>
                    <div className="text-sm font-medium">Google AI</div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground">
                      Leading research in distributed machine learning systems and algorithm optimization. Developed
                      novel approaches to training large language models across distributed computing clusters,
                      resulting in 40% reduction in training time.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="md:w-1/3">
                    <div className="font-semibold">2018 - 2021</div>
                    <div className="text-sm text-muted-foreground">Software Engineer</div>
                    <div className="text-sm font-medium">Microsoft Research</div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground">
                      Worked on quantum computing simulation frameworks and distributed systems for large-scale data
                      processing. Published 5 papers in top-tier conferences and contributed to open-source projects.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="md:w-1/3">
                    <div className="font-semibold">2016 - 2018</div>
                    <div className="text-sm text-muted-foreground">Research Assistant</div>
                    <div className="text-sm font-medium">Stanford University</div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground">
                      Conducted research in algorithm design and computational complexity theory. Assisted in teaching
                      undergraduate computer science courses and mentored junior researchers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="#" download>
                    <FileText className="mr-2 h-4 w-4" /> Download Full CV
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in collaboration or have questions about my work? Let's connect.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels.</p>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:john.doe@example.com" className="hover:underline">
                      john.doe@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      github.com/johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          {/* <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Jacob Cala. All rights reserved.</p> */}
          <div className="flex gap-4">
            {/* <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
