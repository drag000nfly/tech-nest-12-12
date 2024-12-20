import React from 'react';
import { Product } from '../types';

interface TableOfContentsProps {
  products: Product[];
}

export function TableOfContents({ products }: TableOfContentsProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id}>
            <a
              href={`#product-${product.id}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
