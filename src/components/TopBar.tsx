import Link from 'next/link';

export default function TopBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary/5 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl" data-icon="hub">hub</span>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold tracking-tight text-on-background">Tortillap</h1>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link className="text-primary font-bold font-label-caps text-label-caps transition-colors hover:text-primary" href="/red">RED</Link>
        <Link className="text-on-surface-variant font-label-caps text-label-caps transition-colors hover:text-primary" href="/beneficios">BENEFICIOS</Link>
        <Link className="text-on-surface-variant font-label-caps text-label-caps transition-colors hover:text-primary" href="/comunidad">COMUNIDAD</Link>
        <div className="h-8 w-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface-variant text-lg" data-icon="person">person</span>
        </div>
      </div>
      <div className="md:hidden">
        <span className="material-symbols-outlined text-on-background" data-icon="menu">menu</span>
      </div>
    </header>
  );
}
