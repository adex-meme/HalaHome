import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import FeatureList from "./components/featureList/indext";

import ArchitectureImg from "@/assets/images/home/arch.png";
import ArchitectureImgZh from "@/assets/images/home/arch.png";
import RoadMapImg from "@/assets/images/home/roadmap.png";
import RoadMapImgZh from "@/assets/images/home/roadmap.png";

// import { APP_URL } from "./data";
import "@/i18n";
import Styles from "./index.module.less";
import { useTranslation } from "react-i18next";
import { DiscoverSection } from "@/pages/home/components/DiscoverSection";
import { PartnerSection } from "@/pages/home/components/PartnerSection";
import { MainSection } from "@/pages/home/components/MainSection";

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

  const isMobile = () => {
    const regexMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regexMobile.test(navigator.userAgent);
  };

  return (
    <>
      <MainSection isMobile={isMobile} />
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
