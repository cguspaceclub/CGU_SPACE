import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Navigation2,
  Globe,
  Sparkles,
  Zap,
  Star,
  MessageSquare,
  User,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Rocket
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const typingTexts = [
    "Ready to explore space together?",
    "Let's build the future of space technology!",
    "Join our mission to reach the stars!",
    "Your ideas can change the universe!"
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypingText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 2000);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "spacesystems@cgu-odisha.ac.in",
      description: "Get in touch via email for general inquiries",
      color: "orange",
      action: () => window.location.href = "mailto:spacesystems@cgu-odisha.ac.in"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 8908828802",
      secondary: "+91 9798376027",
      description: "Speak directly with our team members",
      color: "red",
      action: () => window.location.href = "tel:+918908828802"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "CV Raman Global University",
      secondary: "Bidya Nagar,Mahura,Janla,Bhubaneswar -752054",
      description: "Come see our facilities and meet the team",
      color: "light-orange",
      action: () => window.open("https://maps.google.com/?q=CV+Raman+Global+University+Bhubaneswar", "_blank")
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      color: "blue-500",
      url: "https://www.facebook.com/profile.php?id=61572395409583",
    },
    {
      icon: Instagram,
      name: "Instagram",
      color: "pink-500",
      url: "https://www.instagram.com/cgu.spaceclub?igsh=bjhpYjhna3Joc2Yx",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      color: "blue-600",
      url: "https://www.linkedin.com/company/cguspace-club/",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return {
          icon: "text-brand-orange",
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
        };
      case "red":
        return {
          icon: "text-brand-red",
          border: "border-brand-red/30 hover:border-red/60",
          shadow: "hover:shadow-brand-red/20",
        };
      case "light-orange":
        return {
          icon: "text-brand-light-orange",
          border:
            "border-brand-light-orange/30 hover:border-brand-light-orange/60",
          shadow: "hover:shadow-brand-light-orange/20",
        };
      default:
        return {
          icon: "text-brand-orange",
          border: "border-brand-orange/30 hover:border-brand-orange/60",
          shadow: "hover:shadow-brand-orange/20",
        };
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from the CGU Space Club contact form.
      `);
      
      // Open email client with pre-filled data
      const mailtoLink = `mailto:spacesystems@cgu-odisha.ac.in?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      // Show success message
      alert("Your email client will open with the message pre-filled. Please send the email to complete the contact process.");
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error opening email client:', error);
      alert("There was an error opening your email client. Please try again or contact us directly at spacesystems@cgu-odisha.ac.in");
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with CGU Space Club. Contact us for collaborations, sponsorships, or to learn more about our space exploration projects and initiatives."
        keywords="contact CGU Space Club, space club contact, collaboration, sponsorship, space projects, Bhubaneswar space club"
      />
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-orange/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
                 {[...Array(8)].map((_, i) => (
           <div
             key={`star-${i}`}
             className="absolute w-2 h-2 bg-brand-orange/20 rounded-full animate-bounce"
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

      {/* Breadcrumbs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs />
        </div>
      </section>


      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
                         <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-orange bg-clip-text text-transparent">
              How to Reach Us
            </h2>
            {/* Typing Animation */}
            <div className="h-8 mb-4">
              <span className="text-xl text-brand-orange font-medium">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const colors = getColorClasses(method.color);
              return (
                <Card
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-300 hover:scale-105 ${colors.shadow} group cursor-pointer relative overflow-hidden`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={method.action}
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <CardHeader className="text-center relative z-10">
                    <div className="relative">
                      <method.icon
                        className={`w-12 h-12 ${colors.icon} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      />
                      {hoveredCard === index && (
                        <Sparkles className="w-6 h-6 text-brand-orange absolute -top-1 -right-1 animate-ping" />
                      )}
                    </div>
                    <CardTitle className="text-white font-bold mb-2">
                      {method.title}
                    </CardTitle>
                    <p className="text-white/70 text-sm font-medium">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
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

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form - Full Width */}
          <div className="mb-12">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 max-w-4xl mx-auto relative overflow-hidden">
                             {/* Animated border effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 via-brand-orange/20 to-brand-orange/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader>
                                 <CardTitle className="text-2xl text-white font-bold relative z-10">
                   <div className="flex items-center">
                     <Send className="w-6 h-6 text-brand-orange mr-3 animate-pulse" />
                     Send us a Message
                   </div>
                 </CardTitle>
                <p className="text-white/70 font-medium relative z-10">
                  Fill out the form below and your email client will open with the message pre-filled to spacesystems@cgu-odisha.ac.in
                </p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="firstName" className="text-white group-hover:text-brand-orange transition-colors duration-300">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20 transition-all duration-300 group-hover:border-brand-orange/40"
                        required
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="lastName" className="text-white group-hover:text-brand-orange transition-colors duration-300">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20 transition-all duration-300 group-hover:border-brand-orange/40"
                        required
                      />
                    </div>
                  </div>
                  <div className="group">
                    <Label htmlFor="phone" className="text-white group-hover:text-brand-orange transition-colors duration-300">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 "
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20 transition-all duration-300 group-hover:border-brand-orange/40"
                      required
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="email" className="text-white group-hover:text-brand-orange transition-colors duration-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20 transition-all duration-300 group-hover:border-brand-orange/40"
                      required
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="subject" className="text-white group-hover:text-brand-orange transition-colors duration-300">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="How can we help you?"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20 transition-all duration-300 group-hover:border-brand-orange/40"
                      required
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="message" className="text-white group-hover:text-brand-orange transition-colors duration-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-brand-orange/60 focus:ring-brand-orange/20 transition-all duration-300 group-hover:border-brand-orange/40 min-h-[120px] resize-none"
                      required
                    />
                  </div>
                                     <Button 
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-gradient-to-r from-brand-orange to-brand-orange hover:from-brand-light-orange hover:to-brand-orange text-white font-bold py-3 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Email
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Follow Us */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 group hover:border-brand-orange/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white font-bold flex items-center">
                  <Globe className="w-6 h-6 text-brand-orange mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                    >
                      <social.icon className="w-5 h-5 text-white group-hover:text-brand-orange transition-colors duration-300" />
                    </a>
                  ))}
                </div>

                <p className="text-white/70 text-sm mt-4">
                  Stay connected with our latest updates, project highlights,
                  and space exploration news.
                </p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 group hover:border-brand-light-orange/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white font-bold flex items-center">
                  <Navigation2 className="w-6 h-6 text-brand-light-orange mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-light-orange mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-white/90 font-medium group-hover:text-brand-light-orange transition-colors duration-300">
                      C. V. Raman Global University Bhubaneswar, Odisha, India
                    </p>
                  </div>
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
