import Image from "next/image";
const techStack = [
  {
    title: "Front-End",
    description:
      "Experience with React, NextJS, TailwindCSS, Javascript, HTML.",
    image: "/Honour_img/frontend.png",
  },
  {
    title: "Back-End",
    description: "Experience with Node.js, SQL and MongoDB.",
    image: "/Honour_img/backend.png",
  },
  {
    title: "Mobile dev",
    description: "Experience with Kotlin, React native and Jetpack Compose.",
    image: "/Honour_img/appdev.png",
  },
];
function Tech({ image, title, info }) {
  return (
    <div className="flex flex-col justify-evenly">
      <Image
        src={image}
        width={35}
        height={20}
        className="border rounded-lg border-black"
        alt="Project meme"
      />

      <h1 className="text-lg font-bold mt-2">{title}</h1>
      <h2 className="text-lg font-thin">{info}</h2>
    </div>
  );
}
export default function Stack() {
  return (
    <div id="Tech" className="flex flex-col justify-evenly items-start">
      <h1 className=" text-xl font-bold ml-3 mt-7">My Skillset</h1>
      <h2 className="ml-3 justify-center">
        I've worked with a range of technologies from crafting basic responsive
        web applications to engineering intuitive mobile experiences, my
        proficiency spans a spectrum of technologies, showcasing my adaptability
        and passion for staying at the forefront of cutting-edge advancements.
      </h2>
      <div className="flex flex-row ml-3 mt-5">
        <Tech
          image={techStack[0].image}
          title={techStack[0].title}
          info={techStack[0].description}
        />
        <Tech
          image={techStack[1].image}
          title={techStack[1].title}
          info={techStack[1].description}
        />
        <Tech
          image={techStack[2].image}
          title={techStack[2].title}
          info={techStack[2].description}
        />
      </div>
    </div>
  );
}
