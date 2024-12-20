import React from 'react';
import { products } from '../../data/products';
import { ComparisonTableHeader } from './ComparisonTableHeader';
import { ComparisonTableRow } from './ComparisonTableRow';

const getPriceRange = (product: typeof products[0]): string => {
  switch (product.name) {
    case "Eagle Creek Pack-It Reveal Cube Set":
      return "$45-55";
    case "Gonex Compression Packing Cubes":
      return "$25-35";
    case "Peak Design Packing Cubes":
      return "$40-50";
    case "Thule Compression Cube Set":
      return "$45-55";
    case "REI Co-op Expandable Packing Cube Set":
      return "$30-40";
    case "Tortuga Compression Cube Set":
      return "$35-45";
    case "Eagle Creek Pack-It Isolate Cube Set":
      return "$40-50";
    default:
      return "Price varies";
  }
};

export function ComparisonTable() {
  return (
    <div id="comparison-table" className="overflow-x-auto">
      <div className="bg-gray-800/50 rounded-xl p-8 mt-16 mb-16 neon-box border border-cyan-400/20 min-w-[800px]">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Product Comparison</h2>
        <table className="w-full border-collapse">
          <ComparisonTableHeader />
          <tbody>
            {products.map((product) => (
              <ComparisonTableRow
                key={product.id}
                product={product}
                priceRange={getPriceRange(product)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
