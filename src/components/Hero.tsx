import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Shield,
  Lock,
  Terminal,
  Copy,
  Check,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Float3D, Perspective3DText, Particle3D, Orb3D } from "@/components/3DAnimations";

// <-- 1. IMPORT YOUR IMAGE
// Make sure to add your image to the 'assets' folder (or similar)
// and update the path here.
import profilePic from "../assets/me.jpeg"; // <-- CHANGE THIS PATH

const Hero = () => {
  const typedRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();
  const email = "rajuvishwa012@gmail.com";

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Co-founder at ZSCircle",
        "React Native Developer",
        "Android Native Developer",
        "Web Developer",
        "Grafhic Designer",
        "Creative Problem Solver",
        "Video Editor",
        "Leadership Skills",
        "UI/UX Designer",
        "Cyber Security",
        "Full Stack Developer",
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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 matrix-bg"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />

      {/* 3D Particle Effect */}
      <Particle3D count={30} className="absolute inset-0 w-full h-full" />

      {/* 3D Animated Orbs */}
      <Orb3D color="from-primary/30 to-purple-500/20" className="top-1/4 left-1/4 w-72 h-72" />
      <Orb3D color="from-accent/20 to-blue-500/20" className="bottom-1/4 right-1/4 w-96 h-96" />

      {/* Floating tech icons */}
      <Float3D delay={0} className="absolute top-20 left-10 opacity-20">
        <Shield className="w-16 h-16 text-primary" />
      </Float3D>
      <Float3D delay={0.5} className="absolute bottom-20 right-20 opacity-20">
        <Lock className="w-12 h-12 text-primary" />
      </Float3D>
      <Float3D delay={1} className="absolute top-40 right-40 opacity-20">
        <Terminal className="w-14 h-14 text-accent" />
      </Float3D>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
          <Perspective3DText 
            text={`Hi, I'm Raju Vishwakarma`}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          />

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0 h-8">
            <span ref={typedRef}></span>
          </p>

          <p className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
            Crafting beautiful, responsive, and user-centric digital experiences
            across mobile and web platforms
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12 animate-scale-in">
            <Button
              variant="hero"
              id="services"
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

          <div className="flex gap-6 justify-center lg:justify-start animate-fade-in">
            <a
              href="https://github.com/Raju-kumar-vishwakarma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-125 smooth-transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/raju-vishwakarma-a134b9342/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-125 smooth-transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/raju_vishwa.karma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-125 smooth-transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <button
              onClick={copyEmail}
              className="text-muted-foreground hover:text-primary hover:scale-125 smooth-transition relative group"
              title="rajuvishwa012@gmail.com"
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
        </div>

        {/* <-- 4. NEW IMAGE COLUMN
          This is the new column for your profile picture.
          It's styled to match your 'cyber' theme.
        */}
        <Float3D delay={0.2} className="flex justify-center animate-scale-in order-1 lg:order-2">
          <motion.img
            src={profilePic} // Uses the imported image
            alt="Raju Vishwa"
            className="rounded-full w-40 h-40 lg:w-96 lg:h-96 object-cover border-4 border-primary/50 shadow-xl glow-effect mt-6"
            whileHover={{ scale: 1.05, rotateZ: 5 }}
            transition={{ duration: 0.3 }}
          />
        </Float3D>
      </div>

      {/* This scroll-down button was inside the text-center div, 
          I moved it out to be relative to the whole section */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary smooth-transition"
      >
        {/* <ArrowDown className="w-6 h-6 mt-5" /> */}
      </button>
    </section>
  );
};

export default Hero;
