import React, { useState, useEffect } from 'react';

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past the hero section (~90vh)
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('precos');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isSticky ? 'translate-y-0' : '-translate-y-[150%]'
      }`}
    >
      <div className="bg-black/40 backdrop-blur-md border-b border-zinc-700/50 py-3 px-6 shadow-xl flex items-center justify-between lg:justify-center lg:gap-32 w-full">
        <div className="text-white font-black italic text-lg lg:text-xl tracking-tighter flex items-center gap-2">
          DOMINANDO <span className="text-orange-600">A IA</span>
        </div>
        <button 
          onClick={scrollToPricing}
          className="bg-orange-600 hover:bg-orange-500 text-white font-black text-xs md:text-sm px-4 py-2 rounded-full uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(234,88,12,0.4)]"
        >
          Garantir Vaga
        </button>
      </div>
    </div>
  );
};

export default StickyNav;
