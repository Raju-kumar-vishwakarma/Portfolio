import { Shield, Lock, Bug } from "lucide-react";
import { useState, useEffect } from "react";
const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Parallax cursor effect */}
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out opacity-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          About <span className=" text-accent ">Me</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 animate-scale-in cyber-border">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            I'm a versatile developer specializing in{" "}
            <span className="text-primary font-semibold">Android & Web Development</span>{" "}
            with a strong foundation in <span className="text-primary font-semibold">UI/UX Design</span>. 
            I create end-to-end digital solutions that are not only functional but also beautiful and intuitive to use.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            From native Android apps to modern web applications, I bring ideas to life with clean code, 
            thoughtful design, and a user-first approach. My design background helps me bridge the gap 
            between aesthetics and functionality, creating experiences that users love.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="glass-card p-6 rounded-xl hover-scale smooth-transition cyber-border group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 smooth-transition glow-effect">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2  text-accent">1+ Years Experience</h3>
              <p className="text-muted-foreground">Building quality apps and websites</p>
            </div>

            <div className="glass-card p-6 rounded-xl hover-scale smooth-transition cyber-border group">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 smooth-transition glow-blue">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-accent">10+ Projects Completed</h3>
              <p className="text-muted-foreground">Delivering exceptional results</p>
            </div>

            <div className="glass-card p-6 rounded-xl hover-scale smooth-transition cyber-border group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 smooth-transition glow-effect">
                <Bug className="w-6 h-6  text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2  text-accent">Happy Clients</h3>
              <p className="text-muted-foreground">Satisfied customers worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
