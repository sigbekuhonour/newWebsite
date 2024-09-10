import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div id="Intro" className="flex flex-col mt-5 ml-3 space-y-2 text-sm">
      <div className="flex flex-row items-center w-auto  mr-5 justify-between md:shrink-1">
        <h1 className="text-xl font-bold text-slate-950 duration-5000 animate-pulse">
          Welcome to Honour's Portfolio
        </h1>
        <Image
          src="/Honour_img/HonourPP.jpg"
          width={50}
          height={20}
          className="border rounded-lg"
          alt="Picture of the author"
        />
      </div>
      <h2 className="text-base text-slate-950 justify-center">
        I am a dedicated and ambitious computer science undergraduate with a
        passion for crafting impactful digital experiences. With a solid
        foundation in web and Android development, I thrive on turning ideas
        into reality through clean, efficient code. Explore my portfolio to
        witness my journey in transforming concepts into seamless user
        experiences, and discover how my technical skills and creative mindset
        can contribute to your next innovative project.
      </h2>
      <div className="shadow-md w-32 h-8 bg-slate-950 hover:shadow-xl border-dashed border rounded-lg items-center">
        <a href="https://drive.google.com/file/d/1IDxXO-X7KYl2h0m_1owP6YLvNilMdnI5/view?usp=drive_link">
          <h1 className="text-white text-sm py-1 px-3 ">Link to resume</h1>
        </a>
      </div>
    </div>
  );
}

const handleClick = () => {
  window.location.href = "https://www.example.com";
};
