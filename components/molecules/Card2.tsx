import { ICard2 } from "@/interface/cardInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PickUpIcons } from "../ui/icons/PickUp";
import { Fork } from "../ui/icons/Fork";
import { StartIcons2 } from "../ui/icons/StartIcons2";

interface IcardProps {
  card: ICard2;

  index: number;
}

const Card2 = ({ card, index }: any) => {
  const Inperson = card.events?.filter(
    (filterPres: any) => filterPres.type === "presencial"
  ).length;

  const pickupPerson = card.events?.filter(
    (filterPres: any) => filterPres.type === "pickup"
  ).length;

  return (
    <Link href={`/detalle/${card.slug}`}>
      <section
        className={`card-inters main-page ${
          index === 3 ? "flex justify-center items-end" : ""
        }`}
      >
        <div
          className="card-inters-cont"
          style={{
            backgroundImage: `${card?.media[0]?.path}`,
          }}
        >
          <article className="card_datos ">
            <header className="card_datos_header">
              <div className="card_datos_header_conten">
                <StartIcons2 />
                <h3 className="card_datos_header_conten_h3">4.7 (50)</h3>
              </div>
            </header>
            <footer className="card_datos_footer">
              <div className="card_datos_footer_conten">
                <div className="card_datos_footer_container">
                  <h3 className="card_datos_footer_h3">{card.name}</h3>
                  <h2 className="card_datos_footer_conten_h2">
                    {card.dress_code}
                  </h2>
                </div>
                <div className="flex flex-col gap-[1rem]">
                  {Inperson > 0 && (
                    <div className="card_datos_footer_user">
                      <Fork />
                      <div
                        className={`${
                          card.seats
                            ? "card_datos_footer_user_users text-[#4D3452]"
                            : "hidden"
                        }`}
                      >
                        {Inperson}
                      </div>
                    </div>
                  )}

                  {pickupPerson > 0 && (
                    <div className="card_datos_footer_user">
                      <PickUpIcons />
                      <div
                        className={`${
                          card.seats
                            ? "card_datos_footer_user_users text-[#4D3452]"
                            : "hidden"
                        }`}
                      >
                        {pickupPerson}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={`card_datos_footer_icon`}>
                <Image
                  src="/home/card/chevron.svg"
                  alt="logo_icon"
                  width={24}
                  height={24}
                />
              </div>
            </footer>
            <div className="w-full h-full z-0 rounded-[2.3rem] absolute  bottom-0 bg-gradient-to-b from-transparent to-[#252127] "></div>
          </article>
        </div>
      </section>
    </Link>
  );
};

export default Card2;
