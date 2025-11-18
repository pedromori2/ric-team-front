"use client";
import { useEffect, useState } from 'react';
import { Dumbbell, Activity, Clock, MessageSquare, Home as HomeIcon, BadgeDollarSign, CreditCard, QrCode } from 'lucide-react';

export default function Home() {
  const [active, setActive] = useState<string>('inicio');
  const [open, setOpen] = useState<boolean>(false);
  const [method, setMethod] = useState<'cartao' | 'pix'>('cartao');

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
    'px-5 py-3 rounded-2xl transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 inline-flex items-center gap-2';
  const linkActive = 'bg-sky-100 text-gray-900 font-semibold';
  const inputBase =
    'w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500';

  return (
    <main className="min-h-screen">
      <aside aria-label="Menu lateral" className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <nav className="flex flex-col gap-3 surface rounded-default p-5 text-gray-900">
          <a href="#inicio" aria-current={active === 'inicio' ? 'page' : undefined} className={`${linkBase} ${active === 'inicio' ? linkActive : 'hover:bg-sky-50'}`}>
            <HomeIcon className="w-4 h-4 text-sky-600" /> Início
          </a>
          <a href="#vantagens" aria-current={active === 'vantagens' ? 'page' : undefined} className={`${linkBase} ${active === 'vantagens' ? linkActive : 'hover:bg-sky-50'}`}>
            <Dumbbell className="w-4 h-4 text-sky-600" /> Vantagens
          </a>
          <a href="#preco" aria-current={active === 'preco' ? 'page' : undefined} className={`${linkBase} ${active === 'preco' ? linkActive : 'hover:bg-sky-50'}`}>
            <BadgeDollarSign className="w-4 h-4 text-sky-600" /> Preço
          </a>
          <button onClick={() => setOpen(true)} className="px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white transition font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 inline-flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-white" /> Contratar
          </button>
        </nav>
      </aside>
      <section id="inicio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-6 mx-auto max-w-3xl surface rounded-default p-8 md:p-12 text-center">
            <h1 className="t-h1">Plano Ricardo Team</h1>
            <p className="mt-4 t-body">Personal trainer focado em resultados reais. Assine e comece hoje.</p>
            <div className="mt-8 flex items-center justify-center">
              <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-2xl font-semibold px-8 py-4 bg-sky-600 text-white hover:bg-sky-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Contratar por R$ 149,90</button>
            </div>
            <div className="mt-4 t-muted">Pagamento único • Sem mensalidades • Suporte próximo</div>
          </div>
        </div>
      </section>

      <section id="vantagens" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="t-h2 text-center">Vantagens de contratação</h2>
          <p className="mt-3 t-body text-center max-w-2xl mx-auto">Contratar a Ricardo Team é ter um personal focado em conversão de resultados: plano personalizado, acompanhamento próximo e motivação constante.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { txt: 'Plano personalizado', Icon: Dumbbell },
              { txt: 'Acompanhamento via WhatsApp', Icon: MessageSquare },
              { txt: 'Ajustes conforme evolução', Icon: Activity },
              { txt: 'Flexibilidade de horários', Icon: Clock },
            ].map(({ txt, Icon }, i) => (
              <div key={i} className="surface rounded-default p-6 flex items-start gap-3 transition-shadow hover:shadow-md hover:border-gray-300">
                <span className="badge">
                  <Icon className="w-5 h-5 text-sky-600" />
                </span>
                <span className="t-item">{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preco" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="t-h2">Plano Ricardo Team</h2>
          <p className="mt-3 t-body">Investimento único para sua transformação</p>
          <div className="surface rounded-default p-10 mt-10 transition-shadow hover:shadow-md">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-sky-500 to-indigo-500 bg-clip-text text-transparent">R$ 149,90</div>
            <div className="mt-2 text-gray-600">Pagamento único • Acesso completo • Sem mensalidades</div>
            <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
              {[
                { txt: 'Treino personalizado', Icon: Dumbbell },
                { txt: 'Acompanhamento via WhatsApp', Icon: MessageSquare },
              ].map(({ txt, Icon }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="badge">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </span>
                  <span className="t-item">{txt}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-2xl font-semibold px-6 py-3 bg-sky-600 text-white hover:bg-sky-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Contratar por R$ 149,90</button>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="surface rounded-default relative z-10 w-full max-w-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="badge">
                    <CreditCard className="w-5 h-5 text-sky-600" />
                  </span>
                  <h2 id="modal-title" className="t-h3">Pagamento</h2>
                </div>
                <p className="mt-2 t-muted">Insira seus dados para confirmar a contratação.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-2xl px-3 py-2 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" aria-label="Fechar">✕</button>
            </div>

            <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="t-label">Nome completo</label>
                  <input className={inputBase} type="text" name="nome" placeholder="Seu nome" required />
                </div>
                <div>
                  <label className="t-label">Email</label>
                  <input className={inputBase} type="email" name="email" placeholder="seu@email.com" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="t-label">WhatsApp</label>
                  <input className={inputBase} type="tel" name="whatsapp" placeholder="(11) 90000-0000" />
                </div>
                <div>
                  <label className="t-label">Método de pagamento</label>
                  <div className="mt-2 surface rounded-default p-3 flex gap-2">
                    <button type="button" onClick={() => setMethod('cartao')} className={`rounded-2xl px-4 py-2 inline-flex items-center gap-2 transition ${method === 'cartao' ? 'bg-sky-600 text-white' : 'bg-sky-50 text-sky-700 hover:bg-sky-100'}`}>
                      <CreditCard className="w-4 h-4" /> Cartão
                    </button>
                    <button type="button" onClick={() => setMethod('pix')} className={`rounded-2xl px-4 py-2 inline-flex items-center gap-2 transition ${method === 'pix' ? 'bg-sky-600 text-white' : 'bg-sky-50 text-sky-700 hover:bg-sky-100'}`}>
                      <QrCode className="w-4 h-4" /> Pix
                    </button>
                  </div>
                </div>
              </div>

              {method === 'cartao' && (
                <div className="surface rounded-default p-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="t-label">Número do cartão</label>
                    <input className={inputBase} type="text" name="cardNumber" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div>
                    <label className="t-label">Nome no cartão</label>
                    <input className={inputBase} type="text" name="cardName" placeholder="Como está no cartão" />
                  </div>
                  <div>
                    <label className="t-label">Validade</label>
                    <input className={inputBase} type="text" name="expiry" placeholder="MM/AA" />
                  </div>
                  <div>
                    <label className="t-label">CVV</label>
                    <input className={inputBase} type="text" name="cvv" placeholder="123" />
                  </div>
                </div>
              )}

              {method === 'pix' && (
                <div className="surface rounded-default p-4">
                  <div className="t-label">Pix será gerado após confirmar os dados.</div>
                </div>
              )}

              <div className="mt-2 flex items-center justify-between">
                <button type="button" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-2 bg-slate-100 text-gray-700 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Cancelar</button>
                <button type="submit" className="rounded-2xl px-6 py-3 bg-sky-600 text-white font-semibold hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Continuar</button>
              </div>
              <div className="mt-3 text-center t-muted">Valor: R$ 149,90</div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}