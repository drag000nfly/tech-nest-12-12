import React from 'react';
import { RobotVacuumCard } from './RobotVacuumCard';
import { robotVacuums } from '../../data/robotVacuums';

export function RobotVacuumSection() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Best Robot Vacuums</h2>
        <p className="text-gray-400">Our comprehensive guide to the top robot vacuums of 2024, featuring advanced navigation, powerful suction, and smart home integration.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {robotVacuums.map((vacuum) => (
          <RobotVacuumCard key={vacuum.id} vacuum={vacuum} />
        ))}
      </div>
    </section>
  );
}