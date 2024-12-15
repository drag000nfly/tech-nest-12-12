import React from 'react';
import { Bot } from 'lucide-react';
import { Container } from './layout/Container';

export function Header() {
  return (
    <header className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://ideogram.ai/assets/progressive-image/balanced/response/DIF6OqR7Sh66HusY0cJlLA)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Bot className="h-20 w-20 text-cyan-400" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 neon-glow text-cyan-400">
          Top 5 Robot Vacuums
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto text-cyan-100">
          The Future of Clean Living is Here
        </p>
      </Container>
    </header>
  );
}