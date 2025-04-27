import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(Date.now());
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 3800;

    // Delay video render to fix glitch
    const raf1 = requestAnimationFrame(() => {
      setKey(Date.now());
      setShowVideo(true);
    });

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);

      setProgress(progress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(raf1);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-blue-900 transition-all duration-500 ${
      progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="text-center max-w-sm mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[400px] h-[157.5px] md:h-[225px]">
          {showVideo && (
            <video
              key={key}
              src="/nneloading.webm"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ mixBlendMode: 'screen' }}
            />
          )}
        </div>

        <div className="text-white mt-[280px] md:mt-[400px] mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Powering Up</h2>
          <p className="text-blue-200 text-base md:text-lg">Initializing magnetic components...</p>
        </div>

        <div className="w-48 md:w-64 h-2 bg-blue-950 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full relative"
            style={{ 
              width: `${progress}%`,
              transition: 'width 100ms linear'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-white animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;