import React from 'react';
import { addAffiliateCode } from '../utils/links';

export function QuickReference() {
  const productLinks = {
    s9: addAffiliateCode("https://www.amazon.com/iRobot-Roomba-Emptying-Robot-Vacuum/dp/B07QXM2V6X"),
    eufy: addAffiliateCode("https://www.amazon.com/eufy-Super-Thin-Super-Strong-Self-Charging-Medium-Pile/dp/B07R295MLS"),
    j7: addAffiliateCode("https://www.amazon.com/iRobot-Roomba-ComboTM-Self-Emptying-Vacuum/dp/B0BCH3J9RD"),
    qrevo: addAffiliateCode("https://www.amazon.com/roborock-Qrevo-Pro-Intelligent-Detection/dp/B0CQ25DFTT"),
    shark: addAffiliateCode("https://www.amazon.com/Shark-PowerDetect-Self-Emptying-Technologies-AV200ZE/dp/B0DCPX2MN")
  };

  return (
    <div className="bg-gray-800/50 rounded-xl p-8 mt-16 mb-16 neon-box border border-cyan-400/20">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Quick Reference Guide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Best For Different Needs</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong className="text-cyan-400 block">Overall Performance</strong>
              <a href={productLinks.s9} className="text-cyan-400 hover:text-cyan-300">
                iRobot Roomba s9+
              </a>{' '}
              - Perfect for those who want the best cleaning performance and smart features
            </li>
            <li>
              <strong className="text-cyan-400 block">Budget-Conscious</strong>
              <a href={productLinks.eufy} className="text-cyan-400 hover:text-cyan-300">
                Eufy BoostIQ RoboVac 11S Max
              </a>{' '}
              - Ideal for those seeking quality cleaning at an affordable price
            </li>
            <li>
              <strong className="text-cyan-400 block">Advanced Features</strong>
              <a href={productLinks.j7} className="text-cyan-400 hover:text-cyan-300">
                iRobot Roomba Combo j7+
              </a>{' '}
              - Best for tech enthusiasts who want smart home integration
            </li>
            <li>
              <strong className="text-cyan-400 block">Deep Cleaning</strong>
              <a href={productLinks.qrevo} className="text-cyan-400 hover:text-cyan-300">
                Roborock Qrevo Pro
              </a>{' '}
              - Excellent for homes needing thorough mopping and vacuuming
            </li>
            <li>
              <strong className="text-cyan-400 block">Pet Owners</strong>
              <a href={productLinks.shark} className="text-cyan-400 hover:text-cyan-300">
                Shark PowerDetect 2-in-1
              </a>{' '}
              - Perfect for dealing with pet hair and dander
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Price Range Guide</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="text-cyan-400">Premium ($800+):</span>{' '}
              <a href={productLinks.s9} className="text-cyan-400 hover:text-cyan-300">Roomba s9+</a>,{' '}
              <a href={productLinks.qrevo} className="text-cyan-400 hover:text-cyan-300">Roborock Qrevo Pro</a>
            </li>
            <li>
              <span className="text-cyan-400">Mid-Range ($500-800):</span>{' '}
              <a href={productLinks.j7} className="text-cyan-400 hover:text-cyan-300">Roomba Combo j7+</a>,{' '}
              <a href={productLinks.shark} className="text-cyan-400 hover:text-cyan-300">Shark PowerDetect</a>
            </li>
            <li>
              <span className="text-cyan-400">Budget ($300-500):</span>{' '}
              <a href={productLinks.eufy} className="text-cyan-400 hover:text-cyan-300">Eufy BoostIQ RoboVac 11S Max</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}