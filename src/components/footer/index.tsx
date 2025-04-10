import React from "react";

import IntroImg from "@/assets/images/intro.png";
import XImg from "@/assets/images/link_x.png";
import TgImg from "@/assets/images/link_tg.png";

import Styles from "./index.module.less";

interface FooterCompProps {}

const APP_LIST = [
  {
    name: "iPhone/iPad",
    url: "",
  },
  {
    name: "Android",
    url: "",
  },
  {
    name: "Mobile web/Web browser",
    url: "",
  },
];

const LINK_LIST = [
  {
    name: "telegram",
    icon: TgImg,
    url: "https://t.me/Halafinance",
  },
  {
    name: "x",
    icon: XImg,
    url: "https://x.com/Halafinance",
  },
];

const Footer: React.FC<FooterCompProps> = () => {
  const onJumpUrl = (url: string) => {
    if (!url) {
      return;
    }

    window.open(url);
  };
  return (
    <div className={Styles["footer"]}>
      <div className={Styles["footer__container"]}>
        <div className={Styles["intro"]}>
          <img className={Styles["intro-icon"]} src={IntroImg} alt="intro" />
          <div className={Styles["intro-content"]}>
            Hala is a new generation AI tool that combines super nodes and AI
            big data analysis work. Use ultra fast speed and intelligent
            analysis to help users discover good projects.
          </div>
        </div>
        <div className={Styles["apps"]}>
          <div className={Styles["apps-title"]}>DApps</div>
          {APP_LIST.map((appInfo) => (
            <div
              key={appInfo.name}
              className={Styles["apps-item"]}
              onClick={() => onJumpUrl(appInfo.url)}
            >
              {appInfo.name}
            </div>
          ))}
        </div>
        <div className={Styles["links"]}>
          {LINK_LIST.map((linkInfo) => (
            <img
              key={linkInfo.name}
              className={Styles["links-icon"]}
              src={linkInfo.icon}
              alt={linkInfo.name}
              onClick={() => onJumpUrl(linkInfo.url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
