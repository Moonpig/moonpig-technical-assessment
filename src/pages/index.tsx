import Head from "next/head";
import React from "react";
import { Gallery } from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moonpig Technical Assessment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Gallery />
    </>
  );
}
