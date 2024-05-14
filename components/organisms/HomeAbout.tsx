import Image from "next/image";
import React from "react";
import { Button } from "../molecules/Button";
const HomeAbout = () => {
  return (
    <section className="homeAbout bg-[#252127]  " data-section={"/businnes"}>
      <article className="homeAbout_contendor  ">
        <div className="w-[50%]">
          <Image
            src={"/home/about/joven.png"}
            alt="joven_feliz"
            width={450}
            height={54}
          />
        </div>

        <div className="homeAbout_contendor_datos">
          <h3 className="homeAbout_contendor_datos_h3">
            Solicita nuestro servicio de Concierge Sibaritta para eventos
            personalizados
          </h3>

          <p className="homeAbout_contendor_datos_p">
            En Sibaritta te ofrecemos el servicio de concerje para darte un
            servicio personalizado en tus momentos especiales.{" "}
          </p>
          <Button className="homeAbout_contendor_datos_btn">Solicitar</Button>
        </div>
      </article>
    </section>
  );
};

export default HomeAbout;
