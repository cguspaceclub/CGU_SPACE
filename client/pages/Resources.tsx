import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Users,
  Star,
  TrendingUp,
  FileText,
  PlayCircle,
  Code,
  Database,
  Cpu,
  Globe,
  Award,
  Target,
  Zap,
} from "lucide-react";

export default function Resources() {
  const stats = [
    { number: "200+", label: "Resources Available", icon: BookOpen },
    { number: "50+", label: "Video Tutorials", icon: Video },
    { number: "25+", label: "Software Tools", icon: Download },
    { number: "1000+", label: "Downloads", icon: TrendingUp },
  ];

  const resourceCategories = [
    {
      title: "Study Materials",
      description: "Comprehensive guides and textbooks",
      icon: BookOpen,
      color: "orange",
      count: 45,
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Video,
      color: "red",
      count: 32,
    },
    {
      title: "Software Tools",
      description: "Simulation and design software",
      icon: Download,
      color: "light-orange",
      count: 28,
    },
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Aerospace Engineering Handbook",
      type: "PDF",
      category: "Study Material",
      image: "https://images.pexels.com/photos/326624/pexels-photo-326624.jpeg",
      description:
        "Comprehensive guide covering fundamental principles of aerospace engineering, propulsion systems, and space mission design.",
      downloads: 1250,
      rating: 4.8,
      size: "25 MB",
      color: "orange",
    },
    {
      id: 2,
      title: "Rocket Design Tutorial Series",
      type: "Video Course",
      category: "Tutorial",
      image: "https://images.pexels.com/photos/821948/pexels-photo-821948.jpeg",
      description:
        "Complete video series covering rocket design principles, CAD modeling, and simulation techniques for beginners to advanced users.",
      downloads: 980,
      rating: 4.9,
      size: "2.5 GB",
      color: "red",
    },
    {
      id: 3,
      title: "Orbital Mechanics Calculator",
      type: "Software",
      category: "Tool",
      image:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
      description:
        "Advanced calculator for orbital mechanics computations, trajectory planning, and mission analysis with real-time visualization.",
      downloads: 756,
      rating: 4.7,
      size: "150 MB",
      color: "light-orange",
    },
  ];

  const toolCategories = [
    { name: "CAD Software", icon: Code, count: 8 },
    { name: "Simulation Tools", icon: Cpu, count: 12 },
    { name: "Data Analysis", icon: Database, count: 6 },
    { name: "Web Resources", icon: Globe, count: 15 },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          badge: "bg-brand-orange/20 text-brand-orange",
        };
      case "red":
        return {
          border: "border-brand-red/30 hover:border-brand-red/60",
          shadow: "hover:shadow-brand-red/20",
          bg: "bg-gradient-to-r from-brand-red to-brand-light-orange",
          text: "text-brand-red",
          badge: "bg-brand-red/20 text-brand-red",
        };
      case "light-orange":
        return {
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
          bg: "bg-gradient-to-r from-brand-light-orange to-brand-orange",
          text: "text-brand-light-orange",
          badge: "bg-brand-light-orange/20 text-brand-light-orange",
        };
      default:
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          badge: "bg-brand-orange/20 text-brand-orange",
        };
    }
  };

  return (
    <>
      <SEO 
        title="Resources"
        description="Access educational materials, documentation, and tools to support your journey in space science and aerospace engineering."
        keywords="CGU Space Club resources, space education, aerospace engineering, learning materials, tutorials, software tools"
      />
      <div className="min-h-screen bg-gradient-to-b from-black via-brand-space-gray to-black text-white font-sans">
        <Navigation />

        {/* Breadcrumbs */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs />
          </div>
        </section>

        {/* Enhanced Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
          {/* Enhanced space background */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=2400&q=80" 
              alt="Space resources background" 
              className="w-full h-full object-cover opacity-50" 
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/resource.webp'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
            
            {/* Animated space elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-2 h-2 bg-brand-orange/60 rounded-full animate-ping"></div>
              <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-48 left-1/4 w-1 h-1 bg-yellow-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-64 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-40 left-16 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-20 right-16 w-1 h-1 bg-green-400/60 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6 animate-pulse"></div>
                <h1 className="font-display text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-brand-nasa-blue via-brand-astronaut-blue to-brand-mission-gold bg-clip-text text-transparent drop-shadow-2xl">
                  LEARNING RESOURCES
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
              </div>
              <p className="text-white/95 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                Access educational materials, documentation, and tools to support your journey in space science and aerospace engineering.
              </p>
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent mx-auto"></div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-black/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-silver/20 rounded-2xl p-8 text-center hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover:border-brand-orange/60 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Resource Categories */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Space background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
            
            {/* Floating space elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-brand-orange/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6 animate-pulse"></div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                  RESOURCE CATEGORIES
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
              </div>
              <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                Explore our diverse collection of learning materials and tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {resourceCategories.map((category, index) => {
                const colors = getColorClasses(category.color);
                return (
                  <div key={index} className="group text-center bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 rounded-3xl border border-silver/20 p-10 hover:border-brand-orange/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 backdrop-blur-sm">
                    <div
                      className={`w-24 h-24 mx-auto mb-6 ${colors.bg} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-brand-orange/30 group-hover:border-brand-orange/60`}
                    >
                      <category.icon className="w-12 h-12 text-white group-hover:text-brand-orange transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-500">
                      {category.title}
                    </h3>
                    <p className="text-white/80 mb-6 text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                      {category.description}
                    </p>
                    <span
                      className={`inline-block px-4 py-2 ${colors.text} bg-white/10 rounded-full text-sm font-bold border border-brand-orange/30 group-hover:border-brand-orange/60 transition-all duration-300`}
                    >
                      {category.count} Items
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Tool Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {toolCategories.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-black/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-silver/20 rounded-2xl p-6 text-center hover:border-brand-orange/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-brand-orange/20"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover:border-brand-orange/60 transition-all duration-300 group-hover:scale-110">
                    <tool.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {tool.name}
                  </div>
                  <div className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">{tool.count} tools</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Resources */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Space background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
            
            {/* Floating space elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-brand-orange/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6 animate-pulse"></div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                  FEATURED RESOURCES
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
              </div>
              <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                Our most popular and comprehensive learning materials
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {featuredResources.map((resource) => {
                const colors = getColorClasses(resource.color);
                return (
                  <Card
                    key={resource.id}
                    className="group bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-sm border border-silver/20 hover:border-brand-orange/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 rounded-3xl overflow-hidden"
                  >
                    <CardHeader className="p-0">
                      <div className="w-full h-56 mb-6 rounded-t-3xl overflow-hidden relative">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Type badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-xs rounded-full font-bold border border-brand-orange/30">
                            {resource.type}
                          </span>
                        </div>
                        
                        {/* Category and rating */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          <span className="text-xs text-white/80 uppercase tracking-wide font-medium bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                            {resource.category}
                          </span>
                          <div className="flex items-center bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-sm text-white font-bold">
                              {resource.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-6">
                        <CardTitle className="text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-500">
                          {resource.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6">
                      <p className="text-white/90 mb-6 font-medium leading-relaxed group-hover:text-white transition-colors duration-500">
                        {resource.description}
                      </p>

                      {/* Enhanced Resource Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-r from-black/30 via-gray-900/30 to-black/30 rounded-2xl border border-silver/10">
                        <div className="text-center group/stat">
                          <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover/stat:border-brand-orange/60 transition-all duration-300">
                            <Download className="w-4 h-4 text-brand-orange" />
                          </div>
                          <div className="text-white text-lg font-bold group-hover/stat:text-brand-orange transition-colors duration-300">
                            {resource.downloads}
                          </div>
                          <div className="text-white/70 text-xs font-medium">Downloads</div>
                        </div>
                        <div className="text-center group/stat">
                          <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover/stat:border-brand-orange/60 transition-all duration-300">
                            <FileText className="w-4 h-4 text-brand-orange" />
                          </div>
                          <div className="text-white text-lg font-bold group-hover/stat:text-brand-orange transition-colors duration-300">
                            {resource.size}
                          </div>
                          <div className="text-white/70 text-xs font-medium">Size</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          size="lg"
                          className={`flex-1 ${colors.bg} hover:opacity-90 text-white font-bold tracking-wider transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl`}
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-brand-orange/50 hover:border-brand-orange text-brand-orange hover:text-white px-4 transition-all duration-500 hover:scale-105 hover:bg-brand-orange/10"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Access All Resources CTA */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-sm border border-silver/20 rounded-3xl p-12 max-w-4xl mx-auto hover:border-brand-orange/40 transition-all duration-500">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
                    Access Full Resource Library
                  </h3>
                  <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                    Join our community to get unlimited access to all resources, including exclusive content and early access to new materials.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-12 py-6 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-brand-orange/50"
                  >
                    <Users className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                    <span className="group-hover:animate-pulse">Join Community</span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-2 border-brand-orange/50 hover:border-brand-orange text-brand-orange hover:text-white px-12 py-6 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-110 hover:bg-brand-orange/10 backdrop-blur-sm"
                  >
                    <BookOpen className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                    <span className="group-hover:animate-pulse">Browse All</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
