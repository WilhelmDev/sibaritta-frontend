import React, { useEffect, useState } from "react";
import categories from "@/json/banner.json";
import Image from "next/image";

import { fetchExperienceByCategory } from "@/services/experience.service";
import { useRouter } from "next/router";
import { ArowLeft } from "../ui/icons/ArowLeft";
import ModalVideoHome from "../molecules/partner/home_video/ModalVideoHome";
import Link from "next/link";
import { goToSection } from "@/lib/utils";

interface HomeBannerProps {
  indexSelected?: number;
  setIndexSelected?: any;
  setCategoryData?: any;
}

const HomeBanner = ({
  indexSelected,
  setIndexSelected,
  setCategoryData,
}: HomeBannerProps) => {
  const router = useRouter();

  const [modalVideo, setmodalVideo] = useState(false);

  const sibaritta = () => {
    router.push("/sibaritta");
  };
  const [categoryIndex, setCategoryIndex] = useState<number>(1);
  const handleClick = (index: number) => {
    setCategoryIndex(index);
    setIndexSelected(index);
  };
  // homeBanner-vido
  const handleGoToSection = (url: string) => {
    goToSection(url);
  };

  return (

    <div className="homeBanner ">
      <div
        className="icon-scroll absolute z-10 "
        onClick={() => {
          handleGoToSection("/somos");
        }}
      ></div>
      <div className="homeBanner-video-mobil- ">
        <video
          src={"/home/Sibaritta-Video-Home-Mobile.mp4"}
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <Link href={"/sibaritta"} className="link-comofunciona-home-baner">
          <span>

            Quienes Somos
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 5L21.5 12M21.5 12L14.5 19M21.5 12L3.5 12" stroke="#E1D4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </span>

        </Link>
      </div>

      <div className=" homeBanner-video">
        {/* <Image src={"/home/fondoNuevo.jpg"} className="w-full h-full object-cover " width={1000} height={1000} alt="xd"/> */}
        <video
          src={"/home/Sibaritta-Video-Home-Desktop.mp4"}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        {/* <div className="homeBanner-video-overlay"></div> */}
      </div>

      {/* <div className="homeBanner-btns">
        <div className="homeBanner-tabs">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`homeBanner-tabs-btn ${
                indexSelected === index + 1 ? "active" : ""
              }`}
            >
              {category.titulo}
              <div className="homeBanner-tabs-btn-img">
                <Image
                  src={category.img}
                  alt=""
                  width={39}
                  height={31}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div onClick={sibaritta} className="howWorks flex gap-[1rem]">
          <span> ¿Cómo funciona Sibaritta?</span>
          <ArowLeft />
        </div>
      </div> */}
      <ModalVideoHome visible1={modalVideo} setVisible1={setmodalVideo} />
    </div>
  );
};

export default HomeBanner;
