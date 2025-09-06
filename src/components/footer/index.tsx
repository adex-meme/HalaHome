import React, { useMemo } from "react";

import IntroImg from "@/assets/images/intro.png";
import I18nImg from "@/assets/images/footer/i18n.png";
import XImg from "@/assets/images/link_x.png";
import TgImg from "@/assets/images/link_tg.png";

import Styles from "./index.module.less";
import { useTranslation } from "react-i18next";

interface FooterCompProps {}
const switchLang: Record<string, { to: string; name: string }> = {
  zh: {
    to: "en",
    name: "English",
  },
  en: {
    to: "zh",
    name: "简体中文",
  },
};
const Footer: React.FC<FooterCompProps> = () => {
  const { t, i18n } = useTranslation();
  const onJumpUrl = (url: string) => {
    if (!url) {
      return;
    }

    window.open(url);
  };
  const APP_LIST = useMemo(() => {
    return [
      {
        name: t("footer.dapps.iphone"),
        url: "https://download.hala.finance",
      },
      {
        name: t("footer.dapps.android"),
        url: "https://download.hala.finance",
      },
    ];
  }, [t]);

  const LINK_LIST = useMemo(() => {
    return [
      {
        name: "telegram",
        icon: TgImg,
        url: "https://t.me/Halafinance",
      },
      {
        name: "X",
        icon: XImg,
        url: "https://x.com/Halafinance",
      },
    ];
  }, []);
  return (
    <div className={Styles["footer"]}>
      <div className={Styles["footer__container"]}>
        <div className={Styles["intro"]}>
          <img className={Styles["intro-icon"]} src={IntroImg} alt="intro" />
          <div className={Styles["intro-content"]}>{t("footer.intro")}</div>
        </div>
        <div className={Styles["apps"]}>
          <div className={Styles["apps-title"]}>{t("footer.dapps.title")}</div>
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
        <div className={Styles["links-i18n-group"]}>
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
          <div
            className={Styles["i18n-button"]}
            onClick={() => i18n.changeLanguage(switchLang[i18n.language].to)}
          >
            <img src={I18nImg} />
            <p>{switchLang[i18n.language].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
