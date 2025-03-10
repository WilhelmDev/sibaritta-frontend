import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Youtube } from "../ui/icons/Youtube";
import { Tiktok } from "../ui/icons/Tiktok";
import { Twiter } from "../ui/icons/Twiter";
import { Instagram } from "../ui/icons/Instagram";

const HomeSocial = () => {
  return (
    <div className="container-general">
    <section className="homeSocial bg-[#252127]">
      <article className="homeSocial_info">
        <div>
          <h2 className="homeSocial_info_h3">
            ¡Síguenos en nuestras redes sociales!
          </h2>
        </div>
        <div className="homeSocial_info-icons">
          <Link
            href={
              "https://www.instagram.com/sibaritta_/"
            }
            target="_blank"
            className="homeSocial_info_icon"
          >
            <Instagram />
          </Link>
          <Link
            href={"https://www.facebook.com/Sibarittafb/"}
            target="_blank"
            className="homeSocial_info_icon"
          >
            <Twiter />
          </Link>
          <Link
            href={"https://www.tiktok.com/@sibaritta_?_t=8kQxopIUpMM&_r=1"}
            target="_blank"
            className="homeSocial_info_icon"
          >
            <Tiktok />
          </Link>
        
        </div>
      </article>
    </section>
    </div>
  );
};

export default HomeSocial;
