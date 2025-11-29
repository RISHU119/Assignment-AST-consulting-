export enum Category {
  NATIONAL = 'National',
  INTERNATIONAL = 'International',
  BUSINESS = 'Business',
  SPORTS = 'Sports',
  ENTERTAINMENT = 'Entertainment',
  TECHNOLOGY = 'Technology',
  LIFESTYLE = 'Lifestyle'
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML or Markdown string for the full body
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: Category;
  isBreaking?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  category?: Category;
}