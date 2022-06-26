import s from "./SocialIcons.module.css";
import {
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../../components/Sprite";

const SocialIcons = ({ color }) => {
  return (
    <div>
      <ul className={s.socialList}>
        <li className={s.item}>
          <a href="https://www.facebook.com/">
            <FacebookIcon color={color} />
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.linkedin.com/">
            <LinkedinIcon color={color} />
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.instagram.com/">
            <InstagramIcon color={color} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
