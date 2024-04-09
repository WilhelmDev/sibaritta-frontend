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
        <div
          onClick={() => setmodalVideo(true)}
          className="icon-home-baner-video-mobil"
        >
          <Image
            src={"/partner_home/mobil_home/play_icon.svg"}
            width={1000}
            height={1000}
            alt="logo"
            className="w-full  h-full"
          />
        </div>

        <Link href={"/sibaritta"} className="link-comofunciona-home-baner">
          <span>¿Cómo funciona Sibaritta</span>
          <div className="w-[3rem] h-[3rem] font-extrabold">
            <Image
              src={"/partner_home/mobil_home/derecha2.svg"}
              width={1000}
              height={1000}
              alt="logo"
              className="w-full  h-full"
            />
          </div>
        </Link>
      </div>

      <div className=" homeBanner-video">
        {/* <Image src={"/home/fondoNuevo.jpg"} className="w-full h-full object-cover " width={1000} height={1000} alt="xd"/> */}
        <video
          src={"/home/sibaritta-video-home.mp4"}
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
