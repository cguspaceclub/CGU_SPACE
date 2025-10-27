import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Satellite,
  Telescope,
  ExternalLink,
  Award,
  Users,
  Target,
  Zap,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  
  const stats = [
    { number: "15", label: "Active Projects", icon: Target },
    { number: "8", label: "Completed Launches", icon: Rocket },
    { number: "25+", label: "Team Members", icon: Users },
    { number: "3", label: "Awards Won", icon: Award },
  ];

  const projectCategories = [
    {
      title: "Rocket Development",
      description: "Advanced propulsion and aerodynamics research",
      icon: Rocket,
      color: "orange",
      count: 6,
    },
    {
      title: "Satellite Technology",
      description: "CubeSat design and communication systems",
      icon: Satellite,
      color: "red",
      count: 4,
    },
    {
      title: "Space Observation",
      description: "Astronomical research and data collection",
      icon: Telescope,
      color: "light-orange",
      count: 5,
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "CGU Rocket Program",
      status: "Active",
      completion: 75,
      image: "https://images.unsplash.com/photo-1572224104782-91a08d296390?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2F0ZWxsaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600?auto=format&fit=crop&w=800&q=80",
      description:
        "Developing and launching high-powered rockets to compete in national competitions and advance aerospace engineering education.",
      color: "orange",
      teamSize: 12,
      timeline: "6 months",
      budget: "$50K",
      ctaLabel: "Learn More",
    },
    {
      id: 2,
      title: "CubeSat Initiative",
      status: "Planning",
      completion: 45,
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
      description:
        "Designing and building small satellites for educational purposes and scientific data collection.",
      color: "red",
      teamSize: 8,
      timeline: "12 months",
      budget: "$75K",
      ctaLabel: "Learn More",
    },
    {
      id: 3,
      title: "Observatory Project",
      status: "Ongoing",
      completion: 60,
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80",
      description:
        "Advanced research in space technology, materials science, and astronomical observations.",
      color: "light-orange",
      teamSize: 6,
      timeline: "8 months",
      budget: "$30K",
      ctaLabel: "Learn More",
    },
    {
      id: 4,
      title: "CGUSAT-1",
      status: "Near Complete",
      completion: 95,
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
      description:
        "Our first CubeSat-class satellite mission focusing on systems integration, communication, and on-orbit validation.",
      color: "orange",
      teamSize: 10,
      timeline: "6 months",
      // Intentionally omit budget per request
      ctaLabel: "Under Maintenance",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          border: "border-brand-purple/30 hover:border-brand-purple/60",
          shadow: "hover:shadow-brand-purple/20",
          bg: "bg-gradient-to-r from-brand-purple to-brand-cyan",
          text: "text-brand-purple",
          progress: "bg-brand-purple",
        };
      case "red":
        return {
          border: "border-brand-cyan/30 hover:border-brand-cyan/60",
          shadow: "hover:shadow-brand-cyan/20",
          bg: "bg-gradient-to-r from-brand-cyan to-brand-pink",
          text: "text-brand-cyan",
          progress: "bg-brand-cyan",
        };
      case "light-orange":
        return {
          border:
            "border-brand-pink/30 hover:border-brand-pink/60",
          shadow: "hover:shadow-brand-pink/20",
          bg: "bg-gradient-to-r from-brand-pink to-brand-purple",
          text: "text-brand-pink",
          progress: "bg-brand-pink",
        };
      default:
        return {
          border: "border-brand-purple/30 hover:border-brand-purple/60",
          shadow: "hover:shadow-brand-purple/20",
          bg: "bg-gradient-to-r from-brand-purple to-brand-cyan",
          text: "text-brand-purple",
          progress: "bg-brand-purple",
        };
    }
  };

  return (
    <>
      <SEO 
        title="Projects"
        description="Explore CGU Space Club's innovative projects including rocket development, satellite technology, and space observation initiatives."
        keywords="CGU Space Club projects, rocket development, satellite technology, space research, aerospace engineering projects"
      />
      <div className="min-h-screen bg-gradient-to-br from-brand-cosmic-dark via-brand-cosmic to-brand-nebula-dark text-white font-sans">
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
            alt="Space projects background" 
            className="w-full h-full object-cover opacity-50" 
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/space2.jpg'; }}
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
              <h1 className="font-display text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-brand-nasa-blue via-brand-astronaut-blue to-brand-mission-gold bg-clip-text text-transparent drop-shadow-2xl">
                OUR PROJECTS
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
            </div>
            <p className="text-white/95 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Discover the innovative projects that are pushing the boundaries of space exploration and inspiring the next generation of space scientists.
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
                <div className="text-4xl font-black text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
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


      {/* Enhanced Project Categories */}
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
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                PROJECT CATEGORIES
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
            </div>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Explore our diverse range of space technology initiatives across different domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projectCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div key={index} className="group text-center bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 rounded-3xl border border-silver/20 p-10 hover:border-brand-orange/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 backdrop-blur-sm">
                  <div
                    className={`w-24 h-24 mx-auto mb-6 ${colors.bg} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-brand-orange/30 group-hover:border-brand-orange/60`}
                  >
                    <category.icon className="w-12 h-12 text-white group-hover:text-brand-orange transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-500">
                    {category.title}
                  </h3>
                  <p className="text-white/80 mb-6 text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    {category.description}
                  </p>
                  <span
                    className={`inline-block px-4 py-2 ${colors.text} bg-white/10 rounded-full text-sm font-bold border border-brand-orange/30 group-hover:border-brand-orange/60 transition-all duration-300`}
                  >
                    {category.count} Projects
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects */}
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
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                FEATURED PROJECTS
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto animate-pulse"></div>
            </div>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Our most impactful and innovative space exploration initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {featuredProjects.map((project) => {
              const colors = getColorClasses(project.color);
              return (
                <Card
                  key={project.id}
                  className="group bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-sm border border-silver/20 hover:border-brand-orange/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 rounded-3xl overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <div className="w-full h-56 mb-6 rounded-t-3xl overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Status badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-xs rounded-full font-bold border border-brand-orange/30">
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Project icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 backdrop-blur-sm">
                          <Rocket className="w-6 h-6 text-brand-orange" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-6">
                      <CardTitle className="text-2xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors duration-500">
                        {project.title}
                      </CardTitle>

                      {/* Enhanced Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm text-white/80 mb-3">
                          <span className="font-medium">Progress</span>
                          <span className="font-bold text-brand-orange">{project.completion}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-brand-orange to-brand-red h-3 rounded-full transition-all duration-700 shadow-lg"
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <p className="text-white/90 mb-6 font-medium leading-relaxed group-hover:text-white transition-colors duration-500">
                      {project.description}
                    </p>

                    {/* Enhanced Project Details */}
                    <div className={`grid ${project.budget ? "grid-cols-3" : "grid-cols-2"} gap-4 mb-6 p-4 bg-gradient-to-r from-black/30 via-gray-900/30 to-black/30 rounded-2xl border border-silver/10`}>
                      <div className="text-center group/detail">
                        <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover/detail:border-brand-orange/60 transition-all duration-300">
                          <Users className="w-4 h-4 text-brand-orange" />
                        </div>
                        <div className="text-white text-lg font-bold group-hover/detail:text-brand-orange transition-colors duration-300">
                          {project.teamSize}
                        </div>
                        <div className="text-white/70 text-xs font-medium">Team</div>
                      </div>
                      <div className="text-center group/detail">
                        <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover/detail:border-brand-orange/60 transition-all duration-300">
                          <Clock className="w-4 h-4 text-brand-orange" />
                        </div>
                        <div className="text-white text-lg font-bold group-hover/detail:text-brand-orange transition-colors duration-300">
                          {project.timeline}
                        </div>
                        <div className="text-white/70 text-xs font-medium">Duration</div>
                      </div>
                      {project.budget && (
                        <div className="text-center group/detail">
                          <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover/detail:border-brand-orange/60 transition-all duration-300">
                            <Target className="w-4 h-4 text-brand-orange" />
                          </div>
                          <div className="text-white text-lg font-bold group-hover/detail:text-brand-orange transition-colors duration-300">
                            {project.budget}
                          </div>
                          <div className="text-white/70 text-xs font-medium">Budget</div>
                        </div>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      className="group/btn w-full border-2 border-brand-orange/50 hover:border-brand-orange text-brand-orange hover:text-white px-6 py-3 font-bold tracking-wider transition-all duration-500 hover:scale-105 hover:bg-brand-orange/10 backdrop-blur-sm"
                      onClick={() => navigate('/maintenance')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:animate-pulse" />
                      {project.ctaLabel ?? 'Learn More'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced View All Projects CTA */}
          <div className="text-center mt-20">
            <div className="inline-block">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-16 py-6 text-xl font-bold tracking-wider transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-brand-orange/50"
                onClick={() => navigate('/maintenance')}
              >
                <TrendingUp className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                <span className="group-hover:animate-pulse">View All Projects</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

             <Footer />
     </div>
     </>
   );
 }
