import Image from "next/image";

const projects = [
    {
    title: "Studyhubapp",
    description:
      "StudyHubApp is a student-focused note taking and collaboration tool designed to enhance studying, retention, and revision. ",
    image: "/Honour_img/STUDY.png",
    visit: "https://github.com/sigbekuhonour/studyhubapp",
    alt: "Studyhubapp",
    id: 0,
  },
  {
    title: "TaskTrackr",
    description:
      "TaskTrackr is a dynamic to-do list application designed with Jetpack Compose. ",
    image: "/Honour_img/tasktrackr.png",
    visit: "https://github.com/sigbekuhonour/TaskTrackr",
    alt: "Tasktrackr",
    id: 1,
  },
  {
    title: "Qodo",
    description:
      "This was a project done with the use of majorly python. It is majorly a QR code generator using Python.",
    image: "/Honour_img/qrcode.png",
    visit: "https://github.com/sigbekuhonour/Python-projects",
    alt: "QRgen",
    id: 2,
  },
];
function ProjectComponent({ key, alt, image, title, description, link }:any) {
  return (
    <div id = {key}className="flex flex-col shadow-lg rounded-xl px-5 w-full justify-evenly items-center">
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
 {projects.map((eachProject) => (
    <ProjectComponent
    key = {eachProject.id}
      alt={eachProject.alt}
      image={eachProject.image}
      title={eachProject.title}
      description={eachProject.description}
      link={eachProject.visit}
    />
  ))}
    </div>
  );
}
