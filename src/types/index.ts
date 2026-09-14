export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  description: string;
  popular?: boolean;
  priceFrom: string;
  deliveryTime: string;
  features: string[];
  notIncluded?: string[];
  idealFor: string;
  ctaText: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  category: 'landing' | 'institucional' | 'sistema';
  categoryLabel: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  previewUrl?: string;
  highlights: string[];
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  benefits: string[];
  color: string;
}

export interface CalculatorOption {
  id: string;
  label: string;
  description: string;
  price: number;
  days: number;
}
