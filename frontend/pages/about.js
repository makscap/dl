import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutHero from "../components/AboutPageComponents/AboutHero/AboutHero";
import Service from "../components/AboutPageComponents/Service/Service";
import MenuNameOfProgram from "../components/AboutPageComponents/MenuNameOfProgram/MenuNameOfProgram";
import JoinBar from "../components/AboutPageComponents/JoinBar/JoinBar";

export default function Home() {
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
        <AboutHero />
        <Service />
        <MenuNameOfProgram />
        <JoinBar />
      </main>
      <Footer />
    </div>
  );
}
