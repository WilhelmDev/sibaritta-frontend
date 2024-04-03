import React, { useEffect, useState } from "react";
import { fetchExperienceByCategoryPartner } from "@/services/experience.service";
import { formatearFecha } from "@/utils/formaterDate";
import HomeGastronomyPartner from "@/components/organisms/HomeGastronomyPartner";
import HomePartnerHeader from "@/pages/home_partner/home_partner_header";
import { useRouter } from "next/router";

function Index() {
  const [indexSelected, setIndexSelected] = useState<string | null>();
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCity, setSelectedCity] = useState<{ id: number } | null>(null);
  const [selected, setSelected] = useState<Date | undefined>();
  const [count, setCount] = useState<number>(1);
  const [previousIndexSelected, setPreviousIndexSelected] =
    useState(indexSelected);
  const selectCityId = selectedCity?.id;
  const dateFormart = selected ? formatearFecha(selected) : undefined;

  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    user_id === "1" ? router.push("/") : "";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    SecurityPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIndexSelected(localStorage.getItem("fk_partner_id"));
        const fk_partner_id_local = localStorage.getItem("fk_typeuser");
        const updatedCount =
          indexSelected !== previousIndexSelected ? 1 : count;

        const params = {
          fk_partner_id: fk_partner_id_local,
          count: updatedCount,
          ...(selectCityId && { selectCityId }),
          ...(dateFormart && { dateFormart }),
        };

        const data = await fetchExperienceByCategoryPartner(params);

        setCategoryData(data.data);
        if (indexSelected !== previousIndexSelected) {
          setPreviousIndexSelected(indexSelected);
          setCount(updatedCount);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, [indexSelected, count, selectedCity, selected]);

  return (
    <>
      <div className="partner-home-container main-page">
        <div>
          <div className="homePartnerContainer">
            <HomePartnerHeader />
            <HomeGastronomyPartner categoryData={categoryData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
