import Head from "next/head";
import { Inter } from "next/font/google";
import { Gallery } from "@/components/Gallery/Gallery";

const inter = Inter({ subsets: ["latin"] });

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
