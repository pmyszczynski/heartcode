
export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage: string;
}

export interface BlogPostContent extends BlogPostMeta {
  content: string;
}
