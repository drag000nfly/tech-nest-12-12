import React from 'react';
import { addAffiliateCode } from '../utils/links';
import { addSentenceSpacing } from '../utils/text';

export function Conclusion() {
  const productLinks = {
    s9: addAffiliateCode("https://www.amazon.com/iRobot-Roomba-Emptying-Robot-Vacuum/dp/B07QXM2V6X"),
    eufy: addAffiliateCode("https://www.amazon.com/eufy-Super-Thin-Super-Strong-Self-Charging-Medium-Pile/dp/B07R295MLS"),
    qrevo: addAffiliateCode("https://www.amazon.com/roborock-Qrevo-Pro-Intelligent-Detection/dp/B0CQ25DFTT"),
    shark: addAffiliateCode("https://www.amazon.com/Shark-PowerDetect-Self-Emptying-Technologies-AV200ZE/dp/B0DCPX2MN")
  };

  const conclusionText = addSentenceSpacing(`Robot vacuums have come a long way, and these top 5 models offer a glimpse into the future of home cleaning. Whether you prioritize powerful suction, advanced mopping, or self-maintenance features, there's a robot vacuum on this list to suit your needs.`);

  const finalText = addSentenceSpacing(`Ultimately, the best robot vacuum for you depends on your individual needs and preferences. I encourage you to explore the features and reviews of each model to make an informed decision. Happy cleaning!`);

  return (
    <div className="prose prose-invert max-w-3xl mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400 neon-glow">Conclusion</h2>
      <div className="text-gray-300">
        <p>{conclusionText}</p>
        <ul className="space-y-4">
          <li>
            <strong className="text-cyan-400">For pet owners:</strong>{' '}
            <a href={productLinks.s9} className="text-cyan-400 hover:text-cyan-300">
              The iRobot Roomba s9+
            </a>{' '}
            {addSentenceSpacing("excels at picking up pet hair with its powerful suction and corner-cleaning design.")}
          </li>
          <li>
            <strong className="text-cyan-400">For budget-conscious buyers:</strong>{' '}
            <a href={productLinks.eufy} className="text-cyan-400 hover:text-cyan-300">
              The Eufy BoostIQ RoboVac 11S Max
            </a>{' '}
            {addSentenceSpacing("offers excellent value with its strong suction and slim design.")}
          </li>
          <li>
            <strong className="text-cyan-400">For those who want it all:</strong>{' '}
            <a href={productLinks.qrevo} className="text-cyan-400 hover:text-cyan-300">
              The Roborock Qrevo Pro
            </a>{' '}
            {addSentenceSpacing("is a premium option with advanced mopping, self-maintenance, and edge-cleaning capabilities.")}
          </li>
          <li>
            <strong className="text-cyan-400">For a truly hands-off experience:</strong>{' '}
            <a href={productLinks.shark} className="text-cyan-400 hover:text-cyan-300">
              The Shark PowerDetect 2-in-1
            </a>{' '}
            {addSentenceSpacing("with its self-washing mop pad and NeverTouch Pro base takes convenience to the next level.")}
          </li>
        </ul>
        <p>{finalText}</p>
      </div>
    </div>
  );
}