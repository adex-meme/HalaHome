import React, { useState } from "react";

import DOC_DATA from "./data";

import Styles from './index.module.less';
import classNames from "classnames";

const DocPage: React.FC = () => {
  const [active, setActive] = useState(0);

  function onScrollToTitle (index: number) {
    window.scrollTo({
      top: 0,
    });
    setActive(index);
  }

  return (
    <div className={Styles["doc-page"]}>
      <div className={Styles["doc-link"]}>
        {DOC_DATA.map((data, index) => (
          <div
            key={index}
            className={classNames(Styles["link-item"], {
              [Styles["active"]]: active === index,
            })}
            onClick={() => onScrollToTitle(index)}
          >
            <span className={Styles["link-index"]}>{index + 1}.</span>
            {data.title}
          </div>
        ))}

        {/* <div className={Styles['toggler']}></div> */}
      </div>
      <div className={Styles["doc-main"]}>
        {DOC_DATA[active] && (
          <div>
            <h2>{DOC_DATA[active].title}</h2>
            {DOC_DATA[active].content.map((content, index) => (
              <div key={index}>
                {content.type === "text" ? (
                  <p dangerouslySetInnerHTML={{ __html: content.value }}></p>
                ) : content.type === "image" ? (
                  <img src={`${content.value}?v=20240909`} />
                ) : content.type === "list" ? (
                  <>
                    {content.value && (
                      <p
                        dangerouslySetInnerHTML={{ __html: content.value }}
                      ></p>
                    )}
                    {content.list?.length && (
                      <ul>
                        {content.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default DocPage;
