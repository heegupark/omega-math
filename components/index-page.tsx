import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>o-math</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="title" content="Ultimate Math!" />
        <meta name="description" content="Ultimate Math!" />
        <meta property="og:title" content="o-math" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://math.heegu.net/" />
        <meta property="og:image" content="../static/images/math-ss-001.gif" />
        <meta property="og:description" content="Ultimate Math!" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="../static/images/o-logo.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
    </>
  );
}
