import { RobotVacuum } from '../types/robotVacuum';

export const robotVacuums: RobotVacuum[] = [
  {
    id: 1,
    title: "Roomba j7+",
    rating: 4.8,
    price: 799,
    image: "https://images.unsplash.com/photo-1589006833652-bb6f8c3a0d75?auto=format&fit=crop&q=80&w=600",
    bestFor: "Best Overall",
    features: [
      "Advanced obstacle avoidance",
      "Self-emptying base",
      "Precision navigation",
      "Pet waste detection"
    ],
    batteryLife: "2000mAh",
    runtime: "120 mins",
    smartFeatures: true
  },
  {
    id: 2,
    title: "Roborock S8 Pro Ultra",
    rating: 4.9,
    price: 1599,
    image: "https://images.unsplash.com/photo-1573396840526-c6365c7c0db4?auto=format&fit=crop&q=80&w=600",
    bestFor: "Premium Choice",
    features: [
      "Auto mop washing",
      "Dual rubber brushes",
      "6000Pa suction",
      "3D mapping"
    ],
    batteryLife: "5200mAh",
    runtime: "180 mins",
    smartFeatures: true
  },
  {
    id: 3,
    title: "Ecovacs Deebot X1 Omni",
    rating: 4.7,
    price: 1499,
    image: "https://images.unsplash.com/photo-1562254492-377a3ac576f4?auto=format&fit=crop&q=80&w=600",
    bestFor: "Most Versatile",
    features: [
      "Hot water mopping",
      "Voice assistant",
      "Auto-empty & clean",
      "AIVI 3.0 recognition"
    ],
    batteryLife: "5200mAh",
    runtime: "160 mins",
    smartFeatures: true
  }
];