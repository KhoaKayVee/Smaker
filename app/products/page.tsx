"use client";
import React from "react";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Question from "../components/Question";
import Banner from "../components/Banner";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>OK</title>
      </Head>
      <div className="container h-full">
        <Products />
        <Testimonials />
        <Question />
        <Banner />
      </div>
    </>
  );
};

export default page;
