import React from 'react';
import { ReviewCard } from './ReviewCard';
import { Review } from '../types/review';

interface ReviewSectionProps {
  title: string;
  reviews: Review[];
}

export function ReviewSection({ title, reviews }: ReviewSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}