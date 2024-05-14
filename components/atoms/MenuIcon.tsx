import { FC } from "react";
import MenuMovil from "@/public/header_partner/MenuMovil.png"

interface MenuIconProps {
  isActive?: boolean;
  type?: string;
  setIsActive: () => void;
  className?: string;
}

export const MenuIcon: FC<MenuIconProps> = ({
  isActive = false,
  type = "hamburguer",
  setIsActive,
  className,
}) => {
  return (
    <div
      onClick={setIsActive}
      className={`menu-icon ${className} ${type} ${isActive ? "change" : null}`}
    >

      <svg className="openMenu" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.20898 13.9596H19.5423M1.45898 7.5013H19.5423M9.20898 1.04297H19.5423" stroke="#E1D4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg className="closeMenu d-none" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.99998 8.99998L5.00001 5.00001M5.00001 5.00001L1 1M5.00001 5.00001L9.00002 1M5.00001 5.00001L1 9.00002" stroke="#F89C53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    </div>
  );
};
