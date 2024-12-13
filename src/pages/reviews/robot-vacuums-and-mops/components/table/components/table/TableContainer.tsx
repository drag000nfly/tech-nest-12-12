import React from 'react';

interface TableContainerProps {
  children: React.ReactNode;
}

const TableContainer: React.FC<TableContainerProps> = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-6 rounded-xl">
      <div className="relative min-w-full">
        <div className="relative overflow-x-auto overflow-y-visible rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TableContainer;