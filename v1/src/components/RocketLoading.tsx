import { motion } from "framer-motion";

const RocketLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Rocket SVG */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <svg
            width="120"
            height="160"
            viewBox="0 0 120 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-52"
          >
            {/* Rocket body */}
            <path
              d="M60 10C60 10 40 40 40 80C40 100 50 120 60 120C70 120 80 100 80 80C80 40 60 10 60 10Z"
              fill="hsl(var(--background))"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
            />
            
            {/* Rocket window */}
            <circle
              cx="60"
              cy="55"
              r="15"
              fill="hsl(var(--primary) / 0.1)"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
            />
            
            {/* Window shine */}
            <motion.path
              d="M52 48L58 42"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Left fin */}
            <path
              d="M40 90C25 90 20 110 25 120L40 110V90Z"
              fill="hsl(var(--primary))"
            />
            
            {/* Right fin */}
            <path
              d="M80 90C95 90 100 110 95 120L80 110V90Z"
              fill="hsl(var(--primary))"
            />
            
            {/* Rocket base */}
            <rect
              x="50"
              y="115"
              width="20"
              height="15"
              fill="hsl(var(--accent))"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />
            
            {/* Base stripes */}
            <line
              x1="50"
              y1="120"
              x2="70"
              y2="120"
              stroke="hsl(var(--background))"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="125"
              x2="70"
              y2="125"
              stroke="hsl(var(--background))"
              strokeWidth="2"
            />
          </svg>

          {/* Flame */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
            animate={{
              scaleY: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="50"
              viewBox="0 0 40 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-10 sm:w-10 sm:h-12"
            >
              <motion.path
                d="M20 50C20 50 5 35 10 25C15 15 20 30 20 30C20 30 25 15 30 25C35 35 20 50 20 50Z"
                fill="hsl(var(--primary))"
                animate={{
                  d: [
                    "M20 50C20 50 5 35 10 25C15 15 20 30 20 30C20 30 25 15 30 25C35 35 20 50 20 50Z",
                    "M20 50C20 50 8 38 12 28C16 18 20 32 20 32C20 32 24 18 28 28C32 38 20 50 20 50Z",
                    "M20 50C20 50 5 35 10 25C15 15 20 30 20 30C20 30 25 15 30 25C35 35 20 50 20 50Z",
                  ],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>

          {/* Smoke/clouds */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex gap-1">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-primary/20 rounded-full blur-sm" />
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/30 rounded-full blur-sm" />
              <div className="w-5 h-5 sm:w-7 sm:h-7 bg-primary/20 rounded-full blur-sm" />
            </div>
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.p
            className="font-mono text-base sm:text-lg text-primary"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Launching...
          </motion.p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RocketLoading;
