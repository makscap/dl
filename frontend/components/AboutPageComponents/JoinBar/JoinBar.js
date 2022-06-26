import s from "./JoinBar.module.css";
import { ArrowRight } from "../../Sprite";
import Link from "next/link";

const JoinBar = () => {
  const btnAlert = () => {
    return alert("In developing ...");
  };

  return (
    <section className="container">
      <div className={s.group}>
        <div>
          <h3 className={s.title}>Chcete s nami spolupracovať ?</h3>
          <p className={s.text}>
            Ste firma a chcete vzdelávať svojich zamestnancov, podporiť našu
            organizáciu alebo zapojiť svoju víziu produktu do programu?{" "}
          </p>
        </div>
        <div className={s.btnParent}>
          <button className={s.btn} onClick={btnAlert}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinBar;
