import React, { useContext } from "react";
import AuthContext from "../../store/modal-context";
import Auth from "../Auth/Auth";

import styles from "./Modal.module.scss";

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

const Modal: React.FC<{
  onClose: () => void;
  type: "sign-in" | "sign-up" | null;
}> = ({ type, onClose }) => {
  return (
    type && (
      <React.Fragment>
        <Backdrop />
        <ModalOverlay>
          <Auth type={type} onClose={onClose} />
        </ModalOverlay>
      </React.Fragment>
    )
  );
};

export default Modal;
