import React, { useState } from 'react';
import { categories } from '../../data/categories';
import { CategoryFilter } from '../../components/CategoryFilter';
import { RobotVacuumSection } from '../../components/reviews/RobotVacuumSection';

export function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">Tech Reviews</h1>
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <RobotVacuumSection />
      </div>
    </div>
  );
}