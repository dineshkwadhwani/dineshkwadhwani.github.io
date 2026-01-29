import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface RocketLoaderProps {
  onComplete: () => void;
}

const RocketLoader = ({ onComplete }: RocketLoaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Animated Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0.5, 1, 0],
              y: [0, 100, 200],
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              delay: Math.random() * 0.8,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute rounded-full bg-primary/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          initial={{ x: "-100%", y: "-100%", opacity: 0 }}
          animate={{ 
            x: ["0%", "150%"],
            y: ["0%", "150%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.4 + 0.5,
            ease: "easeOut",
          }}
          className="absolute w-20 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent rotate-45"
          style={{
            top: `${10 + i * 15}%`,
            left: `${i * 20}%`,
          }}
        />
      ))}

      {/* Rocket animation container */}
      <motion.div
        initial={{ y: 200, x: 0, opacity: 0 }}
        animate={{ 
          y: [200, 0, -100, -300, -600],
          x: [0, -20, 10, -10, 0],
          opacity: [0, 1, 1, 1, 0],
          rotate: [0, -8, 5, -5, 0],
        }}
        transition={{ 
          duration: 2.5,
          times: [0, 0.2, 0.4, 0.7, 1],
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Rocket glow effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
          style={{ width: "200px", height: "200px", left: "-50px", top: "-50px" }}
        />

        {/* Main Rocket */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 0.95, 1.05, 1],
            rotate: [0, 2, -2, 1, 0],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
          }}
          className="relative z-10"
        >
          <Rocket className="w-28 h-28 md:w-36 md:h-36 text-primary transform -rotate-45 drop-shadow-2xl" 
            style={{ 
              filter: 'drop-shadow(0 0 15px hsl(var(--primary) / 0.5))'
            }}
          />
        </motion.div>

        {/* Main Fire/Exhaust - Enhanced */}
        <motion.div
          animate={{
            opacity: [0.8, 1, 0.9, 1, 0.8],
            scale: [1, 1.4, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 0.12,
            repeat: Infinity,
          }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 rotate-45"
        >
          <div className="flex flex-col items-center">
            {/* Core flame */}
            <div className="w-8 h-20 bg-gradient-to-b from-white via-primary to-orange-500 rounded-full blur-sm" 
              style={{ boxShadow: '0 0 30px hsl(var(--primary)), 0 0 60px orange' }}
            />
            {/* Middle flame */}
            <div className="w-6 h-16 bg-gradient-to-b from-orange-400 via-orange-500 to-yellow-500 rounded-full blur-sm -mt-8" />
            {/* Outer flame */}
            <div className="w-4 h-12 bg-gradient-to-b from-yellow-400 via-yellow-500 to-transparent rounded-full blur-md -mt-6" />
          </div>
        </motion.div>

        {/* Additional flame particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`flame-${i}`}
            initial={{ opacity: 0, y: 0, x: 0, scale: 1 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, 40 + i * 15, 80 + i * 20],
              x: [0, (i % 2 === 0 ? 10 : -10) * (i + 1), (i % 2 === 0 ? -5 : 5) * (i + 1)],
              scale: [0.8, 1.2, 0.3],
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              repeat: Infinity,
            }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <div 
              className="rounded-full bg-gradient-to-b from-orange-400 to-yellow-300"
              style={{ 
                width: 8 + i * 2, 
                height: 8 + i * 2,
                boxShadow: '0 0 10px orange',
              }}
            />
          </motion.div>
        ))}

        {/* Enhanced Smoke trail */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0, scale: 0.3, x: 0 }}
            animate={{
              opacity: [0, 0.5, 0.3, 0],
              y: [0, 80 + i * 25, 150 + i * 30],
              scale: [0.3, 1 + i * 0.15, 1.5 + i * 0.2],
              x: [0, (i % 2 === 0 ? 15 : -15), (i % 2 === 0 ? -10 : 10)],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
            }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div 
              className="rounded-full bg-muted-foreground/30 blur-lg"
              style={{ width: 25 + i * 6, height: 25 + i * 6 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Circular pulse waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 2.5, 4],
            opacity: [0.3, 0.15, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.6 + 0.5,
            repeat: Infinity,
          }}
          className="absolute w-40 h-40 rounded-full border border-primary/30"
          style={{ top: "calc(50% - 80px)", left: "calc(50% - 80px)" }}
        />
      ))}

      {/* Loading text with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-1/4 text-center"
      >
        <motion.div
          animate={{ 
            opacity: [1, 0.5, 1],
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <p className="font-mono text-lg text-foreground tracking-widest uppercase font-semibold">
            Launching
          </p>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-primary"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RocketLoader;