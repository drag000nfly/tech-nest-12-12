export interface Spec {
  feature: string;
  specification: string;
}

export interface Product {
  id: number;
  name: string;
  badge: string;
  summary: string;
  specs: Spec[];
  pros: string[];
  cons: string[];
  verdict: string;
  link: string;
  image?: string;
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
