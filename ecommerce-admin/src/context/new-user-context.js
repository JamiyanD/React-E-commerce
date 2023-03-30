import { createContext, useState } from "react";

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={[open, setOpen]}>
      {children}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalProvider };
