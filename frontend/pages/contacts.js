import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactsHero from "../components/ContactsPageComponents/ContactsHero/ContactsHero";
import ContactsNews from "../components/ContactsPageComponents/ContactsNews/ContactsNews";
import ContactsReporter from "../components/ContactsPageComponents/ContactsReporter/ContactsReporter";

export default function Contacts() {
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
        <ContactsHero />
        <ContactsNews />
        <ContactsReporter />
      </main>
      <Footer />
    </div>
  );
}
