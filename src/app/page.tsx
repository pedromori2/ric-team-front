"use client";
import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

export default function Home() {
  const [active, setActive] = useState<string>('inicio');

  useEffect(() => {
    const ids = ['inicio', 'vantagens', 'preco'];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '0px 0px -40% 0px', threshold: [0.3, 0.6, 0.8] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkBase =
    'px-4 py-2 rounded-2xl transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
  const linkActive = 'bg-gray-100 text-gray-900';

  return (
    <main className="min-h-screen">
      <aside aria-label="Menu lateral" className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <nav className="flex flex-col gap-3 bg-white/90 backdrop-blur border border-gray-200/70 text-gray-900 rounded-3xl p-4 shadow-sm">
          <a href="#inicio" aria-current={active === 'inicio' ? 'page' : undefined} className={`${linkBase} ${active === 'inicio' ? linkActive : 'hover:bg-gray-100'}`}>Início</a>
          <a href="#vantagens" aria-current={active === 'vantagens' ? 'page' : undefined} className={`${linkBase} ${active === 'vantagens' ? linkActive : 'hover:bg-gray-100'}`}>Vantagens</a>
          <a href="#preco" aria-current={active === 'preco' ? 'page' : undefined} className={`${linkBase} ${active === 'preco' ? linkActive : 'hover:bg-gray-100'}`}>Preço</a>
          <a href="/contratar" className="px-4 py-2 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white transition font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">Contratar</a>
        </nav>
      </aside>
      <section id="inicio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-6 mx-auto max-w-3xl surface rounded-default p-8 md:p-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Plano Ricardo Team</h1>
            <p className="mt-4 text-lg text-gray-600">Personal trainer focado em resultados reais. Assine e comece hoje.</p>
            <div className="mt-8 flex items-center justify-center">
              <a href="/contratar" className="inline-flex items-center justify-center rounded-2xl font-semibold px-8 py-4 bg-orange-600 text-white hover:bg-orange-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">Contratar por R$ 149,90</a>
            </div>
            <div className="mt-4 text-sm text-gray-500">Pagamento único • Sem mensalidades • Suporte próximo</div>
          </div>
        </div>
      </section>

      <section id="vantagens" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Vantagens de contratação</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Contratar a Ricardo Team é ter um personal focado em conversão de resultados: plano personalizado, acompanhamento próximo e motivação constante.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {['Plano personalizado', 'Acompanhamento via WhatsApp', 'Ajustes conforme evolução', 'Flexibilidade de horários'].map((txt, i) => (
              <div key={i} className="surface rounded-default p-6 flex items-start gap-3 transition-shadow hover:shadow-md hover:border-gray-300">
                <span className="badge">
                  <Check className="w-5 h-5 text-emerald-600" />
                </span>
                <span className="text-gray-700 font-medium">{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preco" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Plano Ricardo Team</h2>
          <p className="mt-3 text-lg text-gray-600">Investimento único para sua transformação</p>
          <div className="surface rounded-default p-10 mt-10 transition-shadow hover:shadow-md">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">R$ 149,90</div>
            <div className="mt-2 text-gray-600">Pagamento único • Acesso completo • Sem mensalidades</div>
            <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
              {['Treino personalizado', 'Acompanhamento via WhatsApp'].map((txt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="badge">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </span>
                  <span className="text-gray-700 font-medium">{txt}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="/contratar" className="inline-flex items-center justify-center rounded-2xl font-semibold px-6 py-3 bg-orange-600 text-white hover:bg-orange-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">Contratar por R$ 149,90</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}