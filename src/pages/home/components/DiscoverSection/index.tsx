import Styles from "./index.module.less";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Collapse, CollapseProps } from "antd";
import AnalysisImg from "@/assets/images/discover/analysis.png";
import HighImg from "@/assets/images/discover/high.png";
import QuickImg from "@/assets/images/discover/quick.png";
import ToolImg from "@/assets/images/discover/tool.png";
import SharingImg from "@/assets/images/discover/sharing.png";
export const DiscoverSection: React.FC = () => {
  const { t } = useTranslation();
  const items = useMemo<CollapseProps["items"]>(() => {
    return [
      {
        key: "1",
        label: (
          <div className={Styles["list-title"]}>
            <img src={QuickImg} />
            <p>{t("discover.list.quick.title")}</p>
          </div>
        ),
        children: (
          <div className={Styles["list-item"]}>
            {t("discover.list.quick.content")}
          </div>
        ),
        showArrow: false,
      },
      {
        key: "2",
        label: (
          <div className={Styles["list-title"]}>
            <img src={HighImg} />
            <p>{t("discover.list.high.title")}</p>
          </div>
        ),
        children: (
          <p className={Styles["list-item"]}>
            {t("discover.list.high.content")}
          </p>
        ),
        showArrow: false,
      },
      {
        key: "3",
        label: (
          <div className={Styles["list-title"]}>
            <img src={SharingImg} />
            <p>{t("discover.list.sharing.title")}</p>
          </div>
        ),
        children: (
          <p className={Styles["list-item"]}>
            {t("discover.list.sharing.content")}
          </p>
        ),
        showArrow: false,
      },
      {
        key: "4",
        label: (
          <div className={Styles["list-title"]}>
            <img src={AnalysisImg} />
            <p>{t("discover.list.analysis.title")}</p>
          </div>
        ),
        children: (
          <p className={Styles["list-item"]}>
            {t("discover.list.analysis.content")}
          </p>
        ),
        showArrow: false,
      },
      {
        key: "5",
        label: (
          <div className={Styles["list-title"]}>
            <img src={ToolImg} />
            <p>{t("discover.list.tool.title")}</p>
          </div>
        ),
        children: (
          <p className={Styles["list-item"]}>
            {t("discover.list.tool.content")}
          </p>
        ),
        showArrow: false,
      },
    ];
  }, [t]);
  return (
    <div className={Styles["discover-section"]}>
      <div className={Styles["discover-section__container"]}>
        <div className={Styles["title-section"]}>{t("discover.title")}</div>
        <div className={Styles["list-section"]}>
          <Collapse accordion defaultActiveKey={["1"]} ghost items={items} />
        </div>
      </div>
    </div>
  );
};
