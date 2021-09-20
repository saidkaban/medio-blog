import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import styles from './Modal.module.scss';

const Backdrop: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return <div className={styles.backdrop} onClick={authCtx?.closeModal} />;
};

const ModalOverlay: React.FC = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal: React.FC<{ onClose: () => void }> = ({ onClose, children }) => {
  return (
    <React.Fragment>
      <Backdrop />
      <ModalOverlay>{children}</ModalOverlay>,
    </React.Fragment>
  );
};

export default Modal;
