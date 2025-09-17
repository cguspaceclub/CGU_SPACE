import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Clock, 
  Rocket, 
  Construction, 
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  Star,
  Coffee
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Maintenance() {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animated progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 85) return prev;
        return prev + Math.random() * 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const maintenanceInfo = [
    {
      icon: Construction,
      title: "Under Construction",
      description: "We're working hard to bring you amazing content and features. This page is currently being developed and will be available soon.",
      color: "orange",
      progress: 75
    },
    {
      icon: Clock,
      title: "Coming Soon",
      description: "Stay tuned for updates! We're constantly improving our website to provide you with the best experience possible.",
      color: "red",
      progress: 60
    },
    {
      icon: Rocket,
      title: "Launching Soon",
      description: "Great things are coming! This section will be filled with exciting content and features in the near future.",
      color: "light-orange",
      progress: 45
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "spacesystems@cgu-odisha.ac.in",
      description: "Get in touch via email for general inquiries",
      color: "orange",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 8908828802",
      secondary: "+91 9798376027",
      description: "Speak directly with our team members",
      color: "red",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "CV Raman Global University",
      secondary: "Bidya Nagar,Mahura,Janla,Bhubaneswar -752054",
      description: "Come see our facilities and meet the team",
      color: "light-orange",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          icon: "text-brand-orange",
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          progress: "bg-brand-orange",
        };
      case "red":
        return {
          icon: "text-brand-red",
          border: "border-brand-red/30 hover:border-brand-red/60",
          shadow: "hover:shadow-brand-red/20",
          progress: "bg-brand-red",
        };
      case "light-orange":
        return {
          icon: "text-brand-light-orange",
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
          progress: "bg-brand-light-orange",
        };
      default:
        return {
          icon: "text-brand-orange",
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          progress: "bg-brand-orange",
        };
    }
  };

  return (
    <>
      <SEO 
        title="Under Maintenance"
        description="This page is currently under maintenance. We're working hard to bring you amazing content and features. Please check back soon!"
        keywords="maintenance, coming soon, under construction, space club maintenance"
      />
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-orange/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-brand-red/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="relative">
              <Wrench className="w-24 h-24 text-brand-orange mx-auto mb-6 animate-pulse" />
              <Sparkles className="w-8 h-8 text-brand-red absolute -top-2 -right-2 animate-ping" />
              <Zap className="w-6 h-6 text-brand-light-orange absolute -bottom-1 -left-1 animate-bounce" />
            </div>
            
            {/* Animated Progress Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-brand-orange/20 relative">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-brand-orange border-t-transparent"
                  style={{
                    transform: `rotate(${progress * 3.6}deg)`,
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div className="absolute inset-2 rounded-full bg-black/50 flex items-center justify-center">
                  <span className="text-brand-orange font-bold text-lg">{Math.round(progress)}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Under Maintenance
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-medium">
            We're working on something amazing!
          </p>
          
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            This page is currently under construction and will be available soon. 
            We're putting the finishing touches to bring you the best experience possible.
          </p>

          {/* Fun Status Messages */}
          <div className="mb-8 p-4 bg-black/30 rounded-lg border border-brand-orange/20">
            <div className="flex items-center justify-center space-x-2">
              <Coffee className="w-5 h-5 text-brand-orange animate-pulse" />
              <span className="text-brand-orange font-medium">Our developers are fueled by coffee and determination!</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white font-bold py-3 px-8 transform hover:scale-105 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ArrowLeft className={`mr-2 h-4 w-4 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold py-3 px-8 transform hover:scale-105 transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Maintenance Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              What's Happening?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {maintenanceInfo.map((info, index) => {
              const colors = getColorClasses(info.color);
              return (
                <Card
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-300 hover:scale-105 ${colors.shadow} group relative overflow-hidden`}
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <CardHeader className="text-center relative z-10">
                    <div className="relative">
                      <info.icon
                        className={`w-12 h-12 ${colors.icon} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <Star className="w-4 h-4 text-brand-orange absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardTitle className="text-white font-bold mb-2">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-white/70 text-sm mb-4">
                      {info.description}
                    </p>
                    
                    {/* Progress bar for each section */}
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <div
                        className={`${colors.progress} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${info.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-white/60">{info.progress}% Complete</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-white/70 text-lg">
              While this page is being developed, you can still reach out to us through other channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const colors = getColorClasses(method.color);
              return (
                <Card
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-300 hover:scale-105 ${colors.shadow} group cursor-pointer`}
                  onClick={() => {
                    if (method.title === "Email Us") {
                      window.location.href = `mailto:${method.primary}`;
                    } else if (method.title === "Call Us") {
                      window.location.href = `tel:${method.primary}`;
                    }
                  }}
                >
                  <CardHeader className="text-center">
                    <div className="relative">
                      <method.icon
                        className={`w-12 h-12 ${colors.icon} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className="absolute inset-0 bg-brand-orange/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-white font-bold mb-2">
                      {method.title}
                    </CardTitle>
                    <p className="text-white/70 text-sm font-medium">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <p className="text-white font-medium group-hover:text-brand-orange transition-colors duration-300">
                        {method.primary}
                      </p>
                      <p className="text-white/80 text-sm">
                        {method.secondary}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
