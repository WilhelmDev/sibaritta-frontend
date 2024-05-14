import Image from "next/image";
import React, { useState } from "react";
import Usuarios from "../atoms/Usuarios";
import Fecha from "../atoms/Fecha";
import { Dropdown } from "primereact/dropdown";
import { ICity } from "@/interface/city.interface";
import { Arow } from "../ui/icons/Arrow";

interface GastronomiaInputsProps {
  setindice?: React.Dispatch<React.SetStateAction<number>>;
  city: ICity[];
  selectedCity: { id: number } | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<{ id: number } | null>>;
  selected?: Date; // Puedes hacer que sea opcional si es posible que esté indefinido al principio
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

function GastronomiaInputs({
  setindice,
  city,
  selectedCity,
  setSelectedCity,
  selected,
  setSelected,
  setCount,
  count,
}: GastronomiaInputsProps) {
  const [filter, setFilter] = useState(false);

  const changeFilter = () => {
    setFilter(!filter);
  };

  const addAll = [
    {
      id: 0,
      name: "Todos",
    },
    ...city,
  ];

  return (
    <div className="">
      <div className="">
    <section className=" " >
      <article className="flex items-center">
        <div className="card_titulo  ">


          <h2 className="" >
          <div>
          <Image
            src={"/home/gastrowhite.png"}
            alt="logo_white"
            width={45}
            height={36}
          />
          </div>
          <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_2_7432" fill="white">
          <path d="M0 0H2V29H0V0Z"/>
          </mask>
          <path d="M0 0V29H4V0H0Z" fill="#E1D4C4" mask="url(#path-1-inside-1_2_7432)"/>
          </svg>
          Experiencias Sibaritta
          </h2>
        </div>

        {/* <article className="filter w-full laptop:flex-row  ">
          <div
            onClick={changeFilter}
            className=" flex items-center justify-between w-full h-[4.4rem] rounded-[5rem] py-[1rem] px-[2rem] bg-[#F89C53] laptop:hidden"
          >
            <span className=" text-[1.5rem] font-semibold leading-normal text-[#252127]">
              Filter
            </span>
            <Arow />
          </div>

          {filter ? (
            <div
              className={` main-page1  z-10  mt-[1rem] w-full  min-h-[22.1rem] p-[1rem] rounded-[1.5rem] bg-[#2F2A32] flex flex-col items-center justify-center text-center gap-[2rem]  duration-300 ease-in-out  md:bg-transparent md:z-0 md:h-[5rem] md:items-center  md:w-full md:gap-5    md:flex justify-center${
                filter ? "opacity-1 " : ""
              } `}
            >
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={addAll}
                optionLabel="name"
                placeholder="Indica tu ciudad"
                className="w-full md:w-14rem !text-[#fff]"
              />

              <Usuarios setCount={setCount} count={count} />

              <Fecha selected={selected} setSelected={setSelected} />

              <div className='cursor-pointer w-full laptop:w-[28.8rem] h-[4.4rem] p-[1rem] rounded-[5rem] bg-[#37323A]  text-[white] font-semibold leading-normal text-[1.8rem] md:hidden'>
                Clasificacion
              </div>
            </div>
          ) : (
            <div
              className={`hidden   laptop:flex laptop:flex-row laptop:justify-end laptop:gap-[2rem]   `}
            >
              <div className="Dropdown-des">
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={addAll}
                  optionLabel="name"
                  placeholder="Indica tu ciudad"
                  className="w-full h-full  "
                />
              </div>
              <Usuarios setCount={setCount} count={count} />
              <Fecha selected={selected} setSelected={setSelected} />
              <div className="cursor-pointer w-[28.8rem] h-[4.4rem] p-[1rem] rounded-[5rem] bg-[#37323A]  text-[white] font-semibold leading-normal text-center text-[1.8rem] md:w-[19rem] md:hidden">
                Clasificacion
              </div>
            </div>
          )}
        </article> */}
      </article>
    </section>
    </div>
    </div>
  );
}

export default GastronomiaInputs;
