"use client";
import {
  NavbarDemo,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./navbar-menu";
import { HeroSection } from "../herosection/HeroSection";
import { ModeToggle } from "../themetoggle/ModeToggle";
import { useState } from "react";
import { useRouter } from "next/navigation";


export function Navbar() {
  const router = useRouter();
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "ChatBot",
      link: "/chatbot",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <NavbarDemo>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="gradient" onClick={() => router.push("/signup")} >Sign In/ Up</NavbarButton>
            <NavbarButton variant="secondary"><ModeToggle /></NavbarButton>
            
          </div>
        </NavBody>
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4 justify-end w-fit ml-auto">
            <NavbarButton variant="secondary"><ModeToggle /></NavbarButton>
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="gradient"
                className="w-full"
              >
                Sign In/ Up
              </NavbarButton>
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contact Support
              </NavbarButton> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarDemo>
      <HeroSection />

    </div>
  );
}
