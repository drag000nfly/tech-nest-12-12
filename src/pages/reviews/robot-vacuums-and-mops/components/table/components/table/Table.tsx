import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <table className="min-w-full divide-y divide-purple-500/20 relative">
      {children}
    </table>
  );
};

export default Table;