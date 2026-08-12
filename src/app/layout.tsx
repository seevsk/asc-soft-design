import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "ASC SoftDesign | Webs, Tiendas Online y Sistemas de Software",
  description:
    "Creamos páginas web, tiendas online y sistemas a medida para negocios que quieren crecer. Diseño moderno, entrega rápida y soporte real.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className}h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
