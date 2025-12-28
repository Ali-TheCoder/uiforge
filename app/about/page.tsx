import { Card, CardContent } from "@/components/card";

export default function Page(){
    const teamMembers = [
    {
      id: 1,
      name: "ALi Attari",
      role: "Creative Director & Co-Founder",
      bio: "With over 5 years of experience in digital design, Ali leads our creative vision and ensures every project delivers exceptional user experiences.",
      image: "/Ali.jpeg"
    },
    {
      id: 2,
      name: "Ahmad Movahedi",
      role: "Lead Developer & Co-Founder",
      bio: "Ahmad brings technical excellence to every project, specializing in modern web technologies and scalable architecture that powers our client solutions.",
      image: "/Ahmad.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-2xl">About Us</h1>
          <p className="
            mx-auto
            max-w-xl sm:max-w-2xl lg:max-w-3xl
            px-4 sm:px-0
            text-sm sm:text-base lg:text-lg
            leading-relaxed sm:leading-7 lg:leading-8
            text-slate-400
            ">
                We’re a design and development studio focused on building thoughtful, modern digital experiences.
                From polished company websites to high-performing e-commerce storefronts and fully custom web applications, we handle projects end to end.
                Our work is grounded in strong UI systems—scalable, consistent, and intuitive—ensuring every product not only looks great but is easy to use, maintain, and grow with your business.
            </p>

        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow border-1 border-slate-700 duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-slate-300 mb-4">{member.role}</p>
                <p className="text-slate-400">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}