import React from "react";
import style from "./style.module.css";
import { useNavbarContext } from "@/context/navbar.context";
import Link from "next/link";

const RestauranteFooter = () => {
  const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext();
  const handleGoToSectionFromOtherPage = (url: string) => {
    setScrolltoSectionFromOtherPage(url);
  };
  return (
    <Link
      href={"/"}
      className={style.container}
      onClick={() => handleGoToSectionFromOtherPage("/somos")}
    >
      <span>Ver Experiencia</span> <span className={style.flecha}>→</span>
    </Link>
  );
};

export default RestauranteFooter;
