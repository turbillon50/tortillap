export default function MercadoPage() {
  return (
    <main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-32">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest mb-2 block uppercase">Infraestructura Industrial</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background uppercase tracking-tight">Mercado B2B</h2>
            <p className="text-on-surface-variant max-w-xl mt-2 font-body-md">Equipamiento de alta fidelidad y servicios técnicos especializados para la industria de la masa y la tortilla.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-surface-container-high text-on-surface p-3 rounded-xl border border-white/5 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="bg-surface-container-high text-on-surface p-3 rounded-xl border border-white/5 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
        {[
          { title: "Maquinaria Nueva", tag: "ALTO RENDIMIENTO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdoS0XwqxxZAqBEFsQjDJ1B1QBOiflHR4qcZL7y6t-3WD7tRbyLAyLehSXJ8B2nZXOvhr9iV-bw-o_bQlMjeKNoinQz49rRczMujaTBc4x1dDHRxmGHmXSThtTYC8yH4TwYX_mfjvphQsLWTWHp1qIBApexU9NVPVwu8EQsdaIz_WxxwC_tHoQAikTKWoLPpx2y_725rAN1t_WTmNLTswaGOflYEsgDXY0RfzqR_dxsxPp8EKQZDpzBCvbf3LARakAC5fuzNURkldO" },
          { title: "Equipo Usado", tag: "VALOR ESTRATÉGICO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAViqcBDQ54HfG1VNkdNc55n65GSKSJZVZu2oAkagzJDA6UpOg1N4FokvH7KHJcY59-AIhk0ys-10_3e2-oay3RaWOfeQV3vuJAhMGuBGP2eWFm3ivJ5ylfdUE_E-_dxxI4rvBzqHawXRfsA4hXRX9BG-m7y5Wiwih_99RsxN_p-j4miyjZ9nC23tWw5iU6EtMip7bOVdg8u_YlSwCdjStRGdt3_GzncOQr_hS03f6NtskSJ81AEpFweMytXJ1FCxEA4HNNECWLUKeR" },
          { title: "Mantenimiento", tag: "SOPORTE TÉCNICO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7djY5Ta8zOQD2UajIi_iV-iedgvUFFm-DzhHedfsCK78p1jtzWruZFveNOKK4kDi_xbWqqFbDh--sYbWnAZwhv194jBm_niS5IJ9wSu6IhxxSkB3caB0tKBD61rymPSzRc2Q1q5_jfqf7JDSRFm5tVlAbHxkPpaLUeIXm0h3sLHVvnULwAU1hfG9cxmTH1gu8Fvgn45p8lGV9pmg4t6Dfog24yLyEjwWTz1NVL6ogP6lF0eTSN6z8hMBjilMkTI2dDiKPDXtsZ_BO" }
        ].map((cat, idx) => (
          <div key={idx} className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer border border-white/10 milled-edge">
            <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={cat.img} alt={cat.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="font-headline-md text-headline-md text-white mb-1">{cat.title}</h3>
              <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest">{cat.tag}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {[
          { title: "Molino Industrial Pro-X", loc: "Guadalajara, JAL", price: "$185,000", tag: "NUEVO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIwvM1rGbJUEeSP4tk7VokINnlTtGABfSAXoB1B_CGIKHUczjWpxQQjzotDX08C8qysYtKwOHpI12GlLclWdiArcIIckHD0AxAbyO_cOJmBptBBQjAWNQZ7910wp1fc9EsFolD4KDfC0AJJmBJN25BHg9m-BoNXqUNv4e32BozHkeXJSmAK86rYR9PZ-iwXc7S23hlj3GiSkPCqa83pWPq8LCO--Skond2AmiI2HaEM9bdKFHNxTjEZqpHKKsFIV93Zp2ibH_Ao91k" },
          { title: "Máquina Tortilladora C-14", loc: "Querétaro, QRO", price: "$92,500", tag: "USADO", color: "secondary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRDhvu3o-njtgv04PXy9qkkMZydhQeYnUpD94X3I7nRPaWC1UAO9xha-_z_c80dPluxATYVREqIthsx-z-JWQslLHdZYLQjL-BSP9R0tnlzqjLk_gNTKSF9VG4uOqBE4u-vcHFTVoVirdbOVVxk5kN85VKdCmmmKJ6k0f4FeAEtNktWCvIMi9AjTmbq6R37OdZHkitcJUB2M5dVW53oXbB2KT2-U4VVzxwe5r3YJF7XvkczzqXejRgsGO-S3V9a7z9eJr-Sv1EVxep" },
          { title: "Amasadora Automática 50kg", loc: "Mérida, YUC", price: "$54,000", tag: "NUEVO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfSXXzfsacsfm1h966Rkwv8kz_0DjbmHcQmASUuDvSHAH6ha-aNkDrbubMyFLlvnN_wk7O6BspLMfjwT8VDHRO-fZlSjK_RchAmPCSU_6PMXp1XqSbeQlvTRjyyRfWXPXIu6JiLeYz0MkuCWgPGQj3a6TK_8CGiWPjxdgi_1nms_5b6COc8UZhOfSt-tldfOKjAVJvaug5ZQ78CBkLQPExMo8n1Z7LsPB1vGoTsmoTvR0qaNmJWiel9wC7EaURyJ9nVvQMoMkIfwT1" },
          { title: "Tanque de Cocimiento 200L", loc: "Edo. de México", price: "$32,900", tag: "REFURBISHED", color: "tertiary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXfag2T8fykSS5xKEOXEmcYfgb4yCpCpuXGnshrmfMveWDNquCGc33Ga8lHiF_KEvYCzB0LYRMLsDkBizxEWmQc7I6difUpYjnhOW_m1YmOtEFcMfyzExq84LiSrfO4jzzLreUb67fCrDIUedujCYOL64JN9O9_AdhNRQnzWCqkc2ruTrjVRkaA2zinL75ZxngYYMZyOsrU9ozS9PrWTFTzTxcjnFgTsKPHt2JE-F9wl6rDhQxf7J4_6UMILB2UtpnV268QFTVGFvw" }
        ].map((prod, idx) => (
          <div key={idx} className="bg-surface-container-low border border-white/5 rounded-xl overflow-hidden milled-edge flex flex-col hover:border-primary/30 transition-all group">
            <div className="h-56 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={prod.img} alt={prod.title} />
              <div className={`absolute top-4 right-4 px-3 py-1 ${prod.color === 'secondary' ? 'bg-secondary/20 border-secondary/30 text-secondary' : prod.color === 'tertiary' ? 'bg-tertiary/20 border-tertiary/30 text-tertiary' : 'bg-primary/20 border-primary/30 text-primary'} backdrop-blur-md rounded-full border`}>
                <span className="font-label-caps text-label-caps uppercase tracking-widest">{prod.tag}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h4 className="font-headline-md text-body-lg text-white mb-1">{prod.title}</h4>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span className="font-mono-data text-[12px]">{prod.loc}</span>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-mono-data text-headline-md text-primary">{prod.price}</span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">MXN</span>
                </div>
                <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-lg font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2 active:scale-95 uppercase tracking-widest">
                  CONTACTAR PROVEEDOR
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16 bg-surface-container border border-white/5 rounded-2xl p-8 milled-edge flex flex-wrap gap-8 items-center justify-around">
        <div className="text-center">
          <span className="font-display-lg text-display-lg text-primary block mb-2">+450</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">EQUIPOS DISPONIBLES</span>
        </div>
        <div className="w-px h-16 bg-white/10 hidden md:block"></div>
        <div className="text-center">
          <span className="font-display-lg text-display-lg text-primary block mb-2">24/7</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">SOPORTE TÉCNICO</span>
        </div>
        <div className="w-px h-16 bg-white/10 hidden md:block"></div>
        <div className="text-center">
          <span className="font-display-lg text-display-lg text-primary block mb-2">32</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">ESTADOS COBERTURA</span>
        </div>
      </section>
    </main>
  );
}
