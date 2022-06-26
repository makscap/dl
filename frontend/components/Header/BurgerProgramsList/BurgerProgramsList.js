import React from "react";
import s from "./BurgerProgramsList.module.css";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "../../Sprite";
import { useState } from "react";
import SocialIcons from "../../SocialIcons/SocialIcons";
import { Logo } from "../../Sprite";

function BurgerProgramsList({ setIsOpenPrograms }) {
  return (
    <div className={s.modalField}>
      <div className="container">
        <div className={s.header}>
          <div>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div
            className={s.toggleField}
            onClick={() => setIsOpenPrograms(false)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5832 1.94413L14.0557 0.416626L7.99984 6.47246L1.944 0.416626L0.416504 1.94413L6.47234 7.99996L0.416504 14.0558L1.944 15.5833L7.99984 9.52746L14.0557 15.5833L15.5832 14.0558L9.52733 7.99996L15.5832 1.94413Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <h2 className={s.nameGroup}>PROGRAMY</h2>

        <ul className={s.modalList}>
          <li className={s.listItem}>
            <Link href="/programs">
              <a className={s.link}>
                DIGITAL LEAGUE <span className={s.subLabel}>PROGRAM</span>
              </a>
            </Link>
          </li>
          <li className={s.listItem}>
            <Link href="/programs">
              <a className={s.link}>
                DIGITAL LEAGUE <span className={s.subLabel}>UX BOOTCAMP</span>
              </a>
            </Link>
          </li>
          <li className={s.listItem}>
            <Link href="/programs">
              <a className={s.link}>
                DIGITAL LEAGUE <span className={s.subLabel}>JUNIOR</span>
              </a>
            </Link>
          </li>
          <li className={s.listItem}>
            <Link href="/programs">
              <a className={s.link}>
                DIGITAL LEAGUE <span className={s.subLabel}>MEDIA</span>
              </a>
            </Link>
          </li>
        </ul>

        <SocialIcons />
      </div>
    </div>
  );
}

export default BurgerProgramsList;
