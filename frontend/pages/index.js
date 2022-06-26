import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header/Header";
import ProgramMenu from "../components/ProgramMenu/ProgramMenu";
import OurClients from "../components/SharedComponents/OurClients/OurClients";
import Footer from "../components/Footer/Footer";
import { useState, useEffect, useCallback } from "react";
import ModalCardTemp from "../components/SharedComponents/ModalCardTemp/ModalCardTemp";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // const escFunction = useCallback((event) => {
  //   if (event.keyCode === 27) {
  //     setIsOpen(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   document.addEventListener("keydown", escFunction);

  //   return () => {
  //     document.removeEventListener("keydown", escFunction);
  //   };
  // }, [escFunction]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
        {/* <button onClick={() => setIsOpen(true)}>TEST</button> */}
        {isOpen && <ModalCardTemp isOpen={isOpen} setIsOpen={setIsOpen} />}
        <ProgramMenu />
        {/* <div className="flex container">
          <div className="w-[500px] h-[500px] bg-black mr-[20px]"></div>
          <div>
            <div className="w-[200px] h-[200px] rounded-full bg-black mb-[20px]"></div>
            <div className="w-[400px] h-[250px] bg-black"></div>
          </div>
        </div>

        <p className="container text-[40px] mt-[50px]">Povedali o nás</p>
        <div className="flex container mt-[50px]">
          <div className="w-[400px] h-[200px] bg-black mr-[20px]"></div>
          <div className="w-[400px] h-[200px] bg-black"></div>
        </div> */}
        {/* <OurClients /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
