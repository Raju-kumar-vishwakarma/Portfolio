import { useEffect, useRef, useState } from "react";
import { Code, Users, Award, Briefcase } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  const stats = [
    {
      icon: Code,
      value: 50,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: Users,
      value: 100,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: Award,
      value: 15,
      label: "Awards Won",
      suffix: "+",
    },
    {
      icon: Briefcase,
      value: 5,
      label: "Years Experience",
      suffix: "+",
    },
  ];

  return (
    <section ref={statsRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card cyber-border p-6 md:p-8 rounded-2xl text-center hover:scale-105 smooth-transition glow-effect"
              style={{
                animation: isVisible ? `fade-in 0.6s ease-out ${index * 0.1}s both` : "none",
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full glass-card mb-4">
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber end={stat.value} />
                {stat.suffix}
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
