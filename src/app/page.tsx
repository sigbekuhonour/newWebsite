import Intro from "@/components/sections/Intro";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col overflow-hidden bg-black">
      <div className="w-full flex-1">
        <Intro />
      </div>
    </main>
  );
}
