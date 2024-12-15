import React from 'react';

export function ComparisonTableHeader() {
  return (
    <thead>
      <tr className="border-b border-cyan-400/20">
        <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Model</th>
        <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Key Features</th>
        <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Pros</th>
        <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Cons</th>
        <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Price Range</th>
        <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Link</th>
      </tr>
    </thead>
  );
}