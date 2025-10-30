import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileDown, Printer } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Raju_Vishwa_Resume.pdf";
    link.click();
  };

  const handlePrintResume = () => {
    window.print();
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About Me", id: "about" },
    { label: "Services", id: "services" },
    { label: "Resume", id: "resume" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold hover:opacity-80 smooth-transition flex items-center gap-2"
          >
            <span className="text-primary">{'{ '}</span>
            <span className="gradient-text">Raju Vishwa</span>
            <span className="text-primary">{' }'}</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 glass-card rounded-full px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 smooth-transition"
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
                  <Menu className="w-7 h-7" />
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-primary">{'{ '}</span>
                  <span className="gradient-text">Raju Vishwa</span>
                  <span className="text-primary">{' }'}</span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-4 py-3 rounded-lg text-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 smooth-transition"
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
