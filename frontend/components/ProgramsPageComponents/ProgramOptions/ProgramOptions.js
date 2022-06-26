import s from "./ProgramOptions.module.css";
import {
  AroundText,
  ArrowDown,
  LabelPro,
  LabelJr,
  LabelUx,
  LabelMedia,
  Dl,
} from "../../Sprite";
import Link from "next/link";
import FormProgram from "../FormProgram/FormProgram";

import { useSelector, useDispatch } from "react-redux";
import { changeProgram, selectProgram } from "../../../store/programSlice";

const ProgramOptions = () => {
  const program = useSelector(selectProgram);
  const dispatch = useDispatch();

  const arrLabels = [
    "DIGITAL LEAGUE PROGRAM",
    "DIGITAL LEAGUE JUNIOR",
    "DIGITAL LEAGUE UX BOOTCAMP",
    "DIGITAL LEAGUE MEDIA",
  ];

  return (
    <div>
      <section className={s.section}>
        <div className="container">
          <div className={s.svgField}>
            <div className={s.svgImg}>
              <AroundText />
            </div>
            <span className={s.svgText}>Vyber si vzdelávací program</span>
          </div>
          <div className={s.arrow}>
            <ArrowDown />
          </div>
          <ul className={s.list}>
            {arrLabels.map((text, indx) => (
              <li className={s.item} key={indx}>
                <button
                  className={s.btn}
                  onClick={() => {
                    dispatch(changeProgram(indx + 1));
                  }}
                >
                  {/* <Link href="/1"> */}
                  {/* <a> */}
                  <div className={s.itemChild}>{text}</div>
                  {/* </a> */}
                  {/* </Link> */}
                </button>
              </li>
            ))}
          </ul>
          {console.log(program)}{" "}
        </div>
      </section>
      {/* <section>
        {program.type == 1 && <FormProgram />}
        {program.type == 2 && (
          <div className="w-[100px] h-[100px] bg-[#642466]">22222222</div>
        )}
        {program.type === 3 && (
          <div className="w-[100px] h-[100px] bg-[#876543]">33333333</div>
        )}
        {program.type === 4 && (
          <div className="w-[100px] h-[100px] bg-[#843721]">44444444</div>
        )}
      </section> */}
    </div>
  );
};

export default ProgramOptions;
