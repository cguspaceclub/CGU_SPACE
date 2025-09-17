import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Users, Award, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  return (
    <>
      <SEO 
        title="Home"
        description="CGU Space Club - Building projects, learning together, and growing a community around space exploration."
        keywords="CGU Space Club, space, projects, team, CV Raman Global University"
      />
      <div className="min-h-screen bg-gradient-to-b from-black via-brand-space-gray to-black text-white font-sans">
        <Navigation />
        
        {/* Hero */}
        <section className="relative overflow-hidden py-32 min-h-screen flex items-center">
          {/* Animated space background */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=2400&q=80" 
              alt="Space" 
              className="w-full h-full object-cover opacity-60 animate-pulse" 
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/HeroImage1.jpg'; }}
            />
            {/* Animated stars overlay */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-32 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-48 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-64 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-40 left-16 w-1 h-1 bg-blue-200 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-20 right-16 w-1 h-1 bg-yellow-200 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Animated decorative elements */}
            <div className="inline-block mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-8 animate-pulse"></div>
              <h1 className="font-display text-5xl md:text-7xl font-black tracking-wider mb-8 bg-gradient-to-r from-brand-nasa-blue via-brand-astronaut-blue to-brand-mission-gold bg-clip-text text-transparent drop-shadow-2xl">
                CGU SPACE CLUB
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
            </div>
            
            {/* Enhanced tagline with animation */}
            <div className="mb-16 animate-fade-in">
              <p className="text-white/95 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-6">
                Learn, build, and launch. A student community exploring space through hands-on projects.
              </p>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent mx-auto"></div>
        </div>
        
            {/* Enhanced CTA buttons with glow effects */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Link to="/projects">
                <Button size="lg" className="group relative bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-12 py-4 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-brand-orange/50 overflow-hidden">
                  <span className="relative z-10">EXPLORE PROJECTS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline" className="group border-2 border-brand-orange/60 hover:border-brand-orange text-brand-orange hover:text-white px-12 py-4 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-110 hover:bg-brand-orange/10 backdrop-blur-sm">
                  <span className="relative z-10">MEET THE TEAM</span>
                </Button>
              </Link>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-brand-orange/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-16 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 left-20 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </section>

        {/* What We Do - Project Carousel */}
        <section className="relative py-32 overflow-hidden">
          {/* Enhanced space background with parallax effect */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=2400&q=80" 
              alt="Galaxy background" 
              className="w-full h-full object-cover opacity-40 animate-pulse"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/space2.jpg'; }}
            />
            {/* Animated nebula overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/70"></div>
            
            {/* Floating space elements */}
            <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Section Title */}
            <div className="text-center mb-20">
              <div className="inline-block mb-10">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-8 animate-pulse"></div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                  WHAT WE DO
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
                  </div>
              <p className="text-white/95 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                We run student-driven initiatives in rocketry, satellites, and space systems. Our focus is practical learning, open collaboration, and impactful demos.
              </p>
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent mx-auto"></div>
                </div>
                
            {/* Enhanced Project Carousel */}
            <ProjectCarousel />
                        </div>
        </section>

        {/* Enhanced Get Involved Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
            
            {/* Floating space elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-brand-orange/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                      </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Enhanced section header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6 animate-pulse"></div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent drop-shadow-2xl">
                  GET INVOLVED
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
                    </div>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-8">
                Join our community and be part of the space exploration journey
              </p>
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent mx-auto"></div>
                </div>
                
            {/* Enhanced action cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group text-center bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 rounded-3xl border border-silver/20 p-10 hover:border-brand-orange/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover:border-brand-orange/60 transition-all duration-500 group-hover:scale-110">
                  <Users className="w-10 h-10 text-brand-orange group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-brand-orange transition-colors duration-500">Join the Club</h3>
                <p className="text-silver/80 mb-8 text-base leading-relaxed group-hover:text-white transition-colors duration-500">Be part of builds, reviews, and launches. Connect with fellow space enthusiasts.</p>
                <Link to="/contact">
                  <Button size="lg" className="group/btn bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-10 py-4 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-brand-orange/40">
                    <span className="group-hover/btn:animate-pulse">Get in Touch</span>
                  </Button>
                </Link>
            </div>

              <div className="group text-center bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 rounded-3xl border border-silver/20 p-10 hover:border-brand-red/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-brand-red/20 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-brand-red/20 to-brand-light-orange/20 rounded-full flex items-center justify-center border border-brand-red/30 group-hover:border-brand-red/60 transition-all duration-500 group-hover:scale-110">
                  <Award className="w-10 h-10 text-brand-red group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-brand-red transition-colors duration-500">Sponsor & Support</h3>
                <p className="text-silver/80 mb-8 text-base leading-relaxed group-hover:text-white transition-colors duration-500">Help us scale hardware and outreach. Support the next generation of space explorers.</p>
                <Link to="/sponsorship">
                  <Button size="lg" variant="outline" className="group/btn border-2 border-brand-red/50 hover:border-brand-red text-brand-red hover:text-white px-10 py-4 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-110 hover:bg-brand-red/10 backdrop-blur-sm">
                    <span className="group-hover/btn:animate-pulse">Learn More</span>
                  </Button>
                </Link>
                </div>
                
              <div className="group text-center bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 rounded-3xl border border-silver/20 p-10 hover:border-brand-light-orange/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-brand-light-orange/20 backdrop-blur-sm">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-brand-light-orange/20 to-brand-orange/20 rounded-full flex items-center justify-center border border-brand-light-orange/30 group-hover:border-brand-light-orange/60 transition-all duration-500 group-hover:scale-110">
                  <BookOpen className="w-10 h-10 text-brand-light-orange group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-brand-light-orange transition-colors duration-500">Resources</h3>
                <p className="text-silver/80 mb-8 text-base leading-relaxed group-hover:text-white transition-colors duration-500">Guides, references, and club notes. Access our knowledge base.</p>
                <Link to="/resources">
                  <Button size="lg" className="group/btn bg-gradient-to-r from-brand-light-orange to-brand-orange hover:from-brand-orange hover:to-brand-red text-white px-10 py-4 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-brand-light-orange/40">
                    <span className="group-hover/btn:animate-pulse">Browse</span>
                  </Button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
        </div> 
    </>
  );
}

function ProjectCarousel() {
  const projects = [
    {
      id: 1,
      title: "CGUSAT-1",
      description: "CubeSat systems integration & ground link validation",
      background: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
      icon: "🛰️",
    },
    {
      id: 2,
      title: "Rocket Alpha", 
      description: "Hybrid propulsion prototyping & avionics testing",
      background: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=800&q=80",
      icon: "🚀",
    },
    {
      id: 3,
      title: "Observatory",
      description: "Campus telescope array for real-time space data",
      background: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80", 
      icon: "🔭",
    },
    {
      id: 4,
      title: "Space Lab",
      description: "Advanced research facility for space technology development",
      background: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
      icon: "🔬",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Enhanced space background with animated gradient */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-deep-space via-brand-space-gray to-brand-orbit-gray shadow-2xl border border-silver/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        
        {/* Animated nebula overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10 animate-pulse" style={{ animationDuration: '5s' }}></div>
        
        {/* Carousel container with enhanced styling */}
        <div 
          ref={carouselRef}
          className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl"
        >
          <div className="flex h-full">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="w-full h-full flex-shrink-0 relative group"
              >
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.background})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced content with animations */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
                    <div className="max-w-3xl">
                      <div className="flex items-start mb-6 group-hover:scale-105 transition-transform duration-500">
                        <span className="text-4xl mr-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>{project.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 drop-shadow-2xl group-hover:text-brand-orange transition-colors duration-500">
                            {project.title}
                </h3>
                          <p className="text-white/95 text-lg md:text-xl leading-relaxed font-medium group-hover:text-white transition-colors duration-500">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Progress bar animation */}
                      <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                        <div 
                          className="bg-gradient-to-r from-brand-orange to-brand-red h-1 rounded-full animate-pulse"
                          style={{ 
                            width: `${(index + 1) * 25}%`,
                            animationDelay: `${index * 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 w-2 h-2 bg-white/60 rounded-full animate-ping" style={{ animationDelay: `${index * 0.3}s` }}></div>
                  <div className="absolute top-16 left-8 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: `${index * 0.4}s` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-brand-orange/50 group"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-7 h-7 group-hover:text-brand-orange transition-colors duration-300" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-brand-orange/50 group"
          aria-label="Next project"
        >
          <ChevronRight className="w-7 h-7 group-hover:text-brand-orange transition-colors duration-300" />
        </button>

        {/* Enhanced scroll indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-orange scale-125 shadow-lg shadow-brand-orange/50' 
                  : 'bg-white/50 hover:bg-white/70 hover:scale-110'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced project counter */}
        <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <span className="text-white text-sm font-bold tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}

