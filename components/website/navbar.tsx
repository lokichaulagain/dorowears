"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import logo from "../../public/logo.png";
import Image from "next/image";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import TopNavbar from "./top-navbar";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  return (
    <div>
      <div className=" flex items-center justify-between ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="img"
            className=" w-16"
          />
        </Link>
        <NavigationMenu className=" ">
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
        </NavigationMenu>

        <div className=" flex items-center gap-2 text-primary-50">
          <Link href={"/cart"}>
            <ShoppingCart />
          </Link>
          <Link href={"/profile"}>
            <CircleUserRound />
          </Link>
        </div>
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
    name: "Cart",
    href: "/cart",
  },

  {
    name: "Login",
    href: "/login",
  },

  {
    name: "Register",
    href: "/register",
  },

  {
    name: "My Profile",
    href: "/profile",
  },

  {
    name: "Contact",
    href: "/contact",
  },

  {
    name: "Terms",
    href: "/terms-conditions",
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
