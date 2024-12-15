import React from 'react';
import { ComparisonTableHeader } from './ComparisonTableHeader';
import { ComparisonTableRow } from './ComparisonTableRow';
import { products } from '../../data/products';

export function ComparisonTable() {
  return (
    <div id="comparison-table" className="overflow-x-auto">
      <div className="bg-gray-800/50 rounded-xl p-8 mt-16 mb-16 neon-box border border-cyan-400/20 min-w-[800px]">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Product Comparison</h2>
        <table className="w-full border-collapse">
          <ComparisonTableHeader />
          <tbody>
            {products.map((product, index) => (
              <ComparisonTableRow
                key={index}
                title={product.title}
                specs={product.specs}
                pros={product.pros}
                cons={product.cons}
                amazonUrl={product.amazonUrl}
                imageUrl={product.imageUrl}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}