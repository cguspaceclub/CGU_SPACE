import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
    { name: "Sponsorship", path: "/sponsorship", redirectToMaintenance: true },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Club Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg ring-2 ring-transparent group-hover:ring-brand-orange transition-all duration-300">
              <img
                src="/logo.jpg" // Replace with the actual path to your logo image
                alt="CGU Space Club Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-bold text-xl group-hover:text-brand-orange transition-all duration-300">
              CGU Space Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.redirectToMaintenance ? (
                  <button
                    onClick={() => navigate('/maintenance')}
                    className={`text-sm font-medium transition-colors hover:text-brand-orange cursor-pointer ${
                      isActive(item.path)
                        ? "text-brand-orange border-b-2 border-brand-orange pb-1"
                        : "text-white/90"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-all duration-300 hover:text-brand-orange relative ${
                      isActive(item.path)
                        ? "text-brand-orange border-b-2 border-brand-orange pb-1"
                        : "text-white/90 hover:scale-105"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-orange hover:bg-white/10"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/10 animate-slide-in-top">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.redirectToMaintenance ? (
                  <button
                    onClick={() => {
                      navigate('/maintenance');
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 hover:text-brand-orange hover:bg-white/10 rounded-md cursor-pointer ${
                      isActive(item.path)
                        ? "text-brand-orange bg-white/10"
                        : "text-white/90"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-brand-orange hover:bg-white/10 rounded-md ${
                      isActive(item.path)
                        ? "text-brand-orange bg-white/10"
                        : "text-white/90"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
