import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowUp, Calendar, Clock, Share2, User, Shield, TrendingUp, Users, Award, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import blogsData from "@/data/blogs.json";

interface BlogPostData {
  id: number;
  title: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  image: string;
  author: string;
}

// Convert JSON array to Record for easy slug lookup
const blogPostsData: Record<string, BlogPostData> = {};
blogsData.blogs.forEach((blog: BlogPostData) => {
  blogPostsData[blog.slug] = blog;
});

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogPostsData[slug] : null;
  const [showScroll, setShowScroll] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Show scroll-to-top button after scrolling 300px
    setShowScroll(scrollPosition > 300);
    // Hide back button when scrolled down more than 500px
    setShowBackButton(scrollPosition < 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    // Update meta tags for SEO
    const excerpt = post.content[0].substring(0, 150);
    document.title = `${post.title} | Raju Vishwakarma Blog`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', excerpt);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = excerpt;
      document.head.appendChild(meta);
    }

    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', post.title);

    // Update og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', excerpt);

    // Update og:image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', post.image);

    // Update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', `https://rajuvishwakarma.dev/blog/${post.slug}`);

    // Update canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://rajuvishwakarma.dev/blog/${post.slug}`;

    // Add Article JSON-LD Schema
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: excerpt,
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
        url: 'https://rajuvishwakarma.dev'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Raju Vishwakarma',
        logo: {
          '@type': 'ImageObject',
          url: 'https://rajuvishwakarma.dev/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://rajuvishwakarma.dev/blog/${post.slug}`
      }
    };

    let schemaScript = document.getElementById('article-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'article-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(articleSchema);

    // Add keywords meta tag
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', post.tags.join(', '));
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content[0],
        url: window.location.href
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden mt-16 md:mt-20">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-28 md:-mt-32 relative z-10">
        {/* Back Navigation - Hidden when scrolling */}
        {showBackButton && (
          <div className=" top-16 z-20 mb-6 md:mb-8 flex items-center gap-2 animate-fade-in">
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const blogSection = document.getElementById('blog');
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="group px-3 h-9 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-md smooth-transition"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 smooth-transition  " />
            </Button>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">Back to Blog</span>
          </div>
        )}

        {/* Scroll to Top Button - Fixed */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-4 sm:right-6 md:right-8 z-30 p-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl hover:scale-110 smooth-transition animate-fade-in"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Header */}
        <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8">

          <Badge className="mb-4">{post.category}</Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button 
              variant="outline" 
              onClick={handleShare}
              className="gap-2 whitespace-nowrap"
            >
              <Share2 className="w-4 h-4" />
              Share Article
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl max-w-none mb-12">
          {post.content.map((paragraph, index) => {
            // Headings
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            } 
            // List items
            else if (paragraph.startsWith('-')) {
              return (
                <li key={index} className="ml-6 mb-2 text-base leading-relaxed">
                  {paragraph.replace('- ', '')}
                </li>
              );
            } 
            // Regular paragraphs
            else {
              return (
                <p key={index} className="text-base leading-relaxed mb-4 text-foreground/90">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>

        {/* Back Button */}
        <div className="text-center pb-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const blogSection = document.getElementById('blog');
                if (blogSection) {
                  blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
            className="hover:scale-110 smooth-transition glow-effect"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Articles
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
