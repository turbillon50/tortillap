'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Red', icon: 'map', href: '/red' },
    { name: 'Beneficios', icon: 'loyalty', href: '/beneficios' },
    { name: 'Comunidad', icon: 'groups', href: '/comunidad' },
    { name: 'Mercado', icon: 'shopping_cart', href: '/mercado' },
    { name: 'Perfil', icon: 'dashboard', href: '/perfil' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl rounded-full z-50 bg-surface-container/90 dark:bg-surface-container/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-around items-center h-20 px-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center p-2 transition-all scale-95 active:scale-90 duration-200 ${
              isActive
                ? 'text-primary bg-primary/10 rounded-full'
                : 'text-on-surface-variant hover:text-primary-container'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}
            >
              {item.icon}
            </span>
            <span className={`font-label-caps text-label-caps mt-1 ${isActive ? 'font-bold' : ''}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
