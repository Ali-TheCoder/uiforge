export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/10 w-full">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
                <div>© {new Date().getFullYear()} UI Forge. All rights reserved.</div>
                <div className="flex gap-4">
                    <a className="hover:text-text" href="/pricing">Pricing</a>
                    <a className="hover:text-text" href="/work">Work</a>
                    <a className="hover:text-text" href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}
