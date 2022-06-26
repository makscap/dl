import s from "./ModalCardTemp.module.css";
import { Frame, Frame2 } from "../../Sprite";
import Image from "next/image";
// import {xClose} from '../../Sprite'

const ModalCardTemp = ({ isOpen, setIsOpen }) => {
  const showHideClassName = isOpen ? s.overlay : s.closeModal;

  return (
    <div className="container">
      <div className={showHideClassName}>
        <div className={s.modal}>
          <section className={s.section}>
            <div className={s.blurBubble}></div>
            <button
              type="button"
              className={s.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <svg
                className={s.closeBtnIcon}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4527 0.666626L9.99935 8.11996L2.54602 0.666626L0.666016 2.54663L8.11935 9.99996L0.666016 17.4533L2.54602 19.3333L9.99935 11.88L17.4527 19.3333L19.3327 17.4533L11.8793 9.99996L19.3327 2.54663L17.4527 0.666626Z"
                  fill="#1A1A1A"
                />
              </svg>
            </button>
            <div className={s.personData}>
              <h1 className={s.personTitle}>Viktória Tuptová</h1>
              <h2 className={s.personJob}>Product owner</h2>
              <p className={s.personText}>Projekt USS</p>
            </div>
            <div className={s.mainGroup}>
              <div className={s.listGroup}>
                <ul className={s.list}>
                  <li className={s.item}>
                    <div className={s.imgBox}>
                      <div className={s.frameOne}>
                        <Frame />
                      </div>
                      <div className={s.imgBox}>
                        <Image
                          src="/images/aboutPage/nas-ciel.jpg"
                          alt="Náš cieľ"
                          width={265}
                          height={310}
                          layout={"fixed"}
                        />
                      </div>
                    </div>
                  </li>
                  <li className={s.item}>
                    <div className={s.imgBox}>
                      <div className={s.frameOne}>
                        <Frame2 />
                      </div>
                      <div className={s.imgBox}>
                        <Image
                          src="/images/aboutPage/nas-ciel.jpg"
                          alt="Náš cieľ"
                          width={265}
                          height={310}
                          layout={"fixed"}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={s.textBox}>
                <ul className={s.listText}>
                  <li className={s.itemText}>
                    <h2 className={s.title}>
                      Ako hodnotíš program Digital League?
                    </h2>
                    <p className={s.text}>
                      Digital League je skvelá výzva ako sa dostať do tvorby
                      reálnych digitálnych produktov. Pracovať v tíme s ľuďmi,
                      ktorí na začiatku programu nemajú takmer žiadne
                      skúsenosti, iba víziu alebo požiadavky zadávateľa, ktoré
                      sa snažia splniť.
                    </p>
                  </li>
                  <li className={s.itemText}>
                    <h2 className={s.title}>Čo ti program dal? </h2>
                    <p className={s.text}>
                      Naučila som sa, že sa nemám báť a hanbiť niečo opýtať,
                      pretože to často môže pomôcť aj druhým. Zlepšila som sa v
                      komunikácii, v správnom vyjadrovaní a získala som istotu.
                      Program mi pomohol v kariérnom nasmerovaní a práve aj
                      vďaka nemu sa dnes venujem podpore projektového
                      manažmentu.
                    </p>
                  </li>
                  <li className={s.itemText}>
                    <h2 className={s.title}>Prečo odporúčaš program? </h2>
                    <p className={s.text}>
                      Digital League je veľmi dobre investovaný čas. Ak sa
                      nevieš pohnúť, vždy sa môžeš spoľahnúť na mentorov. Bolo
                      to zábavné a zaujímavé, skvelý spôsob ako spoznať nových
                      ľudí.
                    </p>
                  </li>
                </ul>
                <div style={{ position: "absolute", width: "100%" }}>
                  <div className={s.blurBubble2}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModalCardTemp;
