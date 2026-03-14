import React, { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const PrimaryButton = ({ children, onClick, className = '' }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3; // Magnetic limit X
    const y = (e.clientY - top - height / 2) * 0.3; // Magnetic limit Y
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
      className={`relative inline-flex items-center justify-center gap-2 group w-full md:w-auto overflow-hidden rounded-full p-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)] ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center gap-2 px-8 py-4 bg-zinc-950/20 backdrop-blur-sm group-hover:bg-transparent rounded-full transition-all duration-300 w-full justify-center">
        <span className="font-black text-white text-sm md:text-base tracking-widest uppercase transition-transform duration-300 group-hover:scale-105 group-hover:text-white">
          {children}
        </span>
        <ChevronRight
          size={20}
          strokeWidth={3}
          className="text-orange-200 group-hover:text-white group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300 transform"
        />
      </div>
    </button>
  );
};

export default PrimaryButton;
