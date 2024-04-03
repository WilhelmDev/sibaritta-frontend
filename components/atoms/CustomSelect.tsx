import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomSelect = ({ setshowCustomSelect }: any) => {
  const { push } = useRouter();

  const goProfilePartner = () => {
    push("/admin/perfil_partners");
    setshowCustomSelect(false);
  };

  const goProfilePartnerSelect = () => {
    push("/admin/perfil_partners/select");
    setshowCustomSelect(false);
  };

  return (
    <div className="CustomSelect">
      <span onClick={goProfilePartner}>Crear Partner</span>
      {/* <Link href={"/admin/perfil_partners/select"} legacyBehavior> */}
      <span onClick={goProfilePartnerSelect}> Partners</span>
      {/* </Link> */}
    </div>
  );
};

export default CustomSelect;
