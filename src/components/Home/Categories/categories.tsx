"use client";

import { Pizza, Salad, IceCream, CupSoda } from "lucide-react";

export const Categories = () => {
  const items = [
    {
      icon: Pizza,
      title: "Pizzas",
      url: "/categories/pizzas",
      color: "bg-green-300",
    },
    {
      icon: Salad,
      title: "Ensaladas",
      url: "/categories/ensaladas",
      color: "bg-blue-300",
    },
    {
      icon: CupSoda,
      title: "Bebidas",
      url: "/categories/bebidas",
      color: "bg-yellow-300",
    },
    {
      icon: IceCream,
      title: "Postres",
      url: "/categories/postres",
      color: "bg-pink-300",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap text-center">
        <div className="w-full flex flex-col items-center gap-2 text-xl">
          <h2>Explora Nuestras Categorías</h2>
          <p className="text-gray-600">
            Descubre una variedad de opciones deliciosas para cada antojo
          </p>
        </div>
        <div className="w-full flex justify-between mt-6 p-2">
          {items.map((item, index) => (
            <button
              className="border-2 border-gray-400 hover:border-gray-600 rounded-lg w-[23%] hover:scale-105 hover:shadow-lg p-6 transition-transform"
              key={index}
              onClick={() => {
                console.log(`Navegar a ${item.url}`);
              }}
            >
              <div className="header w-12 h-12  rounded-xl">
                <item.icon
                  className={`${item.color} w-full h-full p-2 text-white rounded-xl`}
                />
              </div>
              <div className="body">
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
