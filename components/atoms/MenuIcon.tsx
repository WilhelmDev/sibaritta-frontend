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
      <span className="span  "></span>
      <span className="span "></span>
      <span className="span  "></span>
    </div>
  );
};
