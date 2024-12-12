import React from 'react';
import { Star, Award, Battery, Timer, Wifi } from 'lucide-react';
import { RobotVacuum } from '../../types/robotVacuum';

interface RobotVacuumCardProps {
  vacuum: RobotVacuum;
}

export function RobotVacuumCard({ vacuum }: RobotVacuumCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/10 transition overflow-hidden border border-gray-700">
      <div className="relative">
        <img
          src={vacuum.image}
          alt={vacuum.title}
          className="w-full h-48 object-cover"
        />
        {vacuum.bestFor && (
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Award className="w-4 h-4" />
            {vacuum.bestFor}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-purple-400 font-medium mb-2">Robot Vacuum</div>
        <h3 className="text-xl font-bold text-white mb-2">{vacuum.title}</h3>
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-2 text-gray-300">{vacuum.rating}</span>
          <span className="mx-2 text-gray-600">•</span>
          <span className="text-gray-300">${vacuum.price}</span>
        </div>
        <div className="space-y-2 mb-4">
          {vacuum.features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Battery className="w-4 h-4" />
            {vacuum.batteryLife}
          </div>
          <div className="flex items-center gap-1">
            <Timer className="w-4 h-4" />
            {vacuum.runtime}
          </div>
          {vacuum.smartFeatures && (
            <div className="flex items-center gap-1">
              <Wifi className="w-4 h-4" />
              Smart Home
            </div>
          )}
        </div>
      </div>
    </div>
  );
}