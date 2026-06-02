export default function BeneficiosPage() {
  return (
    <main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-32">
      <div className="mb-8">
        <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-2">Operational Infrastructure</p>
        <h2 className="font-display-lg text-display-lg leading-tight">Centro de <span className="text-primary">Beneficios</span> Colectivos</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">Optimización de costos operativos mediante economía de escala y alianzas estratégicas para la industria tortillera.</p>
      </div>

      <nav className="flex overflow-x-auto gap-3 pb-6 no-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
        <button className="whitespace-nowrap px-6 py-2 rounded-full bg-primary text-on-primary font-bold transition-all active:scale-95 shadow-lg shadow-primary/20">Todos</button>
        <button className="whitespace-nowrap px-6 py-2 rounded-full glass-panel border border-white/10 text-on-surface-variant hover:text-primary transition-all active:scale-95">Energía</button>
        <button className="whitespace-nowrap px-6 py-2 rounded-full glass-panel border border-white/10 text-on-surface-variant hover:text-primary transition-all active:scale-95">Insumos</button>
        <button className="whitespace-nowrap px-6 py-2 rounded-full glass-panel border border-white/10 text-on-surface-variant hover:text-primary transition-all active:scale-95">Financiamiento</button>
        <button className="whitespace-nowrap px-6 py-2 rounded-full glass-panel border border-white/10 text-on-surface-variant hover:text-primary transition-all active:scale-95">Maquinaria</button>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 group relative rounded-xl overflow-hidden glass-panel border border-white/10 copper-glow p-8 flex flex-col justify-between min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="material-symbols-outlined text-3xl">bolt</span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest">Energía Industrial</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2">15% Descuento en Gas Natural</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Contrato colectivo para reducir el costo por m3 en consumos industriales de alto volumen.</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-xl active-glow">
              <span className="text-primary font-bold text-3xl">-15%</span>
            </div>
          </div>
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 mt-8">
            <div className="flex gap-8">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1">Ahorro Promedio</p>
                <p className="font-mono-data text-mono-data text-white">$4,200 MXN/mes</p>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1">Empresas Activas</p>
                <p className="font-mono-data text-mono-data text-white">1,240+</p>
              </div>
            </div>
            <button className="px-8 py-3 rounded-lg bg-primary text-on-primary font-bold hover:bg-surface-tint transition-colors flex items-center gap-2">
              Solicitar Convenio <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <img
            alt="Gas Industrial"
            className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity duration-700 w-96"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpl_KMgO4nCkcYE-t8KWJ0iJcZ37dcMgFiYPP7P3Wn2xl_fw32uSJ6aOiZpNA0YJTU8oQJSUbY2VmK9rQeclxK1nMJEghSAqGh-iKEr66Y7XmHJf4qg1PzliGHl5PnWOr-zH2MuvTeM_sjKYMFaLQPdoxHFCp5HVfkIld_kEz-rzq5EPOw9uYHIklppHTgu27N0Ap8NzoV7gOEM9B6pq7bgcL63AaIJ15BsI-8jc-FS-ZhO6GaWwXRrvlpQ_K1OF2GNOSdgT6zb3zL"
          />
        </div>

        <div className="md:col-span-4 glass-panel border border-white/10 p-6 flex flex-col rounded-xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-tertiary mb-6">
            <span className="material-symbols-outlined">account_balance</span>
            <span className="font-label-caps text-label-caps">Financiamiento</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4 leading-tight">Crédito Pyme Tasa 0%</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">Financiamiento para renovación de maquinaria con subsidio estatal exclusivo para la red Tortillap.</p>
          <div className="mt-auto space-y-4">
            <div className="p-4 rounded-lg bg-surface-container-highest/50 border border-white/5">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-on-surface-variant uppercase">Monto Máximo</span>
                <span className="font-mono-data text-white">$500k</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-tertiary w-3/4 h-full"></div>
              </div>
            </div>
            <button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-on-surface hover:bg-white/10 transition-colors font-bold">Ver Requisitos</button>
          </div>
        </div>

        {[
          { title: "Harina Pre-negociada", icon: "agriculture", desc: "Compra en volumen a precios directos de molino sin intermediarios." },
          { title: "Kit de Refacciones", icon: "precision_manufacturing", desc: "Acceso a piezas críticas con envío exprés y descuento de lealtad." },
          { title: "Seguro de Negocio", icon: "verified_user", desc: "Póliza integral contra siniestros y robo con cuotas preferenciales." }
        ].map((item, idx) => (
          <div key={idx} className="md:col-span-4 glass-panel border border-white/10 p-6 rounded-xl group hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">{item.title}</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">{item.desc}</p>
            <a className="text-primary font-bold flex items-center gap-2 text-sm hover:underline" href="#">Explorar <span className="material-symbols-outlined text-xs">open_in_new</span></a>
          </div>
        ))}
      </div>

      <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Ahorro Promedio", val: "22%" },
          { label: "Unidades Afiliadas", val: "8.5k" },
          { label: "Crédito Otorgado", val: "$1.2M" },
          { label: "Soporte Técnico", val: "24/7" }
        ].map((stat, idx) => (
          <div key={idx} className="glass-panel border border-white/10 p-6 rounded-xl text-center">
            <p className="font-display-lg text-primary mb-1">{stat.val}</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
