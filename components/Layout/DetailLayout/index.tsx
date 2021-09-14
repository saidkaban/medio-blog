import React, { ReactNode } from 'react';

import DetailHeader from '../../Header/DetailHeader';

import styles from './DetailLayout.module.scss';

const DetailLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <DetailHeader />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default DetailLayout;
