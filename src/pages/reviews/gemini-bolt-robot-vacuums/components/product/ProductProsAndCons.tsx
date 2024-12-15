import React from 'react';

interface ProductProsAndConsProps {
  pros: string[];
  cons: string[];
}

export function ProductProsAndCons({ pros, cons }: ProductProsAndConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h4 className="text-xl font-semibold mb-4 text-emerald-400">Pros</h4>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <span className="text-emerald-400 mr-2">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4 text-rose-400">Cons</h4>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <span className="text-rose-400 mr-2">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}