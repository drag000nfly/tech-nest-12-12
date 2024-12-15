import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { TableOfContents } from './components/TableOfContents';
import { ProductCard } from './components/product/ProductCard';
import { QuickReference } from './components/QuickReference';
import { ComparisonTable } from './components/comparison/ComparisonTable';
import { Conclusion } from './components/Conclusion';
import { Footer } from './components/Footer';
import { Container } from './components/layout/Container';
import { products } from './data/products';

export function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-16">
        <Container>
          <Introduction />
          <TableOfContents />
          
          <div className="max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                id={product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              >
                <ProductCard {...product}>
                  <p>{product.description}</p>
                </ProductCard>
              </div>
            ))}
          </div>

          <ComparisonTable />
          <QuickReference />
          <Conclusion />
        </Container>
      </main>

      <Footer />
    </div>
  );
}