"use client";

import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoLogoWhatsapp, IoMenuOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            ASC SoftDesign
          </span>
          <span> | Software</span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/proyectos"}
        >
          Proyectos
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/precios"}
        >
          Precios
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/contacto"}
        >
          Contacto
        </Link>

        {/* Optional */}
        {/* <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/nosotros"}
        >
          Nosotros
        </Link> */}
      </div>
      <div className="flex items-center">
        {/* WhatsApp icon*/}
        <Link
          href={"#"}
          className="flex items-center gap-2 m-2 px-0 py-2 rounded-xl transition-all duration-200 hover:bg-gray-100 active:scale-95"
        >
          <IoLogoWhatsapp className="w-5 h-5" />
        </Link>

        {/* Sidebar */}
        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all duration-200 hover:bg-gray-100 active:scale-95"
        >
          <IoMenuOutline className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};
