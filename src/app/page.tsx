import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code,
  Database,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/project-card";
import { SkillBadge } from "@/components/ui/skill-badge";
import { Terminal } from "@/components//ui/terminal";
import Projects from "@/components/projects";
import { SkillsList } from "@/components/ui/skills";
import { ProgrammingLanguages } from "@/components/ui/programming-languages";
import { FrameworksLibraries } from "@/components/ui/frameworks-libraries";
import { Tools } from "@/components/ui/tools";
import { Experience } from "@/components/ui/experience";
import ContactForm from "@/components/ui/contact-card";
import { Navbar } from "@/components/ui/navbar";
export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 ">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-mono font-bold">jacob-cala.dev</span>
          </div>
          <Navbar />
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/jcala16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/jacob-cala-583a27249"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                    U.S. Marine Corps veteran currently pursuing a Bachelor's
                    degree in Computer Science. Passionate about all things
                    computers.
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
              <div className="flex items-center justify-center">
                <img
                  src="/hero.jpg" 
                  alt="Jake Cala"
                  width={320}
                  height={320}
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Veteran | Computer Science Student | Aspiring Developer
                </h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a third year Computer Science student with a passion for
                  learning, problem solving, and working with technology.
                  Currently, I'm building my skills in modern front-end
                  frameworks like React and Next.js. I’m looking to explore
                  different areas of the tech industry to find where my
                  interests and strengths align best.
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
                  src="/USMC_Photo.jpg"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent projects.
                </p>
              </div>
            </div>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              <Projects />
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/jcala16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Projects on GitHub{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Technical Expertise
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Languages, frameworks, and technologies I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      <ProgrammingLanguages />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <FrameworksLibraries />
                    </div>
                    <div>
                      <Tools />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Professional Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My workplace and acedemic experience.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="space-y-8">
                <Experience />
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/resume.docx" download="JacobCala-Resume.docx">
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
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
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's connect!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </p>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:jcala16@hotmail.com"
                      className="hover:underline"
                    >
                      jcala16@hotmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/jcala16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/jcala16
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/jacob-cala-583a27249/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/jacob-cala-583a27249/
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex gap-4"></div>
        </div>
      </footer>
    </div>
  );
}
