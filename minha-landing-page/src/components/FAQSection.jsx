import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

const FAQSection = () => {
  const [faqAberto, setFaqAberto] = useState(null);

  const alternarFaq = (index) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  return (
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
              className={`border ${faqAberto === index ? 'border-orange-600 bg-zinc-900/80 shadow-[0_0_20px_rgba(234,88,12,0.1)]' : 'border-zinc-800 bg-black/50'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => alternarFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer group"
              >
                <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${faqAberto === index ? 'text-orange-500' : 'text-gray-200 group-hover:text-orange-400'}`}>
                  {faq.pergunta}
                </span>
                <ChevronDown
                  className={`text-orange-600 transform transition-transform duration-300 flex-shrink-0 ${faqAberto === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${faqAberto === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed pt-2 border-t border-zinc-800/50 mt-2">
                  {faq.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
