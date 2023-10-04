import React from "react";
import Footer from "@/components/Page/Footer";
import Header from "@/components/Page/Header";
import "@/styles/_app.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
