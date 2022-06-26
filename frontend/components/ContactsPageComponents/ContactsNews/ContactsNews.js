import s from "./ContactsNews.module.css";
import { ArrowDiagonal } from "../../Sprite";
import { useState } from "react";

const ContactsNews = () => {
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
        <h2 className={s.title}>Tlačové správy</h2>
        <div className={s.boxList}>
          {/* <div className={s.blurBubble}></div> */}
          <div>
            <ul className={s.list}>
              {data.slice(0, visible).map((e) => (
                <li className={s.item} key={e.id}>
                  <div>
                    <p className={s.site}>{e.site}</p>
                  </div>
                  <div className={s.linkAndIcon}>
                    <div>
                      <p className={s.text}>{e.text}</p>
                    </div>
                    <div className={s.icon}>
                      <ArrowDiagonal />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.btnBox}>
          <button onClick={getMoreLinks} className={s.btn}>
            Ďalšie správy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactsNews;
