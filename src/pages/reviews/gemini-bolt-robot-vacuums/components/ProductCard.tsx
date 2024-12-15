import React from 'react';
import { ExternalLink } from 'lucide-react';

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
}

export default function ProductCard({
  title,
  imageUrl,
  amazonUrl,
  children,
  specs,
  pros,
  cons,
}: ProductCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-12 neon-box border border-cyan-400/20">
      <div className="p-8">
        <a href={amazonUrl} className="group block">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400 group-hover:text-cyan-300 transition neon-glow">
            {title}
          </h3>
          <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg border-2 border-cyan-400/20">
            <img
              src={imageUrl}
              alt={title}
              className="object-contain w-full h-full bg-white p-4"
            />
          </div>
        </a>
        
        <div className="prose prose-invert max-w-none mb-8 text-gray-300">
          {children}
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 text-cyan-400">Specifications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between border-b border-cyan-400/20 pb-2">
                <span className="font-medium text-gray-400">{spec.feature}</span>
                <span className="text-gray-300">{spec.specification}</span>
              </div>
            ))}
          </div>
        </div>

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