"use client";

import { useState } from "react";
import { Menu, X } from "@mynaui/icons-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
//import Logo from "./logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Early Access", href: "/early-access" },
  ];

  return (
    <nav className="bg-primary-900">
      <div className="container flex h-auto py-2 items-center justify-between w-full md:max-w-9xl md:mx-auto">
        {/* Logo */}
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="805"
            height="1041"
            fill="#fff"
            className="w-[50px] h-auto"
          >

            <path
            fill="#fff"
              fillRule="evenodd"
              d="M486.32 850.975c5.705-1.673 11.373-3.687 16.979-6.051 2.161-.911 4.291-1.867 6.389-2.863l18.045 42.787c1.728-1.095 3.418-2.166 5.133-2.968 1.492-.696 3.262-.061 3.974 1.408l.064.145 37.867 89.787.119.287.081.188.07.17.034.07.006.015.021.045.021.051.09.201.42.91.43.874c9.069 17.834 30.531 25.879 49.259 17.982 19.591-8.262 28.776-30.843 20.514-50.435-2.88-6.83-7.487-12.38-13.097-16.377-.497-.354-1.002-.695-1.512-1.023l-.528-.334c-.311-.194-.618-.378-.919-.554-.279-.162-.566-.325-.857-.485-.238-.13-.485-.263-.739-.395l-.005-.001-.007-.005c-.134-.07-.277-.142-.476-.242l-.043-.023-.012-.004-.01-.007-.045-.023-.01-.005-.008-.006-.019-.008-.008-.004-.084-.046-.03-.016-.03-.018-.143-.083-.014-.008-.014-.009-.042-.025-.005-.003c-6.375-3.889-10.763-8.868-12.398-14.744-1.665-5.984-.124-11.658 2.931-15.974 5.491-7.754 16.773-12.326 27.174-8.359l.493.195.02.009.456.192.008.004.009.003.069.031.037.018.193.086.053.023.078.03.074.037.159.079c16.906 8.365 31.016 22.622 38.921 41.365 17.49 41.474-1.952 89.271-43.425 106.761-41.136 17.35-88.494-1.63-106.332-42.411l-.009-.025-38.634-91.604c-.678-1.61.155-3.449 1.8-4.009l.11-.037.115-.024c2.05-.441 3.851-.834 5.509-1.221l-18.27-43.324Zm157.621 84.907-.396-.58c-.05-.07-.101-.14-.151-.21.185.261.368.524.547.79Zm-145.104-37.267c.013.066.034.133.061.198l-.035-.102c-.01-.032-.019-.064-.026-.096Zm35.471-15.002.002-.001c-.033-.006-.067-.01-.1-.012l.098.013Z"
              clipRule="evenodd"
            />
            <path fill="#fff" d="M147.622 1.01682c5.222-1.896807 11.069.61625 13.252 5.79254L170.86 30.289l1.546.6217c3.259 1.3103 6.282 2.7059 8.544 3.9825 1.138.6417 1.994 1.2035 2.567 1.6578.077.0613.144.1174.202.1668l-.001.0025C451.91 84.4555 686.492 255.08 795.802 514.279c2.846 6.75 5.589 13.518 8.232 20.304 1.725 4.431.028 9.445-3.972 12.016-87.491 56.246-161.863 127.158-221.19 208.009l-16.327 23.053c-1.303 1.907-2.597 3.821-3.884 5.738-14.857 20.839-35.491 37.951-60.804 48.626-25.123 10.595-51.569 13.465-76.693 9.688-2.974-.561-5.951-1.107-8.932-1.636l-27.001-4.34c-99.263-14.3-201.959-10.9-303.3532 12.124-4.6307 1.051-9.391-1.243-11.3487-5.569-2.7972-6.182-5.5225-12.416-8.1736-18.702C-47.0479 564.169-5.32557 276.823 148.013 51.367c.075-.6678.196-1.4568.371-2.3564.522-2.6863 1.436-6.0167 2.55-9.3929l.469-1.425-9.878-23.2238c-2.253-5.34258.252-11.50161 5.594-13.75534l.503-.19674Z" />
          
          </svg>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="w-full flex flex-col gap-4 mx-auto space-y-4 mt-8 border-b border-b-primary">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
