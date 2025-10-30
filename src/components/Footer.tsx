import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} Raju Vishwa. All rights reserved.
          </p>

          <div className="flex gap-8 items-center">
            <a
              href="https://www.instagram.com/raju_vishwa.karma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary smooth-transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Raju-kumar-vishwakarma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary smooth-transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/raju-kumar-a134b9342/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary smooth-transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/LegendRaju32694"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary smooth-transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
