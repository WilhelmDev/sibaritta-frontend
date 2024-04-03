import { ICard, ICard2 } from "@/interface/cardInterface";
import Image from "next/image";
import React from "react";
// import card from '@/json/card.json'

interface CardInterProps {
  card: ICard2;
}

const CardInter = ({ card }: CardInterProps) => {
  const rutaCompleta = card.gallery;
  const ruta1 = rutaCompleta?.split("|");
  return (
    <section className="card">
      {card.duration ? (
        <div className="cardInter-card">
          <article
            className="cardInter-card-datos"
            key={card.id}
            // style={{ backgroundImage: `url(${ruta1[0]})` }}
          >
            <header className="card_datos_header">
              <div className="card_datos_header_conten ">
                <Image
                  src="/home/card/vector.png"
                  alt="xd"
                  width={20}
                  height={8}
                />
                <h3 className="card_datos_header_conten_h3">
                  {card.cancelation}
                </h3>
              </div>
            </header>
            <footer className="card_datos_footer">
              <h3 className="card_datos_footer_h3">{card.name}</h3>
              <div className="card_datos_footer_conten">
                <h2 className="card_datos_footer_conten_h2">
                  {card.dress_code}
                </h2>
                <div className="card_datos_footer_user">
                  <Image
                    src="/home/card/Users.png"
                    alt="user_icon"
                    width={30}
                    height={30}
                  />
                  <div className="card_datos_footer_user_users ">
                    {card.seats}
                  </div>
                </div>
              </div>
              <div className="card_datos_footer_icon ">
                <Image
                  src="/home/card/chevron.svg"
                  alt="logo_icon"
                  width={24}
                  height={24}
                />
              </div>
            </footer>
            <div className="w-full  h-full  z-0 rounded-[2.3rem] absolute  bottom-0 bg-gradient-to-b from-transparent to-[#252127] "></div>
          </article>
        </div>
      ) : (
        <div className="cardInter-empty">
          “Amantes de la excelencia, la privacidad y la experiencias auténticas”
        </div>
      )}
      {/* <div className={`${!card.duration && 'hidden'} card-inters-info`}>
        <article className='card-inters-info-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
          pretium nisi. Duis id orci eleifend, sagittis.
        </article>

        <article className='card-inters-info-footer'>
          <div>
            <h3>Duracion</h3>
            <p>{card.duration}</p>
          </div>

          <div>
            <h3>Desde</h3>
            <p>{card.precio}$</p>
          </div>
        </article>
      </div> */}
    </section>
  );
};

export default CardInter;
