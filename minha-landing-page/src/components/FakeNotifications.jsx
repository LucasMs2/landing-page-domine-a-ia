import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { nomesComuns } from '../data/nomes';

const FakeNotifications = () => {
  const [activeNotifications, setActiveNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const triggerInterval = setInterval(() => {
      const name1 = nomesComuns[Math.floor(Math.random() * nomesComuns.length)];
      let name2 = nomesComuns[Math.floor(Math.random() * nomesComuns.length)];
      while(name1 === name2) {
        name2 = nomesComuns[Math.floor(Math.random() * nomesComuns.length)];
      }

      setActiveNotifications([name1, name2]);
      setShowNotifications(true);

      setTimeout(() => setShowNotifications(false), 5000);
    }, 12000);

    return () => clearInterval(triggerInterval);
  }, []);

  return (
    <div className="fixed bottom-6 left-4 md:left-6 z-50 flex flex-col gap-3 pointer-events-none">
      {activeNotifications.map((name, index) => (
        <div 
          key={index}
          className={`bg-zinc-900/95 backdrop-blur-md border border-zinc-700 p-3 md:p-4 rounded-2xl shadow-[0_10px_40px_rgba(234,88,12,0.15)] flex items-center gap-3 md:gap-4 transition-all duration-500 transform ${
            showNotifications ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
          }`}
          style={{ transitionDelay: showNotifications ? `${index * 150}ms` : '0ms' }}
        >
          <div className="bg-green-500 p-2 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.4)]">
            <CheckCircle size={16} className="text-white md:w-5 md:h-5" />
          </div>
          <div className="pr-4">
            <p className="text-white font-black text-xs md:text-sm">{name}</p>
            <p className="text-gray-300 text-[10px] md:text-xs mt-0.5">adquiriu o curso e está dominando a IA</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FakeNotifications;
