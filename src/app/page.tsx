import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Project from "./Projects/Project";
import Stack from "./Skillset/Stack";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col overflow-hidden bg-black">
      <div className="w-full flex-1">
        <Intro />
      </div>
    </main>
  );
}
