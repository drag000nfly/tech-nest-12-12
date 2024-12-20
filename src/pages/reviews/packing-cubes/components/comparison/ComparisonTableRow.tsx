import React from 'react';
import { Product } from '../../types';

interface ComparisonTableRowProps {
  product: Product;
  priceRange: string;
}

export function ComparisonTableRow({ product, priceRange }: ComparisonTableRowProps) {
  const materialSpec = product.specs.find(spec => spec.feature === "Material");
  const sizesSpec = product.specs.find(spec => spec.feature === "Sizes Included");
  const featuresSpec = product.specs.find(spec => spec.feature === "Features");

  return (
    <tr className="border-b border-cyan-400/20">
      <td className="py-4 px-6 text-gray-300">{product.name}</td>
      <td className="py-4 px-6 text-gray-300">{materialSpec?.specification || "Not specified"}</td>
      <td className="py-4 px-6 text-gray-300">{sizesSpec?.specification || "Not specified"}</td>
      <td className="py-4 px-6 text-gray-300">{featuresSpec?.specification || "Not specified"}</td>
      <td className="py-4 px-6 text-gray-300">{priceRange}</td>
    </tr>
  );
}
