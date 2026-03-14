import React, { useState, useEffect, useRef } from 'react';

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [containerRef, isVisible];
};

const VideoSection = () => {
  const [videoRef, isVideoVisible] = useElementOnScreen({
    threshold: 0.1,
  });

  return (
    <section 
      ref={videoRef}
      className="py-24 bg-black relative z-10 border-b border-zinc-900 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
      <div 
        className={`max-w-5xl mx-auto px-6 relative z-10 text-center transition-all duration-1000 ease-out transform ${
          isVideoVisible 
            ? "translate-x-0 opacity-100" 
            : "-translate-x-[150%] opacity-0"
        }`}
      >
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4 italic uppercase tracking-tight">
            VEJA COMO O MÉTODO <span className="text-orange-600">FUNCIONA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra em poucos minutos como você pode transformar a Inteligência Artificial na sua ferramenta mais lucrativa.
          </p>
        </div>
        <div className="relative aspect-video w-full bg-black border border-zinc-800 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0kFiLzkKWoU?rel=0&modestbranding=1"
            title="Apresentação do Método Dominando a IA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full absolute top-0 left-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
export { useElementOnScreen };
