import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  User,
  Users,
  Clock,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Heart,
  Share2,
  Search,
  Tag,
  BookOpen,
  Rss,
  Star,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  const categories = [
    { name: "Rocket Science", count: 45, color: "orange" },
    { name: "Space Missions", count: 32, color: "red" },
    { name: "Technology", count: 28, color: "light-orange" },
    { name: "Research", count: 25, color: "orange" },
    { name: "Education", count: 20, color: "red" },
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Revolutionary Rocket Propulsion Breakthrough",
      excerpt: "Our latest research achieves unprecedented efficiency in rocket propulsion systems, marking a significant milestone in space exploration technology.",
      author: "Dr. Sarah Chen",
      date: "March 20, 2024",
      readTime: "5 min read",
      category: "Research",
      image: "https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg",
      likes: 156,
      comments: 23,
      views: 2847,
    },
    {
      id: 2,
      title: "Mars Mission: Latest Updates and Discoveries",
      excerpt: "Exploring the red planet with cutting-edge technology and uncovering secrets that could reshape our understanding of the solar system.",
      author: "Dr. Michael Rodriguez",
      date: "March 18, 2024",
      readTime: "7 min read",
      category: "Space Missions",
      image: "https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg",
      likes: 203,
      comments: 31,
      views: 3421,
    },
    {
      id: 3,
      title: "The Future of Space Tourism",
      excerpt: "How commercial space travel is becoming a reality and what it means for the future of human space exploration.",
      author: "Dr. Emily Watson",
      date: "March 15, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/32780193/pexels-photo-32780193.jpeg",
      likes: 189,
      comments: 28,
      views: 2987,
    },
    {
      id: 4,
      title: "Satellite Technology: Small but Mighty",
      excerpt: "The evolution of CubeSats and small satellites is revolutionizing space research and commercial applications.",
      author: "Dr. James Liu",
      date: "March 12, 2024",
      readTime: "4 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg",
      likes: 142,
      comments: 19,
      views: 2156,
    },
  ];

  const recentPosts = [
    {
      id: 5,
      title: "Understanding Black Holes: A Beginner's Guide",
      excerpt: "Demystifying one of the universe's most fascinating phenomena.",
      author: "Dr. Lisa Park",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Education",
      image: "https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg",
      likes: 98,
      comments: 15,
      views: 1876,
    },
    {
      id: 6,
      title: "Space Weather and Its Impact on Earth",
      excerpt: "How solar activity affects our planet and technology.",
      author: "Dr. Robert Kim",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Research",
      image: "https://images.pexels.com/photos/32780193/pexels-photo-32780193.jpeg",
      likes: 87,
      comments: 12,
      views: 1643,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return "text-brand-orange bg-brand-orange/20";
      case "red":
        return "text-brand-red bg-brand-red/20";
      case "light-orange":
        return "text-brand-light-orange bg-brand-light-orange/20";
      default:
        return "text-brand-orange bg-brand-orange/20";
    }
  };

  return (
    <>
      <SEO 
        title="Blog"
        description="Stay updated with the latest space exploration news, research breakthroughs, and educational content from CGU Space Club."
        keywords="space blog, rocket science news, space exploration updates, aerospace research, space technology blog"
      />
      <div className="min-h-screen bg-black text-white font-sans">
        <Navigation />

        {/* Breadcrumbs */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs />
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg"
              alt="Space"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-brand-nasa-blue via-brand-astronaut-blue to-brand-mission-gold bg-clip-text text-transparent drop-shadow-2xl">
              SPACE BLOG
            </h1>
            <p className="text-white/95 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Stay updated with the latest news, discoveries, and insights from our space exploration journey and the broader space community.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-8 h-8 text-brand-orange mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    150+
                  </div>
                </div>
                <span className="text-white font-semibold">Articles Published</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-brand-orange mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    500+
                  </div>
                </div>
                <span className="text-white font-semibold">Community Members</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Search and Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
                Explore Content
              </h2>
            </div>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20 rounded-xl text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-orange hover:bg-brand-light-orange text-white px-6 py-2 rounded-lg">
                  Search
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`${getColorClasses(category.color)} border-current hover:bg-current hover:text-white transition-all duration-300 px-6 py-3 rounded-full font-semibold`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured and Recent Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
                Latest Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-brand-orange/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 group cursor-pointer"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getColorClasses(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-white/60">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="border-brand-orange/60 text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Recent Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-brand-orange/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    <div className="flex">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-32 h-24 object-cover rounded-l-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <CardContent className="p-4 flex-1">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                          {post.title}
                        </h4>
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-brand-orange/10 to-brand-red/10 border-brand-orange/30 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Stay Updated with Our Latest Articles
                  </h3>
                  <p className="text-white/80 mb-6">
                    Subscribe to our newsletter and never miss a space exploration update.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button className="bg-brand-orange hover:bg-brand-light-orange text-white px-8">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
