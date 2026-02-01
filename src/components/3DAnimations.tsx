import { motion } from "framer-motion";
import { ReactNode } from "react";

// 3D Rotating Card Component
export const Rotate3DCard = ({ 
  children, 
  className = "",
  duration = 8
}: { 
  children: ReactNode, 
  className?: string,
  duration?: number
}) => {
  return (
    <motion.div
      className={`perspective ${className}`}
      animate={{ 
        rotateY: [0, 360],
        rotateX: [0, 10, 0]
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px"
      }}
    >
      {children}
    </motion.div>
  );
};

// 3D Floating Element
export const Float3D = ({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode,
  delay?: number,
  className?: string
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        z: [0, 30, 0],
        rotateX: [0, 5, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// 3D Perspective Text
export const Perspective3DText = ({ 
  text,
  className = ""
}: { 
  text: string,
  className?: string
}) => {
  return (
    <div style={{ perspective: "1200px" }}>
      <motion.h1
        className={className}
        animate={{
          rotateX: [0, 8, 0],
          rotateY: [-5, 5, -5],
          z: [0, 20, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

// 3D Cube Spinner
export const Cube3D = ({ 
  size = 100,
  className = ""
}: { 
  size?: number,
  className?: string
}) => {
  const half = size / 2;
  
  return (
    <motion.div
      className={className}
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        perspective: "1200px"
      }}
    >
      {[
        { transform: `translateZ(${half}px)`, label: "front" },
        { transform: `rotateY(180deg) translateZ(${half}px)`, label: "back" },
        { transform: `rotateY(90deg) translateZ(${half}px)`, label: "right" },
        { transform: `rotateY(-90deg) translateZ(${half}px)`, label: "left" },
        { transform: `rotateX(90deg) translateZ(${half}px)`, label: "top" },
        { transform: `rotateX(-90deg) translateZ(${half}px)`, label: "bottom" },
      ].map((face, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: size,
            height: size,
            background: `hsla(${i * 60}, 100%, 50%, 0.7)`,
            border: "2px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
            transform: face.transform,
            backfaceVisibility: "hidden"
          }}
        >
          {face.label}
        </div>
      ))}
    </motion.div>
  );
};

// 3D Particle Effect
export const Particle3D = ({ 
  count = 20,
  className = ""
}: { 
  count?: number,
  className?: string
}) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/50"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            z: [0, Math.random() * 100 - 50],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transformStyle: "preserve-3d"
          }}
        />
      ))}
    </div>
  );
};

// 3D Flip Card
export const FlipCard3D = ({ 
  front,
  back,
  className = ""
}: { 
  front: ReactNode,
  back: ReactNode,
  className?: string
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 0 }}
      >
        <div style={{ backfaceVisibility: "hidden" }}>
          {front}
        </div>
        <motion.div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
          className="absolute inset-0"
        >
          {back}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// 3D Orb
export const Orb3D = ({ 
  className = "",
  color = "from-blue-500 to-purple-500"
}: { 
  className?: string,
  color?: string
}) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className} bg-gradient-to-r ${color}`}
      animate={{
        x: [0, 30, -30, 0],
        y: [0, 40, -40, 0],
        scale: [1, 1.2, 0.8, 1]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformStyle: "preserve-3d" }}
    />
  );
};
