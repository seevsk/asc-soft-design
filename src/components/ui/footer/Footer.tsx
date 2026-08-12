import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          ASC SoftDesign
        </span>
        <span> | Software </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>
      <Link href="/" className="mx-3">
        Terminos & Condiciones
      </Link>
      <Link href="/" className="mx-3">
        Nosotros
      </Link>
    </div>
  );
};
