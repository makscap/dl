import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CooperationHero from "../components/CooperationPageComponents/CooperationHero/CooperationHero";
// import TagCloud from "react-tag-cloud";
// import OurClients from "../components/OurClients/OurClients";
import OurClientsWithText from "../components/CooperationPageComponents/OurClientsWithText/OurClientsWithText";
import { useState } from "react";
import OurWork from "../components/CooperationPageComponents/OurWork/OurWork";

export default function Cooperation() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="revisit-after" content="2 days" />
        <title>Digital League</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Empowering digital transformation companies advancing our world"
        />
        <meta name="keywords" content="Digital League" />
        <meta name="author" content="Digital League" />
      </Head>
      <Header />
      <main>
        <CooperationHero isTrue={isTrue} setIsTrue={setIsTrue} />
        <OurWork isTrue={isTrue} setIsTrue={setIsTrue} />
        {/* <OurClientsWithText /> */}
      </main>
      <Footer />
    </div>
  );
}
