import s from "./OurClients.module.css";
import { Logo } from "../../Sprite";
import Image from "next/image";

const OurClients = () => {
  return (
    <div className={s.slider}>
      <ul>
        <li>
          <Logo />
          {/* <Image src="/images/ipma.svg" width="100%" height="100%" /> */}
        </li>
        <li>
          <p className={s.change}>MUST CHANGE IT!</p>
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Logo />
        </li>
      </ul>
    </div>
  );
};

export default OurClients;
