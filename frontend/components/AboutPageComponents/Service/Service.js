import s from "./Service.module.css";
import { Frame } from "../../Sprite";
import Image from "next/image";
// import ph from '../../public/images/aboutPage/nax-ciel.jpg'

const Service = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.imgBox}>
              <div className={s.frameOne}>
                <Frame />
              </div>
              {/* <Image
                src="/images/aboutPage/nas-ciel.jpg"
                alt="Náš cieľ"
                width={419}
                height={490}
                layout={"fixed"}
              /> */}
              <div className={s.image}>
                <Image
                  src="/images/aboutPage/nas-ciel.png"
                  alt="Náš cieľ"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className={s.textBox}>
              <h2 className={s.title}>Náš cieľ</h2>
              <p className={s.text}>
                Cieľom našej organizácie je
                <span className={s.partOftext}>skvalitniť pracovný trh</span> a
                <span className={s.partOftext}>prinášať príležitosti</span> pre
                ľudí zapálených pre témy, ktorým sa venujeme. Môžeme tak robiť
                vďaka spolupráci s mnohými významnými spoločnosťami a
                profesionálmi, ktorí nám dôverujú.
              </p>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.textBox}>
              <h2 className={s.title}>Ako pracujeme</h2>
              <p className={s.text}>
                <span className={s.partOftext}>Vzdelávanie</span> prebieha
                formou
                <span className={s.partOftext}>
                  prepájania praktickej práce s teoretickými vedomosťami.
                </span>
                Študenti vo všetkých našich programoch majú možnosť stretnúť
                profesionálov, ktorí im odovzdajú všetko potrebné pre
                naštartovanie kariéry, alebo nakopnutie už rozbehnutej.
              </p>
            </div>
            <div className={s.imgBox}>
              <div className={s.frameTwo}>
                <Frame />
              </div>
              <div className={s.image}>
                <Image
                  src="/images/aboutPage/ako-pracuem.png"
                  alt="Náš cieľ"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
