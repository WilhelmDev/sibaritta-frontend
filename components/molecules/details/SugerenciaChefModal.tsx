import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Modal from "../Modal";
import { SwiperOptions } from "swiper/types";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { formatTime } from "@/utils/timer";
import { toast } from "sonner";
import Clock from "../clock/Clock";
import { Minus } from "@/components/ui/icons/Minus";
import ModalSession from "../ModalSession";
import index from "../../../pages/lista_suggerencias/index";
import ModalRegister from "../session/ModalRegister";
import RecoveryModal from "../recovery/RecoveryModal";

interface Sugerencia {
  id: number;
  imgs: string;
  title: string;
  description: string;
  precio: number;
}
interface ModalSessionProps {
  boolsugerencia: boolean;
  setBoolSugerencia: React.Dispatch<React.SetStateAction<boolean>>;
  handleAgregarClick: any;
  data: any;
  setCounts: Dispatch<SetStateAction<number>>;
  trigger: boolean;
}

function SugerenciaChefModal({
  boolsugerencia,
  setBoolSugerencia,
  handleAgregarClick,
  data,
  trigger,
}: ModalSessionProps) {
  const router = useRouter();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistro, setopenRegistro] = useState(false);
  const [openConfirmacion, setOpenConfirmacion] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [auttenti, setauttenti] = useState(false);

  const openModalLogin = () => {
    setOpenLogin(true);
    closeModalRegistro();
  };
  const closeModalLogin = () => {
    setOpenLogin(false);
  };

  const closeModal = () => {
    setBoolSugerencia(false);
  };
  //registro
  const openModalRegistro = () => {
    setopenRegistro(true);
    closeModalLogin();
  };
  const closeModalRegistro = () => {
    setopenRegistro(false);
  };

  // confirmarcion
  const openModalConfirmacion = () => {
    setOpenConfirmacion(true);
    closeModalRegistro();
  };

  const closeModalConfirmacion = () => {
    setOpenConfirmacion(false);
  };

  //forgot

  const openModalForgot = () => {
    setOpenForgot(true);
    closeModalLogin();
  };

  const closeModalForgot = () => {
    setOpenForgot(false);
  };

  const autenticationUser = () => {
    setauttenti(true);
  };

  const suggestionData = data.suggestions?.map((suggestion: any) => ({
    ...suggestion,
    count: 0,
  }));

  const [suggestionDatas, setSuggestionDatas] = useState(suggestionData);
  const filteres = suggestionDatas?.filter((suge: any) => suge.count > 0);

  const handleButtonClick = () => {
    handleAgregarClick(filteres);

    // Navegar a la ruta especificada
    let userId: any = null;
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userid");
      userId = storedUserId ? parseInt(storedUserId, 10) : null;
    }

    if (!userId) {
      openModalLogin();
    } else {
      router.push({
        pathname: "/checkout",
      });
    }
  };
  useEffect(() => {
    // Si el usuario se ha autenticado correctamente, redirigirlo a la ruta de checkout
    if (auttenti) {
      router.push("/checkout");
    }
  }, [auttenti]);

  const fondo = (suggestion: any) => {
    return suggestion?.images?.filter(
      (size: any) => size?.resolution === "small"
    )[0]?.path!;
  };
  return (
    <div>
      <Modal
        visible={boolsugerencia}
        closeModal={closeModal}
        width="w-[100%]"
        bg="#2F2A32"
        className="chef_sugerencia tablet:w-[60%] "
      >
        <section className="chef_sugerencia_  ">
          <div className="details-box">
            <article className="suggestion_time mb-4 text-right">
              <p>Tiempo para conservar tu reservación</p>
              <Clock trigger={trigger} />
            </article>
            <article className="suggestion_title main-page">
              <h2 className="tex-[#E1D4C4] !font-semibold  mb-5 text-left">
                Sugerencias del chef
              </h2>
            </article>
            <article className="cheft_cards p-0 mb-3">
              {suggestionDatas &&
                suggestionDatas.length > 0 &&
                suggestionDatas?.map((info: any) => {
                  return (
                    <div
                      key={info.id}
                      className="cheft_card "
                      style={{ backgroundImage: `url(${fondo(info)})` }}
                    >
                      <div className="cardsito ">
                        <div className="cardsito_info ">
                          <article className="cardsito_info_one">
                            <h2 className="text-left">{info?.name}</h2>
                            <p className="text-left">${info?.regular_price}</p>
                          </article>
                          <article className="cardsito_info_two">
                            <div className="  justify-center text-[1.5rem] h-[7rem] text-white ">
                              {info?.description.substring(0, 100)}
                            </div>
                          </article>
                          <div className=" cardMoreSugerencia bg-[#37323A]  rounded-[1rem] p-[1rem] flex justify-between">
                            <div
                              className={ `w-[3.6rem] h-[3.6rem] bg-[#F0EFEB] rounded-[1rem] cursor-pointer flex justify-center items-center`}
                              onClick={() => {
                                const updatedSuggestionDatas =
                                  suggestionDatas.map((s: any) =>
                                    s.id === info.id
                                      ? {
                                          ...s,
                                          count: Math.max(
                                            (s.count || 0) - 1,
                                            0
                                          ),
                                        }
                                      : s
                                  );

                                setSuggestionDatas(updatedSuggestionDatas);

                                // Utilizar el callback de setState para asegurar que estás utilizando el estado actualizado
                                setSuggestionDatas(
                                  (prevSuggestionDatas: any) => {
                                    const updatedInfo = {
                                      ...info,
                                      count: Math.max((info.count || 0) - 1, 0),
                                    };


                                    return prevSuggestionDatas;
                                  }
                                );
                              }}
                            >
                              <Minus />{" "}
                            </div>
                            <span className="text-[#E1D4C4] text-[2.4rem]">
                              {info?.count}
                            </span>
                            <div
                              className={`w-[3.6rem] h-[3.6rem] bg-[#F89C53] rounded-[1rem] cursor-pointer flex justify-center items-center`}
                              onClick={() => {
                                const updatedSuggestionDatas =
                                  suggestionDatas.map((s: any) =>
                                    s.id === info.id
                                      ? { ...s, count: (s.count || 0) + 1 }
                                      : s
                                  );

                                setSuggestionDatas(updatedSuggestionDatas);

                                // Utilizar el callback de setState para asegurar que estás utilizando el estado actualizado
                                setSuggestionDatas(
                                  (prevSuggestionDatas: any) => {
                                    const updatedInfo = {
                                      ...info,
                                      count: (info.count || 0) + 1,
                                    };

                                    // handleAgregarClick(updatedInfo);
                                    return prevSuggestionDatas;
                                  }
                                );
                              }}
                            >
                              <i className="icon-more text-[#000] font-bold text-[1.2rem] "></i>
                            </div>
                          </div>
                          <article className="cardsito_info_tree">
                            {/* <button
                              onClick={() => {
                                handleAgregarClick(info);
                                toast(
                                  `Agregaste ${info?.count} ${info?.name}`,
                                  {
                                    id: info?.name,
                                    unstyled: true,
                                    classNames: {
                                      toast:
                                        "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4]   z-[99] ",
                                      title: " text-[2rem]  ",
                                    },
                                    position: "top-center",
                                  }
                                );
                              }}
                            >
                              Agregar
                            </button> */}
                          </article>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </article>
            {suggestionDatas && suggestionDatas.length === 0 && (
              <div className="w-full h-[40rem] grid place-items-center">
                <h2 className="text-[white]  font-bold text-[2rem] text-center">
                  No tenemos adicionales para esta experiencia
                </h2>
              </div>
            )}
            <div className="w-full py-[1rem] flex   gap-[1rem]">
              {/* <button
                onClick={() => setBoolSugerencia(false)}
                className="bg-[#4D3452] w-full h-[5rem] rounded-[1rem] text-[#FFF] ! text-[2rem] font-semibold"
              >
                Anterior
              </button> */}
              <button
                onClick={handleButtonClick}
                className="bg-[#4D3452] w-full h-[5rem] rounded-[1rem] text-[#E1D4C4]  text-[2rem] font-semiboldd"
              >
                Pagar
              </button>
            </div>
            <div className="reserva_modal_footer">
            <h3 className="w-full text-[#E1D4C4] text-center text-[1.7rem]  font-semibold">
              NOTA: Nuestras experiencias se ofrecen en horarios exclusivos.
            </h3>

            </div>
          </div>
        </section>
      </Modal>

      <ModalSession
        closeModalLogin={closeModalLogin}
        openModalRegistro={openModalRegistro}
        openRegistro={openRegistro}
        openLogin={openLogin}
        openModalForgot={openModalForgot}
        setautenti={autenticationUser}
      />

      {openRegistro && (
        <ModalRegister
          closeModalRegistro={closeModalRegistro}
          openModalLogin={openModalLogin}
          openLogin={openLogin}
          openRegistro={openRegistro}
          openModalConfirmacion={openModalConfirmacion}
          setautenti={autenticationUser}
        />
      )}
      {openForgot && (
        <RecoveryModal
          openForgot={openForgot}
          closeModalForgot={closeModalForgot}
        />
      )}
    </div>
  );
}

export default SugerenciaChefModal;
