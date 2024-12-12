import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types/review';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/10 transition overflow-hidden border border-gray-700">
      <img
        src={review.image}
        alt={review.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-purple-400 font-medium mb-2">{review.category}</div>
        <h3 className="text-xl font-bold text-white mb-2">{review.title}</h3>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-2 text-gray-300">{review.rating}</span>
        </div>
      </div>
    </div>
  );
}