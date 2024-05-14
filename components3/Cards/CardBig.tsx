import { ICard2 } from "@/interface/cardInterface";
import { setTipoReserva } from "@/redux/slice/detalle.slice";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { newRoutes } from '@/utils/routes';

interface IcardProps {
  card: any;
  index: number;
}

const CardBig = ({ card, index }: IcardProps) => {
  const rutaCompleta = card?.gallery;
  const ruta1 = rutaCompleta?.split("|");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTipoReserva(""));
  }, []);
  const imgs = card?.media?.filter((size: any) => {
    return size.resolution === "small";
  });

  return (
    <Link
      href={`${newRoutes.experiencias}/${card?.slug}`}
      className="h-full
    "
    >
      <section className="card-card-inters main-page">
        <div
          className="card-card-inters-cont"
          // style={{ backgroundImage: `url(${imgs[0]?.path})` }}
        >
          <article className="card-card_datos ">
            <header className="card-card_datos_header">
              <div className="card-card_datos_header_conten">
                <div className="card-card_datos_header_conten_icon">
                  <Image
                    className={`h-full w-full object-cover`}
                    src="/home/card/vector.png"
                    alt="datos_"
                    width={20}
                    height={8}
                  />
                </div>
                <h3 className="card-card_datos_header_conten_h3">
                  {card ? card?.cancelation : ""}
                </h3>
              </div>
            </header>
            <footer className="card-card_datos_footer">
              <h3 className="card-card_datos_footer_h3">{card?.name}</h3>
              <div className="card-card_datos_footer_conten">
                <h2 className="card-card_datos_footer_conten_h2">
                  {card?.dress_code}
                </h2>
                <div className="card-card_datos_footer_user">
                  <Image
                    // className={`${!card.usuarios && 'hidden'}`}
                    src="/home/card/Users.png"
                    alt="user_icon"
                    width={30}
                    height={30}
                  />
                  <div
                    className={`${
                      card?.seats
                        ? "card-card_datos_footer_user_users "
                        : "hidden"
                    }`}
                  >
                    {card ? card?.seats : ""}
                  </div>
                </div>
              </div>
              <div className={`card-card_datos_footer_icon`}>
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

export default CardBig;
