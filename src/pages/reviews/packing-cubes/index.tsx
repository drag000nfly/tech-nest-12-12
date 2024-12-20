import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { TableOfContents } from './components/TableOfContents';
import { ProductCard } from './components/ProductCard';
import { Conclusion } from './components/Conclusion';
import { StickyTOC } from './components/StickyTOC';
import { ComparisonTable } from './components/comparison/ComparisonTable';
import { QuickReference } from './components/QuickReference';
import { articleData } from './data/articleData';

export default function PackingCubesReview() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero
        title={articleData.title}
        image={articleData.heroImage}
      />
      <div className="container mx-auto px-4">
        <div className="flex gap-8 relative">
          <div className="flex-1 max-w-4xl">
            <Introduction paragraphs={articleData.introduction.paragraphs} />
            <TableOfContents products={articleData.products} />
            <div className="space-y-8">
              {articleData.products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <ComparisonTable />
            <QuickReference />
            <Conclusion paragraphs={articleData.conclusion.paragraphs} />
          </div>
          <div className="hidden xl:block w-80 relative">
            <StickyTOC products={articleData.products} />
          </div>
        </div>
      </div>
    </div>
  );
}
