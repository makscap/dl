import Link from "next/link";
import s from "./Footer.module.css";
import {
  LogoReverse,
  FidureArrow,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../../components/Sprite";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div>
          <div className={s.logo}>
            <Link href="/">
              <a className={s.logoImg}>
                <LogoReverse />
              </a>
            </Link>
          </div>

          <div className={s.group}>
            <div>
              <div className={s.figureArrow}>
                <FidureArrow />
              </div>

              <ul className={s.contacts}>
                <li className={s.contantItem}>
                  <a href="mailto:info@digitalleague.sk">
                    info@digitalleague.sk
                  </a>
                </li>
                <li className={s.contantItem}>
                  <a href="tel:+421951596474">+421 951 596 474</a>
                </li>
              </ul>

              <ul className={s.adressGroup}>
                <li className={s.name}>Digital League, o.z.</li>
                <li>
                  <a href="http://maps.google.com/?q=04001 Jarková 1328/33, Košice, Slovakia">
                    Jarková 1328/33, 040 01, Košice
                  </a>
                </li>
                <li>
                  <span className={s.ico}>IČO:</span> 52973981
                </li>
              </ul>
            </div>

            <div className={s.linksGroup}>
              <div className={s.infoGroup}>
                <p className={s.infoLabel}>Info</p>
                <ul className={s.infoList}>
                  <li className={s.infoItem}>
                    <Link href="/program">
                      <a className={s.navLink}>O nás</a>
                    </Link>
                  </li>
                  <li className={s.infoItem}>
                    <Link href="/mini">
                      <a className={s.navLink}>Spolupráca</a>
                    </Link>
                  </li>
                  <li className={s.infoItem}>
                    <Link href="/bootcamp">
                      <a className={s.navLink}>Kontakt</a>
                    </Link>
                  </li>
                  <li className={s.infoItem}>
                    <Link href="/gramotnost">
                      <a className={s.navLink}>GDPR</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={s.infoGroup}>
                <p className={s.infoLabel}>Programy</p>
                <ul>
                  <li className={s.infoItem}>
                    <Link href="/program">
                      <a className={s.navLink}>Digital League Program</a>
                    </Link>
                  </li>
                  <li className={s.infoItem}>
                    <Link href="/program">
                      <a className={s.navLink}>Digital League Mini</a>
                    </Link>
                  </li>
                  <li className={s.infoItem}>
                    <Link href="/program">
                      <a className={s.navLink}>UX Bootcamp</a>
                    </Link>
                  </li>
                  <li className={s.infoItem}>
                    <Link href="/program">
                      <a className={s.navLink}>Mediálna gramotnosť</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <ul className={s.adressGroupMobile}>
              <li className={s.adressItem}>
                <span className={s.name}>Digital League, o.z.</span>
              </li>
              <li className={s.adressItem}>
                <a href="http://maps.google.com/?q=04001 Jarková 1328/33, Košice, Slovakia">
                  Jarková 1328/33, 040 01, Košice
                </a>
              </li>
              <li className={s.adressItem}>
                <span className={s.ico}>IČO:</span> 52973981
              </li>
            </ul>

            <div className={s.socialGroup}>
              <ul className={s.socialList}>
                <li>
                  <a href="https://www.facebook.com/">
                    <FacebookIcon color={"#ffffff"} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <LinkedinIcon color={"#ffffff"} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon color={"#ffffff"} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
