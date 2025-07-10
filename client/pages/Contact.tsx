import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar,
  Navigation2,
  Globe,
} from "lucide-react";

export default function Contact() {
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

  const officeHours = [
    { day: "Monday - Friday", hours: "9:30 AM - 5:30 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const meetingTimes = [
    { event: "General Meetings", time: "Tuesdays: 6:00 PM - 8:00 PM" },
    { event: "Project Sessions", time: "Fridays: 4:00 PM - 6:00 PM" },
    { event: "Workshop Days", time: "Saturdays: 10:00 AM - 4:00 PM" },
    { event: "Special Events", time: "By announcement" },
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
          border: "border-brand-red/30 hover:border-brand-red/60",
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

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-brand-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
              How to Reach Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const colors = getColorClasses(method.color);
              return (
                <Card
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm ${colors.border} hover:bg-white/10 transition-all duration-300 hover:scale-105 ${colors.shadow}`}
                >
                  <CardHeader className="text-center">
                    <method.icon
                      className={`w-12 h-12 ${colors.icon} mx-auto mb-4`}
                    />
                    <CardTitle className="text-white font-bold mb-2">
                      {method.title}
                    </CardTitle>
                    <p className="text-white/70 text-sm font-medium">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <p className="text-white font-medium">{method.primary}</p>
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-bold">
                  <Send className="w-6 h-6 text-brand-orange mr-3 inline" />
                  Send us a Message
                </CardTitle>
                <p className="text-white/70 font-medium">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="firstName"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="lastname"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+91 "
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[70px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red text-white font-bold py-3">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Follow Us */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-bold">
                  <Globe className="w-6 h-6 text-brand-orange mr-3 inline" />
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
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-5 h-5 text-white hover:text-brand-orange" />
                    </a>
                  ))}
                </div>

                <p className="text-white/70 text-sm mt-4">
                  Stay connected with our latest updates, project highlights,
                  and space exploration news.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Office Hours */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-bold">
                  <Clock className="w-6 h-6 text-brand-orange mr-3 inline" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                    >
                      <span className="text-white/90 font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-brand-orange font-medium">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Meeting Schedule */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-bold">
                  <Calendar className="w-6 h-6 text-brand-red mr-3 inline" />
                  Meeting Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {meetingTimes.map((meeting, index) => (
                    <div
                      key={index}
                      className="py-2 border-b border-white/10 last:border-b-0"
                    >
                      <div className="text-white/90 font-medium mb-1">
                        {meeting.event}
                      </div>
                      <div className="text-brand-red text-sm">
                        {meeting.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-bold">
                  <Navigation2 className="w-6 h-6 text-brand-light-orange mr-3 inline" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-light-orange mt-1" />
                  <div>
                    <p className="text-white/90 font-medium">
                      CV Raman Global University
                    </p>
                    <p className="text-white/70">Bidya Nagar,Mahura,Janla</p>
                    <p className="text-white/70">Bhubaneswar -752054</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
