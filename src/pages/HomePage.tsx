import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedReviews } from '../components/FeaturedReviews';
import { Newsletter } from '../components/Newsletter';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedReviews />
      <Newsletter />
    </>
  );
}