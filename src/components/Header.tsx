import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const Header = ({ hideNav = false }: { hideNav?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About Me", id: "about" },
    { label: "Certifications", id: "certifications" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Resume", id: "resume" },
  ];

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-header shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold hover:opacity-80 smooth-transition flex items-center gap-2"
          >
            <span className="text-primary">{"{ "}</span>
            <span className="">Raju Vishwa</span>
            <span className="text-primary">{" }"}</span>
          </button>

          {/* Desktop Navigation */}
          {!hideNav && (
            <nav className="hidden lg:flex items-center gap-1 glass-card rounded-full px-2 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-2 rounded-full text-sm smooth-transition ${
                    activeSection === item.id
                      ? "text-primary-foreground bg-primary font-medium shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="gap-2 rounded-full border-border/50"
            >
              Contact
              <span className="text-lg">↗</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          {!hideNav && (
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {/* FIXED: Icon size w-9 se w-6 kiya */}
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] [&>button]:top-10 [&>button]:right-10 [&>button>svg]:h-6 [&>button>svg]:w-6 [&>button>svg]:stroke-[4]"
                >
                  {/* FIXED: Added SheetTitle with sr-only to fix error and layout */}
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                  <div className="flex flex-col gap-6 mt-8">
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`text-left px-4 py-3 rounded-lg text-lg smooth-transition ${
                              activeSection === item.id
                              ? "text-primary font-semibold " 
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>

                    <div className="flex flex-col gap-3 mt-4">
                      <Button
                        variant="default"
                        onClick={() => scrollToSection("contact")}
                        className="gap-2"
                      >
                        Contact Me
                        <span className="text-lg">↗</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;