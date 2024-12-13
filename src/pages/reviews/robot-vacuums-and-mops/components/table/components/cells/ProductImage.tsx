import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[200px] overflow-hidden rounded-lg bg-gray-800">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-contain border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-200 p-2"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.src = 'https://via.placeholder.com/250x250?text=Image+Not+Available';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </div>
  );
};

export default ProductImage;