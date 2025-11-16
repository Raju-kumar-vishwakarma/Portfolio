import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // 1. Active section track karne ke liye naya state
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About Me", id: "about" },
    { label: "Services", id: "services" },
    { label: "Resume", id: "resume" },
    { label: "Projects", id: "projects" },
  ];

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. IntersectionObserver logic: Ye check karega ki kaunsa section screen par hai
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // Saare sections select karein

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Active ID set karein
          }
        });
      },
      {
        // Threshold 0.5 ka matlab jab section 50% dikhega tab active hoga
        // Aap ise adjust kar sakte hain (e.g., 0.2 se 0.6 tak)
        threshold: 0.5, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // Click karte hi turant active set karein (optional, UX ke liye acha hai)
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
          <nav className="hidden lg:flex items-center gap-1 glass-card rounded-full px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                // 3. Conditional Styling: Agar active hai to primary color, nahi to muted
                className={`px-6 py-2 rounded-full text-sm smooth-transition ${
                  activeSection === item.id
                    ? "text-primary-foreground bg-primary font-medium shadow-md" // Active Style
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50" // Inactive Style
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

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
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-9 h-9" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] [&>button]:top-10 [&>button]:right-10 [&>button>svg]:h-6 [&>button>svg]:w-6 [&>button>svg]:stroke-[4]"
              >
                <div className="flex flex-col gap-6 mt-8">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        // Mobile Menu mein bhi active color dikhana hai
                        className={`text-left px-4 py-3 rounded-lg text-lg smooth-transition ${
                            activeSection === item.id
                            ? "text-primary font-semibold bg-accent" 
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
        </div>
      </div>
    </header>
  );
};

export default Header;