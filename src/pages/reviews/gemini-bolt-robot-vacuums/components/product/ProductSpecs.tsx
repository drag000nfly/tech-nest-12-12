import React from 'react';

interface Spec {
  feature: string;
  specification: string;
}

interface ProductSpecsProps {
  specs: Spec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="mb-8">
      <h4 className="text-xl font-semibold mb-4 text-cyan-400">Specifications</h4>
      <div className="grid spec-grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {specs.map((spec, index) => (
          <div 
            key={index} 
            className="spec-item flex flex-col sm:flex-row sm:justify-between border-b border-cyan-400/20 pb-2"
          >
            <span className="spec-label font-medium text-gray-400">{spec.feature}</span>
            <span className="text-gray-300 sm:text-right">{spec.specification}</span>
          </div>
        ))}
      </div>
    </div>
  );
}