import React from 'react';
import { addAffiliateCode } from '../../utils/links';

export function QuickReference() {
  const productLinks = {
    eagleCreek: addAffiliateCode("https://www.amazon.com/Eagle-Creek-Pack-Reveal-Cube/dp/B07RKQXZD9"),
    gonex: addAffiliateCode("https://www.amazon.com/Gonex-Compression-Packing-Cubes-Organizers/dp/B07DWQX4GV"),
    peakDesign: addAffiliateCode("https://www.amazon.com/Peak-Design-Small-Packing-Cube/dp/B07GWKF8H5"),
    osprey: addAffiliateCode("https://www.amazon.com/Osprey-UltraLight-Packing-Cube-Set/dp/B07JNZH5G7"),
    thule: addAffiliateCode("https://www.amazon.com/Thule-Compression-Packing-Cube-Set/dp/B07N1LXQP8"),
    awayTravel: addAffiliateCode("https://www.amazon.com/Away-Travel-Packing-Cubes-Set/dp/B07YL8XJQM"),
    tripped: addAffiliateCode("https://www.amazon.com/Tripped-Travel-Gear-Compression-Packing/dp/B07D4J4CJ2")
  };

  return (
    <div className="bg-gray-800/50 rounded-xl p-8 mt-16 mb-16 neon-box border border-cyan-400/20">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Quick Reference Guide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Best For Different Needs</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong className="text-cyan-400 block">Premium Quality</strong>
              <a href={productLinks.eagleCreek} className="text-cyan-400 hover:text-cyan-300">
                Eagle Creek Pack-It Reveal Cube Set
              </a>{' '}
              - Perfect for those who want top-tier durability and organization
            </li>
            <li>
              <strong className="text-cyan-400 block">Space Saving</strong>
              <a href={productLinks.gonex} className="text-cyan-400 hover:text-cyan-300">
                Gonex Compression Packing Cubes
              </a>{' '}
              - Ideal for maximizing luggage space with compression technology
            </li>
            <li>
              <strong className="text-cyan-400 block">Professional Travel</strong>
              <a href={productLinks.peakDesign} className="text-cyan-400 hover:text-cyan-300">
                Peak Design Small Packing Cube
              </a>{' '}
              - Best for business travelers seeking sleek, premium organization
            </li>
            <li>
              <strong className="text-cyan-400 block">Lightweight Adventure</strong>
              <a href={productLinks.osprey} className="text-cyan-400 hover:text-cyan-300">
                Osprey UltraLight Packing Cube Set
              </a>{' '}
              - Perfect for backpackers and outdoor enthusiasts
            </li>
            <li>
              <strong className="text-cyan-400 block">Versatility</strong>
              <a href={productLinks.thule} className="text-cyan-400 hover:text-cyan-300">
                Thule Compression Packing Cube Set
              </a>{' '}
              - Excellent for those seeking adaptable storage solutions
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Price Range Guide</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="text-cyan-400">Premium ($45+):</span>{' '}
              <a href={productLinks.eagleCreek} className="text-cyan-400 hover:text-cyan-300">Eagle Creek Pack-It</a>,{' '}
              <a href={productLinks.peakDesign} className="text-cyan-400 hover:text-cyan-300">Peak Design</a>
            </li>
            <li>
              <span className="text-cyan-400">Mid-Range ($30-$45):</span>{' '}
              <a href={productLinks.osprey} className="text-cyan-400 hover:text-cyan-300">Osprey UltraLight</a>,{' '}
              <a href={productLinks.thule} className="text-cyan-400 hover:text-cyan-300">Thule Compression</a>
            </li>
            <li>
              <span className="text-cyan-400">Budget ($15-$30):</span>{' '}
              <a href={productLinks.gonex} className="text-cyan-400 hover:text-cyan-300">Gonex</a>,{' '}
              <a href={productLinks.tripped} className="text-cyan-400 hover:text-cyan-300">Tripped Travel Gear</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
