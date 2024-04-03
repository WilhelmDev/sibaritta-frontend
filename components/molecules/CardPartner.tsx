import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PickUpIcons } from "@/components/ui/icons/PickUp";
import { Fork } from "@/components/ui/icons/Fork";
import { StartIcons2 } from "@/components/ui/icons/StartIcons2";

const CardPartner = ({ card, index }: any) => {


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
    <div className="CardPartner">
      <Link href={`/detalle/${card?.slug}`}>
      <section className={`card-inters-partner main-page`}>
        <div
          className={`card-inters-cont`}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
          }}
        >
          <article className={`card_datos-partner`}>
            <header className="card_datos_header-partner">
              <button className="button-edit">Editar</button>
              <div
                className={`card_datos_header_conten ${
                  !card?.calification_ranking && "!bg-transparent"
                }`}
              >
                {card?.calification_ranking ? <StartIcons2 /> : ""}
                <h5 className="card_datos_header_conten_h3">
                  {card?.calification_ranking ? card?.calification_ranking : ""}{" "}
                  {card?.calification_number ? (
                    <span>({card?.calification_number})</span>
                  ) : (
                    ""
                  )}
                </h5>
              </div>
            </header>
            <footer className="card_datos_footer">
              <div className="card_datos_footer_conten">
                <div className="card_datos_footer_container">
                  <h3 className="card_datos_footer_h3">{card?.name}</h3>
                  <h2 className="card_datos_footer_conten_h2">
                    {card?.dress_code}
                  </h2>
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
              <article className="card-inters-info-footer">
              <div>
                <h3>Duracion</h3>
                <p>{card?.duration} Horas</p>
              </div>

              <div>
                <h3>Desde</h3>
                <p>${card?.regular_price}</p>
              </div>
            </article>
            </footer>
            <div className="gradient w-full h-full z-0 rounded-[2.3rem] absolute  bottom-0 bg-gradient-to-b from-transparent to-[#252127] "></div>
          </article>
          
        </div>

        {index !== 3 && (
          <div className={`${!card?.duration && "hidden"} card-inters-info`}>
            <article className="card-inters-info-description">
              {card?.description}
            </article>

            
          </div>
        )}
      </section>
    </Link>
    </div>    
  );
};

export default CardPartner;
