import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { ProductSpecs } from './product/ProductSpecs';
import { ProductImage } from './product/ProductImage';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-12 neon-box border border-cyan-400/20"
      id={`product-${product.id}`}
    >
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-3 hover:text-cyan-300 transition-colors">
              {product.name}
            </h2>
          </a>
          <div className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-lg mb-6">
            {product.badge}
          </div>
          {product.image && (
            <ProductImage
              title={product.name}
              imageUrl={product.image}
              link={product.link}
            />
          )}
        </div>

        <div className="prose prose-invert max-w-none mb-8 text-gray-300">
          {product.summary.split('\n\n').map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          ))}
        </div>

        <ProductSpecs specs={product.specs} />

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">Pros</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.pros.map((pro, index) => (
                <li key={index} dangerouslySetInnerHTML={{
                  __html: pro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Cons</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.cons.map((con, index) => (
                <li key={index} dangerouslySetInnerHTML={{
                  __html: con.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
              ))}
            </ul>
          </div>
          <div className="bg-gray-700/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Final Verdict</h3>
            <p dangerouslySetInnerHTML={{
              __html: product.verdict.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          </div>
          <div className="flex justify-center mt-8">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-all duration-300 font-semibold text-lg neon-box"
            >
              View on Amazon
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
