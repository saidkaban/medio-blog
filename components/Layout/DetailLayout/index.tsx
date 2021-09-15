import React, { ReactNode } from 'react';
import Footer from '../../Footer/Footer';

import DetailHeader from '../../Header/DetailHeader';

import styles from './DetailLayout.module.scss';

const DetailLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <DetailHeader />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default DetailLayout;
