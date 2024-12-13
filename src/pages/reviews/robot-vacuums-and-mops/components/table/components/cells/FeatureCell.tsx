import React from 'react';
import { formatFeatureValue } from '../../utils/formatters';

interface FeatureCellProps {
  value?: string;
}

const FeatureCell: React.FC<FeatureCellProps> = ({ value }) => {
  if (!value) return <span className="text-gray-500">Not specified</span>;

  const items = formatFeatureValue(value);

  if (items.length === 1) {
    return <span className="text-gray-300">{items[0]}</span>;
  }

  return (
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300">
          {item.replace(/^- /, '')}
        </li>
      ))}
    </ul>
  );
};

export default FeatureCell;