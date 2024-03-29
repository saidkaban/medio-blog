import React, { ReactNode, useContext } from "react";

import HomeHeader from "../../Header/HomeHeader/HomeHeader";
import Footer from "../../Footer/Footer";

const HomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
