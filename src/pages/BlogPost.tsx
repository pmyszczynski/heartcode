
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogPostContent } from "@/types/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (slug) {
          // First try to fetch from the API
          try {
            const response = await fetch(`/api/blog-posts.json`);
            if (response.ok) {
              const posts = await response.json();
              const postData = posts.find((p: any) => p.slug === slug);
              
              if (postData) {
                if (postData.content) {
                  // If the post already has content, use it directly
                  setPost(postData as BlogPostContent);
                  setLoading(false);
                  return;
                } else {
                  // We found the post metadata, now create the full post with mock content
                  const mockPost: BlogPostContent = {
                    ...postData,
                    content: `
# ${postData.title}

${postData.excerpt}

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

Thank you for reading this blog post!
`
                  };
                  
                  setPost(mockPost);
                  setLoading(false);
                  return;
                }
              }
            }
          } catch (err) {
            console.error("Error fetching from API:", err);
            // Continue to fallback
          }
          
          // Fallback content
          const mockPost: BlogPostContent = {
            slug,
            title: slug.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase()),
            date: "2024-04-25",
            author: "Heartcode Team",
            excerpt: "This is a sample blog post about " + slug.split('-').join(' ') + ".",
            coverImage: "/placeholder.svg",
            content: `
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
`
          };
          
          setPost(mockPost);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load the blog post. Please try again later.");
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const generateArticleSchema = (post: BlogPostContent) => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://heartcode.io/blog/${post.slug}`
      },
      "publisher": {
        "@type": "Organization",
        "name": "Heartcode",
        "logo": {
          "@type": "ImageObject",
          "url": "https://heartcode.io/og-image.png",
          "width": 1200,
          "height": 630
        }
      },
      "image": [
        `https://heartcode.io${post.coverImage}`
      ],
      "url": `https://heartcode.io/blog/${post.slug}`,
      "keywords": post.slug.split('-'),
      "articleBody": post.content.replace(/[#*`]/g, '')
    };

    return articleSchema;
  };

  if (loading) {
    return (
      <main className="relative min-h-screen" role="main">
        <SEO 
          title="Loading Blog Post | Heartcode"
          description="Loading blog content"
        />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
          style={{ scaleX }}
          role="progressbar"
          aria-label="Page scroll progress"
        />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="relative min-h-screen" role="main">
        <SEO 
          title="Error | Heartcode Blog"
          description="Error loading blog content"
        />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
          style={{ scaleX }}
          role="progressbar"
          aria-label="Page scroll progress"
        />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
            <p className="text-lg mb-8">{error || "We couldn't find the blog post you're looking for."}</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen" role="main">
      <SEO 
        title={`${post?.title || 'Blog Post'} | Heartcode Blog`}
        description={post?.excerpt || ''}
        image={post?.coverImage || ''}
        schema={post ? generateArticleSchema(post) : undefined}
        type="article"
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Page scroll progress"
      />
      
      {/* Blog Post Header */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
              ← Back to all posts
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post?.title || 'Loading...'}</h1>
            <div className="flex items-center text-muted-foreground">
              {post?.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {post?.author && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <img 
              src={post?.coverImage || '/placeholder.svg'} 
              alt={`Cover image for article: ${post?.title || 'Blog post'}`} 
              className="w-full h-full object-cover"
              width="800"
              height="450"
              loading="eager"
            />
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="container mx-auto px-4 pb-16">
        <motion.article 
          className="max-w-4xl mx-auto prose prose-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {post?.content && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          )}
        </motion.article>
      </div>
      
      <Footer />
    </main>
  );
};

export default BlogPost;
