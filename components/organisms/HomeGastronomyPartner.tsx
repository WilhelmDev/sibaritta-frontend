import React, { useState } from "react";
import CardPartner from "@/components/molecules/CardPartner";
import TinySquare from "@/public/partner_home/cuadraditos juntos.png";
import vVector from "@/public/partner_home/v.png";
import Image from "next/image";
import CardSimulation from "@/pages/home_partner/cardSimulation.json";
import { ArrowBottom } from "../ui/icons/ArrowBottom";

const HomeGastronomyPartner = (categoryData:any) => {


  const [more, setMore] = useState(4);

  const showMore = () => {
    setMore((pre) => pre + 2);
  };

  return (
    <>
      <div className="HomeGastronomyPartner">
        <main className="main-container">
          <div className="main-container-1">
            <div className="main-container-1-top">
              <div className="main-container-1-top-1">
                <div className="main-container-1-top-1-image-container">
                  <div className="main-container-1-top-1-image">
                    <Image
                      width={100}
                      height={100}
                      className=" w-full h-full"
                      src={TinySquare.src}
                      alt="Tiny Square"
                    />
                  </div>
                </div>
                <div className="main-container-1-top-1-text">
                  Experiencias Vigentes
                </div>
              </div>
              <div className="sucursal-nuevas-experiencias-contenedor">
              <div className="container-button-sucursal">
                <button className="button-sucursal-button">Sucursal #1</button>
                <div className="vVector-image">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full"
                    src={vVector.src || ""}
                    alt="vVector"
                  />
                </div>
              </div>
              <button className="main-container-1-top-3">
                Nuevas Experiencias +
              </button>
              </div>
            </div>
            <div className="main-container-1-bot-cards">
              
              {categoryData?.categoryData.slice(0, more).map((object: any, index: any) => ( 
                <div key={index}>
                  <CardPartner card={object} />
                </div>  
              ))}
            </div>

            {more < categoryData?.categoryData.length && (
              <div className="index-containerButtom" onClick={showMore}>
                <span>Ver más experiencias</span>
                <ArrowBottom />
              </div>
            )}
          </div>
          <div className="main-container-2 main-container-1">
            <div className="main-container-2-top main-container-1-top ">
              <div className="main-container-2-top-1 main-container-1-top-1">
                <div className="main-container-1-top-1-image-container" >
                <div className="main-container-1-top-1-image">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full"
                    src={TinySquare.src || ""}
                    alt="Tiny Square"
                  />
                </div>
                </div>
              
                <div className="main-container-1-top-1-text">
                  Experiencias Pasadas
                </div>
              </div>
              <div className="sucursal-nuevas-experiencias-contenedor">
              <div className="container-button-sucursal">
                <button className="button-sucursal-button">Sucursal #1</button>
                <div className="vVector-image">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full"
                    src={vVector.src || ""}
                    alt="vVector"
                  />
                </div>
              </div>
              <button className="main-container-1-top-3">
                Nuevas Experiencias +
              </button>
              </div>
            </div>
            <div className="main-container-1-bot-cards">              
              {categoryData?.categoryData.slice(0, more).map((object: any, index: any) => (
                <div key={index}>
                  {" "}
                  <CardPartner card={object} />
                </div>
              ))}
            </div>            
            {more < CardSimulation.length && (
              <div className="index-containerButtom" onClick={showMore}>
                <span>Ver más experiencias</span>
                <ArrowBottom />
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default HomeGastronomyPartner;
