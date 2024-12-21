import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('/images/placeholder.jpg');

  useEffect(() => {
    // Reset states when image prop changes
    setHasError(false);
    setIsLoading(true);
    setImageSrc(image);
  }, [image]);

  const handleError = () => {
    console.error(`Failed to load hero image: ${image}`);
    setHasError(true);
    setIsLoading(false);
    setImageSrc('/images/placeholder.jpg');
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-[400px] w-full mb-16">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
      )}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        onError={handleError}
        onLoad={handleLoad}
        loading="eager"
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
