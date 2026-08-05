import Link from "next/link";
import Header from "@/components/navigation/Header";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden">
      <Header itemColour="text-white" />

      <div className="relative z-10 w-full px-6 py-16 flex flex-col items-center justify-center text-center gap-6 max-w-2xl mx-auto flex-1">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-white/20 tracking-widest">
          404
        </h1>
        <h2 className="text-xl sm:text-3xl font-bold tracking-wide uppercase text-white">
          Page Not Found
        </h2>
        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-4 px-6 py-3 bg-white text-black font-semibold text-xs sm:text-sm rounded-xl hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
