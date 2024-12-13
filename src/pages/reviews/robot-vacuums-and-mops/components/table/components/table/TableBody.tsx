import React from 'react';
import { Product } from '../../types/product';
import { formatFeatureKey } from '../../utils/formatters';
import ProductCell from '../cells/ProductCell';
import FeatureCell from '../cells/FeatureCell';

interface TableBodyProps {
  products: Product[];
  features: string[];
}

const TableBody: React.FC<TableBodyProps> = ({ products, features }) => {
  return (
    <tbody className="divide-y divide-purple-500/20">
      {products.map((product) => (
        <tr
          key={product.id}
          className="hover:bg-purple-500/10 transition-colors duration-200"
        >
          <td className="sticky left-0 z-20 bg-gray-800/95 p-4 md:p-6 backdrop-blur-sm min-w-[250px] shadow-[4px_0_8px_rgba(0,0,0,0.2)]">
            <ProductCell product={product} />
          </td>
          {features.map((feature, idx) => (
            <td
              key={idx}
              className="p-4 md:p-6 text-sm text-gray-300 break-words min-w-[200px] max-w-[300px] whitespace-pre-wrap"
            >
              <FeatureCell 
                value={product.specs[formatFeatureKey(feature)]} 
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;