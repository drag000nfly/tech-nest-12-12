import React from 'react';

export function Introduction() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto mb-16">
      <p className="text-xl text-gray-300">
        Robot vacuums have become increasingly popular, and for good reason. They zip around your home,
        picking up dust bunnies and crumbs while you relax or tackle other tasks. But with so many
        models available, choosing the right one can feel overwhelming. That's why I've put together
        this list of the top 5 robot vacuums to help you find the perfect cleaning companion.
      </p>
      <p className="text-gray-400">
       
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6 text-cyan-400 neon-glow">Selection Criteria</h2>
      <ul className="space-y-3 text-gray-300">
        <li>🎯 <strong className="text-cyan-400">Cleaning Performance:</strong> How effectively does the vacuum pick up dirt, dust, and debris on different floor types?</li>
        <li>🗺️ <strong className="text-cyan-400">Navigation:</strong> How well does the vacuum navigate around furniture, obstacles, and different room layouts?</li>
        <li>⚙️ <strong className="text-cyan-400">Features:</strong> Does the vacuum offer advanced features like smart mapping, obstacle avoidance, self-emptying, or mopping?</li>
        <li>👥 <strong className="text-cyan-400">User Reviews:</strong> What are real users saying about their experiences with the vacuum?</li>
        <li>💰 <strong className="text-cyan-400">Price:</strong> Is the vacuum's price reasonable considering its features and performance?</li>
      </ul>
    </div>
  );
}