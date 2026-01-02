"use client";

import { motion } from "framer-motion";

export default function AnimatedGlowDotsBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={
        {
          "--color-bg": "#020617", // slate-950
        } as React.CSSProperties
      }
    >
      {/* Glow gradients layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: [
            "0% 0%, 100% 0%, 50% 100%, center",
            "100% 100%, 0% 50%, 50% 0%, center",
          ],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `
            radial-gradient(900px 500px at 10% 10%, rgba(124,58,237,.35), transparent 60%),
            radial-gradient(900px 500px at 90% 20%, rgba(6,182,212,.28), transparent 55%),
            radial-gradient(900px 500px at 60% 90%, rgba(245,158,11,.20), transparent 60%),
            linear-gradient(0deg, var(--color-bg), var(--color-bg))
          `,
          backgroundSize: "200% 200%",
        }}
      />

      {/* Dot pattern layer */}
      <motion.div
        className="
          absolute inset-0
          bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)]
          bg-[size:20px_20px] 
        "
        animate={{
          backgroundPosition: ["0px 0px", "200px 200px"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <div className="relative z-10 rounded-3xl">{children}</div>
    </div>
  );
}
