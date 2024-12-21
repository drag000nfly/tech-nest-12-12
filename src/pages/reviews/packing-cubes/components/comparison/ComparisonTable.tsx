import { Product } from '../../types';
import { ComparisonTableHeader } from './ComparisonTableHeader';
import { ComparisonTableRow } from './ComparisonTableRow';

interface ComparisonTableProps {
  products: Product[];
}

const getPriceRange = (product: Product): string => {
  switch (product.name) {
    case "Veken Packing Cubes With Laundry and Shoe Bag":
      return "$25-35";
    case "Shacke Pak 5 Set Packing Cubes":
      return "$20-30";
    case "Peak Design Packing Cubes":
      return "$40-50";
    case "Paravel Packing Cube Quad":
      return "$45-55";
    case "Calpak Packing Cubes 5-Piece Set":
      return "$35-45";
    case "Bagsmart Compression Packing Cubes":
      return "$30-40";
    case "Eagle Creek Specter Compression Cube":
      return "$40-50";
    default:
      return "Price varies";
  }
};

export function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div id="comparison-table" className="overflow-x-auto">
      <div className="bg-gray-800/50 rounded-xl p-8 mt-16 mb-16 neon-box border border-cyan-400/20 min-w-[800px]">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 neon-glow">Product Comparison</h2>
        <table className="w-full border-collapse">
          <ComparisonTableHeader />
          <tbody>
            {products.map((product) => (
              <ComparisonTableRow
                key={product.id}
                product={product}
                priceRange={getPriceRange(product)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
