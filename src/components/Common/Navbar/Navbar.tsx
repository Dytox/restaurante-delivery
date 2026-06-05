"use client";

import logo from "@/public/logo/restaurant-logo.png";
import Image from "next/image";
import { Home, Menu, Package, User, Handbag } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [selected, setSelected] = useState<number>(0);
  const router = useRouter();

  const selectedColor =
    "bg-[#12131A] text-white border-2 border-[#12131A] border-2 rounded-xl gap-2 flex p-2";

  const unselectedColor =
    "border-2 border-transparent rounded-xl gap-2 flex p-2 hover:bg-gray-300";

  const setColor = (key: number) => {
    setSelected(key);
    router.push(menuItems[key].url);
  };

  const menuItems = [
    {
      title: "Inicio",
      icon: <Home />,
      url: "/",
    },
    {
      title: "Menu",
      icon: <Menu />,
      url: "/Menu",
    },
    {
      title: "Mis pedidos",
      icon: <Package />,
      url: "",
    },
    {
      title: "Cuenta",
      icon: <User />,
      url: "",
    },
  ];

  return (
    <>
      <nav className="navbar flex items-center justify-between px-8">
        <div className="nav-container flex items-center gap-12">
          <div className="logo-section flex gap-2 items-center align-middle ">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="m-0 p-0"
            />
            <span className="logo-text font-bold text-xl">ExpressFood</span>
          </div>
          <div className="menu-section gap-6 flex">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={selected === index ? selectedColor : unselectedColor}
                onClick={() => setColor(index)}
              >
                <span>{item.icon}</span>
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="user-section">
          <button className="border-2 border-transparent bg-[#12131A] rounded-xl gap-2 flex p-3 hover:bg-[#161820] text-white hover:border-2 hover:border-[#12131A]">
            <Handbag /> Ver Pedidos
          </button>
        </div>
      </nav>
    </>
  );
}
