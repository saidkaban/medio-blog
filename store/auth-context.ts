import React from "react";

export interface IModalContext {
  openModal: (type: "sign-in" | "sign-up") => void;
  closeModal: () => void;
  modalType: "sign-in" | "sign-up" | null;
}

const ModalContext = React.createContext<IModalContext | null>({
  openModal: (type: "sign-in" | "sign-up") => {},
  closeModal: () => {},
  modalType: null,
});

export default ModalContext;
