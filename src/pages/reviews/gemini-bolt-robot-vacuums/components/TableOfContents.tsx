import React from 'react';
import { products } from '../data/products';

export function TableOfContents() {
  const bestForCategories = {
    'iRobot Roomba s9+': {
      category: 'Overall Performance',
      description: 'Perfect for those who want the best cleaning performance and smart features'
    },
    'Eufy BoostIQ RoboVac 11S Max': {
      category: 'Budget-Conscious',
      description: 'Ideal for those seeking quality cleaning at an affordable price'
    },
    'iRobot Roomba Combo j7+': {
      category: 'Advanced Features',
      description: 'Best for tech enthusiasts who want smart home integration'
    },
    'Roborock Qrevo Pro': {
      category: 'Deep Cleaning',
      description: 'Excellent for homes needing thorough mopping and vacuuming'
    },
    'Shark PowerDetect 2-in-1': {
      category: 'Pet Owners',
      description: 'Perfect for dealing with pet hair and dander'
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-xl p-8 mb-16 neon-box border border-cyan-400/20">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Quick Navigation</h2>
      <div className="space-y-8">
        {products.map((product, index) => {
          const productId = product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          const bestFor = bestForCategories[product.title.substring(3)];
          
          return (
            <div key={index} className="border-b border-cyan-400/20 pb-6">
              <a
                href={`#${productId}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors block mb-2 text-lg"
              >
                {product.title}
              </a>
              <div className="pl-4 border-l-2 border-cyan-400/20">
                <p className="text-cyan-400 font-medium">Best For: {bestFor.category}</p>
                <p className="text-gray-400 text-sm">{bestFor.description}</p>
              </div>
            </div>
          );
        })}
        
        {/* Comparison Table Link */}
        <div className="pt-2">
          <a
            href="#comparison-table"
            className="text-gray-300 hover:text-cyan-400 transition-colors block mb-2 text-lg"
          >
            Product Comparison Table
          </a>
          <div className="pl-4 border-l-2 border-cyan-400/20">
            <p className="text-gray-400 text-sm">
              Compare all robot vacuums side by side with detailed specifications and features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}