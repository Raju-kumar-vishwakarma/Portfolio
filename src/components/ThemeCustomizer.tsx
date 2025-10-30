import { useState } from "react";
import { Palette, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const themes = [
    { name: "Cyan Tech", primary: "189 94% 55%", accent: "217 91% 60%" },
    { name: "Purple Dream", primary: "270 80% 60%", accent: "290 85% 65%" },
    { name: "Green Code", primary: "142 76% 45%", accent: "158 64% 52%" },
    { name: "Orange Fire", primary: "25 95% 53%", accent: "43 96% 56%" },
    { name: "Pink Glow", primary: "330 81% 60%", accent: "340 82% 67%" },
    { name: "Blue Ocean", primary: "200 98% 48%", accent: "210 98% 55%" },
  ];

  const applyTheme = (primary: string, accent: string, name: string) => {
    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--cyan-glow", primary);
    document.documentElement.style.setProperty("--blue-accent", accent);
    
    toast({
      title: "Theme Applied!",
      description: `${name} theme is now active`,
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 bottom-24 z-50 w-12 h-12 rounded-full glass-card cyber-border glow-effect"
        aria-label="Theme customizer"
      >
        <Palette className="w-5 h-5" />
      </Button>

      {isOpen && (
        <div className="fixed right-6 bottom-40 z-50 glass-card cyber-border rounded-2xl p-6 w-80 animate-fade-in shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Theme Colors</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Choose your favorite color theme
          </p>

          <div className="grid grid-cols-2 gap-3">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => applyTheme(theme.primary, theme.accent, theme.name)}
                className="group relative p-4 rounded-xl border border-border hover:border-primary/50 smooth-transition hover:scale-105"
              >
                <div className="flex gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: `hsl(${theme.primary})` }}
                  />
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: `hsl(${theme.accent})` }}
                  />
                </div>
                <p className="text-xs font-medium text-left">{theme.name}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeCustomizer;
