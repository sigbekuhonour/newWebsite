import { DividerVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row w-screen h-10 p-0 mt-3 rounded-md border md:shrink-1 justify-evenly items-center text-xs text-slate-950">
      <DividerVerticalIcon />
      <Link legacyBehavior href={"/"} className="">
        About
      </Link>
      <DividerVerticalIcon />
      <Link legacyBehavior href={"#Projects"} className="">
        Projects
      </Link>
      <DividerVerticalIcon />
      <Link legacyBehavior href={"#Tech"} className="">
        Technologies
      </Link>
      <DividerVerticalIcon />
      <Link legacyBehavior href={"#Contact"} className="">
        Contact
      </Link>
      <DividerVerticalIcon />
    </div>
  );
}
