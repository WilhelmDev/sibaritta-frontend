import RegisterPartner from "@/components/molecules/partner/RegisterPartner";
import HomeBanner from "@/components/organisms/HomeBanner";
import HomeBusiness from "@/components/organisms/HomeBusiness";
import HomeSocial from "@/components/organisms/HomeSocial";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SecurityPrivileges from '@/security/SecurityPrivileges';


function Index() {
  const [registerPartner, setregisterPartner] = useState<boolean>(false);

  const openRegisterPartner = () => {
    setregisterPartner(true);
  };


const router = useRouter();




  return (
      <SecurityPrivileges>

    <div>
      <HomeBanner />

      <div
        className="box-mainsibaritta_business main-page "
        data-section={"/sibaritta_business"}
        >
        <div onClick={openRegisterPartner} className="partnet_modal_create ">
          <h3>¡Sé parte de Sibaritta!</h3>
          <div className="logo_modal_partner ">
            <Image
              src={"/business/partner.png"}
              className="w-full h-full"
              width={1000}
              height={1000}
              alt="logo"
              />
          </div>
        </div>
        <div className="box_sibaritta_business_dates ">
          <div className="infor_sibarrita_business-one">
            <div className="box_bussines-title-description  ">
              <h2>Convierte tu establecimiento en una experiencia Sibaritta</h2>
              <p>
                Si tienes un establecimiento que ofrece un alto nivel de calidad
                y servicio, queremos invitarte a transformarlo en un destino de
                experiencias exclusivas para Sibarittas que buscan descubrir
                momentos que van más allá de lo común con calidad y servicio
                excepcionales
              </p>
            </div>

            <div className="business-sibaritta_imagen"></div>
          </div>
          <div className="infor_sibarrita_business-two">
            <div className="business-sibaritta_imagen-two"></div>

            <div className="information_sibaritta_two-">
              <h2>Beneficios de ser Partner Sibaritta</h2>
              <div className="box-box-descript">
                <div className="box-descript-infos-_-">
                  <span></span>
                  <p>
                    Visibilidad Exclusiva: Posicionamos tu marca a través de
                    promoción y publicidad personalizadas con “valor extremo”,
                    diseñadas con maestría para realzar cada experiencia a un
                    nivel insuperable
                  </p>
                </div>
                <div className="box-descript-infos-_-">
                  <span></span>
                  <p>
                    Resalta lo mejor de tu marca: Crea Experiencias Exclusivas y
                    Únicas, donde podrás dar a conocer lo mejor de tu esencia y
                    autenticidad{" "}
                  </p>
                </div>
                <div className="box-descript-infos-_-">
                  <span></span>
                  <p>
                    Crea conexiones emocionales memorables: Transforma tu marca
                    en un ícono de experiencias que son recordadas a un nivel
                    emocional más profundo. Cada interacción es una oportunidad
                    para tocar el corazón de un Sibaritta
                  </p>
                </div>
                <div className="box-descript-infos-_-">
                  <span></span>
                  <p>
                    Posiciona tu marca como destino de Experiencias: Destaca tu
                    establecimiento como epicentro de experiencias, atrae nuevos
                    clientes y expande tu negocio a otro nivel
                  </p>
                </div>
                <div className="box-descript-infos-_-">
                  <span></span>
                  <p>
                    Comunidad Selecta: Ser un Partner Sibaritta es ser parte de
                    un grupo selecto de establecimientos que contribuye al
                    status colectivo de una comunidad con un sello distintivo
                    definido
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-texto-agenda-sibaritta-business ">
            <h3 className=" text-center ">
              Agenda una llamada personalizada e inicia tu proceso de
              selección...
            </h3>
          </div>
        </div>

        <HomeBusiness />
        <HomeSocial />
        <RegisterPartner
          visible1={registerPartner}
          setVisible1={setregisterPartner}
          />
      </div>
    </div>
          </SecurityPrivileges>
  );
}

export default Index;
