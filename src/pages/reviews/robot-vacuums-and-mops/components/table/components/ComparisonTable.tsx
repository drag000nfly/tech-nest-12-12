import React from 'react';
import { products } from '../data/products';
import { features } from '../data/features';
import TableContainer from './table/TableContainer';
import Table from './table/Table';
import TableHeader from './table/TableHeader';
import TableBody from './table/TableBody';

const ComparisonTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeader features={features} />
        <TableBody products={products} features={features} />
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;