import React from 'react';
import { Product } from '../../types/product';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';

interface ProductCellProps {
  product: Product;
}

const ProductCell: React.FC<ProductCellProps> = ({ product }) => {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 hover:text-purple-400 transition-colors duration-200"
    >
      <ProductImage src={product.image} alt={product.name} />
      <ProductTitle name={product.name} />
    </a>
  );
};

export default ProductCell;