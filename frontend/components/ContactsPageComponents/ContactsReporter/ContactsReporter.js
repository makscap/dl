import s from "./ContactsReporter.module.css";
import { useState } from "react";
import { Reporter } from "../../Sprite";

const ContactsReporter = () => {
  const [visible, setVisible] = useState(4);

  const data = [
    {
      site: "kosicego.sk",
      text: "Digital League – aj digitálne produkty vznikajú v reálnom svete",
      id: 1,
    },
    {
      site: "indexmag.sk",
      text: "Druhý ročník Digital League: školstvo, kultúra, ale aj IT",
      id: 2,
    },
    {
      site: "sgcr.sk",
      text: "Digital League & Katkin park | SGCR-Súkromné gymnázium",
      id: 3,
    },
    {
      site: "indexmag.sk",
      text: "Digital League je šancou zlepšiť svoju pozíciu na trhu práce",
      id: 4,
    },
    {
      site: "indexmag.sk",
      text: "Druhý ročník Digital League: školstvo, kultúra, ale aj IT",
      id: 2,
    },
    {
      site: "sgcr.sk",
      text: "Digital League & Katkin park | SGCR-Súkromné gymnázium",
      id: 3,
    },
    {
      site: "indexmag.sk",
      text: "Digital League je šancou zlepšiť svoju pozíciu na trhu práce",
      id: 4,
    },
  ];

  const getMoreLinks = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <section className={s.section}>
      <div className="container">
        <h3 className={s.title}>Reportáže</h3>
        <div className={s.box}>
          <div className={s.textBox}>
            <ul>
              <li className={s.link}>Regina - Televízny videoarchív RTVS</li>
              <li className={s.link}>(20+) Facebook Live | Facebook</li>
              <li className={s.link}>Regina - Televízny videoarchív RTVS </li>
            </ul>
          </div>
          <div className={s.svgImage}>
            <Reporter />
          </div>
          {/* <div className={s.blurBubble}></div> */}
        </div>
        <h2 className={s.titleGallery}>Relácie Digital Smoothie</h2>
        <div className="flex">
          <div className="w-[300px] h-[200px] bg-black mr-[20px]"></div>
          <div className="w-[300px] h-[200px] bg-black mr-[20px]"></div>
          <div className="w-[300px] h-[200px] bg-black mr-[20px]"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactsReporter;
