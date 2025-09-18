// import { Button } from "./ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FaGithub, FaLinkedin, FaMailBulk }  from "react-icons/fa"

import Link from "next/link";

// import { useState } from "react";

export function Header() {
  // const [currentPage, setCurrentPage] = useState("home");

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "portfolio", label: "Portfolio" },
    { href: "blog", label: "Blog" },
    { href: "contact", label: "Contact" },
  ];

  // const navigateToPage = (page: string) => {
  //   setCurrentPage(page);
  //   window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  // };

  console.log("Header rendered");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <button
          //   onClick={() => navigateToPage("home")}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          {/* <PenTool className="h-8 w-8 text-primary" /> */}
          <img src={"/crafterCode.png"} alt="Logo" className="h-25 w-25"/>
          {/* <span className="text-xl font-bold">CodeCraft</span> */}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.length > 0 && navItems.map((item) => (
          <div key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <button>
            <FaGithub className="h-4 w-4" />
          </button>
          <button >
            <FaLinkedin className="h-4 w-4" />
          </button>
          <button > 
            <FaMailBulk className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Menu */}
        {/* <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigateToPage(item.href)}
                  className={`text-left text-lg font-medium transition-colors ${
                    currentPage === item.href 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 mt-8">
                <Button variant="ghost" size="sm">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div> */}
        {/* </SheetContent> */}
        {/* </Sheet> */}
      </div>
    </header>
  );
}
