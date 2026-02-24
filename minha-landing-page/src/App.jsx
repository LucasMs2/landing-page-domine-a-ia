import React, { useState } from 'react';
import './index.css';
import { ChevronRight, CheckCircle, ShieldCheck, ChevronDown } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const PrimaryButton = ({ children }) => (
  <a href="#precos" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2 cursor-pointer">
    {children}
    <ChevronRight size={20} />
  </a>
);

const App = () => {
  // Estado para controlar qual FAQ está aberto
  const [faqAberto, setFaqAberto] = useState(null);

  const modulos = [
    { id: 1, titulo: "Animando Frames", img: "CAPA_MÓDULO-ANIMANDOFRAMES.png" },
    { id: 2, titulo: "Editando Comercial", img: "CAPA_MÓDULO-EDITANDOOCOMERCIAL.png" },
    { id: 3, titulo: "Gerando Imagens", img: "CAPA_MÓDULO-GERANDOIMAGENS.png" },
    { id: 4, titulo: "Multiplicando Imagens", img: "CAPA_MÓDULO-MULTIPLICANDOIMAGENS.png" },
    { id: 5, titulo: "Upscale Profissional", img: "CAPA_MÓDULO-UPSCALE.png" },
  ];

  // Perguntas e respostas
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
    <div className="bg-black text-gray-100 font-sans selection:bg-orange-500 selection:text-white">

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
                Aprenda a criar prompts profissionais, automações e conteúdos de alto nível com as ferramentas mais avançadas do mercado.
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

      {/*  VIDEO SECTION  */}
      <section className="py-24 bg-black relative z-10 border-b border-zinc-900 overflow-hidden">
        {/* Glow de fundo sutil para destacar o vídeo */}
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

          {/* Container do Vídeo */}
          <div className="relative aspect-video w-full bg-zinc-900 border border-zinc-800 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
            <video
              src="/images/VENDAS.mp4"
              controls
              preload="metadata"
              poster="/images/BACKGROUND.PNG" //
              className="w-full h-full object-cover"
            >
              Seu navegador não suporta o formato de vídeo.
            </video>
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
            className="pb-16 !overflow-visible"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Preificação (mensal) */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col">
              <h4 className="text-xl font-bold mb-2">Acesso Mensal</h4>
              <div className="text-4xl font-black mb-6">R$ 29,90<span className="text-sm font-normal text-gray-500">/mês</span></div>
              <ul className="text-left space-y-4 mb-10 text-gray-400 text-sm flex-grow">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-orange-600" /> Aulas Gravadas</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-orange-600" /> Workflow + Lista de IAs</li>
                <li className="flex items-center gap-2 text-zinc-600 line-through">Sorteios de Prêmios Apple</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-zinc-700 font-bold hover:bg-zinc-800 transition-colors mt-auto cursor-not-allowed opacity-50">EM BREVE</button>
            </div>

            {/* Preificação (anual) */}
            <div className="p-10 rounded-3xl bg-orange-600 border border-orange-400 shadow-[0_0_40px_rgba(234,88,12,0.2)] transform md:scale-105 relative overflow-hidden flex flex-col">
              <div className="absolute top-4 right-[-35px] bg-white text-orange-600 text-[10px] font-black px-10 py-1 rotate-45 uppercase">Popular</div>
              <h4 className="text-xl font-bold mb-2">Acesso Anual</h4>
              <div className="text-4xl font-black mb-2">12x R$ 29,90</div>
              <p className="text-sm font-bold mb-6 text-orange-200">ou R$ 294 à vista (Economize R$300)</p>
              <ul className="text-left space-y-4 mb-10 text-white text-sm flex-grow">
                <li className="flex items-center gap-2 font-bold"><CheckCircle size={18} /> Aulas Gravadas e Ao Vivo</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle size={18} /> Participação em TODOS os sorteios</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle size={18} /> +1 Acesso para presente</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-black text-white font-black hover:bg-zinc-900 transition-colors shadow-xl mt-auto">QUERO O ANUAL COM 50% OFF</button>
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
        <p>© 2026 IA PRO - Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-orange-500 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Suporte</a>
        </div>
      </footer>

      <style>{`
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
        html { scroll-behavior: smooth; }
      `}</style>

    </div>
  );
};

export default App;