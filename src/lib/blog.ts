
import matter from 'gray-matter';
import { BlogPostMeta, BlogPostContent } from '@/types/blog';

/**
 * Parse markdown content with frontmatter
 */
export const parseMarkdown = (markdown: string): BlogPostContent => {
  const { data, content } = matter(markdown);
  
  return {
    slug: data.slug || '',
    title: data.title || '',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Heartcode Team',
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || '/placeholder.svg',
    content
  };
};

/**
 * This is a placeholder function for future implementation
 * In production, this would fetch and parse real markdown files
 */
export const getBlogPosts = async (): Promise<BlogPostMeta[]> => {
  // For now, return placeholder data
  return [
    {
      slug: 'getting-started-with-web-development',
      title: 'Getting Started with Web Development',
      date: '2024-04-25',
      excerpt: 'A comprehensive guide for beginners looking to start their journey in web development.',
      author: 'Heartcode Team',
      coverImage: '/placeholder.svg'
    },
    {
      slug: 'the-importance-of-responsive-design',
      title: 'The Importance of Responsive Design',
      date: '2024-04-20',
      excerpt: 'Why responsive design matters and how it impacts user experience and SEO.',
      author: 'Heartcode Team',
      coverImage: '/placeholder.svg'
    },
    {
      slug: 'optimizing-website-performance',
      title: 'Optimizing Website Performance',
      date: '2024-04-15',
      excerpt: 'Techniques and best practices to improve your website loading speed and overall performance.',
      author: 'Heartcode Team',
      coverImage: '/placeholder.svg'
    }
  ];
};

/**
 * This is a placeholder function for future implementation
 * In production, this would fetch and parse a specific markdown file
 */
export const getBlogPost = async (slug: string): Promise<BlogPostContent | null> => {
  // For now, return placeholder data
  const mockMarkdown = `---
slug: ${slug}
title: ${slug.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase())}
date: 2024-04-25
author: Heartcode Team
excerpt: This is a sample blog post excerpt.
coverImage: /placeholder.svg
---

# ${slug.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase())}

This is a sample blog post content. In production, this would be loaded from a Markdown file.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 

* Item one
* Item two
* Item three

## Main Content

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

\`\`\`javascript
// Sample code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

## Conclusion

Thank you for reading this sample blog post!
`;

  return parseMarkdown(mockMarkdown);
};
