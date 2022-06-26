import s from "./CooperationHero.module.css";
// import { useState } from "react";

const CooperationHero = ({ isTrue, setIsTrue }) => {
  // const [isPressFirst, setIsPressFirst] = useState(true);

  return (
    <section className="container">
      <p className={s.aboutLabel}>Vyberte si spôsob spolupráce</p>
      <h1 className={s.aboutTitle}>
        Rozvíjajte zamestnancov <br />
        Inovujte produkty
      </h1>
      <ul className={s.btnGroup}>
        <li className={s.itemBtn}>
          <button className={s.btn} onClick={() => setIsTrue(true)}>
            TVORBA INOVÁCIÍ
          </button>
        </li>
        <li className={s.itemBtn}>
          <button className={s.btn} onClick={() => setIsTrue(false)}>
            VZDELÁVANIE ZAMESTNANCOV
          </button>
        </li>
      </ul>

      {isTrue && (
        <div className={s.flexBox}>
          <div className={s.box}>
            <h3 className={s.labelBox}>Tvorba inovácií</h3>
            <p className={s.textBox}>
              V rámci Digital Leauge programu
              <span className={s.partOftext}>
                {" "}
                rozpracujeme vašu ideu a vytvoríme inovačný produkt{" "}
              </span>
              s reálnymi užívateľmi, ktorý nasadíme na trh. Inovujme vaše
              produkty, zabezpečme ich efektívnejšie využívanie a tým
              konkurenčnú výhodu.
            </p>
          </div>
        </div>
      )}

      {!isTrue && (
        <div className={s.flexBox}>
          <div className={s.box}>
            <h3 className={s.labelBox}>Vzdelávanie zamestnancov</h3>
            <p className={s.textBox}>
              Pomôžeme vám s{" "}
              <span className={s.partOftext}>
                rozvojom vašich zamestnancov.
              </span>{" "}
              Máme pre nich pripravených niekoľko komplexných programov, v rámci
              ktorých nadobudnú praktické skúsenosti v oblasti tvorby
              digitálnych produktov a sebarozvoja.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CooperationHero;
