"use client"

  import { useState } from "react"
  import { Menu, X} from '@mynaui/icons-react';
//  import { Menu, X } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  import Logo from "./logo";
  import LogoIcon from "./logo-icon"

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
      { name: "Early Access", href: "/early-access"}
    ]

    return (
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 py-2 items-center justify-between max-w-9xl mx-auto">
          {/* Logo */}
          <a href="/" className="hidden md:flex items-center justify-center">
            <Logo className="w-30 h-auto fill-primary hover:fill-secondary"/>
          </a>
          <a href="/" className="md:hidden flex items-center justify-center">
           <LogoIcon className="w-12 h-auto fill-primary hover:fill-secondary" />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors text-foreground hover:bg-accent hover:text-accent-foreground 
  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
              <div className="flex flex-col space-y-4 mt-8">
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
    )
  }