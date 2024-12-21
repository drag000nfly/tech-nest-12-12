import { useState } from 'react';

interface ProductImageProps {
  src?: string;
  alt?: string;
  title?: string;
  imageUrl?: string;
  link?: string;
  className?: string;
}

export function ProductImage({ src, alt, title, imageUrl, link, className = '' }: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imgSrc = src || imageUrl;
  const imgAlt = alt || title || 'Product image';

  const handleError = () => {
    console.error(`Failed to load image: ${imgSrc}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const image = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
      )}
      <img
        src={hasError ? '/images/placeholder.jpg' : imgSrc}
        alt={imgAlt}
        className={`object-cover w-full h-full ${className}`}
        loading="lazy"
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );

  if (link) {
    return (
      <a href={link} className="group block">
        {image}
      </a>
    );
  }

  return image;
}
