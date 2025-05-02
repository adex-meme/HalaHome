import Styles from "./index.module.less";
import React from "react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import RaydiumImg from "@/assets/images/partner/raydium.png";
import AveImg from "@/assets/images/partner/ave.png";
import AmazonImg from "@/assets/images/partner/amazon.png";
import GoogleImg from "@/assets/images/partner/google.png";
import BaseImg from "@/assets/images/partner/base.png";
import JupiterImg from "@/assets/images/partner/jupiter.png";
import KyberSwapImg from "@/assets/images/partner/kyberswap.png";
import MeteoraImg from "@/assets/images/partner/meteora.png";
import BinanceImg from "@/assets/images/partner/binance.png";
import XImg from "@/assets/images/partner/x.png";
import OrcaImg from "@/assets/images/partner/orca.png";
import OkxImg from "@/assets/images/partner/okx.png";
const LINE1 = [RaydiumImg, AveImg, AmazonImg, GoogleImg, BaseImg, JupiterImg];
const LINE2 = [KyberSwapImg, MeteoraImg, BinanceImg, XImg, OrcaImg, OkxImg];
export const PartnerSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={Styles["partner-section"]}>
      <div className={Styles["partner-section__container"]}>
        <div className={Styles["partner-title"]}>{t("partner.title")}</div>
        <Marquee gradient={false}>
          <div className={Styles["partner-list"]}>
            {LINE1.map((img, index) => (
              <div className={Styles["partner-item"]}>
                <img src={img} alt="img" key={index + "line1"} />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          style={{
            marginTop: "10px",
          }}
          gradient={false}
          direction={"right"}
        >
          <div className={Styles["partner-list"]}>
            {LINE2.map((img, index) => (
              <div className={Styles["partner-item"]}>
                <img src={img} alt="img" key={index + "line1"} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
