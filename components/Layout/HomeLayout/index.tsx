import React, { ReactNode } from "react";
import HomeHeader from "../../Header/HomeHeader";
import styles from "./HomeLayout.module.scss";

const HomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <HomeHeader />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default HomeLayout;
