import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Project from "./Projects/Project";
import Stack from "./Skillset/Stack";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col h-max min-w-full  items-start justify-evenly">
      <div>
        <Header />
        <Intro />
        <Project />
        <Stack />
        <Contact />
      </div>
    </main>
  );
}
