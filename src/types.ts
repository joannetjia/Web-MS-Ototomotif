export interface Product {
  id: string;
  name: string;
  category: 'Karburator' | 'As Skok' | 'Kaliper' | 'Aksesoris & Racing';
  sku: string;
  priceRetail: number;
  priceWholesale: number;
  minWholesaleQty: number;
  stockStatus: 'ready' | 'limited' | 'preorder';
  stockCount: number;
  specs: { label: string; value: string }[];
  compatibility: string[];
  image: string;
  description: string;
  featured?: boolean;
  material: string;
  warranty: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  shortDesc: string;
  techCode: string;
  stockCount: number;
  popularModels: string[];
  image: string;
  highlightSpecs: string[];
}

export interface QuotationItem {
  product: Product;
  quantity: number;
  tier: 'retail' | 'wholesale';
}

export type ActiveTab = 'home' | 'shop' | 'about' | 'contact';
