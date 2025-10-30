import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // This is the new, functional handleSubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object from the form event
    const form = new FormData(e.currentTarget);
    form.append("access_key", "7782c313-4a8b-4b47-b080-adbd370d86f4");

    // Show a loading toast
    const promise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Clear the form on success
          setFormData({ name: "", email: "", message: "" });
          return "Message sent successfully! I'll get back to you soon.";
        } else {
          // Throw an error to be caught by toast.error
          throw new Error(data.message || "Something went wrong.");
        }
      });

    // Use toast.promise for better UX (loading, success, error)
    toast.promise(promise, {
      loading: "Sending message...",
      success: (message) => message,
      error: (error) => error.message,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative matrix-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info (No changes here) */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
              <p className="text-muted-foreground text-lg">
                I'm always open to new opportunities, collaborations, and
                freelance projects. Feel free to reach out if you have any
                questions or just want to say hi!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glass-card p-4 rounded-lg cyber-border group hover-scale smooth-transition">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 smooth-transition glow-effect">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">rajuvishwa012@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card p-4 rounded-lg cyber-border group hover-scale smooth-transition">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 smooth-transition glow-blue">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+91 62993 84767</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card p-4 rounded-lg cyber-border group hover-scale smooth-transition">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 smooth-transition glow-effect">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Bhilai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8 animate-scale-in cyber-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name" // <-- ADDED 'name' attribute
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email" // <-- ADDED 'name' attribute
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message" // <-- ADDED 'name' attribute
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;