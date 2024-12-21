export interface Spec {
  feature: string;
  specification: string;
}

export interface Product {
  id: number;
  name: string;
  badge: string;
  summary: string;
  link: string;
  image: string;
  specs: Spec[];
  pros: string[];
  cons: string[];
  verdict: string;
  specifications: {
    material: string;
    sizes: string[];
    features: string[];
    waterResistant: boolean;
    compression: boolean;
  };
}

export interface ArticleData {
  title: string;
  heroImage: string;
  introduction: {
    paragraphs: string[];
  };
  products: Product[];
  conclusion: {
    paragraphs: string[];
  };
}
