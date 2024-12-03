import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";

import Styles from "./index.module.less";

interface LayoutCompProps {}

const Layout: React.FC<LayoutCompProps> = () => {
  return (
    <div className={Styles["page"]}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
