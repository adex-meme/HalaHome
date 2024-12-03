import React, { useEffect, useRef, useState } from "react";

import FeatureItem from "@/components/featureItem";
import { FeatureType } from "@/components/featureItem/data";

import Styles from "./index.module.less";
import classNames from "classnames";

const FEATURE_LIST = [
  FeatureType.Privacy,
  FeatureType.Data,
  FeatureType.Sustainable,
  FeatureType.AI,
  FeatureType.OpenAndFair,
];

const CONTAINER_WIDTH = 1200;
const ITEM_WIDTH = 343;
const GAP_WIDTH = 24;
const MAX_LEN =
  FEATURE_LIST.length * ITEM_WIDTH + GAP_WIDTH * (FEATURE_LIST.length - 1);
const MIN_LEFT = CONTAINER_WIDTH - MAX_LEN;

const FeatureList: React.FC = () => {
  const [curLeft, setCurLeft] = useState(0);
  const [curActive, setCurActive] = useState(0);

  const curActiveRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    showNext();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    caculateLeft();
  }, [curActive]);

  const showNext = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const nextIndex = (curActiveRef.current + 1) % FEATURE_LIST.length;
      setCurActive(FEATURE_LIST[nextIndex]);
      curActiveRef.current = nextIndex;

      showNext();
    }, 3000);
  };

  const stopShowNext = () => {
    clearTimeout(timerRef.current);
  }

  const onMouseEnterItem = (index: number) => {
    setCurActive(index);
    curActiveRef.current = index;
    stopShowNext();
  };

  const onMouseLeaveItem = () => {
    showNext();
  }

  const caculateLeft = () => {
    const moveDir = getMoveOffset(
      [curLeft * -1, curLeft * -1 + CONTAINER_WIDTH],
      [
        (ITEM_WIDTH + GAP_WIDTH) * curActive,
        (ITEM_WIDTH + GAP_WIDTH) * curActive + ITEM_WIDTH,
      ],
    );

    setCurLeft(moveDir < 0 ? 0 : moveDir > 0 ? MIN_LEFT : curLeft);
  };

  const getMoveOffset = (
    containerRange: [number, number],
    widthRange: [number, number],
  ) => {
    if (widthRange[0] < containerRange[0]) {
      return -1;
    } else if (widthRange[1] > containerRange[1]) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <div className={Styles["features"]}>
      <div
        className={classNames(Styles["features__container"])}
        style={{
          transform: `translateX(${(curLeft / 1440) * 100}vw)`,
        }}
      >
        {FEATURE_LIST.map((featureType, index) => (
          <FeatureItem
            key={featureType}
            active={curActive === index}
            type={featureType}
            onMouseEnter={() => onMouseEnterItem(index)}
            onMouseLeave={() => onMouseLeaveItem()}
          />
        ))}
      </div>
    </div>
  );
};
export default FeatureList;
