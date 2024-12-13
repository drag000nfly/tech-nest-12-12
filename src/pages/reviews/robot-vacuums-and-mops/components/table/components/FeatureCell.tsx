import React from 'react';

interface FeatureCellProps {
  value?: string | number;
}

const FeatureCell: React.FC<FeatureCellProps> = ({ value }) => {
  if (!value) return <span className="text-gray-500">Not specified</span>;

  const items = String(value).split('\n');

  if (items.length === 1) {
    return <span className="text-gray-300">{value}</span>;
  }

  return (
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FeatureCell;