import React from "react";

import Styles from "./index.module.less";

interface OverviewNumCompProps {
  userNum: number;
  groupNum: number;
}

const OverviewNum: React.FC<OverviewNumCompProps> = ({ userNum, groupNum }) => {
  const getFormatNum = (num: number) => {
    const numStr = num + "";

    let result = "";
    let tmpFlag = 0;

    for (let i = numStr.length - 1; i >= 0; i--) {
      if (tmpFlag >= 3) {
        tmpFlag = 0;
        result = "," + result;
      }

      result = numStr[i] + result;
      tmpFlag++;
    }

    return result;
  };
  return (
    <div className={Styles["overview__num"]}>
      <div className={Styles["overview__num-item"]}>
        <div className={Styles["num"]}>{getFormatNum(userNum)}</div>
        <div className={Styles["title"]}>Users Covered</div>
      </div>
      <div className={Styles["overview__num-item"]}>
        <div className={Styles["num"]}>{getFormatNum(groupNum)}</div>
        <div className={Styles["title"]}>Covered Communities</div>
      </div>
    </div>
  );
};
export default OverviewNum;
