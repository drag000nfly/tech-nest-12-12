export interface ProductSpecs {
  cleaning_performance: string;
  mopping_capability: string;
  battery_life: string;
  navigation_technology: string;
  dustbin_capacity: string;
  floor_type: string;
  smart_assistant: string;
  app_control: string;
  obstacle_detection: string;
  noise_level: string;
  auto_recharge: string;
  hepa_filtration: string;
  edge_cleaning: string;
  maintenance: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  url: string;
  specs: ProductSpecs;
}