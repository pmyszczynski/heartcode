
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPostMeta } from "@/types/blog";

export const BlogPreview = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // This will fetch the list of blog post metadata
        const response = await fetch('/api/blog-posts.json');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        // Only take the first 3 posts for the preview
        setPosts(data.slice(0, 3));
      } catch (error) {
        console.error('Error loading blog posts:', error);
        // Set some placeholder posts for development
        setPosts([
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
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights and updates on web development, design, and technology
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse bg-muted">
                  <div className="h-48 bg-gray-300 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and updates on web development, design, and technology
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.coverImage} 
                        alt={`Cover image for ${post.title}`} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        width="400"
                        height="225"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time> • {post.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <span className="text-primary font-medium">Read more →</span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/blog" className="inline-flex items-center gap-2">
                View all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
