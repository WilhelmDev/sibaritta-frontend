import ModalPropina from "@/components/molecules/checkout/ModalPropina";
import ModalUpdateBebida from "@/components/molecules/checkout/ModalUpdateBebida";
import { IReservation } from "@/interface/checkout.interface";
import { formatTime } from "@/utils/timer";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { resetReservation, setPersonas } from "@/redux/slice/detalle.slice";
import { Elements } from "@stripe/react-stripe-js";

import FormPayment from "@/components/molecules/checkout/FormPayment";
import Clock from "@/components/molecules/clock/Clock";
import { createReservationsConfirm } from "@/services/reservaciones.service";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { formatDates } from "@/utils/formaterDate";
import { updateDates } from "@/redux/slice/clockSlice";
import { toast } from "sonner";
import Loading from "@/components/atoms/Loading";
import { DeleteIcons } from "@/components/ui/icons/Delete";
import { getUserById } from "@/services/login.services";
import Link from "next/link";
import moment from "moment";
import ModalPoliticasCancelacion from "@/components/molecules/partner/ModalPoliticasCancelacion";
import ModalAcuerdo from "@/components/molecules/reservationExitosa/ModalAcuerdo";
import SecurityPrivileges from "@/security/SecurityPrivileges";
import Drowpdon from "@/components/atoms/Drowpdon";

function Index() {
  const [cancelationPoliti, setcancelationPoliti] = useState<boolean>(false);

  const router = useRouter();
  const [isEditing, setIsEditing] = useState<any>({});

  const [visible, setVisible] = useState<boolean>(false);
  const [propina, setPropina] = useState(10);
  const [checkBox, setcheckBox] = useState(false);
  const [checkBoxError, setcheckBoxError] = useState<string>("");
  const [checkBoxTwo, setcheckBoxTwo] = useState(false);
  const [checkBoxTree, setcheckBoxTree] = useState(false);
  const [checkBoxTwoError, setCheckBoxTwoError] = useState<string>("");
  const [checkBoxTreeError, setCheckBoxTreeError] = useState<string>("");
  const [datos, setDatos] = useState<IReservation | null | undefined>();
  const [bebidasUpdate, setbebidasUpdate] = useState({});
  const [modalPropina, setModalPropina] = useState<boolean>(false);
  const stripeRef = useRef<HTMLButtonElement | null>(null);
  //captura de comment y gmail
  const [comment, setComment] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  // email y direccion del usuario
  const [userLoginDatos, setuserLoginDatos] = useState();
  const [address, setAddress] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [acuerdoModal, setacuerdoModal] = useState<boolean>(false);
  const keyStripe =
    "pk_test_51OYeYoAxcKR0527klkQXwcOwBSHfy18vOYoMUgNRuA9HiONvIPU6VJUrmvwezAxlM4WiKVJJT8wC2zLn7DZwP0pp00h5WwfQKX";
  const stripePromise = loadStripe(keyStripe);
  const reservaStore = useAppSelector((state: any) => state.reservation);
  const dispatch = useAppDispatch();
  const handleReservation = () => {
    router.push({
      pathname: "/reserva_exitosa",
    });
  };

  const openAcuerdoModal = () => {
    setacuerdoModal(true);
  };

  const date = formatDates(datos?.fecha || "");

  const getUserByIds = async () => {
    try {
      const userIdString = localStorage.getItem("userid");

      if (userIdString !== null) {
        const userId = parseInt(userIdString, 10); // convierte el string a número
        const { data } = await getUserById(userId);

        setuserLoginDatos(data);
        setemail(data.email);
        setAddress(data.meta_data[0].meta_value);
      } else {
        console.log("El valor de userid en localStorage es nulo");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserByIds();
  }, []);

  let totalExperience = parseInt(datos?.priceExperience ?? "0", 10) * (datos?.personas ?? "0", 10);
  
  const datePart = datos?.horario;
  const part = datePart?.split(":");
  const horas = parseInt(part?.[0] ?? "0", 10);
  const minutos = parseInt(part?.[1]?.split(" ")[0] ?? "0", 10);

  // captura de comment y gmail
  const handleInputChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleEmail = (e: any) => {
    setemail(e.target.value);
  };

  const handleAddress = (e: any) => {
    setAddress(e.target.value);
  };

  const openModal = () => {
    setVisible(true);
    // document.body.style.overflow = "hidden";
  };

  const openModalPropina = () => {
    setModalPropina(true);
    // document.body.style.overflow = "hidden";
  };
  const toggleEditing = (inputName: string): void => {
    setIsEditing((prev: any) => ({
      ...prev,
      [inputName]: !prev[inputName],
    }));
  };
  //comment
  // const subTotal = () => {
  //   let subtotal =
  //     parseInt(datos?.priceExperience ?? "0", 10) * (datos?.personas ?? 0);
  //   if (datos?.sugerencias && datos.sugerencias.length > 0) {
  //     subtotal += datos.sugerencias.reduce((total, bebida) => {
  //       let cantidad = bebida?.count || 0;
  //       let precio: any = parseInt(bebida?.regular_price ?? "0", 10) || 0;
  //       return total + cantidad * precio;
  //     }, 0);
  //   }
  //   subtotal += cargoServicio;
  //   return subtotal;
  // };

  const calcularPropia = () => {
    const subtotal = subTotal();
    return (subtotal * propina) / 100;
  };

  const personas = datos?.personas ?? 0; // Si personas es undefined, se asume como 0
  const priceExperience = parseInt(datos?.priceExperience ?? "0"); // Si priceExperience es undefined, se asume como '0'

  const pricexexperience = personas * priceExperience;

  const subTotal = () => {
    let subtotal = pricexexperience;
    if (datos?.sugerencias && datos.sugerencias.length > 0) {
      subtotal += datos.sugerencias.reduce((total, bebida) => {
        let cantidad = bebida?.count || 0;
        let precio: any = parseInt(bebida?.regular_price ?? "0", 10) || 0;
        return total + cantidad * precio;
      }, 0);
    }
    subtotal;
    return subtotal;
  };

  const calcularTotal = () => {
    const subtotal = subTotal();
    // const propinas = calcularPropia();

    // return subtotal + propinas;

    return subtotal;
  };

  let userId = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  useEffect(() => {
    const storedReservation = localStorage.getItem("reservation") || "";
    if (userId!) {
      const parsedReservation: IReservation = JSON.parse(storedReservation);
      setDatos(parsedReservation);
    }
  }, []);
  //pago stripe

  const accionStripe = async () => {
    setLoading(true);
    let idStripe = "";
    let idNumberCard = "";
    stripeRef.current?.click();
    setTimeout(() => {
      const idStripeString = localStorage.getItem("Stripe");
      const idCardNumberString = localStorage.getItem("last4");

      if (idStripeString) {
        idStripe = JSON.parse(idStripeString);
      }

      if (idCardNumberString) {
        idNumberCard = JSON.parse(idCardNumberString);
      }
    }, 2000);

    if (checkBox === false) {
      setcheckBoxError("Este campo es obligatorio");
      setTimeout(() => {
        setcheckBoxError("");
      }, 2500);
    }

    if (checkBoxTree === false) {
      setCheckBoxTreeError("Este campo es obligatorio");
      setTimeout(() => {
        setCheckBoxTreeError("");
      }, 2500);
    }

    if (address === "") {
      setAddressError("Este campo es obligatorio");
      setTimeout(() => {
        setAddressError("");
      }, 2500);
    }
    if (email === "") {
      setEmailError("Este campo es obligatorio");
      setTimeout(() => {
        setEmailError("");
      }, 2500);
    }
    if (phoneNumber === "") {
      setPhoneNumberError("Este campo es obligatorio");
      setTimeout(() => {
        setPhoneNumberError("");
      }, 2500);
    }
    if (
      address === "" ||
      email === "" ||
      checkBox === false || 
      checkBoxTree === false
    ) {
      setLoading(false);

      // Muestra mensajes de error o toma alguna acción
      return;
    }

    setTimeout(async () => {
      setLoading(true);

      try {
        const datacheckout = {
          reservation_id: datos?.idReservation,
          order_comments_checkout: comment,
          order_check_terms_checkout: checkBox,
          order_check_get_more_info_checkout: checkBoxTwo,
          order_id_stripe_checkout: idStripe,
          order_id_stripe_amount: calcularTotal(),
          order_fk_experience_id: datos?.fk_experience_id,
          order_fk_event_id: datos?.order_fk_event_id,
          order_seats_experience: datos?.personas,
          order_price_experience: parseInt(datos?.priceExperience ?? "0", 10),
          order_total_experience: calcularTotal(),
          order_type_event: datos?.tipoReserva,
          order_date_event: datos?.fecha,
          order_hour_event: horas,
          order_minute_event: minutos,
          cardnumber: idNumberCard,
          user_address: address,
          order_details: datos?.sugerencias!.map((e: any) => {
            let data = {
              id: e.id,
              name: e.name,
              quantity: e.count,
              price_item: e.regular_price,
            };
            return data;
          }),
        };

        const data = await createReservationsConfirm(datacheckout);

        if (data.message === "Reservation successful confirmed") {
          handleReservation();
          setDatos(null);
          dispatch(resetReservation());
          dispatch(
            updateDates({
              startDate: "",
              startTime: "",
              order_code: "",
              order_number: "",
            })
          );
          localStorage.setItem("code", data.data.order_code);
          localStorage.removeItem("reservation");
          localStorage.removeItem("Stripe");
          localStorage.removeItem("last4");
          toast("Reserva exitosa", {
            unstyled: true,
            classNames: {
              toast:
                "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato",
              title: " text-[2rem]  ",
            },
            position: "top-center",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  // useEffect(() => {
  //   if (reservaStore.fecha === "") {
  //     router.push("/");
  //   }
  // }, []);

  const dateCurrent = moment();

  // Formatear la fecha y hora en el formato deseado
  const dateFormater = dateCurrent.format("dddd DD [de] MMMM YYYY, h:mmA");

  const dates = datos?.fecha;
  const hours = datos?.horario;
  const fechaFormateada = moment(dates).format("dddd DD [de] MMMM YYYY");
  const horaFormateada = moment(hours, "h:mma").format("hh:mm A");
  const result = `${fechaFormateada}, ${horaFormateada}`;
  const [namePartner, setnamePartner] = useState<any>();
  useEffect(() => {
    const namest = localStorage.getItem("name_partner");
    setnamePartner(namest);
  }, []);

  return (
    <SecurityPrivileges>
      <div className="container-general  main-page checkoutContenedor">
        <div className="1/6">
          <div className="checkout_time d-block text-right">
            <p className="">Tiempo para conservar tu reservación</p>
            <h2 className="">
              <Clock />
            </h2>
          </div>
        </div>
        <div className="flex space-x-4 gap-4">
          <article className=" w-1/2	">
            <h3 className="mb-4">
              Observaciones del Socio para el establecimiento
            </h3>

            <div className="checkout_info">
              <div className="flex  flex-col gap-[.5rem]">
                <textarea
                  value={comment}
                  onChange={handleInputChange}
                  placeholder="Escribe aquí"
                  cols={30}
                  rows={10}
                  className="text-[#fff] font-lato"
                ></textarea>
              </div>
              <p>
                Si tienes alguna observación adicional que no incluyas en esta
                casilla, por favor comunicarlo al personal del establecimiento
                el día del evento
              </p>
              {/* <p className="underline cursor-pointer !text-[#E1D4C4]" onClick={(e) => goTo("/terminos_condiciones.pdf", e)}  >
                Términos y condiciones
              </p> */}

              <p
                onClick={openAcuerdoModal}
                className="underline cursor-pointer !text-[#E1D4C4]"
              >
                Ver acuerdos y condiciones
              </p>
            </div>
            <h3 className="mt-6 pt-5">Detalles del pago</h3>

            <div className="cheackout_details_pay">
              <div className="checkout_datils_email">
                <h5>Correo electrónico</h5>
                <div className="flex flex-col gap-[.2rem]">
                  <input
                    className={email === "" ? "border-red" : ""}
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    disabled
                    placeholder="Ingresa tu correo electronico"
                  />
                  {emailError && (
                    <p className="Login-error main-page !text-red-600 !text-[1.2rem]  font-lato">
                      {String(emailError)}
                    </p>
                  )}
                </div>
              </div>

              <div className="checkout_datils_payment_method">
                <div className="checkout_paymet_icons">
                  <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between">
                    <h5>Datos de la tarjeta de crédito</h5>
                    <div className="checkout_options "></div>
                  </div>
                  <Elements stripe={stripePromise}>
                    <FormPayment reference={stripeRef} />
                  </Elements>
                </div>
              </div>

              <div className="checkout_datils_email">
                <h5>Dirección</h5>
                <div className="flex flex-col gap-[.2rem] relative">
                  <input
                    value={address}
                    onChange={handleAddress}
                    type="text"
                    placeholder="Ingresa tu dirección"
                    // disabled={address?.length > 15}
                    // readOnly={!isEditing["direccion"]}
                    // className={`  ${
                    //   isEditing["direccion"]
                    //     ? "!bg-[#4D3452] duration-300 ease-in-out"
                    //     : ""
                    // }`}
                  />
                  {addressError && (
                    <p className="Login-error main-page !text-red-600 !text-[1.2rem] font-lato">
                      {String(addressError)}
                    </p>
                  )}
                  {/* <i
                    onClick={() => toggleEditing("direccion")}
                    className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"
                  ></i> */}
                </div>
              </div>
              <div className="checkout_datils_email">
                <h5>Telefono</h5>
                <div className="flex flex-col gap-[.2rem] relative">
                  <Drowpdon reference={setPhoneNumber}/>
                  {phoneNumberError && (
                    <p className="Login-error main-page !text-red-600 !text-[1.2rem] font-lato">
                      {String([phoneNumberError])}
                    </p>
                  )}
                  {/* <input
                    value={phoneNumber}
                    onChange={handleNumberPhone}
                    type="text"
                    placeholder="(201) 555-0123"
                  />
                  {addressError && (
                    <p className="Login-error main-page !text-red-600 !text-[1.2rem] font-lato">
                      {String(addressError)}
                    </p>
                  )} */}
                </div>
              </div>
            </div>
          </article>

          <article className=" w-1/2	">
            <h3 className="mb-4">Resumen de la orden</h3>

            <div className="order_summary">
              <div className="order_datos  flex flex-col  items-start pb-0">
                <div className="experincie-date-box ">
                  <h5 className="txt-experincie-date-box "> Experiencia</h5>
                  <h5 className="txt-experincie-date-box font-lato text-[#F89C53] font-bold">
                    {datos?.nameExperience}
                  </h5>
                </div>
                <div className="flex items-center justify-between w-full text-[1.5rem]">
                  <h5 className="txt-experincie-date-box">
                    {" "}
                    Nombre del parnet
                  </h5>
                  <h5 className="txt-experincie-date-box font-lato text-[#F89C53] font-bold">
                    {namePartner}
                  </h5>
                </div>

                <div className="flex items-center justify-between w-full text-[1.5rem]">
                  <h5 className="txt-experincie-date-box"> Dirección</h5>
                  <h5 className="txt-experincie-date-box font-lato text-[#F89C53] font-bold">
                    {datos?.addres}
                  </h5>
                </div>
                <div className="flex items-center justify-between w-full text-[1.5rem] ">
                  <h5 className="txt-experincie-date-box">Fecha</h5>
                  <h5 className="txt-experincie-date-box font-lato text-[#F89C53] font-bold">
                    {result}
                  </h5>
                </div>
                <div className="flex items-center justify-between w-full text-[1.5rem]">
                  <h5 className="txt-experincie-date-box">Modalidad</h5>
                  <h5 className="txt-experincie-date-box font-lato text-[#F89C53] font-bold">
                    {datos?.tipoReserva}
                  </h5>
                </div>
                <div className="flex items-center justify-between w-full pb-[1.5rem] border-b-[1px]">
                  <h5 className="txt-experincie-date-box">Nº de personas</h5>
                  <h5 className="txt-experincie-date-box font-lato text-[#F89C53] font-bold">
                    {datos?.personas || 0}
                  </h5>
                </div>
              </div>

              <div className=" py-[1.5rem] border-b-[1px]">
                <div className="flex items-center justify-between w-full text-[1.5rem]">
                  <h5 className="txt-experincie-date-box">
                    x{datos?.personas || 0} Experiencia
                  </h5>
                  <h5 className="txt-experincie-date-box font-lato text-[#F89C53] font-bold">
                    {pricexexperience}
                  </h5>
                </div>
              </div>

              {datos?.sugerencias?.length !== 0 && (
                <article className="order_experiencie">
                  {datos?.sugerencias && datos.sugerencias.length > 0 ? (
                    datos.sugerencias.map((bebida: any) => (
                      <div key={bebida.id} className="order_box-box_main ">
                        <div className="order_datos  ">
                          <div className="order_price_butons_update ">
                            <p>{`x${bebida.count} ${bebida.name}`}</p>
                            <button
                              onClick={() => {
                                openModal();
                                setbebidasUpdate(bebida);
                              }}
                              className="btn-checkout_modific- "
                            >
                              Modificar
                            </button>
                          </div>

                          <article className="order_datos_price ">
                            <span>{`$ ${
                              Number(bebida.count || 0) *
                              Number(bebida.regular_price || 0)
                            }`}</span>
                            <div
                              className="cursor-pointer"
                              onClick={() =>
                                setDatos((prevDatos) => {
                                  if (!prevDatos || !prevDatos.sugerencias) {
                                    return prevDatos;
                                  }
                                  const nuevaListaBebidas =
                                    prevDatos.sugerencias.filter(
                                      (beb) => beb.id !== bebida.id
                                    );
                                  const nuevosDatos = {
                                    ...prevDatos,
                                    sugerencias: nuevaListaBebidas,
                                  };
                                  localStorage.setItem(
                                    "reservation",
                                    JSON.stringify(nuevosDatos)
                                  );

                                  return nuevosDatos;
                                })
                              }
                            >
                              {" "}
                              <DeleteIcons />
                            </div>
                          </article>
                        </div>
                        <button
                          onClick={() => {
                            openModal();
                            setbebidasUpdate(bebida);
                          }}
                          className="w-[90%] h-[3rem] bg-[#4D3452]  rounded-[1rem] text-[#E1D4C4] font-lato text-[1.4rem] font-bold tablet:hidden"
                        >
                          Modificar
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="order_box-box_main ">
                      <div className="order_datos  ">
                        <div className="order_price_butons_update ">
                          <p>x0 bebidas</p>
                          <button
                            onClick={openModal}
                            className="btn-checkout_modific-  "
                          >
                            Modificar
                          </button>
                        </div>

                        <article className="order_datos_price ">
                          <span>$0</span>
                          <Image
                            src={"/checkout/delete.png"}
                            alt="delete"
                            width={24}
                            height={24}
                          />
                        </article>
                      </div>
                      <button
                        onClick={openModal}
                        className=" tablet:hidden w-[11.3rem] h-[3rem] bg-[#4D3452]  rounded-[1rem]
          text-[#E1D4C4] font-lato text-[1.4rem] font-bold "
                      >
                        Modificar
                      </button>
                    </div>
                  )}
                </article>
              )}

              {/* <div className="order_datos">
                <p>Cargo de servicio</p>
                <article className="order_datos_price">
                  <span>$ {cargoServicio}</span>
                </article>
              </div> */}

              {/* <article className="order_experiencie"> */}
              {/* <div className="order_datos "> */}

              {/* </div> */}
              {/* <div className="order_datos">
                  <p>{date || "--/--/--"}</p>
                  <article className="order_datos_price">
                    <span>{datos?.horario || "--:--"}</span>
                  </article>
                </div> */}
              {/* </article> */}

              <article className="order_experiencie border-none">
                {/* <div className="order_datos ">
                  <p className="">Subtotal</p>
                  <article className="order_datos_price">
                    <span className="">{`$${subTotal()}`}</span>
                  </article>
                </div> */}

                {/* <div className="order_box-box_main"> */}
                {/* <div className="order_datos"> */}
                {/* <div className=" order_price_butons_update">
                      <p>Propina ({propina}%)</p>
                      <button
                        onClick={openModalPropina}
                        className="btn-checkout_modific-  "
                      >
                        Modificar
                      </button>
                    </div> */}
                {/* <article className="order_datos_price">
                      <span>{`$${calcularPropia()}`}</span> */}
                {/* <Image
                        src={"/checkout/delete.png"}
                        alt="delete"
                        width={24}
                        height={24}
                      /> */}
                {/* </article> */}
                {/* </div> */}
                {/* <button
                    onClick={openModalPropina}
                    className="w-[11.3rem] h-[3rem] bg-[#4D3452]  rounded-[1rem] text-[#E1D4C4] font-lato text-[1.4rem] font-bold tablet:hidden"
                  >
                    Modificar
                  </button> */}
                {/* </div> */}

                <div className="order_datos !border-t-[#fff] p-0 ">
                  <h5 className="">Total</h5>
                  <article className="order_datos_price">
                    <h5 className="">{`$${calcularTotal()}`}</h5>
                  </article>
                </div>

                <article className="footer-checkout  ">
                  <div className="checkout-terminos flex flex-col ">
                    <div className="flex">
                      <label
                        htmlFor="checkBox"
                        className="cursor-pointer flex gap-[.5rem]"
                      >
                        <input
                          checked={checkBox}
                          id="checkBox"
                          onChange={(e) => setcheckBox(e.target.checked)}
                          type="checkbox"
                          className="w-[1.7rem]"
                        />
                        <p className="">
                          Acepto{" "}
                          <a onClick={openAcuerdoModal} className="checkout-p">
                            acuerdos y condiciones
                          </a>
                        </p>
                      </label>
                    </div>
                    {checkBoxError && (
                      <p className="Login-error main-page !text-red-600 !text-[1.2rem]  font-lato">
                        {String(checkBoxError)}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-[1rem]">
                    <div className="flex">
                      <label
                        htmlFor="checkBoxTwo"
                        className="cursor-pointer flex gap-[.5rem]"
                      >
                        <input
                          id="checkBoxTwo"
                          checked={checkBoxTwo}
                          onChange={(e) => setcheckBoxTwo(e.target.checked)}
                          type="checkbox"
                          className="w-[1.7rem]"
                        />
                        <p className="restaured-inputs-_ ">
                          Me gustaría recibir información de este restaurante
                        </p>
                      </label>
                    </div>

                    {checkBoxTwoError && (
                      <p className="Login-error main-page !text-red-600 !text-[1.2rem]  font-lato">
                        {String(checkBoxTwoError)}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-[1rem]">
                    <div className="flex">
                      <label
                        htmlFor="checkBoxTwo"
                        className="cursor-pointer flex gap-[.5rem]"
                      >
                        <input
                          id="checkBoxTwo"
                          checked={checkBoxTree}
                          onChange={(e) => setcheckBoxTree(e.target.checked)}
                          type="checkbox"
                          className="w-[1.7rem]"
                        />
                        <p className="restaured-inputs-_ ">
                         Entiendo que la cancelación y reembolso del 100% se <br /> puede realizar antes 24 horas del evento 
                        </p>
                      </label>
                    </div>

                    {checkBoxTreeError && (
                      <p className="Login-error main-page !text-red-600 !text-[1.2rem]  font-lato">
                        {String(checkBoxTreeError)}
                      </p>
                    )}
                  </div>
                  <p
                    onClick={() => setcancelationPoliti(true)}
                    className="checkout-p cursor-pointer"
                  >
                    {" "}
                    Ver politicas de cancelación
                  </p>
                  <button
                    onClick={accionStripe}
                    className="checkout-btn flex justify-center items-center gap-[.5rem] "
                  >
                    {isLoading ? (
                      <>
                        Procesando reserva
                        <Loading />
                      </>
                    ) : (
                      <>Confimar reserva</>
                    )}
                  </button>
                </article>
              </article>
            </div>
          </article>
        </div>
      </div>
      <ModalUpdateBebida
        visible={visible}
        setVisible={setVisible}
        bebida={bebidasUpdate}
        reserva={datos}
        setReserva={setDatos}
      />
      <ModalPropina
        own={propina}
        setOwn={setPropina}
        visible={modalPropina}
        setVisible={setModalPropina}
      />
      <ModalAcuerdo visible={acuerdoModal} setVisible={setacuerdoModal} />
      <ModalPoliticasCancelacion
        visible1={cancelationPoliti}
        setVisible1={setcancelationPoliti}
      />
    </SecurityPrivileges>
  );
}

export default Index;
