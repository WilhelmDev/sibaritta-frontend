import React from "react";
import Image from "next/image";
import LogoImage from "@/public/ventas_sibarita/LOGO SIBARITTA.png";

const HomePartnerHeader = () => {
  return (
    <>
      <header className="partner-home-container-header">
        <div className="header-container-1">
          <div className="image-logo">
            <Image
              width={100}
              height={100}
              className="w-full h-full"
              src={LogoImage.src || ""}
              alt="Logo de la marca"
            />
          </div>
          <div className="header-text">
            <p className="header-text-welcome">Bienvenido</p>
            <p className="header-text-seratta text-center">
              Seratta Gourmand Market
            </p>
          </div>
        </div>
        <div className="header-container-2"></div>
      </header>
    </>
  );
};

export default HomePartnerHeader;
