import React from 'react';

export function ComparisonTableHeader() {
  return (
    <thead>
      <tr className="border-b border-cyan-400/20">
        <th className="py-4 px-6 text-left text-cyan-300">Model</th>
        <th className="py-4 px-6 text-left text-cyan-300">Image</th>
        <th className="py-4 px-6 text-left text-cyan-300">Material</th>
        <th className="py-4 px-6 text-left text-cyan-300">Sizes Included</th>
        <th className="py-4 px-6 text-left text-cyan-300">Features</th>
        <th className="py-4 px-6 text-left text-cyan-300">Price Range</th>
      </tr>
    </thead>
  );
}
