"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { titleFont } from "@/config/fonts";

// TODO: swap for local project screenshots once available
const projects = [
  "https://swiperjs.com/demos/images/abstract-1.jpg",
  "https://swiperjs.com/demos/images/abstract-2.jpg",
  "https://swiperjs.com/demos/images/abstract-3.jpg",
  "https://swiperjs.com/demos/images/abstract-4.jpg",
  "https://swiperjs.com/demos/images/abstract-5.jpg",
  "https://swiperjs.com/demos/images/abstract-6.jpg",
];

export const Cards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="py-10 sm:py-20 px-5 sm:px-0">
      <h2
        className={`${titleFont.className} antialiased text-3xl sm:text-4xl font-bold text-center mb-10`}
      >
        Nuestros proyectos
      </h2>

      {/* Mobile carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5"
        >
          {projects.map((src, index) => (
            <div
              key={src}
              className="relative shrink-0 w-full h-56 snap-center overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={src}
                alt={`Proyecto ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al proyecto ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-[var(--primary)] w-4"
                  : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((src, index) => (
          <div
            key={src}
            className="relative h-48 sm:h-56 overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={src}
              alt={`Proyecto ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
