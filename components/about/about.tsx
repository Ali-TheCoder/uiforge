"use client"
import { Card, CardContent } from "@/components/card";
import { motion } from "motion/react";
import ahmad from "@/public/Ahmad.jpeg"
import Ali from "@/public/Ali.jpeg"
import Image from "next/image";
export default function About(){
    const teamMembers = [
    {
      id: 1,
      name: "ALi Attari",
      role: "Creative Director & Co-Founder",
      bio: "With over 5 years of experience in digital design, Ali leads our creative vision and ensures every project delivers exceptional user experiences.",
      image: Ali
    },
    {
      id: 2,
      name: "Ahmad Movahedi",
      role: "Lead Developer & Co-Founder",
      bio: "Ahmad brings technical excellence to every project, specializing in modern web technologies and scalable architecture that powers our client solutions.",
      image: ahmad
    }
  ];

  return (
    <motion.section  
     initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    id="about"
    className="flex flex-col rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-12 ">
    
        {/* Header Section */}
        <div className="text-start flex flex-col items-start mb-8">
          <h1 className="mb-3 text-5xl mx-auto">About Us</h1>
          <p className="
            mx-auto
            max-w-xl sm:max-w-2xl lg:max-w-3xl
            px-4 sm:px-0
            text-sm sm:text-base lg:text-lg
            leading-relaxed sm:leading-7 lg:leading-8
            text-slate-400  text-muted flex flex-col gap-1
            ">
            <span> We’re a design and development studio focused on building thoughtful, modern digital experiences.</span>
            <span>From polished company websites to high-performing e-commerce storefronts and fully custom web applications, we handle projects end to end.</span>
            <span>Our work is grounded in strong UI systems—scalable, consistent, and intuitive—ensuring every product not only looks great but is easy to use, maintain, and grow with your business.</span>
            
            </p>

        </div>

        {/* Team Members flex */}
        <div className="flex justify-evenly gap-4">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow 
            border-1 border-slate-700 duration-300 relative  rounded-3xl p-3 backdrop-blur-x max-w-[30rem]">
              <div className="aspect-[1.4567] overflow-hidden  bg-slate-200 ">
                <Image
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="">
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-slate-300 mb-4">{member.role}</p>
                <p className="text-slate-400">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

    </motion.section >
  );
}