import { motion } from 'framer-motion';

interface IntroductionProps {
  paragraphs: string[];
}

export function Introduction({ paragraphs }: IntroductionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-12 max-w-3xl mx-auto"
    >
      <div className="space-y-6 text-gray-300">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-xl leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Selection Criteria</h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-2">
            <span>🎯</span>
            <span><strong className="text-cyan-400">Material Quality:</strong> We evaluate the durability, water resistance, and overall construction of each packing cube set.</span>
          </li>
          <li className="flex gap-2">
            <span>🗺️</span>
            <span><strong className="text-cyan-400">Organization Features:</strong> We assess the effectiveness of compartments, compression systems, and visibility options.</span>
          </li>
          <li className="flex gap-2">
            <span>⚙️</span>
            <span><strong className="text-cyan-400">Durability:</strong> Through rigorous testing, we verify the strength of zippers, seams, and materials under various conditions.</span>
          </li>
          <li className="flex gap-2">
            <span>👥</span>
            <span><strong className="text-cyan-400">Versatility:</strong> We examine how well each set adapts to different types of travel and packing needs.</span>
          </li>
          <li className="flex gap-2">
            <span>💰</span>
            <span><strong className="text-cyan-400">Value:</strong> We analyze the price-to-quality ratio and long-term investment potential of each set.</span>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
