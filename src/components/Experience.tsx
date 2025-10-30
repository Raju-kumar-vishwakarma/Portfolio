import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
      achievements: [
        "Reduced application load time by 60%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Focused on creating responsive and user-friendly applications.",
      achievements: [
        "Delivered 15+ client projects",
        "Improved code quality by 40%",
        "Introduced automated testing",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2018 - 2020",
      description: "Specialized in creating beautiful, responsive user interfaces. Collaborated with designers to bring mockups to life.",
      achievements: [
        "Built 20+ responsive websites",
        "Improved SEO rankings",
        "Won Best Design Award 2019",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2017 - 2018",
      description: "Started my professional journey learning best practices and contributing to various projects. Gained foundational knowledge in web development.",
      achievements: [
        "Learned React and Node.js",
        "Contributed to open source",
        "Built personal portfolio",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary ">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-start gap-6 animate-fade-in ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -ml-2 w-4 h-4 rounded-full bg-primary glow-effect z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card cyber-border p-6 rounded-2xl hover:scale-105 smooth-transition">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-1 text-primary ">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
