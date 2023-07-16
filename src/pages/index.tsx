import Timeline from "@/components/Timeline";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>boss letter</title>
        <meta name="description" content="boss letter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Timeline />
      </div>
    </>
  );
}
