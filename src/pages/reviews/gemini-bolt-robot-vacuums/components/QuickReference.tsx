import React from 'react';

export function QuickReference() {
  return (
    <div className="bg-gray-800/50 rounded-xl p-8 mt-16 mb-16 neon-box border border-cyan-400/20">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Quick Reference Guide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Best For Different Needs</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong className="text-cyan-400 block">Overall Performance</strong>
              iRobot Roomba s9+ - Perfect for those who want the best cleaning performance and smart features
            </li>
            <li>
              <strong className="text-cyan-400 block">Budget-Conscious</strong>
              Eufy BoostIQ RoboVac 11S Max - Ideal for those seeking quality cleaning at an affordable price
            </li>
            <li>
              <strong className="text-cyan-400 block">Advanced Features</strong>
              iRobot Roomba Combo j7+ - Best for tech enthusiasts who want smart home integration
            </li>
            <li>
              <strong className="text-cyan-400 block">Deep Cleaning</strong>
              Roborock Qrevo Pro - Excellent for homes needing thorough mopping and vacuuming
            </li>
            <li>
              <strong className="text-cyan-400 block">Pet Owners</strong>
              Shark PowerDetect 2-in-1 - Perfect for dealing with pet hair and dander
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Price Range Guide</h3>
          <ul className="space-y-3 text-gray-300">
            <li><span className="text-cyan-400">Premium ($800+):</span> Roomba s9+, Roborock Qrevo Pro</li>
            <li><span className="text-cyan-400">Mid-Range ($500-800):</span> Roomba Combo j7+, Shark PowerDetect</li>
            <li><span className="text-cyan-400">Budget ($300-500):</span> Eufy BoostIQ RoboVac 11S Max</li>
          </ul>
        </div>
      </div>
    </div>
  );
}