const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <img
        src="/earth2.jpg"
        alt="Stunning image of the Earth from space"
        className="w-full h-full object-cover object-center scale-110"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Optional gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
    </div>
  );
};

// mock comment

export default SpaceBackground;
