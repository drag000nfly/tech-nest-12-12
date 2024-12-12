import React from 'react';
import { Category } from '../types/category';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-6 py-2 rounded-full transition ${
            selectedCategory === category.name
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white'
          }`}
          onClick={() => onSelectCategory(
            selectedCategory === category.name ? null : category.name
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}