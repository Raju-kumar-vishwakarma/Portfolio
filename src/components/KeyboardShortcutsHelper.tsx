import { useState } from "react";
import { Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const KeyboardShortcutsHelper = () => {
  const [open, setOpen] = useState(false);

  const shortcuts = [
    { keys: "Ctrl/Cmd + Shift + H", action: "Navigate to Home" },
    { keys: "Ctrl/Cmd + Shift + A", action: "Navigate to About" },
    { keys: "Ctrl/Cmd + Shift + S", action: "Navigate to Skills" },
    { keys: "Ctrl/Cmd + Shift + P", action: "Navigate to Projects" },
    { keys: "Ctrl/Cmd + Shift + T", action: "Navigate to Timeline" },
    { keys: "Ctrl/Cmd + Shift + C", action: "Navigate to Contact" },
    { keys: "?", action: "Show keyboard shortcuts" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-24 left-6 z-40 rounded-full w-12 h-12 glass-card hover:scale-110 smooth-transition shadow-lg hidden md:flex"
          title="Keyboard Shortcuts"
        >
          <Keyboard className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-primary" />
            Keyboard Shortcuts
          </DialogTitle>
          <DialogDescription>
            Use these shortcuts to navigate quickly around the portfolio
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 glass-card rounded-lg"
            >
              <span className="text-sm text-muted-foreground">
                {shortcut.action}
              </span>
              <kbd className="px-3 py-1.5 text-xs font-semibold bg-muted border border-border rounded">
                {shortcut.keys}
              </kbd>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Press <kbd className="px-2 py-1 bg-muted rounded text-xs">?</kbd> anytime to view shortcuts
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default KeyboardShortcutsHelper;
