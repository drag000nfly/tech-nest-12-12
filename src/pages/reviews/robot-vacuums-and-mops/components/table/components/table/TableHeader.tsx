import React from 'react';

interface TableHeaderProps {
  features: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ features }) => {
  return (
    <thead>
      <tr className="bg-gray-800/50">
        <th scope="col" className="sticky left-0 z-20 bg-gray-800/95 p-4 md:p-6 backdrop-blur-sm min-w-[250px] shadow-[4px_0_8px_rgba(0,0,0,0.2)]">
          <span className="text-purple-300 font-semibold">Product</span>
        </th>
        {features.map((feature, idx) => (
          <th
            key={idx}
            scope="col"
            className="p-4 md:p-6 text-left text-sm font-semibold text-purple-300 min-w-[200px] max-w-[300px]"
          >
            {feature}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;