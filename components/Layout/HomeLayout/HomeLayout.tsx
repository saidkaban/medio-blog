import React, { ReactNode, useContext } from "react";

import cx from "classnames";

import ModalContext from "../../../store/modal-context";

import HomeHeader from "../../Header/HomeHeader/HomeHeader";
import Footer from "../../Footer/Footer";

const HomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const modalCtx = useContext(ModalContext);

  return (
    <div>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
