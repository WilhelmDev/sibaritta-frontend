import ModalSession from "@/components/molecules/ModalSession";
import Clock from "@/components/molecules/clock/Clock";
import RecoveryModal from "@/components/molecules/recovery/RecoveryModal";
import ModalConfirmation from "@/components/molecules/session/ModalConfirmation";
import ModalRegister from "@/components/molecules/session/ModalRegister";
import { Minus } from "@/components/ui/icons/Minus";
import { useRouter } from "next/router";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import { classNames } from "primereact/utils";
import { IDataCity } from "../../../interface/city.interface";

interface Sugerencia {
  id: number;
  imgs: string;
  title: string;
  description: string;
  precio: number;
}
interface PropsSuggestion {
  addSugestion: any;
  suggestion: number;
  setSuggestion: Dispatch<SetStateAction<number>>;
  setAddSugestion: any;
  handleAgregarClick: any;
  setCounts: Dispatch<SetStateAction<number>>;
  data: any;
  trigger: boolean;
}
function ChefSuggestion({
  suggestion,
  setSuggestion,
  handleAgregarClick,
  data,
  trigger,

  setCounts,
}: PropsSuggestion) {
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

  const suggestionData = data.suggestions.map((suggestion: any) => ({
    ...suggestion,
    count: 0,
  }));

  const [suggestionDatas, setSuggestionDatas] = useState(suggestionData);

  const autenticationUser = () => {
    setauttenti(true);
  };

  const filteres = suggestionDatas.filter((suge: any) => suge.count > 0);

  const handleButtonClick = () => {
    handleAgregarClick(filteres);
    let userId: any = null;
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userid");
      userId = storedUserId ? parseInt(storedUserId, 10) : null;
    }
    if (!userId) {
      openModalLogin();
    } else {
      router.push("/checkout");
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
    <section className="details_suggestion_ main-page flex-2 w-2/6">
      <div className="details-box">
        <article className="suggestion_time">
          <p>Tiempo para conservar tu reservación</p>
          <Clock trigger={trigger} />
        </article>
        <article className="suggestion_title main-page">
          <h2>Sugerencias del chef</h2>
        </article>
        <div className="">
          <article className="suggestion_card  main-page">
            {suggestionDatas &&
              suggestionDatas.length > 0 &&
              suggestionDatas?.map((info: any) => (
                <div
                  key={info.id}
                  className="card  object-cover bg-center rounded-2xl "
                  style={{ backgroundImage: `url(${fondo(info)})` }}
                >
                  <div className="card_info ">
                    <div className="card_box__ ">
                      <article className="card_info_precio">
                        <h2>{info?.name}</h2>
                        <p>${info?.regular_price}</p>
                      </article>
                      <article className="card_info_description">
                        <p className=" flex  justify-center text-[1.5rem] h-[7rem] ">
                          {info?.description.substring(0, 70)}
                        </p>
                      </article>
                      <article className="card_info_btn">
                        <div className=" card-count-box-- ">
                          <div
                            className={`box-counter-_min- `}
                            onClick={() => {
                              const updatedSuggestionDatas =
                                suggestionDatas.map((s: any) =>
                                  s.id === info.id
                                    ? {
                                        ...s,
                                        count: Math.max((s.count || 0) - 1, 0),
                                      }
                                    : s
                                );

                              setSuggestionDatas(updatedSuggestionDatas);

                              // Utilizar el callback de setState para asegurar que estás utilizando el estado actualizado
                              setSuggestionDatas((prevSuggestionDatas: any) => {
                                const updatedInfo = {
                                  ...info,
                                  count: Math.max((info.count || 0) - 1, 0),
                                };

                                return prevSuggestionDatas;
                              });
                            }}
                          >
                            <Minus />{" "}
                          </div>
                          <span className=" text-[2.4rem] text-[#E1D4C4] ">
                            {info?.count}
                          </span>
                          <div
                            className={`box-counter-_max- `}
                            onClick={() => {
                              const updatedSuggestionDatas =
                                suggestionDatas.map((s: any) =>
                                  s.id === info.id
                                    ? { ...s, count: (s.count || 0) + 1 }
                                    : s
                                );

                              setSuggestionDatas(updatedSuggestionDatas);

                              // Utilizar el callback de setState para asegurar que estás utilizando el estado actualizado
                              setSuggestionDatas((prevSuggestionDatas: any) => {
                                const updatedInfo = {
                                  ...info,
                                  count: (info.count || 0) + 1,
                                };

                                // handleAgregarClick(updatedInfo);
                                return prevSuggestionDatas;
                              });
                            }}
                          >
                            <i className="icon-more text-[#000] font-bold text-[1.2rem]"></i>
                          </div>
                        </div>

                        {/* <button
                          onClick={() => {
                            // handleAgregarClick(info);
                            setCounts(1);
                            toast(`Agregaste ${info?.count} ${info?.name}`, {
                              id: info?.name,
                              unstyled: true,
                              classNames: {
                                toast:
                                  "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
                                title: " text-[2rem]  ",
                              },
                              position: "top-center",
                            });
                          }}
                        >
                          Agregar
                        </button> */}
                      </article>
                    </div>
                  </div>
                  <div className="w-full h-full z-0 rounded-[1rem] absolute  bottom-0 bg-gradient-to-b from-transparent to-[#252127] "></div>
                </div>
              ))}
          </article>
          {suggestionDatas && suggestionDatas.length === 0 && (
            <div className="w-full h-[50rem] grid place-items-center">
              <h2 className="text-[white]  font-bold tablet:text-[2rem] laptop:text-[3rem] text-center">
                No tenemos adicionales para esta experiencia
              </h2>
            </div>
          )}
        </div>

        <article className="suggention_next_btn main-page">
          {/* <button
            onClick={() => setSuggestion(suggestion - 1)}
            className="suggention_previous"
          >
            Anterior
          </button> */}
          <button onClick={handleButtonClick} className="suggention_next">
            CONTINUAR
          </button>
        </article>
        <p className="suggestion_nota">
          NOTA: Nuestras experiencias se ofrecen en horarios exclusivos.
        </p>
      </div>
      <ModalSession
        setautenti={autenticationUser}
        closeModalLogin={closeModalLogin}
        openModalRegistro={openModalRegistro}
        openRegistro={openRegistro}
        openLogin={openLogin}
        openModalForgot={openModalForgot}
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
      {openConfirmacion && (
        <ModalConfirmation
          closeModalConfirmacion={closeModalConfirmacion}
          openConfirmacion={openConfirmacion}
        />
      )}
    </section>
  );
}

export default ChefSuggestion;
