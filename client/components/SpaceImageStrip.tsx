import React from "react";

interface SpaceImageStripProps {
  images?: { src: string; alt: string }[];
  heightClassName?: string;
}

export default function SpaceImageStrip({
  images = [
    { src: "/earth.jpg", alt: "Earth" },
    { src: "/earth1.jpg", alt: "Earth clouds" },
    { src: "/earth2.jpg", alt: "Earth night" },
    { src: "/solar.jpg", alt: "Solar surface" },
    { src: "/HeroImage1.jpg", alt: "Space vista" },
    { src: "/HeroImage2.jpg", alt: "Galaxy" },
    { src: "/HeroImage3c.jpg", alt: "Astronaut view" },
  ],
  heightClassName = "h-36 sm:h-44 md:h-52",
}: SpaceImageStripProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className={`${heightClassName} rounded-xl object-cover opacity-95 border border-white/10 hover:opacity-100 transition-opacity`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}


