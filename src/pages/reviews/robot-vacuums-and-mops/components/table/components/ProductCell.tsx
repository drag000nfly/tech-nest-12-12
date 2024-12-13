import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCellProps {
  product: Product;
}

const ProductCell: React.FC<ProductCellProps> = ({ product }) => {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 hover:text-purple-400 transition-colors duration-200"
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-200 aspect-square"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      <div className="flex items-center gap-2 text-center">
        <span className="font-medium text-purple-300 group-hover:text-purple-400 break-words">
          {product.name}
        </span>
        <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 flex-shrink-0" />
      </div>
    </a>
  );
}

export default ProductCell;