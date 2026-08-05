import Header from "@/components/navigation/Header";
import SectionTitle from "@/components/ui/title/SectionTitle";

const workExperiences = [
  {
    role: "Software Developer Intern",
    company: "TownSuite® mERP®",
    period: "May 2026 - Present",
  },
  {
    role: "Software Developer Intern (Volunteer)",
    company: "Kiderra",
    period: "April 2024 - August 2024",
  },
  {
    role: "Android Developer Intern (Remote)",
    company: "Konnected",
    period: "May 2023 - August 2023",
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <Header itemColour="text-white" />
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 py-8 flex flex-col gap-12 max-w-7xl mx-auto flex-1">
        <section className="flex flex-col gap-4 pt-2">
          <SectionTitle title="My experiences" />
          <p className="text-xs sm:text-sm md:text-base font-extralight text-white/80 leading-relaxed max-w-4xl tracking-wide">
            They say experience is the best teacher right? Well i’ve got a bit
            of everything.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <SectionTitle title="Education" />
          <div className="flex flex-col gap-1">
            <p className="text-sm sm:text-base md:text-lg font-light text-white tracking-wide">
              Memorial University of Newfoundland — B.Sc. CS Honours, Math Minor
            </p>
            <p className="text-xs sm:text-sm font-extralight text-white/70 tracking-wide">
              Jan 2023 – Present
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-6 pb-16">
          <SectionTitle title="Work Experience" />
          <ul className="flex flex-col gap-3">
            {workExperiences.map((exp) => (
              <li
                key={exp.role + exp.company}
                className="flex items-start gap-3 text-xs sm:text-sm md:text-base font-extralight text-white/90 tracking-wide leading-relaxed"
              >
                <span className="text-white/60">•</span>
                <span>
                  {exp.role} - {exp.company} ({exp.period})
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm md:text-base font-extralight leading-relaxed text-white/80 max-w-5xl tracking-wide pt-4">
            Outside work and school, i love to volunteer to organize/lead tech
            events, i also work on my projects, which i call my practical way of
            learning whatever concepts i’ve read/worked with, and i’m very much
            committed to{" "}
            <a
              href="https://www.linkedin.com/company/software-developers-of-st-john-s-sdsj/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-300 transition-colors font-normal"
            >
              Software Developers of St. John’s (SDSJ)
            </a>{" "}
            which is a club i’m a co-founder of on campus at{" "}
            <a
              href="https://www.mun.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-300 transition-colors font-normal"
            >
              Memorial University of Newfoundland(MUN).
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
