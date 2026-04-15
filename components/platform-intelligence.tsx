'use client';

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function PlatformIntelligence() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <section id="platform-intelligence" className="section-shell mt-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="section-heading">Explore platform intelligence</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Deep context for your infrastructure, uptime, and platform story
        </p>
        
        <button 
          onClick={toggleVideo}
          className="mt-6 micro-button inline-flex items-center gap-2"
        >
          {isVideoVisible ? (
            <>
              <Pause className="h-4 w-4" /> Hide Video
            </>
          ) : (
            <>
              <Play className="h-4 w-4" /> Show Platform Video
            </>
          )}
        </button>
      </div>

      {isVideoVisible && (
        <div className="mt-8 panel-card-soft overflow-hidden">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/_D94aHfI_h0"
              title="Platform Intelligence Video"
              className="absolute top-0 left-0 w-full h-full border-0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-4 text-sm text-muted-foreground">
            <p>Watch this video to learn more about our platform infrastructure and capabilities.</p>
          </div>
        </div>
      )}

      {!isVideoVisible && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">Click the button above to view the platform intelligence video</p>
        </div>
      )}
    </section>
  );
}