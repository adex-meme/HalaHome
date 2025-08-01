import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import LogoImg from "@/assets/images/logo.png";

import Styles from "./index.module.less";
import { Privacy_URL } from "./data";
import { useTranslation } from "react-i18next";

const enum HEADER_TAB {
  HOME,
  ROADMAP,
  DATAGRAPH,
}

interface HeaderCompProps {}

const Header: React.FC<HeaderCompProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<HEADER_TAB>(HEADER_TAB.HOME);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab(
        location.hash === "#roadmap" ? HEADER_TAB.ROADMAP : HEADER_TAB.HOME,
      );
    } else if (location.pathname === "/data-graph") {
      setActiveTab(HEADER_TAB.DATAGRAPH);
    }

    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  const onToHome = () => {
    navigate("/");
  };

  const onToRoadMap = () => {
    navigate("/#roadmap");
  };

  const onToDoc = () => {
    onJumpUrl("https://docs.hala.finance");
  };

  // const onToDataGraph = () => {
  //   navigate("/data-graph");
  // };
  const onToGithub = () => {
    onJumpUrl("https://github.com/HALA-finance");
  };

  const onJumpUrl = (url?: string) => {
    if (!url) {
      return;
    }

    window.open(url);
  };

  const onPageScroll = useCallback(() => {
    const scrollTop = window.scrollY || window.pageYOffset;

    setIsTop(scrollTop <= 50);
  }, []);

  return (
    <div className={Styles["header"]}>
      <div
        className={classNames(Styles["header__panel"], {
          [Styles["top"]]: isTop,
        })}
      >
        <div className={Styles["header__container"]}>
          <img
            className={Styles["header__logo"]}
            src={LogoImg}
            alt="logo"
            onClick={onToHome}
          />
          <div className={Styles["header__nav"]}>
            <div
              className={classNames(Styles["header__nav-item"], {
                [Styles["active"]]: activeTab === HEADER_TAB.HOME,
              })}
              onClick={onToHome}
            >
              {t("header.home")}
            </div>
            <div
              className={classNames(Styles["header__nav-item"], {
                [Styles["active"]]: activeTab === HEADER_TAB.ROADMAP,
              })}
              onClick={onToRoadMap}
            >
              {t("header.roadMap")}
            </div>
            {/* <div
              className={classNames(Styles["header__nav-item"], {
                [Styles["active"]]: activeTab === HEADER_TAB.DATAGRAPH,
              })}
              onClick={onToDataGraph}
            >
              Data Graph
            </div> */}

            <div
              className={Styles["header__nav-item"]}
              onClick={() => onJumpUrl(Privacy_URL)}
            >
              {t("header.privacy")}
            </div>
            <div className={Styles["header__nav-item"]} onClick={onToDoc}>
              {t("header.docs")}
            </div>
            <div className={Styles["header__nav-item"]} onClick={onToGithub}>
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
