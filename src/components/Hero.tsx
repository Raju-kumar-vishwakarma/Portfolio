import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Shield, Lock, Terminal, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();
  const email = "contact@example.com";

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Android & Web Developer",
        "UI/UX Designer",
        "Mobile App Specialist",
        "Creative Problem Solver"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    });
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 matrix-bg">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      {/* Cyber floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse glow-effect" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse glow-blue" style={{ animationDelay: '1s' }} />

      {/* Floating tech icons */}
      <div className="absolute top-20 left-10 animate-bounce-slow opacity-20">
        <Shield className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce-slow opacity-20" style={{ animationDelay: '0.5s' }}>
        <Lock className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-40 right-40 animate-bounce-slow opacity-20" style={{ animationDelay: '1s' }}>
        <Terminal className="w-14 h-14 text-accent" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6 inline-block animate-scale-in">
          <span className="px-4 py-2 glass-card cyber-border rounded-full text-sm text-primary animate-glow">
            Available for Freelance
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Raju Vishwa</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto h-8">
          <span ref={typedRef}></span>
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
          Crafting beautiful, responsive, and user-centric digital experiences across mobile and web platforms
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-scale-in">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="hover:scale-110 smooth-transition glow-effect"
          >
            View Projects
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="hover:scale-110 smooth-transition"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-125 smooth-transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-125 smooth-transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <button 
            onClick={copyEmail}
            className="text-muted-foreground hover:text-primary hover:scale-125 smooth-transition relative group"
            title="Copy email address"
          >
            {emailCopied ? (
              <Check className="w-6 h-6 text-primary" />
            ) : (
              <Mail className="w-6 h-6" />
            )}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 smooth-transition whitespace-nowrap">
              Click to copy
            </span>
          </button>
        </div>

        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary smooth-transition"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
