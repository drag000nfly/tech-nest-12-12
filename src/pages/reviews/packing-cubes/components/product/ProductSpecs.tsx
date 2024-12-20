import React from 'react';
import { Spec } from '../../types';

interface ProductSpecsProps {
  specs: Spec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="mt-8 mb-8">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
            <h4 className="font-medium text-cyan-300 mb-1">{spec.feature}</h4>
            <p className="text-gray-300">{spec.specification}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
