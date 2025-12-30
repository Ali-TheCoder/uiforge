import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

const nav = [
    { href: "/pricing", label: "Pricing",id:"1" },
    { href: "#portfolio", label: "Portfolio",id:"2" },
    { href: "/contact", label: "Contact",id:"3" },
    {href:"#process" , label:"Process",id:"4"},
    {href:"#about",label:"About",id:"5"}
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-xl">
                        <Image
                            src="/logo.png"
                            alt="UI Forge logo"
                            fill
                            className="object-contain"
                            priority
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

                <div className="flex items-center gap-2">
                    <Button href="/pricing" variant="ghost" className="hidden sm:inline-flex">
                        View Plans
                    </Button>
                    <Button href="/contact">Get a Quote</Button>
                </div>
            </div>
        </header>
    );
}
