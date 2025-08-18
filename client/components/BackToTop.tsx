import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return isVisible ? (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-light-orange hover:to-brand-dark-red shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </Button>
  ) : null;
}
