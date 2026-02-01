import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import blogsData from "@/data/blogs.json";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  image: string;
}

// Convert full blog data to blog post list with excerpt
const blogPosts: BlogPost[] = blogsData.blogs.map((blog: any) => ({
  id: blog.id,
  title: blog.title,
  excerpt: blog.content[0].substring(0, 150) + "...", // First 150 chars as excerpt
  date: blog.date,
  readTime: blog.readTime,
  category: blog.category,
  tags: blog.tags,
  slug: blog.slug,
  image: blog.image
}));

const Blog = () => {
  const navigate = useNavigate();

  const handleReadMore = (slug: string, e?: React.MouseEvent) => {
    if (e?.ctrlKey || e?.metaKey) {
      // Open in new tab on Ctrl/Cmd + Click
      window.open(`${window.location.origin}/blog/${slug}`, '_blank');
    } else {
      // Regular click - open in current tab
      navigate(`/blog/${slug}`);
    }
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-primary">Blog</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge, insights, and best practices in web development, 
            full-stack engineering, and modern technologies
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl hover:scale-105 smooth-transition cursor-pointer cyber-card animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={(e) => handleReadMore(post.slug, e as any)}
            >
              <div className="w-full h-48 overflow-hidden bg-muted">
                <img 
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop";
                  }}
                />
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary smooth-transition line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="flex items-center gap-2 text-xs">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs hover:bg-primary/10 smooth-transition"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full h-10 group-hover:bg-primary group-hover:text-primary-foreground smooth-transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(post.slug, e as any);
                  }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            className="hover:scale-110 smooth-transition glow-effect"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
