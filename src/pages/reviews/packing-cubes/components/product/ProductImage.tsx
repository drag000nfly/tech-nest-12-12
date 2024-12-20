import React from 'react';

interface ProductImageProps {
  title: string;
  imageUrl: string;
  link: string;
}

export function ProductImage({ title, imageUrl, link }: ProductImageProps) {
  return (
    <a href={link} className="group block">
      <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg border-2 border-cyan-400/20">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain w-full h-full bg-white p-4"
          loading="lazy"
          crossOrigin="anonymous"
        />
      </div>
    </a>
  );
}
