import Image from "next/image";
import Link from "next/link";
import Header from "../Header/Header";
import { ArrowUpRight } from "lucide-react";

export default function Intro() {
  return (
    <div
      id="Intro"
      className="relative w-full h-full bg-black flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-1 rounded-t-2xl overflow-hidden isolate">
        <Image
          src="/images/honour.jpeg"
          alt="Honour Sigbeku portrait blurred"
          fill
          priority
          className="object-cover blur-[60px] scale-100 brightness-125 filter grayscale contrast-90 will-change-transform"
          style={{ transform: "translateZ(0)" }}
        />
        <Image
          src="/images/honour.jpeg"
          alt="Honour Sigbeku portrait"
          fill
          priority
          className="object-scale-down  filter grayscale contrast-90 pt-20"
        />
      </div>
      <Header itemColour="text-black" />
      <div className="absolute inset-1 flex flex-row z-30 justify-between items-start pt-20 sm:pt-24 md:pt-28 px-5 md:px-6 lg:px-7 pointer-events-none">
        <BarcodeText label="HONOUR" />
        <BarcodeText label="SIGBEKU" />
      </div>
      <LinkToResume />
    </div>
  );
}

function LinkToResume() {
  return (
    <div className="relative z-30 w-full flex flex-row justify-center pb-10 sm:pb-8 md:pb-10">
      <a
        href="https://drive.google.com/file/d/1CR6NUlMJ_b09HlaiQWDbT0-M_Y2ZMPlI/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 bg-black hover:bg-white text-white hover:text-black border border-white/20 hover:border-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 rounded-full text-[14px] sm:text-sm md:text-lg uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
      >
        <span>View Resume</span>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

function BarcodeText({ label }: { label: string }) {
  return (
    <div
      className="font-barcode"
      style={{ fontSize: "clamp(32px, 6cqw, 72px)" }}
    >{`*${label}*`}</div>
  );
}
