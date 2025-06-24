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
  content: string;
  image: string;
  author: Author;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  relatedPosts: string[];
}