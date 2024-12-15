import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { ProductSpecs } from './ProductSpecs';
import { ProductProsAndCons } from './ProductProsAndCons';
import { addSentenceSpacing } from '../../utils/text';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  amazonUrl: string;
  children: React.ReactNode;
  specs: {
    feature: string;
    specification: string;
  }[];
  pros: string[];
  cons: string[];
  description: string;
}

export function ProductCard({
  title,
  imageUrl,
  amazonUrl,
  children,
  specs,
  pros,
  cons,
  description,
}: ProductCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-12 neon-box border border-cyan-400/20">
      <div className="p-8">
        <ProductImage title={title} imageUrl={imageUrl} amazonUrl={amazonUrl} />
        
        <div className="prose prose-invert max-w-none mb-8 text-gray-300">
          {addSentenceSpacing(description)}
        </div>

        <ProductSpecs specs={specs} />
        <ProductProsAndCons pros={pros} cons={cons} />

        <a
          href={amazonUrl}
          className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-all duration-300 font-semibold text-lg neon-box"
        >
          View on Amazon
          <ExternalLink className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}