import React from "react";
import s from "./BurgerMenuList.module.css";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon, InstagramIcon, Logo } from "../../Sprite";
import { useState } from "react";
import ToggleIconMenu from "../ToggleIconMenu/ToggleIconMenu";

function BurgerMenuList({ closeBurgerMenu, isOpen, handleIcon }) {
  const [isOpenProgram, setIsOpenProgram] = useState(false);

  return (
    <div className={s.modalMenu}>
      <div className={s.modalField}>
        <div className="container">
          <div className={s.navbar}>
            <div className={s.header}>
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <div className={s.btnGroup}>
              <ToggleIconMenu isOpen={isOpen} handleIcon={handleIcon} />
            </div>
          </div>

          <ul className={s.modalList}>
            <li
              className={s.listItem}
              onClick={() => setIsOpenProgram(!isOpenProgram)}
            >
              <div className={s.programyItem}>
                <p className={s.link}>Programy</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 6h10l-5 9-5-9z"></path>
                </svg>
              </div>
              {isOpenProgram && (
                <ul className={s.subList}>
                  <li className={s.subItem}>
                    DIGITAL LEAGUE <span className={s.subLabel}>PROGRAM</span>
                  </li>
                  <li className={s.subItem}>
                    DIGITAL LEAGUE <span className={s.subLabel}>JUNIOR</span>
                  </li>
                  <li className={s.subItem}>
                    DIGITAL LEAGUE <span className={s.subLabel}>JUNIOR</span>
                  </li>
                  <li className={s.subItem}>
                    DIGITAL LEAGUE <span className={s.subLabel}>MEDIA</span>
                  </li>
                </ul>
              )}
            </li>
            <li className={s.listItem} onClick={closeBurgerMenu}>
              <Link href="/about">
                <a className={s.link}>O nás</a>
              </Link>
            </li>
            <li className={s.listItem} onClick={closeBurgerMenu}>
              <Link href="/cooperation">
                <a className={s.link}>Spolupráca</a>
              </Link>
            </li>
            <li className={s.listItem} onClick={closeBurgerMenu}>
              <Link href="/contacts">
                <a className={s.link}>Kontakt</a>
              </Link>
            </li>
          </ul>

          <ul className={s.iconGroup}>
            <li className={s.iconItem} onClick={closeBurgerMenu}>
              <a href="https://www.facebook.com/">
                <FacebookIcon color="#1A1A1A" width="37px" height="37px" />
              </a>
            </li>
            <li className={s.iconItem} onClick={closeBurgerMenu}>
              <a href="https://www.linkedin.com/">
                <LinkedinIcon color="#1A1A1A" width="37px" height="37px" />
              </a>
            </li>
            <li className={s.iconItem} onClick={closeBurgerMenu}>
              <a href="https://www.instagram.com/">
                <InstagramIcon color="#1A1A1A" width="37px" height="37px" />
              </a>
            </li>
          </ul>

          <button className={s.btn}>PRIHLÁŠKA</button>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenuList;
