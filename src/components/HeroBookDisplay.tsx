import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { BookOpen, ZoomIn } from 'lucide-react';
import bookCoverImg from '../assets/book-cover.jpg';

interface HeroBookDisplayProps {
  onOpenSample: () => void;
  onOpenCheckout: () => void;
}

export function HeroBookDisplay({ onOpenSample }: HeroBookDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(3);
  const [rotateY, setRotateY] = useState(-6);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rx = -(y / (rect.height / 2)) * 10;
    const ry = (x / (rect.width / 2)) * 12;
    setRotateX(rx);
    setRotateY(ry);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(3);
    setRotateY(-6);
  };

  return (
    <div
      id="hero-book-wrapper"
      className="relative flex flex-col items-center justify-center py-2"
    >
      {/* Radiant ambient glow matching book palette */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-purple-400/20 via-pink-400/25 to-purple-500/20 rounded-full blur-2xl pointer-events-none" />
      
      {/* 3D Book Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onOpenSample}
        className="group relative cursor-pointer perspective-1000 select-none animate-float-slow"
      >
        <motion.div
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ type: 'spring', stiffness: 240, damping: 22 }}
          className="relative transform-style-3d transition-shadow duration-300"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main Book Card Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/25 border-2 border-purple-200/80 bg-white max-w-[260px] sm:max-w-[290px] md:max-w-[320px] lg:max-w-[350px] max-h-[68vh] flex items-center justify-center">
            {/* Crisp High-Res Book Image */}
            <img
              src={bookCoverImg}
              alt="Fertility Back: A Complete Guide to Preparing Your Body for Pregnancy Naturally and Safely by Olumind Synergy Venture"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[62vh] object-contain block rounded-2xl transition-all duration-300 group-hover:contrast-105"
            />

            {/* Subtle Glass Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Hover Action Pill */}
            <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#d91e85] text-white text-xs font-bold shadow-lg shadow-pink-600/40">
                <ZoomIn className="w-3.5 h-3.5" />
                Click to Look Inside
              </span>
            </div>
          </div>

          {/* Realistic Soft Drop Shadow under book */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-5/6 h-5 bg-purple-950/20 blur-md rounded-full"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Interactive Look Inside CTA below book */}
      <button
        type="button"
        onClick={onOpenSample}
        id="btn-quick-look-inside"
        className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#9d174d] hover:text-[#d91e85] font-bold underline underline-offset-4 decoration-pink-400 hover:decoration-[#d91e85] transition-colors cursor-pointer"
      >
        <BookOpen className="w-3.5 h-3.5 text-[#d91e85]" />
        Click book or here for Free Sample Excerpt
      </button>
    </div>
  );
}
