import s from "./MenuNameOfProgram.module.css";
import { LabelPro, LabelJr, LabelUx, LabelMedia, Dl } from "../../Sprite";
import Link from "next/link";

const MenuNameOfProgram = () => {
  const labelsArr = [
    {
      elem: <LabelPro />,
      id: 1,
    },
    {
      elem: <LabelJr />,
      id: 1,
    },
    {
      elem: <LabelUx />,
      id: 1,
    },
    {
      elem: <LabelMedia />,
      id: 1,
    },
  ];

  return (
    <section className="container">
      <div className={s.group}>
        <h3 className={s.title}>Vyberte si vzdelávací program</h3>
        <ul className={s.list}>
          {labelsArr.map((icon) => (
            <li className={s.item} key={icon.id}>
              <Link href="/1">
                <a className={s.link}>
                  <div className={s.itemChild}>
                    <p className={s.label}>
                      DIGITAL LEAGUE
                      <span className={s.labelAccent}> PROGRAM</span>
                    </p>
                    <div className={s.logoGroup}>
                      <Dl />
                      <div className={s.ball}>{icon.elem}</div>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MenuNameOfProgram;
