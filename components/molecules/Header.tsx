import { useNavbarContext } from "@/context/navbar.context";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "../globals/Container";
import { Logo } from "../atoms/Logo";
import { MenuIcon } from "../atoms/MenuIcon";
import { Navbar } from "../molecules/Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isTopZero } = useNavbarContext();
  const { asPath } = useRouter();

  const [width, setWith] = useState<number>(0);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    setWith(window.innerWidth);
  }, []);

  const logoTypeToShow = isTopZero && asPath === "/" ? 0 : 1;

  return (
    <header
      className={`Header ${
        isTopZero
          ? "background-white"
          : asPath === "/"
          ? "background-transparent"
          : "background-transparent"
      }`}
    >
      <Logo className="Header-Logo2" />
      <Container className="">
        <div className={`Header-menuIcon ${isMenuOpen && "isActive"}`}>
          <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
        </div>
        <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <div
          className={`Header-overlay ${isMenuOpen && "isActive"}`}
          onClick={closeMenu}
        />
      </Container>
    </header>
  );
};

export default Header;
