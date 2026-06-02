export default function RedPage() {
  return (
    <main className="pt-16 pb-32">
      <section className="relative h-[574px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <img
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            alt="Mexico digital map"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Qj0ABDmn8nBKjauP--FTqrt2M3IlEHl5FC8lfYVK5QxRDBnKxiX42YDpo3JA1Eoykrur95DMrETd0vmRAZUeTwm8v1qQaZx-FDpQJzJq5XgSzJEBNUvnxW2t6fGETa5VDL_eznaSizVGTN1P1FxjF_QWILbOodr2vGtbaROScHKAiq1PC-3VgC4m3TSuphhamlgQUfaypdmcHlrbHMJvwhPuR8Hap59J1sHn0sfjP3m6qw56v9cF_dTLBXWCIfjzJRoC4KwTJgjI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full glow-orange map-pulse pointer-events-auto cursor-pointer"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full glow-orange map-pulse pointer-events-auto cursor-pointer"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full glow-orange map-pulse pointer-events-auto cursor-pointer"></div>
          <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-primary rounded-full glow-orange map-pulse pointer-events-auto cursor-pointer"></div>
        </div>
        <div className="absolute top-8 left-margin-mobile md:left-margin-desktop w-[90%] md:w-96">
          <div className="bg-surface-container-low/70 backdrop-blur-2xl rounded-xl p-1 flex items-center shadow-2xl border border-white/5">
            <span className="material-symbols-outlined px-4 text-on-surface-variant">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-on-surface w-full py-3 placeholder:text-on-surface-variant/50 font-body-md"
              placeholder="Buscar afiliados o regiones..."
              type="text"
            />
            <button className="bg-primary-container text-on-primary-container p-2 rounded-lg mr-1 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 right-margin-mobile md:right-margin-desktop hidden md:block">
          <div className="bg-surface-container-low/70 backdrop-blur-2xl rounded-xl p-4 w-64 shadow-2xl border border-white/5">
            <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase tracking-widest">MÉTRICAS DE RED</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-on-surface-variant text-sm">Nodos Activos</span>
                <span className="font-mono-data text-xl text-on-surface">1,248</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%]"></div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-on-surface-variant text-sm">Flujo Logístico</span>
                <span className="font-mono-data text-xl text-on-surface">+12.4%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-margin-mobile md:px-margin-desktop -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 space-y-gutter">
            <div className="bg-surface-container-low border-t border-white/10 rounded-xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline-md text-headline-md text-on-surface">Actividad Reciente</h2>
                <button className="text-primary font-label-caps text-label-caps hover:underline uppercase">VER TODO</button>
              </div>
              <div className="space-y-4 max-h-[320px] overflow-y-auto no-scrollbar pr-2">
                {[
                  { title: "Tortillería 'El Sol' se unió", location: "Guadalajara, Jalisco", time: "Hace 5 min", icon: "storefront" },
                  { title: "Nueva ruta de maíz establecida", location: "Sinaloa - CDMX", time: "Hace 2 horas", icon: "local_shipping" },
                  { title: "Certificación de Calidad Tortillap", location: "Mérida, Yucatán", time: "Hace 4 horas", icon: "verified" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/20 transition-all group cursor-pointer">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-on-surface font-semibold">{item.title}</p>
                      <p className="text-on-surface-variant text-sm">{item.location} • {item.time}</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/30">chevron_right</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-4 space-y-gutter">
            <div className="bg-surface-container-low border-t border-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">add_circle</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Expande la Red</h3>
              <p className="text-on-surface-variant text-sm mb-6">Registra un nuevo punto de venta o centro de distribución para fortalecer la industria.</p>
              <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-lg font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all uppercase">
                REGISTRAR AFILIADO
              </button>
            </div>
            <div className="bg-surface-container-low border-t border-white/10 rounded-xl p-6 shadow-2xl">
              <h3 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">ESTADO DEL SERVICIO</h3>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-on-surface text-sm">Todos los sistemas operativos</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-xs text-on-surface-variant">
                <span>Latencia de Red</span>
                <span className="font-mono-data">24ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
