import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:grid sm:grid-cols-2 items-center gap-10 py-10 sm:py-20">
      {/* Description */}
      <div className="fade-in flex flex-col gap-6 text-center sm:text-left">
        <h1
          className={`${titleFont.className} antialiased text-4xl sm:text-5xl font-bold leading-tight`}
        >
          Creamos <span className="text-[var(--primary)]">páginas web</span> que
          hacen crecer tu negocio
        </h1>
        <p className="text-gray-600 text-lg">
          Diseño moderno, entrega rápida y soporte real. Convertimos tu
          emprendimiento en una web profesional lista para vender.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Link href="#" className="btn-primary text-center">
            Cotiza tu proyecto
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src="/hero/227-removebg.png"
          alt="Sitios web responsivos creados por ASC SoftDesign"
          width={661}
          height={377}
          priority
          className="w-full max-w-md sm:max-w-full animate-float"
        />
      </div>
    </section>
  );
};
