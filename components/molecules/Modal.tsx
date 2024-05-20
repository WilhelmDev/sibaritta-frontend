import React from "react";
import { Dialog } from "primereact/dialog";

interface Modal {
  visible: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  width?: string;
  bg?: string;
  className?: string;
  closeOnClickOutside?: boolean;
  closable?: boolean;
}

const Modal = ({
  visible,
  closeModal,
  children,
  width = "w-[auto] laptop:w-[auto]",
  bg = "bg-[#F0EFEB]",
  className,
  closeOnClickOutside = false,
  closable = true,
}: Modal) => {
  return (
    <Dialog
      visible={visible}
      closable={closable}
      onHide={closeModal}
      dismissableMask={closeOnClickOutside}
      className={`${bg} ${width} ${className}  laptop: rounded-[2rem] z-50`}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
