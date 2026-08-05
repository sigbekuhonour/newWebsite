import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import SectionTitle from "@/components/ui/title/SectionTitle";
import { Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore software engineering projects created by Honour Sigbeku, including mobile apps, web applications.",
  openGraph: {
    title: "Projects | Honour Sigbeku",
    description:
      "Explore software engineering projects created by Honour Sigbeku, including mobile apps, web applications.",
  },
};

const projectsData = [
  {
    title: "Studyhub",
    description:
      "StudyHubApp is a android application that is pretty much a student-focused note taking and collaboration tool designed to enhance studying, retention, and revision. The app allows users to create and manage notes and folders in an intuitive way while also enabling collaboration, sharing, media-rich editing, and the generation of personalized flashcards for revision.",
    github: "https://github.com/sigbekuhonour/studyhubapp",
  },
  {
    title: "Graceville bookstore management website",
    description:
      "This is a bookstore management website I built with admin management features for a book store owner.",
    github: "https://github.com/sigbekuhonour/BookWebsite",
  },
  {
    title: "Tasktrackr",
    description:
      "Tasktrackr is a todo list android application. This was my first project after i started my android development journey.",
    github: "https://github.com/sigbekuhonour/TaskTrackr",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <Header itemColour="text-white" />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 py-8 flex flex-col gap-12 max-w-7xl mx-auto flex-1">
        <section className="flex flex-col gap-6 pt-2">
          <SectionTitle title="Projects" />
        </section>

        <div className="flex flex-col gap-10 sm:gap-12 pb-16">
          {projectsData.map((project) => (
            <div key={project.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-3 text-white shrink-0" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider uppercase text-white">
                  {project.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base font-extralight text-white/80 leading-relaxed max-w-4xl tracking-wide pl-8 sm:pl-9">
                {project.description}
              </p>
              <div className="pl-8 sm:pl-9 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-xl border border-white/40 hover:border-white text-white text-xs sm:text-sm uppercase tracking-widest transition-all hover:bg-white/10"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
