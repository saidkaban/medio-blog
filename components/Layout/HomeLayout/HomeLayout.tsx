import React, { ReactNode } from 'react';
import Footer from '../../Footer/Footer';
import HomeHeader from '../../Header/HomeHeader/HomeHeader';
import styles from './HomeLayout.module.scss';

const HomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <HomeHeader />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
