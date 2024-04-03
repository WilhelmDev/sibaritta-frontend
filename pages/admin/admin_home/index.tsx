import Image from "next/image";
import LogoSerata from "@/public/partner_home/LOGO_SERATTA_blanco-01-2_-sin-firma 1.png";
import Campaing from "@/pages/partner_home/campaing.png";

// import TextSibarita from "@/public/partner_home/text_sibarita.png";

import { useEffect, useState } from "react";
import Card from "@/components/molecules/Card";
import HomeGastronomy from "@/components/organisms/HomeGastronomy";
import Home from "@/pages/index";
import HomeGastronomyPartner from "@/components/organisms/HomeGastronomyPartner";
import HomePartnerHeader from "@/pages/home_partner/home_partner_header";
import HomeGastronomyAdmin from "@/components/organisms/HomeGastronomyAdmin";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");
    user_id === "1" ? router.push("/") : "";
    user_id === "2" ? router.push("/home_partner") : "";
    // user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    SecurityPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-home-all">
      <div className="partner-home-container main-page">
        <HomePartnerHeader />
        <HomeGastronomyAdmin />
      </div>
    </div>
  );
}

export default Index;
