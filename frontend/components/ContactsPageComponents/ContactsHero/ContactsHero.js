import s from "./ContactsHero.module.css";
import { Logo } from "../../Sprite";

const ContactsHero = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <h1 className={s.title}>Kontakt</h1>
        <div className={s.contactsGroup}>
          <ul className={s.contactsList}>
            <li className={s.contactsItem}>
              <span className={s.contactsLabel}>Radovan Šalitroš</span>
            </li>
            <li className={s.contactsItem}>+421 908 444 333</li>
            <li className={s.contactsItem}>info@digitalleague.sk</li>
          </ul>
          <div className={s.contactsLine}></div>
          <ul className={s.contactsList}>
            <li className={s.contactsItem}>
              <span className={s.contactsLabel}>Digital League, o.z.</span>
            </li>
            <li className={s.contactsItem}>Jarková 1328/33</li>
            <li className={s.contactsItem}>IČO: 52973981</li>
          </ul>
        </div>

        <div>
          <h2 className={s.mediaTitle}>Médiá</h2>
          <p className={s.mediaLabel}>Logá na stiahnutie</p>
          <div className={s.mediaLogo}>
            <Logo />
          </div>
          <p className={s.mediaText}>
            Stiahnite si logá programov v súbore ZIP.{" "}
          </p>
          <p className={s.mediaBtn}>STIAHNUŤ</p>
        </div>
      </div>
    </section>
  );
};

export default ContactsHero;
