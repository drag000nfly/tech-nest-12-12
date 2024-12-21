import React from 'react';
import { Product } from '../types';
import { addAffiliateCode } from '../../utils/links';

interface QuickReferenceProps {
  products: Product[];
}

const getPriceRange = (product: Product): string => {
  switch (product.name) {
    case "Veken Packing Cubes With Laundry and Shoe Bag":
      return "$25-35";
    case "Shacke Pak 5 Set Packing Cubes":
      return "$20-30";
    case "Peak Design Packing Cubes":
      return "$40-50";
    case "Paravel Packing Cube Quad":
      return "$45-55";
    case "Calpak Packing Cubes 5-Piece Set":
      return "$35-45";
    case "Bagsmart Compression Packing Cubes":
      return "$30-40";
    case "Eagle Creek Specter Compression Cube":
      return "$40-50";
    default:
      return "Price varies";
  }
};

export function QuickReference({ products }: QuickReferenceProps) {
  const premiumProducts = products.filter(p => getPriceRange(p).startsWith('$4'));
  const midRangeProducts = products.filter(p => getPriceRange(p).startsWith('$3'));
  const budgetProducts = products.filter(p => getPriceRange(p).startsWith('$2'));

  return (
    <div className="bg-gray-800/50 rounded-xl p-8 mt-16 mb-16 neon-box border border-cyan-400/20">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Quick Reference Guide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Best For Different Needs</h3>
          <ul className="space-y-4 text-gray-300">
            {products.map((product) => (
              <li key={product.id}>
                <strong className="text-cyan-400 block">{product.badge}</strong>
                <a href={addAffiliateCode(product.link)} className="text-cyan-400 hover:text-cyan-300">
                  {product.name}
                </a>{' '}
                - {product.summary}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Price Range Guide</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="text-cyan-400">Premium ($45+):</span>{' '}
              {premiumProducts.map((p, i) => (
                <React.Fragment key={p.id}>
                  {i > 0 && ', '}
                  <a href={addAffiliateCode(p.link)} className="text-cyan-400 hover:text-cyan-300">
                    {p.name}
                  </a>
                </React.Fragment>
              ))}
            </li>
            <li>
              <span className="text-cyan-400">Mid-Range ($30-$45):</span>{' '}
              {midRangeProducts.map((p, i) => (
                <React.Fragment key={p.id}>
                  {i > 0 && ', '}
                  <a href={addAffiliateCode(p.link)} className="text-cyan-400 hover:text-cyan-300">
                    {p.name}
                  </a>
                </React.Fragment>
              ))}
            </li>
            <li>
              <span className="text-cyan-400">Budget ($15-$30):</span>{' '}
              {budgetProducts.map((p, i) => (
                <React.Fragment key={p.id}>
                  {i > 0 && ', '}
                  <a href={addAffiliateCode(p.link)} className="text-cyan-400 hover:text-cyan-300">
                    {p.name}
                  </a>
                </React.Fragment>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
