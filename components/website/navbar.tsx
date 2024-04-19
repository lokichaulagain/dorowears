"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import logo from "../../public/Logo.webp";
import Image from "next/image";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import TopNavbar from "./top-navbar";
import { usePathname } from "next/navigation";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { HammerIcon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="">
      <div className=" flex items-center justify-between ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="img"
            height={150}
            width={150}
            className=" object-cover py-2 "
          />
        </Link>
        {/* <NavigationMenu className=" ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-primary-350 hover:bg-primary-350 text-primary-50  hover:text-neutral-700 ">Men Category</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className=" w-[50vw] grid grid-cols-4 p-4 ">
                  <p className=" text-lg font-medium text-primary-350 underline ">Men Category</p>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <p
                      key={index}
                      className=" cursor-pointer mb-3 hover:text-primary-400  tracking-wide text-neutral-700  hover:translate-x-1 duration-300">
                      Genuine Leather
                    </p>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary-350 hover:bg-primary-350 text-primary-50  hover:text-neutral-700">Women Category</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className=" w-[50vw] grid grid-cols-4 p-4 ">
                  <p className=" text-lg font-medium text-primary-350 underline ">Women Category</p>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <p
                      key={index}
                      className=" cursor-pointer mb-3 hover:text-primary-400  tracking-wide text-neutral-700  hover:translate-x-1 duration-300">
                      Weeding Dresses
                    </p>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navlinks.map((item: any, index: any) => (
              <NavigationMenuItem key={index}>
                <Link
                  href={item.href}
                  legacyBehavior
                  passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-primary-350 hover:bg-primary-350 text-primary-50 hover:text-neutral-700`}>{item.name}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu> */}

        <div className=" hidden md:block">
          <div className=" flex  items-center gap-8 font-medium">
            {navlinks.map((item, index: number) => (
              <Link
                key={index}
                href={item.href}
                className={`${pathname === item.href ? " font-semibold  text-lg " : ""} `}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Link
            href="tel:970-3976578">
            <Button className=" bg-green-500 text-white hover:bg-green-600">Whatsapp Now</Button>
          </Link>
        </div>
        {/* <div className=" flex items-center gap-2 ">
          <MenuIcon
            onClick={toggleDrawer}
            size={26}
            className=" cursor-pointer block md:hidden "
          />

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="  bg-secondary-500 z-30 ">
            <div className=" bg-secondary-500 space-y-4 p-4 border-none flex flex-col h-screen">
              {navlinks.map((item: any, idx) => {
                return (
                  <Link
                    href={item.href}
                    key={idx}
                    className={`${pathname === item.href ? "text-primary-500 underline_hover_effect" : ""} text-accent-400 cursor-pointer hover:text-primary-500 transition-all ease-in-out  underline_hover_effect`}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </Drawer>
        </div> */}
      </div>
    </div>
  );
}

const navlinks = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Shop",
    href: "/shop",
  },

  {
    name: "Our Stores",
    href: "/our-stores",
  },
];

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
