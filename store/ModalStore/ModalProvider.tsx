import { useState } from "react";

import ModalContext from "./modal-context";
import type { IModalContext } from "./modal-context";

const ModalProvider: React.FC = ({ children }) => {
  const [type, setType] = useState<"sign-in" | "sign-up" | null>(null);

  const openModal = (type: "sign-in" | "sign-up") => {
    setType(type);
  };

  const closeModal = () => {
    setType(null);
  };

  const modalContext: IModalContext = {
    modalType: type,
    openModal: openModal,
    closeModal: closeModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;