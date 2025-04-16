// components/ui/video-player.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  fallbackImage?: string;
  className?: string;
}

export default function VideoPlayer({ 
  src, 
  fallbackImage = "/grandma.jpg", 
  className = "" 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log("Video can play");
      video.play().catch(err => {
        console.error("Error playing video:", err);
        setError(true);
      });
    };

    const handleError = (e: Event) => {
      console.error("Video error:", e);
      setError(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  if (error) {
    return (
      <div className={`${className} bg-gray-800`}>
        {fallbackImage && (
          <img 
            src={fallbackImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={fallbackImage}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}