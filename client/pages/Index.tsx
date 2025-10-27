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
        
        {/* Hero - Split Screen Design */}
        <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden pt-16">
          {/* Left Panel - Text Content */}
          <div className="w-full lg:w-1/2 bg-black flex items-center justify-center px-8 lg:px-16 py-20 min-h-screen">
            <div className="max-w-2xl space-y-10">
              {/* Main Title */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase tracking-tight">
                  TO SPACE
                  <br />
                  AND BACK,
                  <br />
                  <span className="text-brand-nasa-blue">SAFELY.</span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-lg">
                Empowering students to explore, build, and innovate in space technology through hands-on projects and groundbreaking research.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/projects">
                  <Button 
                    size="lg"
                    className="bg-brand-nasa-blue border-2 border-brand-nasa-blue text-white hover:bg-brand-astronaut-blue px-10 py-6 text-base font-semibold tracking-wide transition-all duration-300 group"
                  >
                    BOOK YOUR ADVENTURE
                    <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                <div className="text-center">
                  <div className="text-5xl font-black text-brand-nasa-blue mb-2">100+</div>
                  <div className="text-sm text-white/60 uppercase tracking-widest">MEMBERS</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-brand-nasa-blue mb-2">20+</div>
                  <div className="text-sm text-white/60 uppercase tracking-widest">PROJECTS</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-brand-nasa-blue mb-2">5+</div>
                  <div className="text-sm text-white/60 uppercase tracking-widest">LAUNCHES</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Saturn/Planet Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden bg-black h-[50vh] lg:h-screen">
            <img 
              src="https://images.unsplash.com/photo-1669287731461-bd8ce3126710?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687?auto=format&fit=crop&w=2000&q=90" 
              alt="Saturn in space" 
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=2000&q=90'; }}
            />
            
            {/* Optional: Coordinates overlay */}
            <div className="absolute top-6 right-6 text-white/30 font-mono text-xs bg-black/20 px-2 py-1 rounded">
              84.20994° -23.10305°
            </div>
          </div>
        </section>

        {/* What We Do - Project Carousel */}
        <section className="relative py-32 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                WHAT WE DO
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                We run student-driven initiatives in rocketry, satellites, and space systems. Our focus is practical learning, open collaboration, and impactful demos.
              </p>
            </div>
                
            {/* Project Carousel */}
            <ProjectCarousel />
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-32 overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                GET INVOLVED
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Join our community and be part of the space exploration journey
              </p>
            </div>
                
            {/* Action cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group text-center bg-black border border-white/10 p-10 hover:border-brand-nasa-blue transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-nasa-blue/20 rounded-full flex items-center justify-center border border-brand-nasa-blue/30 group-hover:border-brand-nasa-blue transition-all">
                  <Users className="w-8 h-8 text-brand-nasa-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Join the Club</h3>
                <p className="text-white/70 mb-6 text-base leading-relaxed">Be part of builds, reviews, and launches. Connect with fellow space enthusiasts.</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-brand-nasa-blue hover:bg-brand-astronaut-blue text-white px-8 py-4 text-base font-semibold transition-all hover:scale-105">
                    Get in Touch
                  </Button>
                </Link>
              </div>

              <div className="group text-center bg-black border border-white/10 p-10 hover:border-brand-nasa-blue transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-nasa-blue/20 rounded-full flex items-center justify-center border border-brand-nasa-blue/30 group-hover:border-brand-nasa-blue transition-all">
                  <Award className="w-8 h-8 text-brand-nasa-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Sponsor & Support</h3>
                <p className="text-white/70 mb-6 text-base leading-relaxed">Help us scale hardware and outreach. Support the next generation of space explorers.</p>
                <Link to="/sponsorship">
                  <Button size="lg" variant="outline" className="border-2 border-brand-nasa-blue text-white hover:bg-brand-nasa-blue/10 px-8 py-4 text-base font-semibold transition-all hover:scale-105">
                    Learn More
                  </Button>
                </Link>
              </div>
                
              <div className="group text-center bg-black border border-white/10 p-10 hover:border-brand-nasa-blue transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-nasa-blue/20 rounded-full flex items-center justify-center border border-brand-nasa-blue/30 group-hover:border-brand-nasa-blue transition-all">
                  <BookOpen className="w-8 h-8 text-brand-nasa-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Resources</h3>
                <p className="text-white/70 mb-6 text-base leading-relaxed">Guides, references, and club notes. Access our knowledge base.</p>
                <Link to="/resources">
                  <Button size="lg" className="bg-brand-nasa-blue hover:bg-brand-astronaut-blue text-white px-8 py-4 text-base font-semibold transition-all hover:scale-105">
                    Browse
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
      {/* Carousel container */}
      <div 
        ref={carouselRef}
        className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl border border-white/10 bg-black"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
                    <div className="max-w-3xl">
                      <div className="flex items-start mb-6">
                        <span className="text-5xl mr-4">{project.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20 group z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-brand-nasa-blue transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20 group z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-brand-nasa-blue transition-colors" />
          </button>

          {/* Scroll indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-nasa-blue w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project counter */}
          <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 z-10">
            <span className="text-white text-sm font-semibold tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>
    </div>
  );
}

