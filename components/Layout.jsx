import Head from "next/head";
import { Sora } from "next/font/google";

import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vyctalemill.com";
const title = "Vycta Lemill | Futuristic Developer Portfolio";
const description =
  "Full-stack developer building high-performance, design-forward digital products with modern web, AI, and 3D experiences.";

const Layout = ({ children }) => {
  return (
    <main className={`page relative overflow-hidden ${sora.variable} font-sans`}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content="full-stack developer, portfolio, next.js, react, three.js, ai engineering, ui ux" />
        <meta name="author" content="Vycta Lemill" />
        <meta name="theme-color" content="#06080f" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/vyctalemill.png" />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/vyctalemill.png" />
        <link rel="canonical" href={siteUrl} />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <TopLeftImg />
      <Header />
      <Nav />

      <div id="main-content" className="relative z-20 pb-24 sm:pb-28 xl:pb-0 xl:pr-20">
        {children}
      </div>
    </main>
  );
};

export default Layout;
