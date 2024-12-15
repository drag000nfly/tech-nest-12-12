import React from 'react';

interface ProductImageProps {
  title: string;
  imageUrl: string;
  amazonUrl: string;
}

export function ProductImage({ title, imageUrl, amazonUrl }: ProductImageProps) {
  return (
    <a href={amazonUrl} className="group block">
      <h3 className="text-3xl font-bold mb-6 text-cyan-400 group-hover:text-cyan-300 transition neon-glow">
        {title}
      </h3>
      <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg border-2 border-cyan-400/20">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain w-full h-full bg-white p-4"
        />
      </div>
    </a>
  );
}