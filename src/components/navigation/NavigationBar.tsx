"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button/button";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer/Drawer";

interface NavigationBarItem {
  title: string;
  route: string;
  itemColour?: string;
  onClick?: () => void;
}

function NavigationBarItem({
  title,
  route,
  itemColour,
  onClick,
}: NavigationBarItem) {
  return (
    <Button
      className={`${itemColour} p-0 h-auto hover:underline hover:bg-transparent transition-none focus-visible:ring-0`}
      variant="link"
      asChild
    >
      <a
        href={route}
        onClick={onClick}
        className="text-xs sm:text-xs md:text-sm lg:text-base uppercase tracking-widest no-underline hover:no-underline select-none"
      >
        {title}
      </a>
    </Button>
  );
}

export default function NavigationBar({
  itemColour = "text-white",
}: {
  itemColour?: string;
}) {
  const [open, setOpen] = useState(false);
  const home = NavigationList[0];
  const rest = NavigationList.slice(1);

  return (
    <nav className="relative w-full px-4 sm:px-8 py-6 z-30">
      <div className="flex items-center justify-between sm:justify-evenly">
        <NavigationBarItem
          title={home.title}
          route={home.route}
          itemColour={itemColour}
          onClick={() => setOpen(false)}
        />
        <div className="hidden sm:flex flex-row justify-evenly items-center flex-1">
          {rest.map((item) => (
            <NavigationBarItem
              key={item.title}
              title={item.title}
              route={item.route}
              itemColour={itemColour}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <button
              className={`sm:hidden outline-none focus:outline-none focus-visible:ring-0 ${itemColour}`}
              aria-label="Toggle menu"
            >
              {open ? <X size={25} /> : <Menu size={20} />}
            </button>
          </DrawerTrigger>
          <DrawerContent className="sm:hidden">
            <DrawerHeader className="text-center">
              <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
              <DrawerDescription className="sr-only">
                Mobile navigation menu links
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col items-center gap-6 py-6 pb-12 px-4">
              {rest.map((item) => (
                <DrawerClose key={item.title} asChild>
                  <NavigationBarItem
                    title={item.title}
                    route={item.route}
                    itemColour="text-foreground"
                    onClick={() => setOpen(false)}
                  />
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

const NavigationList: NavigationBarItem[] = [
  { title: "Home", route: "/" },
  { title: "About Me", route: "/About" },
  { title: "Projects", route: "/Projects" },
  { title: "Experiences", route: "/Experiences" },
  { title: "Contact", route: "/Contact" },
];
