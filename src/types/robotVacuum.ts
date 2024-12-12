export interface RobotVacuum {
  id: number;
  title: string;
  rating: number;
  price: number;
  image: string;
  bestFor?: string;
  features: string[];
  batteryLife: string;
  runtime: string;
  smartFeatures: boolean;
}