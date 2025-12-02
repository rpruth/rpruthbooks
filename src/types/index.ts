export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  coverImageScale?: number;
  amazonUrl: string;
  publishDate: string;
  isbn?: string;
  pages?: number;
  genre: string[];
  featured?: boolean;
  available: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
}
