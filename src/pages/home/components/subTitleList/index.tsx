import React, { useEffect, useRef, useState } from "react";

import Styles from "./index.module.less";
import classNames from "classnames";

interface SubTitleListCompProps {
  className?: string;
  list: string[];
}

const SubTitleList: React.FC<SubTitleListCompProps> = ({
  className: propsClassNames,
  list,
}) => {
  const [curIndex, setCurIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  const curIndexRef = useRef(0);

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setCurIndex(0);
    curIndexRef.current = 0;
    setPrevIndex(-1);

    showNext();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [list]);

  const showNext = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const cur = curIndexRef.current;
      const next =
        curIndexRef.current + 1 >= list.length ? 0 : curIndexRef.current + 1;

      setCurIndex(next);
      setPrevIndex(cur);

      curIndexRef.current = next;

      showNext();
    }, 1500);
  };

  return (
    <div className={classNames(propsClassNames, Styles["list__container"])}>
      {list.map((txt, index) => (
        <div
          key={txt}
          className={classNames(Styles["item"], {
            [Styles["prev"]]: prevIndex === index,
            [Styles["current"]]: curIndex === index,
          })}
        >
          {txt}
        </div>
      ))}
    </div>
  );
};
export default SubTitleList;
