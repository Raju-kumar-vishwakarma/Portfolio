import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export const useKeyboardShortcuts = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if no input/textarea is focused
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Check for modifier key (Ctrl/Cmd)
      const isMod = e.ctrlKey || e.metaKey;

      // Navigation shortcuts
      if (isMod && e.shiftKey) {
        switch (e.key.toLowerCase()) {
          case "h":
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            showShortcutToast("Navigated to Home");
            break;
          case "a":
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            showShortcutToast("Navigated to About");
            break;
          case "s":
            e.preventDefault();
            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
            showShortcutToast("Navigated to Skills");
            break;
          case "p":
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            showShortcutToast("Navigated to Projects");
            break;
          case "c":
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            showShortcutToast("Navigated to Contact");
            break;
          case "t":
            e.preventDefault();
            document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
            showShortcutToast("Navigated to Timeline");
            break;
        }
      }

      // Quick actions
      if (isMod) {
        switch (e.key.toLowerCase()) {
          case "k":
            e.preventDefault();
            showKeyboardShortcuts();
            break;
        }
      }

      // Simple shortcuts (no modifier)
      switch (e.key.toLowerCase()) {
        case "?":
          e.preventDefault();
          showKeyboardShortcuts();
          break;
      }
    };

    const showShortcutToast = (message: string) => {
      toast({
        description: message,
        duration: 1500,
      });
    };

    const showKeyboardShortcuts = () => {
      toast({
        title: "⌨️ Keyboard Shortcuts",
        description: (
          <div className="space-y-2 text-sm mt-2">
            <div><kbd className="px-2 py-1 bg-muted rounded">Ctrl+Shift+H</kbd> Home</div>
            <div><kbd className="px-2 py-1 bg-muted rounded">Ctrl+Shift+A</kbd> About</div>
            <div><kbd className="px-2 py-1 bg-muted rounded">Ctrl+Shift+S</kbd> Skills</div>
            <div><kbd className="px-2 py-1 bg-muted rounded">Ctrl+Shift+P</kbd> Projects</div>
            <div><kbd className="px-2 py-1 bg-muted rounded">Ctrl+Shift+T</kbd> Timeline</div>
            <div><kbd className="px-2 py-1 bg-muted rounded">Ctrl+Shift+C</kbd> Contact</div>
            <div><kbd className="px-2 py-1 bg-muted rounded">?</kbd> Show shortcuts</div>
          </div>
        ),
        duration: 5000,
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toast]);
};
