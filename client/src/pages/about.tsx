import { Lightbulb, Handshake, Star, Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      bio: "With over 8 years of experience in full-stack development, Alex leads our technical vision and ensures we deliver scalable, maintainable solutions. Specializes in React, Node.js, and cloud architecture.",
      socials: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "UX/UI Designer & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c825?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      bio: "Sarah brings 6+ years of design expertise to create intuitive and beautiful user experiences. She's passionate about accessibility and user research, ensuring our products work for everyone.",
      socials: {
        linkedin: "#",
        dribbble: "#",
        behance: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      bio: "Marcus is our go-to expert for backend systems and DevOps. With extensive experience in AWS, Docker, and microservices, he ensures our applications are robust, scalable, and secure.",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      bio: "Emma keeps our projects on track and our team in sync. With her Agile expertise and excellent communication skills, she ensures smooth delivery and client satisfaction.",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do"
    }
  ];

  return (
    <>
      {/* About Hero */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">About DevTeam Pro</h1>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We're more than just developers – we're digital architects crafting the future of web experiences
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To empower businesses with cutting-edge web solutions that drive growth, enhance user experiences,
                and create lasting digital impact. We believe in the power of technology to transform ideas into reality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-slate-700">Innovation-driven development approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                  <span className="text-slate-700">User-centered design philosophy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-slate-700">Agile and collaborative workflow</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the passionate individuals who bring ideas to life through code, design, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mr-6 object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-blue-500 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-slate-400 hover:text-blue-500 transition-colors duration-200">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="text-slate-400 hover:text-slate-900 transition-colors duration-200">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.dribbble && (
                      <a href={member.socials.dribbble} className="text-slate-400 hover:text-pink-500 transition-colors duration-200">
                        <Dribbble className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-blue-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
