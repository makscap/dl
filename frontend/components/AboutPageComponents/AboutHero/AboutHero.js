import s from "./AboutHero.module.css";
import SocialIcons from "../../SocialIcons/SocialIcons";

const AboutHero = () => {
  return (
    <section className="container">
      <p className={s.aboutLabel}>O organizácii </p>
      <h1 className={s.aboutTitle}>
        Digital <span className={s.partOfLogo}>League</span> je organizácia,
        ktorej úlohou je vzdelávať ľudí s chuťou vzdelávať sa. Zmyslom našej
        práce je vytvárať moderný a funkčný spôsob výučby v oblastiach vývoja
        digitálnych inovácií a sebarozvoja.
      </h1>
      <p className={s.text}>
        Ak chcete vidieť viac zo života Digital League, sledujte naše siete.
      </p>
      <div className={s.social}>
        <SocialIcons color={"#1A1A1A"} />
      </div>
    </section>
  );
};

export default AboutHero;
