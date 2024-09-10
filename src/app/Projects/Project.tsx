import { title } from "process";
import Image from "next/image";

const projects = [
  {
    title: "TaskTrackr",
    description:
      "TaskTrackr is a dynamic to-do list application designed with Jetpack Compose. ",
    image: "/Honour_img/tasktrackr.png",
    visit: "https://github.com/sigbekuhonour/TaskTrackr",
    alt: "Tasktrackr",
    id: 0,
  },
  // {
  //   title: "LemAppClone",
  //   description:
  //     "This was a learning process of me trying to clone the Lemfi application using Jetpack Compose.",
  //   image: "/Honour_img/Lemfi.png",
  //   visit: "https://github.com/sigbekuhonour/LemfiCloneApp",
  //   alt: "LemApp",
  //   id: 1,
  // },
  {
    title: "Qodo",
    description:
      "This was a project done with the use of majorly python. It is majorly a QR code generator using Python.",
    image: "/Honour_img/qrcode.png",
    visit: "https://github.com/sigbekuhonour/Python-projects",
    alt: "QRgen",
    id: 1,
  },
];
function ProjectComponent({ alt, image, title, description, link }) {
  return (
    <div className="flex flex-col shadow-lg rounded-xl px-5 w-full justify-evenly items-center">
      <Image
        src={image}
        width={90}
        height={80}
        alt={alt}
        className="w-full h-48 object-contain rounded-lg bg-black"
      />
      <h1 className="text-lg font-bold ">{title}</h1>
      <h1 className="text-lg font-thin">{description}</h1>
      <div className=" w-32 h-8 my-5  border-dashed border rounded-lg items-center">
        <a href={link}>
          <h1 className=" text-sm py-1 px-3 ">Project Link</h1>
        </a>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div
      id="Projects"
      className="flex flex-col mt-4 w-full space-y-2 text-sm justify-evenly items-start"
    >
      <h1 className="text-xl font-bold ml-3">My Projects</h1>
      <div className="flex flex-row items-center w-full justify-stretch md:shrink-1 shadow-lg">
        <Image
          src="/Honour_img/Shakespare.jpg"
          width={85}
          height={20}
          className="border rounded-lg "
          sizes="100vw"
          alt="Project meme"
        />
        <h1 className="text-base font-light ml-5">
          Yeah you 🙄, this is where you watch and learn carefully.
        </h1>
      </div>
      <div className="flex flex-col w-screen overflow-scroll justify-evenly gap-4 items-start shadow-xl">
        <ProjectComponent
          alt={projects[0].alt}
          image={projects[0].image}
          title={projects[0].title}
          description={projects[0].description}
          link={projects[0].visit}
        />

        <ProjectComponent
          alt={projects[1].alt}
          image={projects[1].image}
          title={projects[1].title}
          description={projects[1].description}
          link={projects[1].visit}
        />
      </div>
    </div>
  );
}
