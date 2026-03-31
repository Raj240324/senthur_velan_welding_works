"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroScrollAnimationProps {
  // Number of frames in the /public/welding/ folder (default 240 based on prompt)
  frameCount?: number;
  children?: React.ReactNode;
}

export default function HeroScrollAnimation({ frameCount = 240, children }: HeroScrollAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // 1. Helper to format frame numbers (e.g., 1 -> "0001")
  const currentFrame = (index: number) =>
    `/welding/frame_${index.toString().padStart(4, "0")}.jpg`;

  // 2. Preload all images and draw the first frame immediately
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // Preload loop
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);

      img.onload = () => {
        loadedCount++;
        // Trigger initial draw when the first frame loads
        if (i === 1 && canvasRef.current) {
          drawFrame(img);
        }
        // Mark as fully loaded once all frames are fetched
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
    }
    
    imagesRef.current = images;

    // Handle window resize to redraw current frame with correct "cover" scaling
    const handleResize = () => {
      // Find current frame based on scroll position so we don't snap back to 0
      if (!containerRef.current) return;
      const html = document.documentElement;
     const rect = containerRef.current.getBoundingClientRect();

// only allow animation inside 100vh
const scrollTop = Math.min(
  Math.max(-rect.top, 0),
  window.innerHeight
);

const maxScroll = window.innerHeight;

let progress = scrollTop / maxScroll;
progress = Math.max(0, Math.min(1, progress));

const frameIndex = Math.min(
  frameCount - 1,
  Math.floor(progress * frameCount)
);

      if (imagesRef.current[frameIndex]) {
        drawFrame(imagesRef.current[frameIndex]);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameCount]);

  // 3. Scroll Sync Logic using requestAnimationFrame for smoothness
  useEffect(() => {
    let animationFrameId: number;

    const updateImage = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate how far down the user has scrolled relative to the container's top
      // rect.top is negative when scrolling past it
      const scrollTop = Math.min(
  Math.max(-rect.top, 0),
  window.innerHeight
);

const maxScroll = window.innerHeight;
      
      // Calculate fraction (0 to 1)
      let scrollFraction = scrollTop / maxScroll;
      
      // Clamp between 0 and 1
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));

      // Calculate which frame index corresponds to the scroll fraction
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      // Draw the requested frame to canvas
      if (imagesRef.current[frameIndex] && imagesRef.current[frameIndex].complete) {
        drawFrame(imagesRef.current[frameIndex]);
      }

      // Keep polling scroll position efficiently
      animationFrameId = requestAnimationFrame(updateImage);
    };

    // Start RAF loop
    animationFrameId = requestAnimationFrame(updateImage);
    return () => cancelAnimationFrame(animationFrameId);
  }, [frameCount]);

  // 4. Painting the Image to the Canvas using "object-fit: cover" math
  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // alpha: false for performance
    if (!ctx) return;

    // Set canvas dimensions to parent resolution to avoid stretching/blurriness
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate object-fit: cover scale
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;

    // Clear and draw image exactly filling screen efficiently
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
    );
  };

  return (
    <div 
      ref={containerRef} 
      className="hero-scroll-container"
    >
      <div className="hero-scroll-sticky">
        <canvas ref={canvasRef} className="hero-scroll-canvas" />
        
        {/* Loading State Overlay (Optional) */}
        {!loaded && (
          <div className="hero-scroll-loading">
            Loading High-Res Animation...
          </div>
        )}

        {/* Render children (like text overlays) inside the pinned sticky frame */}
        <div className="hero-scroll-content-overlay">
          {children}
        </div>
      </div>
    </div>
  );
}
