import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import FeatureList from "./components/featureList/indext";

import ArchitectureImg from "@/assets/images/home/arch.png";
import ArchitectureImgZh from "@/assets/images/home/arch.png";
import RoadMapImg from "@/assets/images/home/roadmap.png";
import RoadMapImgZh from "@/assets/images/home/roadmap.png";
import HomeFeatImg from "@/assets/images/overview/feat-en.png";
import HomeFeatImgZh from "@/assets/images/overview/feat-en.png";

// import { APP_URL } from "./data";
import "@/i18n";
import Styles from "./index.module.less";
import classNames from "classnames";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import { DiscoverSection } from "@/pages/home/components/DiscoverSection";
import { PartnerSection } from "@/pages/home/components/PartnerSection";

const Home: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const roadMapRef = useRef<HTMLDivElement>(null);
  const isZh = i18n.language === "zh";
  useEffect(() => {
    if (location.hash === "#roadmap") {
      roadMapRef?.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  const onJumpUrl = (url?: string) => {
    if (!url) {
      return message.info("comming soon...");
    }

    window.open(url);
  };

  const isMobile = () => {
    const regexMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regexMobile.test(navigator.userAgent);
  };

  return (
    <>
      <div
        className={classNames(Styles["overview"], {
          [Styles["is-mobile"]]: isMobile(),
        })}
      >
        <div className={Styles["overview__main"]}>
          <div className={Styles["title-panel"]}>
            <div>
              <span className={Styles["sub-title"]}>
                {t("overview.title.a")}
              </span>
            </div>
            <div>
              <span className={Styles["sub-title-gradient"]}>
                {t("overview.title.b")}
              </span>
            </div>
            <div>
              <span className={Styles["sub-title"]}>
                {t("overview.title.c")}
              </span>
            </div>
            <div className={Styles["description"]}>
              {t("overview.description")}
            </div>
            <div
              className={Styles["launch-btn"]}
              onClick={() => onJumpUrl("https://download.hala.finance")}
            >
              {t("overview.button")}
            </div>
            <div className={Styles["tooltip"]}>
              <span className={Styles["tooltip"]}>{t("overview.tooltip")}</span>
            </div>
          </div>

          <div className={Styles["main-content"]}>
            <img
              className={Styles["feat"]}
              src={isZh ? HomeFeatImgZh : HomeFeatImg}
            />
          </div>
        </div>
      </div>
      <DiscoverSection />
      <FeatureList />

      <div className={Styles["architecture"]}>
        <div className={Styles["main-title"]}>{t("arch.title")}</div>
        <img
          className={Styles["architecture-main"]}
          src={isZh ? ArchitectureImgZh : ArchitectureImg}
          alt="architecture"
        />
      </div>

      <div className={Styles["roadmap"]} ref={roadMapRef}>
        <div className={Styles["main-title"]}>{t("roadMap.title")}</div>
        <img
          className={Styles["roadmap-main"]}
          src={isZh ? RoadMapImgZh : RoadMapImg}
          alt="roadmap"
        />
      </div>
      <PartnerSection />
    </>
  );
};

export default Home;
