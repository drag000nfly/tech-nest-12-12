import React from 'react';
import { Product } from '../types';

interface StickyTOCProps {
  products: Product[];
}

export function StickyTOC({ products }: StickyTOCProps) {
  return (
    <div className="sticky top-24">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Navigation</h2>
        <ul className="space-y-2">
          {products.map(product => (
            <li key={product.id}>
              <a
                href={`#product-${product.id}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              >
                {product.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
