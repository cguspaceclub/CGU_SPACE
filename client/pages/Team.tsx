import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  Users,
  Target,
  Zap,
  Calendar,
} from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Smita Rani Parija",
      role: "Co-Ordinator", //was confused for it and the id2 to be put here or somewhere else. and their roles.
      image:
        "smitha_maam.jpg",
      description:
        "Leading our space exploration initiatives fueling the creativity and ideas. Asso. Proffesor and President at ECE Department in CGU.",
      color: "orange",
      achievements: ["NASA Internship", "3 Published Papers", "AIAA Award"],
      linkedin: "https://www.linkedin.com/in/smita-rani-parija",
    },
    {
      id: 2,
      name: "Dr. Soumya Mishra",
      role: "Custodian",
      image:
        "soumya_maam.jpg",
      description:
        "Managing club operations and coordinating with our students to help them achieve their goal. Asso. Proffessor and Custodian at Ece Department.",
      color: "red",
      achievements: ["SpaceX Internship", "Rocketry Champion", "IEEE Member"],
      linkedin: "https://www.linkedin.com/in/soumya-mishra",
    },
    {
      id: 3,
      name: "Debadutta Sahoo", //the student member lists start from here.
      role: "Student President",
      image:
        "president.jpg",
      description:
        "Leading our research initiatives in space technology and materials science.",
      color: "light-orange",
      achievements: ["NASA Researcher", "5 Patents", "Space Grant"],
      linkedin: "https://www.linkedin.com/in/debadutta-sahoo",
    },
    {
      id: 4,
      name: "Rahul Kumar Gupta",
      role: "Student Vice-President",
      image:
        "vice_president.jpg",
      description:
        "Overseeing Satellite development and projects, to turn the ideas of us students into reality.",
      color: "orange",
      achievements: ["Blue Origin Intern", "CAD Expert", "Design Award"],
      linkedin: "https://www.linkedin.com/in/rahul-kumar-gupta-784bab284/",
    },
    {
      id: 5,
      name: "Debankur Pal",
      role: "0101",
      image:
        "dabankur_pal.jpg",
      description:
        "Ensuring all projects is being handeled effeciently and effectively, while handeling the communication within the team",
      color: "red",
      achievements: ["Safety Certified", "OSHA Trainer", "Risk Assessment"],
      linkedin: "https://www.linkedin.com/in/debankur-pal",
    },
    {
      id: 6,
      name: "Aditi Singh",
      role: "Student Tresurer",
      image:
        "aditi_singh.jpg",
      description:
        "Creating and Overseeing budgets and possible fun raisers, to be able bring the project to light and giving it a physical form.",
      color: "light-orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
      linkedin: "https://www.linkedin.com/in/aditi-singh",
    },
    {
      id: 7,
      name: "Nilkamal Ghosh",
      role: "Student Volunteer",
      image:
        "Nilkamal.jpg",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      color: "orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
      linkedin: "https://www.linkedin.com/in/nilkamal-ghosh",
    },
    {
      id: 8,
      name: "Asmita Agarwal",
      role: "Student Volunteer",
      image:
        "asmita_agarwal.png",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      color: "red",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
      linkedin: "https://www.linkedin.com/in/asmita-agarwal",
    },
    {
      id: 9,
      name: "Smita Nayak",
      role: "Student Photographer",
      image:
        "smita_nayak.jpg",
      description:
        "Capturing our space exploration journey through photography and visual storytelling.",
      color: "light-orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
      linkedin: "https://www.linkedin.com/in/smita-nayak",
    },
    {
      id: 10,
      name: "Nitish Giri",
      role: "Student Volunteer",
      image:
        "nitish_giri.jpg",
      description:
        "Helping the team in transitioning the ideas into perspective, to help the technological world",
      color: "orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
      linkedin: "https://www.linkedin.com/in/nitish-giri",
    },
    // {
    //   id: 11,
    //   name: "Priyan Acharya",
    //   role: "Student Volunteer",
    //   image:
    //     "https://images.pexels.com/photos/3862126/pexels-photo-3862126.jpeg",
    //   description:
    //     "Helping the team in transitioning the ideas into perspective, to help the technological world",
    //   color: "red",
    //   achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
    // },
    {
      id: 11,
      name: "Ramakanta Senapati",
      role: "Graphic Designer",
      image:
        "ramakant.jpg",
      description:
        "Creating visual designs and graphics for our space projects and club materials.",
      color: "orange",
      achievements: ["PR Specialist", "TEDx Speaker", "Media Relations"],
      linkedin: "https://www.linkedin.com/in/ramakanta-senapati",
    },
  ];

  // const stats = [
  //   { number: "50+", label: "Active Members", icon: Users },
  //   { number: "15", label: "Ongoing Projects", icon: Target },
  //   { number: "8", label: "Successful Launches", icon: Zap },
  //   { number: "3", label: "Years Active", icon: Calendar },
  // ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          hover: "hover:text-brand-orange",
        };
      case "red":
        return {
          border: "border-brand-red/30 hover:border-brand-red/60",
          shadow: "hover:shadow-brand-red/20",
          bg: "bg-gradient-to-r from-brand-red to-brand-light-orange",
          text: "text-brand-red",
          hover: "hover:text-brand-red",
        };
      case "light-orange":
        return {
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
          bg: "bg-gradient-to-r from-brand-light-orange to-brand-orange",
          text: "text-brand-light-orange",
          hover: "hover:text-brand-light-orange",
        };
      default:
        return {
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
          bg: "bg-gradient-to-r from-brand-orange to-brand-red",
          text: "text-brand-orange",
          hover: "hover:text-brand-orange",
        };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />

      {/* Meet Your Team Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Full section background image */}
        <div className="absolute inset-0">
          <img 
            src="/HeroImage3c.jpg" 
            alt="CGU Space Club Team Background" 
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 5%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-silver to-transparent mx-auto mb-4"></div>
              <h1 className="font-display text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent drop-shadow-2xl">
                OUR TEAM
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-silver to-transparent mx-auto"></div>
            </div>
          </div>

          {/* Enhanced Gradient Divider */}
          <div className="relative mb-16">
            <div className="h-px bg-gradient-to-r from-transparent via-silver/80 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-silver/20 to-white/10 rounded-full shadow-2xl flex items-center justify-center border border-silver/30">
              <div className="w-3 h-3 bg-silver rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Team Portraits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Leadership & Team Members
            </h2>
            <p className="text-silver/80 text-lg max-w-2xl mx-auto">
              The dedicated individuals who make our space exploration dreams a reality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-24">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(member.linkedin, '_blank')}
                title="Click to view LinkedIn profile"
              >
                <div className="relative mb-8">
                  {/* Portrait with enhanced styling */}
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-silver/40 group-hover:border-silver/80 transition-all duration-500 shadow-2xl group-hover:shadow-3xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-silver/20 via-transparent to-silver/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                  
                  {/* LinkedIn indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full border border-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Name and Role with enhanced typography */}
                <h3 className="text-white font-bold text-base mb-3 group-hover:text-silver transition-colors duration-300 leading-tight">
                  {member.name}
                </h3>
                <p className="text-silver/90 text-sm font-semibold group-hover:text-silver transition-colors duration-300 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-black/50 via-gray-900/50 to-black/50 rounded-3xl p-12 border border-silver/20">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Mission?
              </h2>
              <p className="text-silver/90 text-xl max-w-3xl mx-auto leading-relaxed">
                Be part of our space exploration journey and contribute to groundbreaking projects that push the boundaries of human knowledge
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-silver/30 to-white/20 hover:from-silver/40 hover:to-white/30 text-white border border-silver/40 hover:border-silver/60 px-12 py-5 text-xl font-bold tracking-wider transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  JOIN OUR TEAM
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-silver/40 hover:border-silver/60 text-silver hover:text-white px-12 py-5 text-xl font-bold tracking-wider transition-all duration-500 hover:scale-105"
                >
                  VIEW PROJECTS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-silver/20 to-white/10 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-silver/30">
                <Target className="w-10 h-10 text-silver" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-silver/70 font-medium">
                Pushing the boundaries of space technology and exploration
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-white/10 to-silver/20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-silver/30">
                <Users className="w-10 h-10 text-silver" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Collaboration
              </h3>
              <p className="text-silver/70 font-medium">
                Working together to achieve extraordinary results
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-silver/20 to-white/10 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-silver/30">
                <Zap className="w-10 h-10 text-silver" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-silver/70 font-medium">
                Striving for the highest standards in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA with Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Subtle starry background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
          
          {/* Animated starry patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-8 w-1 h-1 bg-silver/60 rounded-full animate-pulse" />
            <div className="absolute top-32 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
            <div className="absolute top-48 right-1/3 w-1 h-1 bg-silver/50 rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-16 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
            <div className="absolute bottom-40 left-1/2 w-1 h-1 bg-silver/70 rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-16 w-1 h-1 bg-white/50 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-silver/40 rounded-full animate-pulse" />
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
            <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-silver/50 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent drop-shadow-lg">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-silver/90 mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
              We're always looking for passionate individuals to join our
              mission. Whether you're a student, researcher, or industry
              professional, there's a place for you here.
            </p>
          </div>

          {/* Application Process */}
          <div className="bg-black/30 border border-silver/20 rounded-2xl p-8 mb-8">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Application Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-silver/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg border border-silver/30">
                  1
                </div>
                <h4 className="font-bold text-white mb-2">
                  Submit Application
                </h4>
                <p className="text-silver/70 text-sm">
                  Submit your resume with your background and interests
                </p>
              </div>

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-white/10 to-silver/20 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg border border-silver/30">
                  2
                </div>
                <h4 className="font-bold text-white mb-2">Interview</h4>
                <p className="text-silver/70 text-sm">
                  Meet with our team to discuss your goals and experience
                </p>
              </div>

              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-silver/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg border border-silver/30">
                  3
                </div>
                <h4 className="font-bold text-white mb-2">Welcome Aboard</h4>
                <p className="text-silver/70 text-sm">
                  Join our team and start working on exciting projects
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-silver/20 to-white/10 hover:from-silver/30 hover:to-white/20 text-white border border-silver/30 hover:border-silver/50 px-12 py-4 text-lg font-bold tracking-wider transition-all duration-500 hover:scale-105"
              >
                <Users className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
