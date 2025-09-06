import { useTranslation } from "react-i18next";
import { message } from "antd";
import classNames from "classnames";
import { QRCodeSVG } from "qrcode.react";
import { AppStoreIcon, AndroidIcon } from "@/components/Icons";
import Styles from "./index.module.less";
import HomeFeatImg from "@/assets/images/overview/intro.png";
import { APP_URL } from "../../data";

interface MainSectionProps {
  isMobile: () => boolean;
}

export const MainSection: React.FC<MainSectionProps> = ({ isMobile }) => {
  const { t } = useTranslation();

  const onJumpUrl = (url?: string) => {
    if (!url) {
      return message.info(t("general.comingSoon") || "Coming soon...");
    }
    window.open(url);
  };

  return (
    <div
      className={classNames(Styles["main-section"], {
        [Styles["is-mobile"]]: isMobile(),
      })}
    >
      <div className={Styles["container"]}>
        <div className={Styles["content"]}>
          <div className={Styles["left-content"]}>
            <h1 className={Styles["title"]}>
              {t("overview.title.a")}
              <br />
              <span className={Styles["title-gradient"]}>
                {t("overview.title.b")}
              </span>
            </h1>

            <div className={Styles["download-section"]}>
              <div className={Styles["download-buttons"]}>
                <button
                  className={Styles["download-btn"]}
                  onClick={() => onJumpUrl(APP_URL)}
                >
                  <AppStoreIcon className={Styles["btn-icon"]} />
                  <span>{t("overview.appStore")}</span>
                </button>

                {/* <button
                  className={Styles["download-btn"]}
                  onClick={() => onJumpUrl(APP_URL)}
                >
                  <GooglePlayIcon className={Styles["btn-icon"]} />
                  <span>{t("overview.googlePlay")}</span>
                </button> */}

                <button
                  className={Styles["download-btn"]}
                  onClick={() => onJumpUrl(APP_URL)}
                >
                  <AndroidIcon className={Styles["btn-icon"]} />
                  <span>{t("overview.android")}</span>
                </button>
              </div>

              <div className={Styles["qr-section"]}>
                <div className={Styles["qr-code"]}>
                  <QRCodeSVG 
                    value="https://download.hala.finance"
                    size={137}
                    level="M"
                    fgColor="#000000"
                    bgColor="#ffffff"
                  />
                </div>
                <div className={Styles["qr-text"]}>
                  <div className={Styles["qr-label"]}>{t("overview.scanToDownload")}</div>
                  <div className={Styles["qr-description"]}>{t("overview.iOSAndAndroid")}</div>
                </div>
              </div>
            </div>

            <div className={Styles["security-note"]}>
              {t("overview.tooltip")}
            </div>
          </div>

          <div className={Styles["right-content"]}>
            <div className={Styles["phone-mockup"]}>
              <img src={HomeFeatImg} alt="Phone Mockup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};