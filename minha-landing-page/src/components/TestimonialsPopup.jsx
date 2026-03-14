import React, { useState, useEffect } from 'react';
import { X, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TestimonialsPopup = ({ isVisible }) => {
  const [closedPopup, setClosedPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isVisible && !hasTriggered) {
      const isDismissed = sessionStorage.getItem('testimonialPopupDismissed');
      if (isDismissed !== 'true') {
        setHasTriggered(true);
      }
    }
  }, [isVisible, hasTriggered]);

  const handleClose = () => {
    setClosedPopup(true);
    sessionStorage.setItem('testimonialPopupDismissed', 'true');
  };

  const handleNavigate = () => {
    sessionStorage.setItem('testimonialPopupDismissed', 'true');
    navigate('/depoimentos');
  };

  // If the user already dismissed it, or it hasn't triggered yet, don't show the popup
  const shouldShow = hasTriggered && !closedPopup;

  // We still render the div to allow the transition to play out when closing
  // but if it's already closed/dismissed on mount, we can return null to avoid rendering
  if (sessionStorage.getItem('testimonialPopupDismissed') === 'true') {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-24 right-6 z-[100] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
        shouldShow ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
      }`}
    >
      <div className="bg-zinc-900/95 backdrop-blur-md border border-orange-500/30 p-5 rounded-2xl shadow-[0_10px_40px_rgba(234,88,12,0.5)] max-w-sm relative pointer-events-auto">
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors cursor-pointer">
          <X size={16} />
        </button>
        <div className="flex items-start gap-4 mt-1">
          <div className="bg-orange-600/20 p-3 rounded-full text-orange-500 animate-pulse shadow-[0_0_15px_rgba(234,88,12,0.3)]">
            <PlayCircle size={24} />
          </div>
          <div className="pr-4">
            <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">Eles já dominaram a IA</h4>
            <p className="text-gray-400 text-xs mb-3 leading-relaxed">Assista às histórias reais de quem transformou seus resultados com as nossas aulas.</p>
            <button 
              onClick={handleNavigate}
              className="bg-orange-600 text-white text-xs font-black px-4 py-2.5 rounded-xl hover:bg-orange-500 transition-colors w-full uppercase tracking-widest shadow-lg hover:scale-105 transform duration-300"
            >
              Assistir Depoimentos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPopup;
