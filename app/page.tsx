"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Navigating from "./components/Navigating";
import ProductList from "./components/ProductList";
import Testimonials from "./components/Testimonials";
import Question from "./components/Question";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="container h-full">
      <Hero />
      <Introduction />
      <Navigating />
      <ProductList />
      <Testimonials />
      <Question />
      <Banner />
    </div>
  );
}
