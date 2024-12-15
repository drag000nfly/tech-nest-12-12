import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ReviewsPage } from './pages/reviews/index';
import { Footer } from './components/Footer';
import RobotsPage from './pages/reviews/robot-vacuums';
import Article2 from './pages/reviews/robot-vacuums-and-mops';
import Article3 from './pages/reviews/gemini-bolt-robot-vacuums';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/reviews/robot-vacuums" element={<RobotsPage />} />
            <Route path="/reviews/robot-vacuums-and-mops" element={<Article2 />} />
            <Route path="/reviews/gemini-bolt-robot-vacuums" element={<Article3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}