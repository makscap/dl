import s from "./FormProgram.module.css";
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
import { useSelector, useDispatch } from "react-redux";
import { changeProgram, selectProgram } from "../../../store/programSlice";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
const FormProgram = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState();

  return (
    <section className={s.section}>
      <div className="container">
        <h2 className={s.title}>Registrácia na program</h2>
        <p className={s.text}>
          Do naších tímov vyberáme ľudí, ktorí majú chuť pracovať, neboja sa
          výziev a chcú zlepšiť svoju pozíciu na trhu. Ak Ťa naša ponuka
          zaujala, stačí ak nám zašleš svoj životopis a následne sa Ti ozveme.
        </p>
        <form className={s.form}>
          <label className={s.formField}>
            <input
              type="text"
              name="name"
              className={s.formInput}
              placeholder=" "
            />

            <span className={s.formLabel}>Name</span>
          </label>

          <label className={s.formField}>
            <input
              type="text"
              name="name"
              className={s.formInput}
              placeholder=" "
            />
            <span className={s.formLabel}>Surname</span>
          </label>
          <label className={s.formField}>
            <input
              type="email"
              name="mail"
              className={s.formInput}
              placeholder=" "
            />

            <span className={s.formLabel}>Email</span>
          </label>

          <label className={s.formField}>
            <input
              type="tel"
              name="tel"
              className={s.formInput}
              placeholder=" "
            />

            <span className={s.formLabel}>Phone</span>
          </label>

          <label className={s.formField}>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              //   className={s.formInput}
              inputClass={s.formInput}
            />
          </label>

          {/* <label className={s.formField}> */}
          <label htmlFor="cars" className={s.formField}>
            Choose a car:
          </label>
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>

          {/* </label> */}

          <label className={s.formField}>
            <textarea
              className={s.formInputComment}
              name="comment"
              placeholder=" "
            ></textarea>
            <span className={s.formLabelComment}>Comment</span>
          </label>

          <label className={s.formField} type="checkbox">
            <input
              className={s.checkbox}
              type="checkbox"
              name="topic"
              value="check"
            />
            <span className={s.icon}></span>
            <span className={s.checkboxText}>
              Súhlasím so
              <a href="" className={s.checkboxLink}>
                spracovaním osobných údajov
              </a>
            </span>
          </label>
        </form>
      </div>
    </section>
  );
};

export default FormProgram;
