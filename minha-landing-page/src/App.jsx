import React, { useState } from 'react';
import './index.css';
import { ChevronRight, CheckCircle, ShieldCheck, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PrimaryButton = ({ children }) => (
  <a href="#oferta" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2 cursor-pointer">
    {children}
    <ChevronRight size={20} />
  </a>
);

const App = () => {
  const [faqAberto, setFaqAberto] = useState(null);

  const modulos = [
    { id: 1, titulo: "Gerando Imagens", img: "CAPA_MÓDULO-GERANDOIMAGENS.png" },
    { id: 2, titulo: "Multiplicando Imagens", img: "CAPA_MÓDULO-MULTIPLICANDOIMAGENS.png" },
    { id: 3, titulo: "Animando Frames", img: "CAPA_MÓDULO-ANIMANDOFRAMES.png" },
    { id: 4, titulo: "Upscale Profissional", img: "CAPA_MÓDULO-UPSCALE.png" },
    { id: 5, titulo: "Editando Comercial", img: "CAPA_MÓDULO-EDITANDOOCOMERCIAL.png" },
  ];

  const antesDepoisCasos = [
    {
      id: 1,
      antes: 'antes-1.jpg',
      depois: 'depois-1.jpg',
    },
    {
      id: 2,
      antes: 'antes-2.jpg',
      depois: 'depois-2.jpg',
    },
    {
      id: 3,
      antes: 'antes-3.jpg',
      depois: 'depois-3.jpg',
    },
  ];

  const faqs = [
    {
      pergunta: "1 - Nunca tive contato com IA. O curso serve pra mim?",
      resposta: "Sim. O curso foi feito justamente para quem está começando do zero. Eu ensino desde o básico até você conseguir criar imagens e comerciais profissionais mesmo sem experiência. Você não precisa ser designer, editor ou expert em tecnologia."
    },
    {
      pergunta: "2 - Preciso ter computador potente ou equipamentos caros?",
      resposta: "Não. Você consegue começar com um computador comum ou até mesmo com seu celular. As ferramentas que ensino são acessíveis e não exigem equipamentos super avançados."
    },
    {
      pergunta: "3 - Como posso vender o serviço?",
      resposta: (
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Criar comerciais para clientes com IA</li>
          <li>Melhorar entregas como social media</li>
          <li>Criar anúncios para seu próprio negócio com IA</li>
          <li>Produzir conteúdo para Instagram</li>
          <li>Trabalhar como freelancer e muito mais.</li>
        </ul>
      )
    },
    {
      pergunta: "4 - Consigo fazer um comercial com IAs gratuitas?",
      resposta: (
        <div className="space-y-3">
          <p className="font-bold text-orange-500">Sim!</p>
          <p>No método eu ensino tanto as plataformas pagas quanto as gratuitas. Você pode começar sem investir nada e já criar comerciais profissionais.</p>
          <p>O que realmente importa não é a ferramenta. É saber usar do jeito certo.</p>
        </div>
      )
    },
    {
      pergunta: "5 - Em quanto tempo eu consigo fazer meu primeiro comercial profissional?",
      resposta: "Se você aplicar exatamente o método, já na primeira aula você consegue criar seu primeiro projeto. Muitos alunos já recuperam o valor investido logo nos primeiros trabalhos."
    }
  ];

  const alternarFaq = (index) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  return (
    <div className="bg-black text-gray-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden w-full relative">

      {/* --- INICIAL SECTION --- */}
      <header className="relative min-h-[90vh] flex items-center bg-black overflow-hidden border-b border-orange-900/30">
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-orange-600/15 blur-[150px] rounded-full z-0 pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-10 opacity-30 lg:opacity-100 pointer-events-none">
          <img
            src="/images/BACKGROUND.PNG"
            alt="Estudante com óculos de IA"
            className="w-full h-full object-cover object-center"
          />
          <div className="hidden lg:block absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col items-start justify-center py-24 text-left">
              <div className="inline-block px-4 py-1 border border-orange-500/30 rounded-full bg-orange-500/5 text-orange-500 text-xs font-bold mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(234,88,12,0.1)]">
                A Revolução da Inteligência Artificial
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] uppercase drop-shadow-lg">
                Domine a IA em <br/><span className="text-orange-600 italic">Tempo Recorde</span>
              </h1>

              <p className="text-gray-300 text-lg mb-10 max-w-xl font-medium drop-shadow leading-relaxed">
                Aprenda a criar comerciais de alto nível e sessões de fotos de produtos profissionais com as ferramentas mais avançadas do mercado.
              </p>

              <div className="flex flex-col items-center gap-3 w-full lg:w-auto">
                <PrimaryButton>QUERO DOMINAR A IA AGORA</PrimaryButton>
                <p className="text-xs text-gray-400 flex items-center justify-center gap-2 mt-2 font-medium">
                  <ShieldCheck size={14} className="text-orange-600" /> 7 dias de garantia incondicional
                </p>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </header>

      {/* VIDEO SECTION  */}
      <section className="py-24 bg-black relative z-10 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
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

      {/* --- SEÇÃO ANTES E DEPOIS (ESTÁTICA POR PADRÃO) --- */}
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

            {/* Swiper sem Autoplay e com Overflow Hidden */}
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
              className="py-6 pb-20 rounded-3xl"
            >
              {antesDepoisCasos.map((caso) => (
                <SwiperSlide key={caso.id}>
                  <div className="flex flex-col items-center px-4 md:px-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

                      {/* Lado ANTES */}
                      <div className="relative rounded-3xl overflow-hidden border-2 md:border-4 border-zinc-800 bg-zinc-900 shadow-xl">
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/80 text-gray-400 font-bold px-5 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase z-10 backdrop-blur-sm border border-zinc-700 shadow-md">
                          Antes (Resultado Comum)
                        </div>
                        <img
                          src={`/images/${caso.antes}`}
                          alt={`Antes - ${caso.legenda}`}
                          className="w-full h-[400px] lg:h-[600px] object-cover opacity-60 grayscale-[30%]"
                        />
                      </div>

                      <div className="flex lg:hidden flex-shrink-0 bg-orange-600 w-12 h-12 rounded-full items-center justify-center shadow-[0_0_20px_rgba(234,88,12,0.5)] z-20 -my-10 border-4 border-zinc-950 mx-auto">
                        <ChevronDown size={24} className="text-white" />
                      </div>

                      {/* Lado DEPOIS */}
                      <div className="relative rounded-3xl overflow-hidden border-2 md:border-4 border-orange-600 shadow-[0_0_40px_rgba(234,88,12,0.3)] bg-black group">
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-orange-600 text-white font-black px-5 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase z-10 shadow-lg">
                          Depois (Método Dominando a IA)
                        </div>
                        <img
                          src={`/images/${caso.depois}`}
                          alt={`Depois - ${caso.legenda}`}
                          className="w-full h-[400px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-12 flex justify-center relative z-20">
             <PrimaryButton>QUERO ESTES RESULTADOS AGORA</PrimaryButton>
          </div>
        </div>
      </section>

      {/* --- CARROSSEL DE MÓDULOS --- */}
      <section className="py-16 bg-zinc-950 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 italic uppercase tracking-tight py-2">O QUE VOCÊ VAI APRENDER</h2>
            <div className="h-1 w-20 bg-orange-600 mx-auto"></div>
          </div>

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
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 block"
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
      </section>

        {/* --- PRICING SECTION --- */}
      <section id="precos" className="py-24 px-6 relative bg-black z-10 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 uppercase italic">ESCOLHA SEU PLANO</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

            <div className="p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800 flex flex-col opacity-40 grayscale pointer-events-none relative transform md:scale-95">
              <h4 className="text-xl font-bold mb-1">DOMINANDO A IA</h4>
              <p className="text-sm font-medium mb-4 text-gray-400">ACESSO ANUAL</p>

              <div className="text-4xl font-black mb-1 line-through text-gray-500">R$ 497</div>
              <p className="text-sm mb-6 text-gray-500 line-through">ou 10x de R$ 51,29</p>

              <ul className="text-left space-y-3 mb-10 text-gray-500 text-sm flex-grow">
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 1 – Gerando Imagens Profissionais</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 2 – Multiplicando Imagens em Multishots</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 3 – Animando os Frames</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 4 – Upscale Profissional</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 5 – Editando Comercial</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Acesso vitalício</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Atualizações futuras</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Método validado</li>
              </ul>

              <div className="w-full py-4 rounded-xl border border-zinc-700 bg-zinc-800/30 text-zinc-600 font-black tracking-widest uppercase">
                DESATIVADO
              </div>
            </div>

              <div id="oferta" className="p-10 rounded-3xl bg-orange-600 border border-orange-400 shadow-[0_0_40px_rgba(234,88,12,0.3)] transform md:scale-105 relative overflow-hidden flex flex-col z-10 scroll-mt-8">
              <div className="absolute top-4 right-[-35px] bg-white text-orange-600 text-[10px] font-black px-10 py-1 rotate-45 uppercase">
                Oferta
              </div>

              <h4 className="text-xl font-bold mb-1 text-white">PLANO ANUAL</h4>
              <p className="text-sm font-bold mb-4 text-orange-200 uppercase tracking-wide">Condição Especial</p>

              <div className="text-lg font-bold text-orange-300 line-through mb-1">De R$ 497</div>

              {/* ALTERAÇÃO SOLICITADA: INVERSÃO DOS VALORES */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xl font-bold text-white">10x de</span>
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">R$ 11,66</span>
              </div>
              <p className="text-sm font-bold mb-6 text-orange-200 uppercase tracking-wider">
                ou R$ 97,00 à vista
              </p>
              {/* FIM DA ALTERAÇÃO */}

              <ul className="text-left space-y-3 mb-10 text-white text-sm flex-grow font-medium">
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 1 – Gerando Imagens Profissionais</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 2 – Multiplicando Imagens em Multishots</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 3 – Animando os Frames</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 4 – Upscale Profissional</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 5 – Editando Comercial</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Acesso anual</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Atualizações futuras</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Método validado</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> PDFs de material</li>
                <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Comunidade Exclusiva!</li>
              </ul>

              <a
                href="https://pay.kiwify.com.br/hz9KgJb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block py-4 rounded-xl bg-black text-white font-black hover:bg-zinc-900 transition-colors shadow-xl mt-auto hover:scale-105 transform duration-300"
              >
                QUERO GARANTIR AGORA!
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-zinc-950 px-6 relative z-10 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 italic uppercase tracking-tight">PERGUNTAS FREQUENTES</h2>
            <div className="h-1 w-20 bg-orange-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border ${faqAberto === index ? 'border-orange-600 bg-zinc-900/80' : 'border-zinc-800 bg-black/50'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => alternarFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                >
                  <span className={`font-bold text-lg pr-4 ${faqAberto === index ? 'text-orange-500' : 'text-gray-200'}`}>
                    {faq.pergunta}
                  </span>
                  <ChevronDown
                    className={`text-orange-600 transform transition-transform duration-300 flex-shrink-0 ${faqAberto === index ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${faqAberto === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-gray-400 leading-relaxed">{faq.resposta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-black border-t border-zinc-900 text-center text-gray-600 text-sm relative z-10">
        <p>© Todos os direitos reservados a Matheus Costa.</p>
        <div className="flex justify-center gap-6 mt-4">
        </div>
      </footer>

      <style>{`
        /* Estilos Globais do Swiper (Paginação e Comportamento) */
        .swiper-pagination-bullet {
          background: #444 !important;
          opacity: 1 !important;
          width: 10px !important;
          border-radius: 10px !important;
          transition: width 0.3s ease, background-color 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #ea580c !important;
          width: 35px !important;
        }
        .swiper-pagination { bottom: 0 !important; }

        /* Apenas o carrossel de módulos pode vazar nas laterais */
        .modulos-swiper { overflow: visible !important; }

        /* Smooth Scroll para âncoras */
        html { scroll-behavior: smooth; }

        /* Estilos específicos para as setas de navegação */
        .swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* --- BOTÃO FLUTUANTE DO WHATSAPP --- */}
      <a
        href="https://wa.me/5521998803748?text=Olá,%20gostaria%20de%20tirar%20uma%20dúvida%20sobre%20o%20curso%20Dominando%20a%20IA"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        <span className="absolute right-20 bg-zinc-800 text-gray-200 text-sm font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-zinc-700 shadow-xl">
          Fale com o Suporte
        </span>
      </a>

    </div>
  );
};

export default App;