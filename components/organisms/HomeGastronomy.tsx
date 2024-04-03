import React, { useState } from "react";
import Card from "../molecules/Card";
import { Container } from "../globals/Container";
import GastronomiaInputs from "./GastronomiaInputs";
import { ICity } from "@/interface/city.interface";
import CardBig from "../molecules/CardBig";
import CardEmpity from "../molecules/CardEmpity";
import CardEmpitySmall from "../molecules/cards/CardEmpitySmall";
import { ArrowBottom } from "../ui/icons/ArrowBottom";

interface HomeGastronomyProps {
  indexSelected: number;
  categoryData: any;
  city: ICity[];
  selectedCity: { id: number } | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<{ id: number } | null>>;
  selected: Date | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const HomeGastronomy = ({
  categoryData,
  city,
  selectedCity,
  setSelectedCity,
  selected,
  setSelected,
  count,
  setCount,
}: HomeGastronomyProps) => {
  const [visibleCards, setVisibleCards] = useState(2);

  const handleShowMore = () => {
    setVisibleCards((prevCount) => prevCount + 2);
  };

  const chunkArray = (arr: any[], pattern: number[]) => {
    const chunkedArray: any[] = [];
    let currentIndex = 0;

    pattern.forEach((size) => {
      const chunk = arr.slice(currentIndex, currentIndex + size);
      chunkedArray.push(chunk);
      currentIndex += size;
    });

    return chunkedArray;
  };

  const addEmptyCards = (row: any[], rowIndex: number) => {
    // Check if row is empty
    if (row.length === 0) {
      // If empty, you can return the default value or an empty array
      return row; // or return some default value
    }

    // Asegura que haya al menos una tarjeta en la fila
    if (row.length > 0) {
      // Agrega CardEmpitySmall en la posición 2 de los arrays con tamaño 3
      if (row.length === 3 && rowIndex % 2 === 0) {
        row.splice(2, 0, <CardEmpitySmall />);
      }
      // Agrega CardEmpity en la posición 1 solo si no hay ninguna otra card en la fila
      else if (row.length === 1 && rowIndex !== 0) {
        // Check if it's not the first row or the first card in the first row
        if (rowIndex % 2 !== 0) {
          row.splice(0, 0, <CardEmpity />);
        }
      }
    }

    return row;
  };
  const totalCards = categoryData.length;
  const pattern = [3, 1]; // Establece el patrón deseado

  // Repite el patrón hasta alcanzar o superar el número total de tarjetas
  while (pattern.reduce((acc, val) => acc + val, 0) < totalCards) {
    pattern.push(...pattern);
  }

  const chunkedCategoryData = chunkArray(categoryData, pattern).map(
    addEmptyCards
  );

  const data = chunkedCategoryData.filter((row) => row.length > 0);
 

  return (
    <div  id="destino"  className="contenedorExperiencia  container-general bg-[#252127]" data-section={"/somos"}  >
      <div className="">
        <GastronomiaInputs
          city={city}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selected={selected}
          setSelected={setSelected}
          setCount={setCount}
          count={count}
        />
        <div className=" main-page "  >
          {chunkedCategoryData.slice(0, visibleCards).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid ${
                rowIndex % 2 === 0
                  ? "gastronomi-one "
                  : "gastronomi-two  "
              }  `}
            >
              {row.map((card: any, index: number) => (
                <div
                  key={index}
                  className={
                    rowIndex % 2 === 0 ? "container-impar" : "container-par"
                  }
                >
                  {index === 2 && rowIndex % 2 === 0 ? (
                    <CardEmpitySmall key={`emptySmall_${rowIndex}`} />
                  ) : index === 0 && rowIndex % 2 !== 0 ? (
                    <CardEmpity key={`empty_${rowIndex}`} />
                  ) : (
                    <Card
                      key={index}
                      card={card}
                      index={index + 1}
                      className={rowIndex % 2 === 0 ? "card-impar" : "card-par"}
                      classNames={
                        rowIndex % 2 === 0 ? "card-impars" : "card-pars"
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {visibleCards < data.length && (
          <div className="index-containerButtom" onClick={handleShowMore}>
            <span>Ver más experiencias</span>
            <ArrowBottom />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeGastronomy;
