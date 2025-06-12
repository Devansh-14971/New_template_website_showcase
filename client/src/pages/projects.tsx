import { Link } from "wouter";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteSettings } from "@shared/settings";

export default function ProjectsPage() {
  const projects = siteSettings.projects;

  const categoryColors = {
    "E-commerce": "bg-emerald-100 text-emerald-800",
    "Productivity": "bg-blue-100 text-blue-800",
    "Analytics": "bg-purple-100 text-purple-800",
    "Health": "bg-green-100 text-green-800",
    "Finance": "bg-yellow-100 text-yellow-800",
    "Data Visualization": "bg-indigo-100 text-indigo-800"
  };

  const techColors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-purple-100 text-purple-800",
    "bg-yellow-100 text-yellow-800",
    "bg-red-100 text-red-800",
    "bg-indigo-100 text-indigo-800",
    "bg-orange-100 text-orange-800",
    "bg-gray-100 text-gray-800"
  ];

  return (
    <>
      {/* Projects Hero */}
      <div className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
            Explore our portfolio of innovative web applications and digital solutions
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className={techColors[techIndex % techColors.length]}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-200">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full border-slate-300 hover:border-slate-400 text-slate-700 font-semibold transition-colors duration-200">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
              </p>
              <Link href="/contact">
                <Button 
                  className="bg-white text-blue-500 px-8 py-4 font-bold text-lg hover:bg-blue-50 transition-colors duration-200 transform hover:scale-105"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
