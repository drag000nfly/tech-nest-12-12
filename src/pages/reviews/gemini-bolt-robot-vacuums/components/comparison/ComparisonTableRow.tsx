import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ComparisonTableRowProps {
  title: string;
  specs: {
    feature: string;
    specification: string;
  }[];
  pros: string[];
  cons: string[];
  amazonUrl: string;
  imageUrl: string;
}

export function ComparisonTableRow({
  title,
  specs,
  pros,
  cons,
  amazonUrl,
  imageUrl,
}: ComparisonTableRowProps) {
  const getPriceRange = (title: string) => {
    if (title.includes('s9+') || title.includes('Qrevo Pro')) return '$800+';
    if (title.includes('Combo j7+') || title.includes('PowerDetect')) return '$500-800';
    return '$300-500';
  };

  const getKeyFeatures = (specs: { feature: string; specification: string }[]) => {
    return specs
      .filter(spec => 
        ['Suction Power', 'Cleaning System', 'Navigation'].includes(spec.feature)
      )
      .map(spec => spec.specification)
      .join(', ');
  };

  return (
    <tr className="border-b border-cyan-400/20 hover:bg-cyan-400/5 transition-colors">
      <td className="py-4 px-4">
        <div className="space-y-2">
          <span className="text-gray-300 font-medium block">{title}</span>
          <a 
            href={amazonUrl}
            className="block w-24 h-24 relative overflow-hidden rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain bg-white p-2"
            />
          </a>
        </div>
      </td>
      <td className="py-4 px-4 text-gray-300">{getKeyFeatures(specs)}</td>
      <td className="py-4 px-4">
        <ul className="list-disc list-inside text-gray-300">
          {pros.slice(0, 2).map((pro, index) => (
            <li key={index} className="text-sm">{pro}</li>
          ))}
        </ul>
      </td>
      <td className="py-4 px-4">
        <ul className="list-disc list-inside text-gray-300">
          {cons.slice(0, 2).map((con, index) => (
            <li key={index} className="text-sm">{con}</li>
          ))}
        </ul>
      </td>
      <td className="py-4 px-4 text-gray-300">{getPriceRange(title)}</td>
      <td className="py-4 px-4">
        <a
          href={amazonUrl}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </td>
    </tr>
  );
}