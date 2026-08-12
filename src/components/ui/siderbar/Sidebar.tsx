"use client";

import Link from "next/link";
import { useUIStore } from "@/store";
import {
  IoBriefcaseOutline,
  IoCallOutline,
  IoChatbubbleEllipsesOutline,
  IoCloseOutline,
  IoFolderOpenOutline,
  IoLogInOutline,
  IoLogoFacebook,
  IoLogoTiktok,
  IoLogOutOutline,
  IoLogoWhatsapp,
  IoMailOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoPricetagOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
  IoWalletOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}
      <div
        onClick={closeSideMenu}
        className={`fixed top-0 left-0 w-screen h-screen z-10 bg-black transition-opacity duration-300 ${
          isSideMenuOpen ? "opacity-30" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      {/* Blur */}
      <div
        onClick={closeSideMenu}
        className={`fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm transition-opacity duration-300 ${
          isSideMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Sidemenu */}
      <nav
        className={`fixed p-5 right-0 top-0 w-4/5 max-w-xs sm:w-125 sm:max-w-none h-screen bg-white z-20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoCloseOutline
          size={25}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />

        {/* Menu */}
        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={25} />
          <span className="ml-3 text-xl">Nosotros</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoBriefcaseOutline size={25} />
          <span className="ml-3 text-xl">Proyectos</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoWalletOutline size={25} />
          <span className="ml-3 text-xl">Precios</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoChatbubbleEllipsesOutline size={25} />
          <span className="ml-3 text-xl">Contacto</span>
        </Link>

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10" />

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogoFacebook size={25} />
          <span className="ml-3 text-xl">Facebook</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogoTiktok size={25} />
          <span className="ml-3 text-xl">TikTok</span>
        </Link>

        <Link
          href={"/"}
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogoWhatsapp size={25} />
          <span className="ml-3 text-xl">WhastApp</span>
        </Link>
      </nav>
    </div>
  );
};
