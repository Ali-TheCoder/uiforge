// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "UI Forge — Web Design & Development Studio",
//   description:
//     "UI Forge is a two-person web design & development studio building fast, elegant Next.js websites.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen">
//         <Navbar />
//         <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "UI Forge — Web Design & Development Studio",
  description: "UI Forge is a two-person design & development studio building fast, elegant Next.js websites.",
};

function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage: `
          radial-gradient(900px 500px at 10% 10%, rgba(124,58,237,.35), transparent 60%),
          radial-gradient(900px 500px at 90% 20%, rgba(6,182,212,.28), transparent 55%),
          radial-gradient(900px 500px at 60% 90%, rgba(245,158,11,.20), transparent 60%),
          linear-gradient(0deg, var(--color-bg), var(--color-bg))
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Background />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

