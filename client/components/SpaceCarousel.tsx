import { useState, useEffect } from "react";

const SpaceCarousel = () => {
  const spaceImages = [
    {
      url: "https://images.pexels.com/photos/32732569/pexels-photo-32732569.png",
      alt: "Stunning image of the Lagoon Nebula showcasing cosmic beauty and celestial wonders",
    },
    {
      url: "https://images.pexels.com/photos/17817368/pexels-photo-17817368.jpeg",
      alt: "Long exposure shot of the Milky Way with captivating light trails",
    },
    {
      url: "https://images.pexels.com/photos/586061/pexels-photo-586061.png",
      alt: "Rocket launch into dramatic evening sky",
    },
    {
      url: "https://images.pexels.com/photos/23793/rocket-launch-space-discovery.jpg",
      alt: "Spacecraft docked at the ISS above Earth",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === spaceImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [spaceImages.length]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-brand-orange rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-brand-red rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-30 left-1/4 w-1 h-1 bg-brand-light-orange rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-60 left-3/4 w-2 h-2 bg-brand-orange rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-brand-red rounded-full animate-ping opacity-60"></div>

        {/* Additional floating stars */}
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-80 right-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-60 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"></div>

        {/* Moving comet trails */}
        <div className="absolute top-1/4 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent animate-meteor opacity-40"></div>
        <div className="absolute top-3/4 left-0 w-16 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent animate-meteor-delayed opacity-30"></div>
      </div>

      {spaceImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-3000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className={`w-full h-full object-cover transition-transform duration-20000 ease-linear ${
              index === currentIndex
                ? "scale-110 animate-slow-zoom"
                : "scale-115"
            }`}
          />
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-3000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      ))}

      {/* Enhanced gradient overlay with animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Moving gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange/5 to-transparent animate-pulse" />

      {/* Enhanced carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {spaceImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-500 hover:scale-125 ${
              index === currentIndex
                ? "w-8 h-3 bg-gradient-to-r from-brand-orange to-brand-red shadow-lg shadow-brand-orange/50"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20" />
    </div>
  );
};

export default SpaceCarousel;
