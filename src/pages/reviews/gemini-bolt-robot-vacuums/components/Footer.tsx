import React from 'react';
import { Container } from './layout/Container';

export function Footer() {
  return (
    <footer className="bg-gray-800/50 text-gray-400 py-12 mt-16 border-t border-cyan-400/20">
      <Container>
        <p className="text-cyan-400 neon-glow text-center">
          © 2024 Robot Vacuum Guide. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}