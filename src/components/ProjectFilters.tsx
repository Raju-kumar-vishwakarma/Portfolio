import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import anishow from "../assets/anishow.png";
import avarena from "../assets/avarena.png";
import library from "../assets/xyzlibrary.png";

const ProjectFilters = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "UI/UX", "Backend"];

  const projects = [
    {
      title: "Anishow Mobile App & Website",
      description:
        "A React-based anime streaming web app inspired by AnimeDekho with manga section",
      image: anishow,
      tags: ["Mobile", "UI/UX", "Backend"],
      tech: ["React", "Firebase" , "TypeScript"],
      github: "https://github.com/Raju-kumar-vishwakarma/anishow",
      demo: "https://anishow.me/",
    },
    {
      title: "AV Arena - Esports Tournament Platform",
      description:
        "The platform likely allows setting up tournaments, tracking participants, results, leaderboards.tion",
      image: avarena,
      tags: [ "UI/UX", "Backend"],
      tech: ["React", "TypeScript"],
      github: "https://github.com/Raju-kumar-vishwakarma/av-arena",
      demo: "https://www.avarena.dev/",
    },
    {
      title: "Library Management Dashboard",
      description:
        "The Library Management Dashboard is a modern web application built to simplify how libraries manage their books, users, and administrative operations. It provides an intuitive interface for both admins and students to easily access and organize library resources.",
      image: library,
      tags: ["Web", "UI/UX","Mobile"],
      tech: ["React", "Tailwind"],
      github: "https://github.com/Raju-kumar-vishwakarma/XYZ-Library",
      demo: "https://xyz-library.vercel.app/",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Health and fitness tracker with workout plans and nutrition guidance",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      tags: ["Mobile", "Backend"],
      tech: ["Flutter", "Python"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with virtual tours and mortgage calculator",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      tags: ["Web", "UI/UX"],
      tech: ["Next.js", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for tracking social media performance across platforms",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Web", "Backend"],
      tech: ["React", "Express", "Redis"],
      github: "#",
      demo: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Explore my work across different categories
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "glass"}
                onClick={() => setActiveFilter(filter)}
                className="smooth-transition"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card cyber-border rounded-2xl overflow-hidden hover:scale-105 smooth-transition animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end justify-center gap-3 pb-4">
                  <Button variant="glass" size="sm" asChild>
                    <a
                      href={project.github}
                        target="blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link to={project.demo} target="blank" >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {project.title}
                </h3>
                <p
                  className="text-muted-foreground text-sm mb-4"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;
