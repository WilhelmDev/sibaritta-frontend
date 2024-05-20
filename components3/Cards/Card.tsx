import { ICard2 } from "@/interface/cardInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PickUpIcons } from "@/components/ui/icons/PickUp";
import { Fork } from "@/components/ui/icons/Fork";
import { StartIcons2 } from "@/components/ui/icons/StartIcons2";
import { newRoutes } from '@/utils/routes';


const Card = ({ card, index, className, classNames }: any) => {
  const Inperson = card?.events?.filter(
    (filterPres: any) => filterPres.type === "presencial"
  ).length;

  const pickupPerson = card?.events?.filter(
    (filterPres: any) => filterPres.type === "pickup"
  ).length;

  const imgs = card?.media?.filter((size: any) => {
    return size.resolution === "normal";
  });
  const backgroundImage =
    imgs && imgs.length > 0 ? `url(${imgs[0]?.path})` : "";
  return (
    <Link href={`${newRoutes.experiencias}/${card?.slug}`}>
      <section className={`card-inters main-page  ${className}  `}>
        <div
          className={`card-inters-cont  `}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
          }}
        >
          <article className={`card_datos ${className}`}>
            <div className="card_datos_header">
              <div className={`card_datos_header_conten ${ !card?.calification_ranking && "!bg-transparent"}`}>
                {card?.calification_ranking ?  <StartIcons2 /> : ""}
                <h2 className="card_datos_header_conten_h3">
                  {card?.calification_ranking ? card?.calification_ranking : ""}{" "}
                  {card?.calification_number ? (
                    <span>({card?.calification_number})</span>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>
            <div className="card_datos_footer">
              <div className="card_datos_footer_conten">
                <div className="card_datos_footer_container">
                  <h3 className="card_datos_footer_p">{card?.name}</h3>
                  <h3 className="card_datos_footer_conten_h2">
                    {card?.dress_code}
                  </h3>
                </div>
                <div className="flex flex-col gap-[1rem]">
                  {Inperson > 0 && (
                    <div className="card_datos_footer_user">
                      <Fork />
                      <div
                        className={`${
                          card?.seats
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
            </div>
            <div className="w-full h-full z-0  absolute  bottom-0 bg-gradient-to-b from-transparent to-[#252127] "></div>
          </article>
        </div>

        {index !== 3 && (
          <div
            className={`${
              !card?.duration && "hidden"
            } card-inters-info    ${classNames} `}
          >
            <h5 className="card-inters-info-description">
              {card?.description?.slice(0, 120)+'...'}
            </h5>

            <article className="card-inters-info-footer">
              <div>
                <h5>Duracion</h5>
                <p>{card?.duration} Horas</p>
              </div>

              <div>
                <h5>Desde</h5>
                <p>${card?.regular_price}</p>
              </div>
            </article>
          </div>
        )}
      </section>
    </Link>
  );
};

export default Card;
