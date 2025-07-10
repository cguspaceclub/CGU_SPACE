import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SpaceCarousel from "@/components/SpaceCarousel";
import Footer from "@/components/Footer";
import {
  Rocket,
  Users,
  BookOpen,
  Award,
  Mail,
  ExternalLink,
  ArrowRight,
  Calendar,
  Target,
  Zap,
  Satellite,
  Telescope,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Section 1: Main Hero with Navbar and Space Carousel */}
      <div className="relative min-h-screen">
        <SpaceCarousel />
        <Navigation />
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-orange via-brand-red to-brand-light-orange bg-clip-text text-transparent">
              CGU Space Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed font-medium">
              Exploring the cosmos, pushing boundaries, and inspiring the next
              generation of space explorers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#get-involved">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Award className="mr-2 h-5 w-5" />
                  Get Involved
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Live Projects & Upcoming - Split Layout */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-brand-red rounded-full animate-bounce"></div>
          <div className="absolute bottom-30 left-1/4 w-1 h-1 bg-brand-light-orange rounded-full animate-ping"></div>
          <div className="absolute top-60 left-3/4 w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent drop-shadow-lg">
              Active Projects
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              See what we're working on right now and what's coming next in our
              mission to explore space
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/15 to-brand-red/15 blur-2xl animate-pulse"></div>
              <div className="relative bg-black/70 backdrop-blur-md border border-brand-orange/50 rounded-2xl p-8 shadow-2xl hover:shadow-brand-orange/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-3"></div>
                    <span className="text-green-400 font-bold text-lg">
                      LIVE PROJECT
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-brand-orange/20 text-brand-orange text-sm rounded-full font-medium">
                    75% Complete
                  </span>
                </div>
                <div className="w-full h-64 mb-6 rounded-xl overflow-hidden relative group">
                  {/* Background image with zoom on hover */}
                  <img
                    src="https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg"
                    alt="NASA space shuttle launching with fiery liftoff"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Top gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Text and icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center">
                      <Rocket className="w-6 h-6 text-brand-orange mr-2" />
                      <span className="text-white font-bold text-xl">
                        CGU Rocket Alpha
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Advanced Propulsion System
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our most ambitious rocket project yet, featuring hybrid
                  propulsion technology and advanced guidance systems. Currently
                  in final testing phase before launch.
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-white/70 mb-2">
                    <span>Project Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-brand-orange to-brand-red h-3 rounded-full transition-all duration-1000 animate-pulse"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-brand-orange mr-2" />
                      <span className="text-white/80 text-sm">
                        Hybrid Engine
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 text-brand-red mr-2" />
                      <span className="text-white/80 text-sm">
                        GPS Guidance
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-brand-light-orange mr-2" />
                      <span className="text-white/80 text-sm">
                        12 Team Members
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-brand-orange mr-2" />
                      <span className="text-white/80 text-sm">
                        Launch: April 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/40 rounded-lg">
                  <div className="text-center">
                    <div className="text-brand-orange text-xl font-bold">
                      15ft
                    </div>
                    <div className="text-white/60 text-xs">Height</div>
                  </div>
                  <div className="text-center">
                    <div className="text-brand-red text-xl font-bold">2.5K</div>
                    <div className="text-white/60 text-xs">Altitude (ft)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-brand-light-orange text-xl font-bold">
                      45s
                    </div>
                    <div className="text-white/60 text-xs">Burn Time</div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white font-bold py-3">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Updates
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-brand-red/15 to-brand-light-orange/15 blur-2xl"></div>
              <div className="relative bg-black/70 backdrop-blur-md border border-brand-red/50 rounded-2xl p-8 shadow-2xl hover:shadow-brand-red/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce mr-3"></div>
                    <span className="text-yellow-400 font-bold text-lg">
                      UPCOMING
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-sm rounded-full font-medium">
                    Next Launch
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What's Coming Next
                </h3>
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-white/10 hover:border-brand-red/40 transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-light-orange rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Satellite className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">
                          Mars Rover Prototype
                        </h4>
                        <p className="text-white/70 text-sm mb-3">
                          Building an autonomous rover with advanced navigation
                          and sample collection capabilities.
                        </p>
                        <div className="flex items-center text-xs text-brand-red">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>Starting May 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-6 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-red rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Telescope className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">
                          Deep Space Observatory
                        </h4>
                        <p className="text-white/70 text-sm mb-3">
                          High-powered telescope array for capturing detailed
                          images of distant galaxies and nebulae.
                        </p>
                        <div className="flex items-center text-xs text-brand-orange">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>Summer 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-xl p-6 border border-white/10 hover:border-brand-light-orange/40 transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-light-orange to-brand-orange rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">
                          Ion Propulsion Engine
                        </h4>
                        <p className="text-white/70 text-sm mb-3">
                          Next-generation electric propulsion system for
                          long-duration space missions.
                        </p>
                        <div className="flex items-center text-xs text-brand-light-orange">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>Fall 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-brand-red/20 to-brand-orange/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3 text-center">
                    2024 Project Pipeline
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-brand-red text-xl font-bold">6</div>
                      <div className="text-white/60 text-xs">New Projects</div>
                    </div>
                    <div>
                      <div className="text-brand-orange text-xl font-bold">
                        $150K
                      </div>
                      <div className="text-white/60 text-xs">Total Budget</div>
                    </div>
                    <div>
                      <div className="text-brand-light-orange text-xl font-bold">
                        25+
                      </div>
                      <div className="text-white/60 text-xs">Team Members</div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-white/30 text-white hover:bg-white/10 font-bold py-3"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View Project Roadmap
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-brand-orange/40 transition-all duration-500 hover:scale-110 border border-brand-orange/30"
              >
                Explore All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Get Involved */}
      <section
        id="get-involved"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/8474714/pexels-photo-8474714.jpeg"
            alt="Two astronauts in silver spacesuits collaborating in space environment"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 from-brand-orange/10 to-brand-red/10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
            Get Involved
          </h2>
          <p className="text-xl mb-12 text-white/90 font-medium leading-relaxed">
            Ready to be part of something extraordinary? Join our mission to
            explore space and inspire the next generation of explorers. Your
            participation helps us achieve the impossible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-brand-orange/50 transition-all duration-300">
              <Users className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Join the Team
              </h3>
              <p className="text-white/80 font-normal">
                Become a member and contribute to groundbreaking space projects
              </p>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-brand-red/50 transition-all duration-300">
              <Award className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Sponsor Us</h3>
              <p className="text-white/80 font-normal">
                Support our mission with financial backing and partnerships
              </p>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-brand-light-orange/50 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-brand-light-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Learn & Grow
              </h3>
              <p className="text-white/80 font-normal">
                Access educational resources and mentorship opportunities
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
            <Link to="/sponsorship">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-medium"
              >
                <Award className="mr-2 h-5 w-5" />
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Footer */}
      <Footer />
    </div>
  );
}
