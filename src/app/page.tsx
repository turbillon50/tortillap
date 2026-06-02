export default function HomePage() {
  return (
    <main className="pt-16 pb-32">
      <section className="relative w-full h-[751px] flex flex-col md:flex-row items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10"></div>
          <img
            className="w-full h-full object-cover grayscale opacity-30"
            alt="Mexico digital map"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhdIlmOB-tOHnV5UWjfUXTNrTZ_3XERhxU1N_QYeDghusXo7_7X0dqveqhJLBi9gEPMr2f9eAkF-5zO3ZXJ-ABclXuQvUoa2UcVr23kciznRg5sWcOhQVOFIhaENOm4Wa0tji9H7SMQ0nhXtn2Q9uGMlWqGhmN82DjAeOaFI4EGbBTWuRsS1gzREJAqMpOO3lzF55xgoMb-tFXt0XN8rYIZ4agSlAjmuFQY3Xixb0XiC3mWqXha-U7GR7OpG-GiwpCMGMw8clNL204"
          />
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 600">
            <path className="connection-line" d="M300 240 L450 330" fill="none" stroke="#ffb77d" strokeWidth="0.5" style={{ animationDelay: '0.5s' }}></path>
            <path className="connection-line" d="M450 330 L550 210" fill="none" stroke="#ffb77d" strokeWidth="0.5" style={{ animationDelay: '1.5s' }}></path>
            <path className="connection-line" d="M550 210 L520 390" fill="none" stroke="#ffb77d" strokeWidth="0.5" style={{ animationDelay: '2.5s' }}></path>
            <path className="connection-line" d="M300 240 L550 210" fill="none" stroke="#ffb77d" strokeWidth="0.5" style={{ animationDelay: '4s' }}></path>
          </svg>
          <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-primary rounded-full node-pulse shadow-[0_0_15px_rgba(255,183,125,0.8)]"></div>
          <div className="absolute top-[55%] left-[45%] w-2 h-2 bg-primary rounded-full node-pulse shadow-[0_0_15px_rgba(255,183,125,0.8)]" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[35%] left-[55%] w-4 h-4 bg-primary rounded-full node-pulse shadow-[0_0_15px_rgba(255,183,125,0.8)]" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[65%] left-[52%] w-2 h-2 bg-primary rounded-full node-pulse shadow-[0_0_15px_rgba(255,183,125,0.8)]" style={{ animationDelay: '0.8s' }}></div>
        </div>
        <div className="relative z-20 w-full max-w-container-max flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md animate-hero">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-label-caps text-label-caps tracking-widest uppercase">RED NACIONAL ACTIVA</span>
          </div>
          <h2 className="font-display-lg text-[32px] md:text-display-lg leading-tight mb-8 max-w-2xl text-on-background animate-hero" style={{ animationDelay: '0.2s' }}>
            Únete a la red que <span className="text-primary copper-glow">fortalece</span> la industria tortillera.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-hero" style={{ animationDelay: '0.4s' }}>
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold font-headline-md text-headline-md flex items-center justify-center gap-2 copper-glow transition-all active:scale-95 group">
              Unirse a la Red
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
            </button>
            <button className="bg-surface-container-low border border-white/10 text-on-surface px-8 py-4 rounded-xl font-bold font-headline-md text-headline-md hover:bg-surface-container-high hover:border-white/20 transition-all">
              Explorar Mapa
            </button>
          </div>
        </div>
      </section>
      <section className="relative px-margin-mobile md:px-margin-desktop -mt-24 z-30">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low/80 backdrop-blur-2xl p-8 rounded-full border border-white/5 shadow-2xl milled-edge flex items-center gap-6 group hover:scale-[1.03] hover:bg-surface-container-low transition-all duration-300">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined text-4xl copper-glow" data-icon="groups">groups</span>
            </div>
            <div>
              <div className="text-primary font-display-lg text-[28px] leading-none mb-1 copper-glow">3,400+</div>
              <div className="text-on-surface-variant font-label-caps text-label-caps uppercase">Afiliados Activos</div>
            </div>
          </div>
          <div className="bg-surface-container-low/80 backdrop-blur-2xl p-8 rounded-full border border-white/5 shadow-2xl milled-edge flex items-center gap-6 group hover:scale-[1.03] hover:bg-surface-container-low transition-all duration-300">
            <div className="h-16 w-16 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary transition-transform group-hover:-rotate-12">
              <span className="material-symbols-outlined text-4xl" data-icon="trending_down" style={{ filter: 'drop-shadow(0 0 8px rgba(220, 198, 110, 0.4))' }}>trending_down</span>
            </div>
            <div>
              <div className="text-tertiary font-display-lg text-[28px] leading-none mb-1" style={{ filter: 'drop-shadow(0 0 8px rgba(220, 198, 110, 0.4))' }}>12%</div>
              <div className="text-on-surface-variant font-label-caps text-label-caps uppercase">Ahorro Promedio</div>
            </div>
          </div>
          <div className="bg-surface-container-low/80 backdrop-blur-2xl p-8 rounded-full border border-white/5 shadow-2xl milled-edge flex items-center gap-6 group hover:scale-[1.03] hover:bg-surface-container-low transition-all duration-300">
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined text-4xl" data-icon="map" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 182, 142, 0.4))' }}>map</span>
            </div>
            <div>
              <div className="text-secondary font-display-lg text-[28px] leading-none mb-1" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 182, 142, 0.4))' }}>28</div>
              <div className="text-on-surface-variant font-label-caps text-label-caps uppercase">Estados Cubiertos</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h3 className="font-headline-lg text-headline-lg mb-4 text-on-background">Soluciones Industriales</h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg">Optimizamos toda la cadena de valor de la tortilla a través de tecnología y colaboración colectiva.</p>
            </div>
            <a className="text-primary flex items-center gap-2 font-bold hover:underline copper-glow" href="#">
              Ver todos los beneficios
              <span className="material-symbols-outlined" data-icon="arrow_outward">arrow_outward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-white/5 group hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block copper-glow" data-icon="shopping_cart">shopping_cart</span>
              <h4 className="font-headline-md text-headline-md mb-2">Mejores Insumos</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">Compras colectivas que garantizan la mejor calidad al menor precio del mercado.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-white/5 group hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block copper-glow" data-icon="handshake">handshake</span>
              <h4 className="font-headline-md text-headline-md mb-2">Unión Nacional</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">Una red de apoyo mutuo para fortalecer el gremio frente a los retos económicos.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-white/5 group hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block copper-glow" data-icon="query_stats">query_stats</span>
              <h4 className="font-headline-md text-headline-md mb-2">Rentabilidad</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">Herramientas digitales para el control preciso de costos y maximización de utilidades.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-white/5 group hover:border-primary/30 transition-all hover:translate-y-[-4px]">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block copper-glow" data-icon="verified">verified</span>
              <h4 className="font-headline-md text-headline-md mb-2">Presencia</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">Certificaciones y visibilidad para posicionar tu negocio como líder local.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
