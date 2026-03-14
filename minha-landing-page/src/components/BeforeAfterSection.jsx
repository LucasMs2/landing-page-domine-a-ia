import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const antesDepoisCasos = [
  {
    id: 2,
    antes: 'antes-1.jfif',
    depois: 'depois-1.jfif',
    legenda: 'Exemplo 1',
  },
  {
    id: 3,
    antes: 'antes-2.jfif',
    depois: 'depois-2.jfif',
    legenda: 'Exemplo 2',
  },
  {
    id: 4,
    antes: 'antes-3.jfif',
    depois: 'depois-3.jfif',
    legenda: 'Exemplo 3',
  },
  {
    id: 5,
    antes: 'AirPods-Antes.jpeg',
    depois: 'AirPods-Depois.jpeg',
    legenda: 'AirPods',
  },
  {
    id: 6,
    antes: 'Doce-Antes.jpeg',
    depois: 'Doce-Depois.jpeg',
    legenda: 'Doce de Leite',
  },
  {
    id: 7,
    antes: 'Panetone-Antes.jpeg',
    depois: 'Panetone-Depois.jpeg',
    legenda: 'Panetone',
  },
  {
    id: 8,
    antes: 'Mochila-Antes.jpeg',
    depois: 'Mochila-Depois.jpeg',
    legenda: 'Mochila',
  },
  {
    id: 9,
    antes: 'Suco-Antes.jpeg',
    depois: 'Suco-Depois.jpeg',
    legenda: 'Suco',
  },
];

const BeforeAfterSection = () => {

  return (
    <section className="py-24 bg-zinc-950 relative z-10 border-b border-zinc-900 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 italic uppercase tracking-tight">
            A EVOLUÇÃO VISUAL COM O MÉTODO <span className="text-orange-600"> DOMINANDO A IA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Veja como transformamos ideias comuns em produções de elite com Inteligência Artificial.
          </p>
          <div className="h-1 w-20 bg-orange-600 mx-auto mt-8"></div>
        </div>

        <div className="relative px-2 md:px-14 max-w-7xl mx-auto">
          {/* Setas de Navegação Fixas */}
          <button className="swiper-button-prev-ba absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 bg-orange-600 border-2 border-orange-400 p-3 md:p-4 rounded-full text-white hover:bg-orange-500 hover:scale-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(234,88,12,0.5)] flex">
            <ArrowLeft size={28} strokeWidth={3} />
          </button>
          <button className="swiper-button-next-ba absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 bg-orange-600 border-2 border-orange-400 p-3 md:p-4 rounded-full text-white hover:bg-orange-500 hover:scale-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(234,88,12,0.5)] flex">
            <ArrowRight size={28} strokeWidth={3} />
          </button>

          {/* Swiper com nova classe "antes-depois-swiper" */}
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            grabCursor={true}
            navigation={{
              prevEl: '.swiper-button-prev-ba',
              nextEl: '.swiper-button-next-ba',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pt-6 rounded-3xl antes-depois-swiper"
          >
            {antesDepoisCasos.map((caso) => (
              <SwiperSlide key={caso.id}>
                <div className="flex flex-col items-center px-4 md:px-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
                    
                    {/* Lado ANTES */}
                    <div className="relative rounded-3xl overflow-hidden border-2 md:border-4 border-zinc-800 bg-zinc-900 shadow-xl flex items-center justify-center w-full aspect-[4/5] md:aspect-[3/4]">
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/80 text-gray-400 font-bold px-5 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase z-10 backdrop-blur-sm border border-zinc-700 shadow-md">
                        Antes (Resultado Comum)
                      </div>
                      <img
                        src={`/images/${caso.antes}`}
                        alt={`Antes - ${caso.legenda}`}
                        className={`absolute inset-0 w-full h-full opacity-80 grayscale-[5%] ${caso.posicaoAntes || 'object-cover'}`}
                      />
                    </div>

                    <div className="flex lg:hidden flex-shrink-0 bg-orange-600 w-12 h-12 rounded-full items-center justify-center shadow-[0_0_20px_rgba(234,88,12,0.5)] z-20 -my-10 border-4 border-zinc-950 mx-auto">
                      <ChevronDown size={24} className="text-white" />
                    </div>

                    {/* Lado DEPOIS */}
                    <div className="relative rounded-3xl overflow-hidden border-2 md:border-4 border-orange-600 shadow-[0_0_40px_rgba(234,88,12,0.3)] bg-black group flex items-center justify-center w-full aspect-[4/5] md:aspect-[3/4]">
                      <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-orange-600 text-white font-black px-5 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase z-10 shadow-lg">
                        Depois (Método Dominando a IA)
                      </div>
                      <img
                        src={`/images/${caso.depois}`}
                        alt={`Depois - ${caso.legenda}`}
                        className={`absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ${caso.posicaoDepois || 'object-cover'}`}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 flex justify-center relative z-20">
            <PrimaryButton onClick={() => document.getElementById('oferta').scrollIntoView({ behavior: 'smooth' })}>
              QUERO ESSES RESULTADOS AGORA
            </PrimaryButton>
        </div>



      </div>
    </section>
  );
};

export default BeforeAfterSection;
