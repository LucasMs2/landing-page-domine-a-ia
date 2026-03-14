import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useElementOnScreen } from './VideoSection';
import 'swiper/css';
import 'swiper/css/pagination';

const modulos = [
  { id: 1, titulo: "Gerando Imagens", img: "CAPA_MÓDULO-GERANDOIMAGENS.png" },
  { id: 2, titulo: "Multiplicando Imagens", img: "CAPA_MÓDULO-MULTIPLICANDOIMAGENS.png" },
  { id: 3, titulo: "Animando Frames", img: "CAPA_MÓDULO-ANIMANDOFRAMES.png" },
  { id: 4, titulo: "Upscale Profissional", img: "CAPA_MÓDULO-UPSCALE.png" },
  { id: 5, titulo: "Editando Comercial", img: "CAPA_MÓDULO-EDITANDOOCOMERCIAL.png" },
];

const ModulesSection = ({ onVisibleChange }) => {
  const [sectionRef, isVisible] = useElementOnScreen({ threshold: 0.1 });

  useEffect(() => {
    if (onVisibleChange) {
      onVisibleChange(isVisible);
    }
  }, [isVisible, onVisibleChange]);

  return (
    <section ref={sectionRef} className="py-16 bg-zinc-950 px-6 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-black mb-4 italic uppercase tracking-tight py-2">O QUE VOCÊ VAI APRENDER</h2>
          <div className="h-1 w-20 bg-orange-600 mx-auto"></div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 modulos-swiper"
          >
            {modulos.map((modulo) => (
              <SwiperSlide key={modulo.id} className="py-4">
                <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-[2rem] hover:border-orange-600 transition-all group overflow-hidden shadow-2xl flex flex-col h-full max-w-sm mx-auto">
                  <div className="w-full rounded-[1.5rem] overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={`/images/${modulo.img}`}
                      alt={modulo.titulo}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 block loading-lazy"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center mt-auto">
                    <h3 className="text-white font-black text-xl uppercase tracking-tighter leading-tight min-h-[3rem] flex items-center justify-center">
                      {modulo.titulo}
                    </h3>
                    <p className="text-orange-500 text-sm font-bold mt-3 uppercase tracking-widest">Módulo {modulo.id}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
