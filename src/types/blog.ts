export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  relatedPosts: string[];
  faq?: { question: string; answer: string }[];
  content: string;
  /** When true, page stays live but is excluded from sitemap and marked noindex */
  noindex?: boolean;
  /** Preferred indexed slug for duplicate content */
  canonicalSlug?: string;
}