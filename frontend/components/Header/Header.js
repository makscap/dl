import Link from "next/link";
import s from "./Header.module.css";
import Image from "next/image";
import { Logo } from "../Sprite";
import ToggleIconMenu from "./ToggleIconMenu/ToggleIconMenu";
import BurgerMenuList from "./BurgerMenuList/BurgerMenuList";
import { useState } from "react";
import BurgerProgramsList from "../Header/BurgerProgramsList/BurgerProgramsList";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrograms, setIsOpenPrograms] = useState(false);

  const btnAlert = () => {
    return alert("In developing ...");
  };

  const handleIcon = () => {
    return setIsOpen(!isOpen);
  };

  const closeBurgerMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="container">
      <nav className={s.navbar}>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={s.btnGroup}>
          <button className={s.btnTab}>PRIHLÁšKA</button>
          {isOpen && (
            <BurgerMenuList
              closeBurgerMenu={closeBurgerMenu}
              isOpen={isOpen}
              handleIcon={handleIcon}
            />
          )}
          <ToggleIconMenu isOpen={isOpen} handleIcon={handleIcon} />
        </div>
        <div className={s.navigation}>
          <ul className={s.navList}>
            <li className={s.navItem} onClick={() => setIsOpenPrograms(true)}>
              <Link href="#">
                <a className={s.navLink} title="height">
                  PROGRAMY
                </a>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href="/about">
                <a className={s.navLink}>O NAS</a>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href="/cooperation">
                <a className={s.navLink}>SPOLUPRACA</a>
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href="/contacts">
                <a className={s.navLink}>KONTAKT</a>
              </Link>
            </li>
          </ul>
          {isOpenPrograms && (
            <BurgerProgramsList setIsOpenPrograms={setIsOpenPrograms} />
          )}
        </div>

        <div className={s.navigation}>
          <div className={s.button}>
            <Link href="/programs">
              <a className={s.btnLink}>PRIHLÁŠKA</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
