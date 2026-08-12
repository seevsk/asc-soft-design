import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full text-center text-xs mb-10 px-5">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          ASC SoftDesign
        </span>
        <span> | Software </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>
      <Link href="/">Terminos & Condiciones</Link>
      <Link href="/">Nosotros</Link>
    </div>
  );
};
