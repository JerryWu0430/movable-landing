"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Product", link: "/#product" },
  { name: "Solutions", link: "/#solutions" },
  { name: "Industries", link: "/#industries" },
  { name: "Testimonials", link: "/#testimonials" },
];

export function NavbarWrapper() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="fixed top-4">
      {/* Desktop Navigation */}
      <NavBody className="bg-deep-blue/80 dark:bg-deep-blue/80 border border-white/10">
        <NavbarLogo />
        <NavItems
          items={navItems}
          className="text-white/70 hover:text-white"
        />
        <NavbarButton
          href="/#demo"
          variant="gradient"
          className="bg-gradient-to-r from-tango to-tango-mid text-white border-none"
        >
          Request Demo
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="bg-deep-blue/90 dark:bg-deep-blue/90 border border-white/10">
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-deep-blue border border-white/10"
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-white/80 hover:text-white transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="/#demo"
            variant="gradient"
            className="w-full bg-gradient-to-r from-tango to-tango-mid text-white border-none mt-4"
          >
            Request Demo
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

function NavbarLogo() {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center gap-3 px-2 py-1 mr-8"
    >
      <img
        src="/assets/LOGO/SVGs/Movable_Logo_2026_Primary White.svg"
        alt="Movable Voice"
        className="h-8 w-auto"
      />
    </a>
  );
}
