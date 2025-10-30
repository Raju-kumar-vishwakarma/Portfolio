import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website Builder",
    description: "A drag-and-drop portfolio builder that allows users to create beautiful portfolios without coding knowledge.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Express", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media managers to track engagement, schedule posts, and analyze performance across multiple platforms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "Chart.js", "REST APIs"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search filters, virtual tours, and real-time chat with agents.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["Next.js", "MongoDB", "Google Maps API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-responsive fitness app for tracking workouts, nutrition, and progress with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "Firebase"],
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden group hover:scale-105 smooth-transition animate-scale-in cyber-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary smooth-transition">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 glass-card cyber-border text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-accent/50">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-accent/50">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
