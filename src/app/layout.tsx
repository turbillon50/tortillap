import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Tortillap - La Red de la Industria Tortillera",
  description: "Plataforma de infraestructura industrial para la industria tortillera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-body-md bg-background text-on-background selection:bg-primary/30 selection:text-primary overflow-x-hidden min-h-screen`}>
        <TopBar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
