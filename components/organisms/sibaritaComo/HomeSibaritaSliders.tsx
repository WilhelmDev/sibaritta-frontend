import Image from "next/image";
import React from "react";
import IconDouble from "@/public/partner_home/iconDouble.png"

function HomeSibaritaSliders() {
  return (
    <div className="box_sldier_sibarita d-none" data-section={"/sibaritta"}>
      <div className="sldier-sibarita-da-fusioned">
      <Image
          src={"/partner_home/iconDouble.png"}
          className="w-full h-full"
          width={1000}
          height={1000}
          alt="logo"
        />
      </div>
      <div className="sldier-sibarita-da">
        <Image
          src={"/slider/Vector-3.png"}
          className="w-full h-full"
          width={1000}
          height={1000}
          alt="logo"
        />
      </div>

      <div className="sldier_sibarita_info-">
        <div className="gastro-sibarita-logo">
          <Image
            src={"/slider/gastronomia.png"}
            className="w-full h-full"
            width={1000}
            height={1000}
            alt="logo"
          />
        </div>

        <h2 className="">
          Redescubre los espacios conocidos a través de experiencias que te
          darán una nueva perspectiva que va más allá de lo común...
        </h2>
      </div>

      <div className="w-[100%] h-full absolute  bg-gradient-to-l from-transparent to-[#252127d0] "></div>
    </div>
  );
}

export default HomeSibaritaSliders;
