export interface BookModule {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  topics: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarUrl: string;
  result: string;
  quote: string;
  rating: number;
  monthsTrying: string;
}

export interface PricingPlan {
  id: 'ebook' | 'complete_bundle';
  name: string;
  tagline: string;
  priceUSD: number;
  originalPriceUSD: number;
  priceNGN: number;
  originalPriceNGN: number;
  popular?: boolean;
  features: string[];
}

export interface SampleChapter {
  id: string;
  title: string;
  chapterNumber: string;
  content: string[];
}
