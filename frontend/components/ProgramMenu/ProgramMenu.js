import s from "./ProgramMenu.module.css";
import {
  AroundText,
  ArrowDown,
  LabelPro,
  LabelJr,
  LabelUx,
  LabelMedia,
  Dl,
} from "../../components/Sprite";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { changeProgram, selectProgram } from "../../store/programSlice";

const ProgramMenu = () => {
  const dispatch = useDispatch();

  const labelsArr = [
    {
      elem: <LabelPro />,
      id: 1,
    },
    {
      elem: <LabelJr />,
      id: 2,
    },
    {
      elem: <LabelUx />,
      id: 3,
    },
    {
      elem: <LabelMedia />,
      id: 4,
    },
  ];

  return (
    <div className="container">
      <h1 className={s.hero}>
        Miesto, kde rastieš
        <br /> ty aj tvoje nápady.
      </h1>
      <div>
        <div className={s.priglaskaGroup}>
          <button className={s.btnPriglaska}>PRIHLÁšKA</button>
        </div>
        <div className={s.svgField}>
          <div className={s.svgImg}>
            <AroundText />
          </div>
          <span className={s.svgText}>Vyber si vzdelávací program</span>
        </div>
      </div>
      <div className={s.arrow}>
        <ArrowDown />
      </div>

      <ul className={s.list}>
        {labelsArr.map((label) => (
          <li
            className={s.item}
            key={label.id}
            onClick={() => dispatch(changeProgram(label.id))}
          >
            <div className={s.child}></div>
            <Link href="/programs">
              <a>
                <div className={s.itemChild}>
                  <p className={s.label}>
                    DIGITAL LEAGUE
                    <span className={s.labelAccent}> PROGRAM</span>
                  </p>
                  <div className={s.logoGroup}>
                    <div className={s.dlLogo}>
                      <Dl />
                    </div>
                    {/* <p className={s.labetOfBall}>DIGITAL LEAGUE</p> */}
                    <div className={s.ball}>
                      <div className={s.ballText}>{label.elem}</div>
                    </div>
                  </div>
                  <p className={s.text}>
                    5 mesačný program, v ktorom vytvoríš produkt, ktorý pôjde na
                    trh.
                  </p>
                  <p className={s.date}>Najbližší termín 9/2022</p>
                </div>
              </a>
            </Link>
            <div className={s.animation}></div>
          </li>
        ))}
      </ul>

      <div className={s.sayThanks}>
        <p>
          Posúvaj sa vpred vďaka Digital
          <span className={s.sayThanksLogo}> League</span> prakticky a
          efektívne. Čaká ťa svet digitálnych inovácií, osobnostného rastu a
          kvalitného vzdelávania.
        </p>
      </div>
    </div>
  );
};

export default ProgramMenu;
