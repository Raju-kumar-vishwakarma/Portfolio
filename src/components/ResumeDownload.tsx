import { Button } from "@/components/ui/button";
import { FileDown, FileText, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import ME from "../assets/me.jpeg";
import Resume from "../assets/resume.pdf";

const ResumeDownload = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Raju_Vishwa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    toast({
      title: "Resume Downloaded",
      description: "Thank you for downloading my resume!",
    });
  };

  const handleView = () => {
    window.open(Resume, "_blank");

    toast({
      title: "Opening Resume",
      description: "Your resume will open in a new tab.",
    });
  };

  const onPreviewKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleView();
    }
  };

  return (
    <section className="py-20 px-6" id="resume">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card cyber-border p-8 md:p-12 rounded-2xl animate-fade-in relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-card mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary ">
                Ready to Work Together?
              </h2>

              <p className="text-muted-foreground text-lg mb-6">
                Download my resume to learn more about my experience, skills,
                and achievements. Let's create something amazing together!
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  onClick={handleDownload}
                  variant="hero"
                  size="lg"
                  className="gap-2"
                >
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </Button>

                <Button
                  onClick={handleView}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Download className="w-5 h-5" />
                  View Resume
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                📄 PDF Format • 🔄 Updated November 2025 • 📊 1 Page
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleView}
                  onKeyDown={onPreviewKeyDown}
                  className="w-48 h-64 glass-card cyber-border rounded-lg p-4 flex flex-col gap-3 hover:scale-105 smooth-transition glow-effect cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Resume.pdf</span>
                  </div>

                  <div className="flex-1 rounded relative overflow-hidden">
                    <img
                      src={ME}
                      alt="Resume Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/10 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;
