import { Star } from "lucide-react";

const testimonialsData = [
  {
    name: "Priya Sharma",
    role: "CEO, TechStart Solutions",
    content: "Raju delivered an exceptional Android app that exceeded our expectations. His attention to detail and UI/UX expertise made our product stand out in the market.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "Amit Patel",
    role: "Founder, E-Commerce Hub",
    content: "Working with Raju was a pleasure. He built our entire web platform from scratch with modern technologies and delivered it on time. Highly recommended!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
  },
  {
    name: "Sneha Reddy",
    role: "Product Manager, FinTech Pro",
    content: "Raju's ability to transform complex requirements into beautiful, intuitive designs is remarkable. The UI/UX work he did for our app received amazing feedback from users.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 matrix-bg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 animate-fade-in">
          What clients say about working with me
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 smooth-transition animate-scale-in group cyber-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary group-hover:scale-110 smooth-transition"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full glass-card group-hover:scale-110 smooth-transition"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-primary smooth-transition">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
