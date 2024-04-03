import {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

interface NavbarContextType {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
  serviceSelected: string;
  setServiceSelected: Dispatch<SetStateAction<string>>;
  scrolltoSectionFromOtherPage: string;
  setScrolltoSectionFromOtherPage: Dispatch<SetStateAction<string>>;
  isTopZero: boolean;
  setIsTopZero: Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType>({
  activeSection: "",
  setActiveSection: () => "",
  serviceSelected: "",
  setServiceSelected: () => "",
  scrolltoSectionFromOtherPage: "",
  setScrolltoSectionFromOtherPage: () => "",
  isTopZero: false,
  setIsTopZero: () => "",
});

export const NavbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [serviceSelected, setServiceSelected] = useState<string>("");
  const [scrolltoSectionFromOtherPage, setScrolltoSectionFromOtherPage] =
    useState<string>("");
  const [isTopZero, setIsTopZero] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        activeSection,
        setActiveSection,
        serviceSelected,
        setServiceSelected,
        scrolltoSectionFromOtherPage,
        setScrolltoSectionFromOtherPage,
        isTopZero,
        setIsTopZero,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (context === undefined) {
    throw new Error("NavbarContext debe ser usado dentro de NavbarProvider");
  }

  return context;
};
