import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: [
        "Leading development of microservices architecture",
        "Mentoring junior developers and code reviews",
        "Reduced deployment time by 60% through CI/CD optimization"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      type: "work",
      title: "Android Developer",
      company: "Mobile Solutions Inc",
      location: "Remote",
      period: "2021 - 2023",
      description: [
        "Developed 5+ production Android apps with 100K+ downloads",
        "Implemented MVVM architecture and Jetpack Compose",
        "Improved app performance by 40%"
      ],
      technologies: ["Kotlin", "Android", "Firebase", "Jetpack Compose"]
    },
    {
      type: "education",
      title: "Master of Computer Science",
      company: "University of Technology",
      location: "Boston, MA",
      period: "2019 - 2021",
      description: [
        "Specialized in Mobile & Web Development",
        "GPA: 3.8/4.0",
        "Thesis: Modern approaches to cross-platform development"
      ]
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "StartUp Labs",
      location: "New York, NY",
      period: "2019 - 2021",
      description: [
        "Built responsive web applications using React",
        "Collaborated with UX team to improve user experience",
        "Implemented real-time features using WebSockets"
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      type: "education",
      title: "Bachelor of Computer Engineering",
      company: "State University",
      location: "California",
      period: "2015 - 2019",
      description: [
        "Dean's List all semesters",
        "President of Programming Club",
        "Capstone: E-commerce mobile application"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A chronological view of my professional and educational journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background glow-effect z-10" />

                {/* Icon */}
                <div className="hidden md:flex md:w-1/2 justify-center items-start pt-2">
                  <div
                    className={`w-16 h-16 rounded-full ${
                      item.type === "work" ? "bg-primary/20" : "bg-accent/20"
                    } flex items-center justify-center group-hover:scale-110 smooth-transition`}
                  >
                    {item.type === "work" ? (
                      <Briefcase className="w-8 h-8 text-primary" />
                    ) : (
                      <GraduationCap className="w-8 h-8 text-accent" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <Card className="md:w-1/2 glass-card hover:scale-105 smooth-transition group ml-16 md:ml-0">
                  <CardContent className="p-6">
                    <div className="flex md:hidden items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${
                          item.type === "work" ? "bg-primary/20" : "bg-accent/20"
                        } flex items-center justify-center`}
                      >
                        {item.type === "work" ? (
                          <Briefcase className="w-6 h-6 text-primary" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-accent" />
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-primary font-semibold">{item.company}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
                        <span>{item.location}</span>
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
