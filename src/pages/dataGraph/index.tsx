import React, { useEffect, useState } from "react";
import { Input, message } from "antd";

import OverviewNum from "@/components/overviewNum";

import UserIconImg from "@/assets/images/user-icon.png";
import GroupIconImg from "@/assets/images/group-icon.png";
import TriImg from "@/assets/images/triangle.png";
import Bg01 from "@/assets/images/data-bg-01.png";
import Bg02 from "@/assets/images/data-bg-02.png";
import Bg03 from "@/assets/images/data-bg-03.png";

import Styles from "./index.module.less";
import { getPageData } from "@/api";

const enum SearchType {
  Bitcoin = "Bitcoin",
  Solana = "Solana",
  Ethereum = "Ethereum",
  MEME = "MEME",
}

const SEARCH_TYPE_LIST: Array<{
  name: string;
  value: SearchType;
}> = [
  {
    name: "Bitcoin",
    value: SearchType.Bitcoin,
  },
  {
    name: "Solana",
    value: SearchType.Solana,
  },
  {
    name: "Ethereum",
    value: SearchType.Ethereum,
  },
  {
    name: "MEME",
    value: SearchType.MEME,
  },
] as const;

interface User {
  first_name: string;
}

interface Group {
  group_id: string;
  user_count: number;
}

const loadingKey = "updatable";

const DataGraph: React.FC = () => {
  const [searchKey, setSearchKey] = useState("");

  const [userList, setUserList] = useState<User[]>([]);
  const [groupList, setGroupList] = useState<Group[]>([]);

  const [userNum, setUserNum] = useState(0);
  const [groupNum, setGroupNum] = useState(0);

  useEffect(() => {
    initData("", true);
  }, []);

  const onClickSearch = () => {
    initData(searchKey);
  };

  const onSelectSearchType = (newSearchType: SearchType) => {
    setSearchKey(newSearchType);
    initData(newSearchType);
  };

  const formatNum = (num: number) => {
    if (num > 1000) {
      return `${Math.floor(num / 1000)}k`;
    } else if (num > 1000000) {
      return `${Math.floor(num / 1000)}m`;
    }
  };

  const initData = async (keyword: string, isInit?: boolean) => {
    !isInit &&
      message.loading({
        content: "Loading...",
        key: loadingKey,
      });

    const res = await getPageData({ keyword });

    !isInit &&
      message.success({
        content: "Loaded!",
        key: loadingKey,
        duration: 1,
      });

    setUserNum(res.user_total);
    setUserList(res.users);
    setGroupNum(res.group_total);
    setGroupList(res.groups);
  };

  return (
    <div className={Styles["data"]}>
      <div className={Styles["data__search"]}>
        <div className={Styles["data__search-input"]}>
          <div className={Styles["input-container"]}>
            <Input
              className={Styles["input"]}
              placeholder="enter the keywords"
              variant="borderless"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e?.target?.value || "");
              }}
            />

            <div className={Styles["btn"]} onClick={onClickSearch}>
              Search
            </div>
          </div>
        </div>

        <div className={Styles["data__search-type"]}>
          {SEARCH_TYPE_LIST.map((searchInfo) => (
            <div
              className={Styles["search-type"]}
              key={searchInfo.value}
              onClick={() => onSelectSearchType(searchInfo.value)}
            >
              {searchInfo.name}
            </div>
          ))}
        </div>

        <OverviewNum userNum={userNum} groupNum={groupNum} />
      </div>

      <div className={Styles["data__result"]}>
        <div className={Styles["data__result-item"]}>
          <div className={Styles["title"]}>
            <img
              className={Styles["title-icon"]}
              src={UserIconImg}
              alt="title"
            />
            User List
          </div>
          <div className={Styles["list"]}>
            {userList.map((userInfo) => (
              <div className={Styles["item"]}>
                <div className={Styles["item-title"]}>
                  {userInfo.first_name}
                </div>
                <div className={Styles["item-content"]}>
                  Activity Level:
                  <img
                    className={Styles["triangle"]}
                    src={TriImg}
                    alt="arrow"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles["data__result-item"]}>
          <div className={Styles["title"]}>
            <img
              className={Styles["title-icon"]}
              src={GroupIconImg}
              alt="title"
            />
            Group List
          </div>
          <div className={Styles["list"]}>
            {groupList.map((groupInfo) => (
              <div className={Styles["item"]}>
                <div className={Styles["item-title"]}>{groupInfo.group_id}</div>
                <div className={Styles["item-content"]}>
                  Current Number of People: {formatNum(groupInfo.user_count)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img className={Styles["bg-01"]} src={Bg01} alt="bg" />
      <img className={Styles["bg-02"]} src={Bg02} alt="bg" />
      <img className={Styles["bg-03"]} src={Bg03} alt="bg" />
    </div>
  );
};
export default DataGraph;
