import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <div className="relative h-[400px] w-full mb-16">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-xl">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-cyan-400 leading-tight neon-glow mb-4"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-cyan-100"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
