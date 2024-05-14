import HomeBusiness from '@/components/organisms/HomeBusiness';
import { fetchExperienceByCategory } from '@/services/experience.service';
import { IDetalle } from '@/interface/reservacion';
import { formatearFecha } from '@/utils/formaterDate';
import { useEffect, useState } from 'react';
import { newRoutes } from '@/utils/routes';
import Link from 'next/link';
import AOS from 'aos';

// Iconos SVG
import PoleIcon from "@/components3/iconsSVG/pole-icon";
// Iconos SVG

// Componentes3
import Card from "@/components3/Cards/Card";
import CardBig from '@/components3/Cards/CardBig';
import CardEmpity from "@/components3/Cards/CardEmpity";
import CardEmpitySmall from "@/components3/Cards/CardEmpitySmall";
import InsigniaCard from '@/components3/Cards/InsigniaCard';
// Componentes3

export default function Experiencias() {
  const [indexSelected, setIndexSelected] = useState(1);
  const [categoryData, setCategoryData] = useState<IDetalle[]>([]);
  // const [categoryIndex, setCategoryIndex] = useState<any>(1);
  const [selectedCity, setSelectedCity] = useState<{ id: number } | null>(null);
  const [selected, setSelected] = useState<Date | undefined>();
  const [count, setCount] = useState<number>(1);
  const [previousIndexSelected, setPreviousIndexSelected] =
    useState(indexSelected);
  const selectCityId = selectedCity?.id;
  const dateFormart = selected ? formatearFecha(selected) : undefined;

  useEffect(() => {
    AOS.init();

    const update = document.querySelector('body')
    update?.classList.add('fondoNosotros')
  }, [])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedCount =
          indexSelected !== previousIndexSelected ? 1 : count;

        const params = {
          fk_category: indexSelected,
          count: updatedCount,
          ...(selectCityId && { selectCityId }),
          ...(dateFormart && { dateFormart }),
          // selectCityId: selectCityId && selectCityId,
        };

        const data = await fetchExperienceByCategory(params);

        console.log(data)

        setCategoryData(data.data);
        if (indexSelected !== previousIndexSelected) {
          setPreviousIndexSelected(indexSelected);
          setCount(updatedCount);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, [indexSelected, count, selectedCity, selected, dateFormart, previousIndexSelected, selectCityId]);

  return (
    <main className="experiencia">
      {/* Begin of Pages */}
      <div className="migajaPan">
        <div className="container-general">
          <div className="migajaPan__card ">
            <ul className="flex">
              <li>
                <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                  &gt; Home
                </Link>
              </li>
              <li className="activeMigaja">&gt; Experiencias</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End of Pages */}

     {/* Begin of Banner Experience */}
      <div className="experiencia__top">
        <div className="container-general">
          <div className="experiencia__top__card">
            <div className="flex   justify-center content-center	">
              <div className="lg:w-1/2 w-full">
                <div className="experiencia__top__card__titulo text-center">
                  <h2 className="tituloh2 text-center">EXPERIENCIAS</h2>
                  <PoleIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* Begin of Banner Experience */}

      {/* Begin of Container Cards */}
      <div className="experiencia__contenedor">
        <div className="container-general ">

          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-100 lg:w-5/6 m-auto">
            <Card card={categoryData[0]} className={"card-impar"} classNames={'card impars'}/>
            <Card card={categoryData[1]} className={"card-impar"} classNames={'card impars'}/>
            <CardEmpitySmall key={'emptySmall_3'}/>
            <Card card={categoryData[2]} className={"card-impar"} classNames={'card impars'}/>
          </div>

          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 lg:w-5/6 w-100 m-auto mt-5 pt-5">
            <CardEmpity/>
            <CardBig card={categoryData[3]} index={0}/>
          </div>

          <div className="lg:flex w-full lg:w-5/6 m-auto gap-5 mt-5 pt-5">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                <Card card={categoryData[4]} className={"card-impar"} classNames={'card impars'}/>
                <Card card={categoryData[5]} className={"card-impar"} classNames={'card impars'}/>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <InsigniaCard/>
            </div>
          </div>

        </div>
        {/* End of Container Cards */}
      </div>
      <HomeBusiness />
    </main>
  );
}