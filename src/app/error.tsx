"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/navigation/Header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an analytics or reporting service if needed
    console.error("Runtime error caught:", error);
  }, [error]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <Header itemColour="text-white" />

      <div className="relative z-10 w-full px-6 py-16 flex flex-col items-center justify-center text-center gap-6 max-w-2xl mx-auto flex-1">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-red-500/80 tracking-widest">
          Error
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-white">
          Something went wrong
        </h2>
        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
          An unexpected error occurred. Please try again or return home.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-white text-black font-semibold text-xs sm:text-sm rounded-xl hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm rounded-xl border border-white/15 transition-all cursor-pointer"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
