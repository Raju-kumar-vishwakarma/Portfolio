import { Smartphone, Code2, Palette, Database, Globe, GitBranch } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skillsData = [
  {
    icon: Smartphone,
    title: "Android Development",
    skills: [
      { name: "Kotlin", level: 90 },
      { name: "Java", level: 85 },
      { name: "Jetpack Compose", level: 80 },
      { name: "XML", level: 85 },
      { name: "Android Studio", level: 90 },
      { name: "Firebase", level: 75 }
    ],
    color: "primary",
  },
  {
    icon: Code2,
    title: "Web Development",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Next.js", level: 82 },
      { name: "Node.js", level: 78 },
      { name: "Tailwind CSS", level: 92 },
      { name: "REST APIs", level: 85 }
    ],
    color: "cyan",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 75 },
      { name: "Prototyping", level: 85 },
      { name: "Wireframing", level: 88 },
      { name: "User Research", level: 80 },
      { name: "Design Systems", level: 85 }
    ],
    color: "purple",
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 88 },
      { name: "Supabase", level: 82 },
      { name: "SQLite", level: 78 }
    ],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "SEO", level: 80 },
      { name: "Performance", level: 85 },
      { name: "Accessibility", level: 82 },
      { name: "PWA", level: 75 }
    ],
    color: "cyan",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "GitLab", level: 80 },
      { name: "CI/CD", level: 75 }
    ],
    color: "purple",
  },
];

const getColorClasses = (color: string) => {
  switch(color) {
    case 'cyan':
      return {
        bg: 'bg-accent/20',
        hoverBg: 'group-hover:bg-accent/30',
        text: 'text-accent',
        glow: 'glow-blue'
      };
    case 'purple':
      return {
        bg: 'bg-primary/20',
        hoverBg: 'group-hover:bg-primary/30',
        text: 'text-primary',
        glow: 'glow-effect'
      };
    default:
      return {
        bg: 'bg-primary/20',
        hoverBg: 'group-hover:bg-primary/30',
        text: 'text-primary',
        glow: 'glow-effect'
      };
  }
};

const Skills = () => {
  return (
    <section  className="py-20 px-6 relative matrix-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:scale-105 smooth-transition group animate-scale-in cyber-border"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 ${colors.hoverBg} smooth-transition ${colors.glow}`}>
                  <Icon className={`w-6 h-6 ${colors.text} group-hover:scale-110 smooth-transition`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
