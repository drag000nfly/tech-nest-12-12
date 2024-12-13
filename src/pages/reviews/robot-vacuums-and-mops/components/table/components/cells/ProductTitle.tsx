import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProductTitleProps {
  name: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-2 text-center">
      <span className="font-medium text-purple-300 group-hover:text-purple-400 break-words">
        {name}
      </span>
      <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 flex-shrink-0" />
    </div>
  );
};

export default ProductTitle;