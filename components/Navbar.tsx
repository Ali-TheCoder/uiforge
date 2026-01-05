"use client"
import Link from "next/link";
import Button from "@/components/Button";
import logo from "@/public/LOGO.jpeg"
import { useState } from "react";
import Image from "next/image";

const nav = [
    {href:"#about",label:"About",id:"5"},
    {href:"#process" , label:"Process",id:"4"},
    { href: "#portfolio", label: "Portfolio",id:"2" },
    { href: "#faq", label: "FAQ",id:"6" },
    { href: "#pricing", label: "Pricing",id:"1" },
    { href: "#contact", label: "Contact",id:"3" }
];

export default function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-xl w-full">
            <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-xl">
                        <Image
                            src={logo}
                            alt="UI Forge "
                            // 
                            className="object-contain"
                            // 
                        />
                    </div>

                    {/* Text brand (hide on small screens if you want) */}
                    <div className="hidden sm:block leading-tight">
                        <div className="text-sm font-semibold tracking-tight">
                            UI Forge
                        </div>
                        <div className="text-xs text-muted">
                            Design • Development
                        </div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {nav.map((i) => (
                        <a key={i.id} href={i.href} className="text-sm text-muted hover:text-text">
                            {i.label}
                        </a>
                    ))}
                </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div  className="absolute left-2 right-2  top-full mt-3 w-auto
              rounded-2xl border border-black/10
              bg-black/95 p-6 shadow-xl backdrop-blur-md
              
              md:hidden">
            <ul className="relative flex flex-col gap-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-semibold transition-colors hover:text-sky-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        

                <div className="flex items-center gap-2">
                     <Button variant="ghost" className="flex md:hidden" aria-label="Toggle-menu"
                        onClick={() => setIsMenuOpen((v) => !v)}
                        >
                        Menu
                    </Button>
                    <Button href="#contact">Get a Quote</Button>
                </div>
            </div>
        </header>
    );
}
