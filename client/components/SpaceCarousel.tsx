const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dark space background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-space via-brand-space-gray to-brand-orbit-gray" />
      
      {/* Dark overlay for deeper theme */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Dark satellite orbit indicators */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-brand-astronaut-blue/10 rounded-full animate-satellite-orbit" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-brand-mission-gold/10 rounded-full animate-satellite-orbit" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-brand-earth-blue/10 rounded-full animate-satellite-orbit" style={{ animationDelay: '10s' }} />
      </div>

      {/* Dark data streams */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-brand-astronaut-blue/15 to-transparent animate-data-stream" />
        <div className="absolute top-2/3 right-0 w-1 h-24 bg-gradient-to-b from-transparent via-brand-mission-gold/15 to-transparent animate-data-stream" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/2 left-0 w-1 h-20 bg-gradient-to-b from-transparent via-brand-earth-blue/15 to-transparent animate-data-stream" style={{ animationDelay: '6s' }} />
      </div>

      {/* Dark star field */}
      <div className="absolute inset-0">
        {/* Dim stars */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-brand-stellar-white/60 rounded-full animate-star-twinkle" />
        <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-brand-satellite-silver/40 rounded-full animate-star-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-brand-stellar-white/60 rounded-full animate-star-twinkle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-80 right-1/4 w-0.5 h-0.5 bg-brand-satellite-silver/40 rounded-full animate-star-twinkle" style={{ animationDelay: '6s' }} />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-brand-stellar-white/60 rounded-full animate-star-twinkle" style={{ animationDelay: '8s' }} />
        <div className="absolute bottom-60 right-20 w-0.5 h-0.5 bg-brand-satellite-silver/40 rounded-full animate-star-twinkle" style={{ animationDelay: '10s' }} />
        
        {/* Very dim distant stars */}
        <div className="absolute top-32 left-1/4 w-0.5 h-0.5 bg-brand-gray-400/30 rounded-full animate-star-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-48 right-1/3 w-0.5 h-0.5 bg-brand-gray-400/20 rounded-full animate-star-twinkle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-32 left-1/3 w-0.5 h-0.5 bg-brand-gray-400/30 rounded-full animate-star-twinkle" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-48 right-1/2 w-0.5 h-0.5 bg-brand-gray-400/20 rounded-full animate-star-twinkle" style={{ animationDelay: '7s' }} />
      </div>

      {/* Dark mission status indicators */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-brand-mission-green/60 rounded-full animate-mission-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-brand-launch-orange/60 rounded-full animate-mission-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-brand-mars-red/60 rounded-full animate-mission-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Dark grid overlay */}
      <div className="absolute inset-0 opacity-2">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-astronaut-blue/30 to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-mission-gold/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-earth-blue/30 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-astronaut-blue/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-mission-gold/30 to-transparent" />
      </div>

      {/* Dark nebula effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-brand-nebula-purple/2 to-brand-galaxy-indigo/2 rounded-full blur-3xl animate-nebula-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-brand-cosmic-blue/2 to-brand-astronaut-blue/2 rounded-full blur-3xl animate-nebula-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default SpaceBackground;
