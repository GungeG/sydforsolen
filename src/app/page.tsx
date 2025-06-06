"use client";
import Hero from "./components/hero";
import Posters from "./components/posters/posters";
import Subscribe from "./components/subscribe";
import HorizontalScroll from "./components/horizontalscroll/horizontalscroll";
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Posters />
      <div className="relative"></div>
      <HorizontalScroll />
      <div className="relative"></div>
      <Subscribe />
    </main>
  );
}
