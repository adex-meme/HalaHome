import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import FeatureList from "./components/featureList/indext";

import ArchitectureImg from "@/assets/images/architecture.png";
import RoadMapImg from "@/assets/images/roadmap.png";
import HomeBgImg from '@/assets/images/bg.png';
import HomeFeatImg from '@/assets/images/feat.png';

// import { APP_URL } from "./data";

import Styles from "./index.module.less";
import classNames from "classnames";
import { message } from "antd";

const Home: React.FC = () => {
  const location = useLocation();

  const roadMapRef = useRef<HTMLDivElement>(null);

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
  }

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
                Professionals use professional systems.
              </span>
            </div>
            <div>
              <span className={Styles["sub-title"]}>
                High concurrency, fast, and intelligent.
              </span>
            </div>
          </div>

          <div className={Styles["main-content"]}>
            <div className={Styles["sub-content"]}>
              <div className={Styles["launch-btn"]} onClick={() => onJumpUrl()}>
                Launch App
              </div>

              <div className={Styles["short-desc"]}>
                Get gold dog {" "}
                <span className={Styles["agg"]}>faster</span>
              </div>
            </div>
            <div className={Styles["sub-detail"]}>
              <img className={Styles["bg"]} src={HomeBgImg} />
              <img className={Styles["feat"]} src={HomeFeatImg} />
            </div>
          </div>
        </div>
      </div>

      <FeatureList />

      <div className={Styles["architecture"]}>
        <div className={Styles["main-title"]}>Technical architecture</div>
        <img
          className={Styles["architecture-main"]}
          src={ArchitectureImg + "?v=20240909"}
          alt="architecture"
        />
      </div>

      <div className={Styles["roadmap"]} ref={roadMapRef}>
        <div className={Styles["main-title"]}>Road Map</div>
        <img
          className={Styles["roadmap-main"]}
          src={RoadMapImg}
          alt="roadmap"
        />
      </div>
    </>
  );
};

export default Home;
