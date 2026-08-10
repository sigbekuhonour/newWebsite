import type { Metadata } from "next";
import SectionTitle from "@/components/ui/title/SectionTitle";
import Header from "@/components/navigation/Header";
import Image from "next/image";
import TechCard from "@/components/ui/card/TechCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Honour Sigbeku - CS & Math student, Software Developer Intern, tech stack, and background.",
  openGraph: {
    title: "About Honour Sigbeku",
    description:
      "Learn more about Honour Sigbeku - CS & Math student, Software Developer Intern, tech stack, and background.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <div className="absolute top-40 inset-x-0 h-262.5 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/whiplash.JPG"
          alt="Background Whiplash"
          fill
          priority
          className="object-cover object-center opacity-40 contrast-90"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-20">
        <Header itemColour="text-white" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 py-6 flex flex-col gap-16 max-w-7xl mx-auto">
        <section className="flex flex-col gap-6 pt-4">
          <SectionTitle title="Who is Honour?" />

          <div className="flex flex-col gap-4">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#aeaeae] uppercase tracking-wider leading-relaxed"
              style={{ WebkitTextStroke: "3px #000000" }}
            >
              Building things that matter, one line at a time.
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-extralight leading-relaxed text-white/90 max-w-5xl tracking-wide">
              This portfolio belongs to Honour Sigbeku. He is currently a 3rd
              year Computer Science Major and Mathematics Minor Student. He’s a
              curious, problem solving inclined person. He loves going to the
              gym, playing basketball, watching sports and on random weekends
              plays the alto saxophone. On the programming side of things he's
              currently aspiring to be a software engineer and he's on his
              internship at{" "}
              <a
                href="https://www.linkedin.com/company/townsuite-municipal-software/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300 transition-colors font-normal"
              >
                Townsuite
              </a>{" "}
              as a software developer intern (May 2026 - August 2027).
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <SectionTitle title="Tech stack" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
            <TechCard
              icon="📲"
              category="Mobile Development"
              items={[
                "Jetpack Compose",
                "Room DB",
                "Coroutines",
                "Android SDK",
                "Android Studio",
              ]}
            />
            <TechCard
              icon="💻"
              category="Programming Languages"
              items={["Kotlin", "Java", "Javascript", "Typescript", "Python"]}
            />
            <TechCard
              icon="🔨"
              category="Tools & Architecture"
              items={[
                "Git",
                "Github",
                "VS Code",
                "MVVM",
                "SOLID principles",
                "Clean Architecture",
                "SQL/NoSQL",
              ]}
            />
            <TechCard
              icon="🌐"
              category="Web & Backend"
              items={[
                "React",
                "Next.js",
                "TailwindCSS",
                "Supabase",
                "Firebase",
                "REST APIs",
                "MongoDB",
              ]}
            />
          </div>
        </section>

        <section className="flex flex-col gap-6 pt-6 pb-16">
          <SectionTitle title="So outside tech?" />

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-extralight leading-relaxed text-white/90 max-w-5xl tracking-wide">
            Big kendrick Lamar fan, lover of sports generally, avid music
            listener, gym stuff here and there, plays the alto saxophone and
            very big when it comes to volunteering to organize tech related
            events and i’m also a co-founder of a club on MUN campus called the{" "}
            <a
              href="https://www.linkedin.com/company/software-developers-of-st-john-s-sdsj/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-300 transition-colors font-normal"
            >
              Software Developers of St John’s
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
