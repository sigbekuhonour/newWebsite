import Header from "@/components/navigation/Header";
import SectionTitle from "@/components/ui/title/SectionTitle";
import BookingCalendar from "@/components/ui/calendar/BookingCalendar";
import { FileText } from "lucide-react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <Header itemColour="text-white" />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 py-8 flex flex-col gap-8 max-w-7xl mx-auto flex-1">
        <section className="flex flex-col gap-6 pt-2">
          <SectionTitle title="HONOUR SIGBEKU" />
        </section>

        <div className="inline-flex items-center gap-2.5 bg-[#d4e9d2] text-[#2e572b] px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide w-fit">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3d7739] animate-pulse" />
          <span>Available for new projects</span>
        </div>

        <p className="text-xs sm:text-sm md:text-base font-extralight text-white/80 leading-relaxed max-w-4xl tracking-wide">
          I’m open to freelance projects, full-time roles, and creative
          collaborations. Drop me a message and I’ll get back to you within
          24–48 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start pt-4 pb-16">
          <div className="flex flex-col gap-4">
            <BookingCalendar />
            <p className="text-xs sm:text-sm font-extralight text-white/80 leading-relaxed max-w-sm tracking-wide">
              If its that serious ngl, an online meeting might be better, so
              let's meet up!!
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase text-white">
                Email
              </h3>
              <a
                href="mailto:sigbekuhonour@gmail.com"
                className="text-xs sm:text-sm md:text-base font-extralight text-white/90 underline hover:text-white transition-colors tracking-wide"
              >
                sigbekuhonour@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase text-white">
                Socials
              </h3>
              <div className="flex items-center gap-6 sm:gap-8">
                <a
                  href="https://www.linkedin.com/in/honoursigbeku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group text-white/80 hover:text-white transition-colors"
                >
                  <div className="p-2.5 rounded-lg border border-white/20 group-hover:border-white transition-colors">
                    <LinkedInLogoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs font-light underline tracking-wide">
                    Linkedin
                  </span>
                </a>

                <a
                  href="https://github.com/sigbekuhonour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group text-white/80 hover:text-white transition-colors"
                >
                  <div className="p-2.5 rounded-lg border border-white/20 group-hover:border-white transition-colors">
                    <GitHubLogoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs font-light underline tracking-wide">
                    Github
                  </span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1CR6NUlMJ_b09HlaiQWDbT0-M_Y2ZMPlI/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group text-white/80 hover:text-white transition-colors"
                >
                  <div className="p-2.5 rounded-lg border border-white/20 group-hover:border-white transition-colors">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs font-light underline tracking-wide">
                    Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
