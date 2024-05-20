'use client'
import { createReservationsConfirm } from '@/services/reservaciones.service';
import { DeleteIcons } from '@/components/ui/icons/Delete';
import { Elements } from '@stripe/react-stripe-js';
import { formatDates } from '@/utils/formaterDate';
import { getUserById } from '@/services/login.services';
import { IReservation } from "@/interface/checkout.interface";
import { loadStripe } from '@stripe/stripe-js';
import { newRoutes } from '@/utils/routes';
import { resetReservation} from '@/redux/slice/detalle.slice';
import { toast } from 'sonner';
import { selectRemainingTime, updateDates } from '@/redux/slice/clockSlice';
import { useAppDispatch } from '@/redux/hook';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router';
 import { useState, useEffect,useRef } from 'react';
import Clock from "@/components/molecules/clock/Clock";
import Dropdown from '@/components/atoms/Drowpdon';
import FormPayment from '@/components/molecules/checkout/FormPayment';
import Link from 'next/link';
import Loading from '@/components/atoms/Loading';
import ModalAcuerdo from "@/components/molecules/reservationExitosa/ModalAcuerdo";
import ModalPoliticasCancelacion from '@/components/molecules/partner/ModalPoliticasCancelacion';
import ModalUpdateBebida from "@/components/molecules/checkout/ModalUpdateBebida";
import moment from 'moment';
import SecurityPrivileges from "@/security/SecurityPrivileges";
import { useSelector } from 'react-redux';

interface FechaState {
    month: string | null;
    year: number | null;
    day: number | null;
  }

export default function Experiencia () {
    const [cancelationPoliti, setcancelationPoliti] = useState<boolean>(false);

    const router = useRouter();
    const pathname = usePathname()

    const remainingTime = useSelector(selectRemainingTime);
    const [outOfTimeModal, setOutOfTimeModal] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<any>({});
  
    const [visibleAlert, setVisibleAlert] = useState<boolean>(false);
    const [alertModal, setAlertModal] = useState<string>('')

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
    
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
    const keyStripe =
      "pk_test_51OYeYoAxcKR0527klkQXwcOwBSHfy18vOYoMUgNRuA9HiONvIPU6VJUrmvwezAxlM4WiKVJJT8wC2zLn7DZwP0pp00h5WwfQKX";
    const stripePromise = loadStripe(keyStripe);
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
          setAddress(data?.meta_data[0]?.meta_value || "");
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

      return subtotal;
    };
  
    let userId = null as any;
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
    // pago stripe

  
    const accionStripe = async () => {
      setLoading(true);
      if(!remainingTime || remainingTime <= 0) {

        setOutOfTimeModal(true)
        setLoading(false)

        return; 
      } 
      
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

      if (!checkBoxTwo) {
        setCheckBoxTwoError("Este campo es obligatorio");
        setTimeout(() => {
          setCheckBoxTwoError("");
        }, 2500);
      }
  
      // if (checkBoxTree === false) {
      //   setCheckBoxTreeError("Este campo es obligatorio");
      //   setTimeout(() => {
      //     setCheckBoxTreeError("");
      //   }, 2500);
      // }


      const ModalAlert = () => {
        setAlertModal('Todos los campos son obligatorios')
        setVisibleAlert(true)
        setTimeout(() => {
          setVisibleAlert(false)
        }, 2500);
      }

      
  
      if (address === "") {
        ModalAlert()
        setAddressError("Este campo es obligatorio");
        setTimeout(() => {
          setAddressError("");
        }, 2500);
      }
      if (email === "") {
        ModalAlert()
        setEmailError("Este campo es obligatorio");
        setTimeout(() => {
          setEmailError("");
        }, 2500);
      }
      if (phone === "") {
        setPhoneNumberError("Este campo es obligatorio");
        setTimeout(() => {
          setPhoneNumberError("");
        }, 2500);
      }
      if (
        address === "" ||
        email === "" ||
        phone === ""
      ) {
        setLoading(false);
        router.push(`${pathname}#error`)
  
        // Muestra mensajes de error o toma alguna acción
        return;
      }

      if (
        !checkBox ||
        !checkBoxTwo
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
            order_type_event: 'presencial',
            order_date_event: datos?.fecha,
            order_hour_event: horas,
            order_minute_event: minutos,
            cardnumber: idNumberCard,
            numberPhone: code + phone,
            user_address: address,
            order_details: datos?.sugerencias 
            ? datos.sugerencias.map((e: any) => {
              let data = {
                id: e.id,
                name: e.name,
                quantity: e.count,
                price_item: e.regular_price,
              };
              return data;
            })
            : []
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
                  "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
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

  const updatePhoneNumber = (data:any) => {
    const isValid = /^\d*$/.test(data); // Validación con expresión regular

    if (isValid) {
      setPhone(data);
    }
  }

  function validaNumericos(event:any) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;
}
  
    const [fechaState, setFechaState] = useState<FechaState>({
        month: null,
        year: null,
        day: null,
      });
      
    useEffect(() => {
        const FechaDate = new Date(datos?.fecha || "2024-05-14T23:13:00.000Z")
        setFechaState((prevState) => ({
            ...prevState,
            month: FechaDate.toLocaleString('es-ES', { month: 'long' }),
            year: FechaDate.getFullYear(),
            day: FechaDate.getDate(),
          }));
    }, [datos])

  useEffect(() => {
    const update = document.querySelector('body')
    update?.classList.add('Experienciabg')
  }, [])

  return (
    <SecurityPrivileges>
      <main className="checkout">
          <div className="migajaPan">
              <div className="container-general">
              <div className="migajaPan__card ">
                  <ul className="flex">
                  <li>
                      <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                          &gt; Home
                      </Link>
                  </li>
                  <li>
                      <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                          &gt; Experiencias
                      </Link>
                  </li>
                  <li className="activeMigaja" >
                  <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                          &gt; Reservación
                      </Link>
                  </li>
                  </ul>
              </div>
              </div>
          </div>
          <div className='checkout__contenedor'>
              <div className='container-general'>
                  <div className="flex space-x-5">
                      <div className="w-3/5">
                          <div className='checkout__contenedor__left' >
                              <h5 className='tituloh5 mb-5 xl:hidden tituloh4 '>Resumen de la orden</h5>

                              <div className='checkout__contenedor__right__hora__left xl:hidden'>
                                <p>Tiempo para conservar tu reservación</p>
                              </div>
                              <div className='checkout__contenedor__right__hora__right xl:hidden mb-5'>
                                <h3 className='tituloh3 mb-5 pb-4 pt-0 mt-0'>
                                   <Clock outOfTimeModal={outOfTimeModal} /> 
                                </h3>
                              </div>
                              <div className='checkout__contenedor__left__top'>
                                  <h5 className='tituloh5 mb-5'>Observaciones del Socio (opcional)</h5>
                                  <textarea
                                      value={comment}
                                      onChange={handleInputChange}
                                      placeholder="Escribe aquí"
                                      cols={30}
                                      rows={10}
                                      className="text-[#fff] placeholder:text-[#574e5c]"
                                  ></textarea>
                                  <p>Si tienes alguna observación adicional que no incluyas en esta casilla, por favor comunicarlo al personal del establecimiento el día del evento</p>
                                  <p
                                      onClick={openAcuerdoModal}
                                      className="underline cursor-pointer !text-[#E1D4C4]"
                                  >
                                      Ver términos y condiciones
                                  </p>

                              </div>
                              <div className='checkout__contenedor__left__bottom' id='error' >
                                  <h5 className='tituloh5'>Detalles del pago</h5>
                                  <div className='checkout__contenedor__left__bottom__card' >
                                      <label htmlFor="" className='mb-4 block'>Correo</label>
                                      <input
                                          className={email === "" ? "border-red" : ""}
                                          value={email}
                                          onChange={handleEmail}
                                          type="email"
                                          disabled
                                          placeholder="Ingresa tu correo electronico"
                                      />
                                      {emailError && (
                                          <p className="Login-error main-page !text-red-600 !text-[1.2rem]  ">
                                          {String(emailError)}
                                          </p>
                                      )}
                                  </div>
                                  <div className='checkout__contenedor__left__bottom__card' >
                                      <div className="flex space-x-4 mb-4">
                                          <div className="w-3/4">
                                              <label htmlFor="">Método de pago</label>
                                          </div>
                                          <div className="w-1/6">
                                          </div>
                                      </div>
                                      <div className="flex space-x-4">
                                          <div className="w-full">
                                            <Elements stripe={stripePromise}>
                                              <FormPayment reference={stripeRef} />
                                            </Elements>
                                          </div>
                                      </div>
                                      
                                  </div>
                                  <div className='checkout__contenedor__left__bottom__card mb-5' >
                                      <label htmlFor="" className='mb-4 block'>Dirección</label>
                                      <input
                                          value={address}
                                          onChange={handleAddress}
                                          type="text"
                                          className='placeholder:text-[#574e5c]'
                                          placeholder='Dirección'
                                      />
                                       {addressError && (
                                          <p className="Login-error main-page !text-red-600 !text-[1.2rem] ">
                                              {String(addressError)}
                                          </p>
                                        )}
                                      </div>
                                       
                                  <div className='checkout__contenedor__left__bottom__card mb-5' id='phone'>
                                      <label htmlFor="" className='mb-4 block'>Teléfono</label>
                                      <div className="!flex gap-5 ">
                                        <Dropdown reference={setCode}/>
                                        <input
                                            value={phone}
                                            onChange={(e) => updatePhoneNumber(e.target.value)}
                                            type="text"
                                            placeholder='Teléfono'
                                            className='placeholder:text-[#574e5c]'
                                        />
                                      </div>
                                        {phoneNumberError && (
                                          <p className="Login-error main-page !text-red-600 !text-[1.2rem] font-lato">
                                            {String([phoneNumberError])}
                                          </p>
                                        )}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="lg:w-2/5 w-100">
                          <div className='checkout__contenedor__right'>
                              <div className="checkout__contenedor__right__card__top">
                                  <h5 className='tituloh5 mb-5 hidden xl:block'>Resumen de la orden</h5>
                                  <div className='checkout__contenedor__right__hora'>

                                  </div>
                                  <div className='flex'>
                                      <div className="w-3/5">
                                          <div className='checkout__contenedor__right__hora__left hidden xl:block'>
                                              <p>Tiempo para conservar tu reservación</p>
                                                  
                                          </div>
                                      </div>
                                      <div className="w-2/5">
                                          <div className='checkout__contenedor__right__hora__right hidden xl:block'>
                                              <h3 className='tituloh3'>
                                                  <Clock outOfTimeModal={outOfTimeModal} /> 
                                              </h3>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className='checkout__contenedor__right__card__bottom'>
                                  <div className='checkout__contenedor__right__card__bottom__card'>
                                      <div className="flex">
                                          <div className="w-1/2">
                                              <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                  <p>x{datos?.personas || 0} Experiencia</p>
                                              </div>
                                              
                                          </div>
                                          <div className="w-1/2">
                                              <div className='checkout__contenedor__right__card__bottom__card__right'>
                                                  <button className='flex justify-end w-full'>
                                                      {datos?.nameExperience || 0}
                                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#E1D4C4" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                      </svg>

                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  { datos?.sugerencias && datos?.sugerencias?.length !== 0 && (
                                      <article className="order_experiencie">
                                      {datos?.sugerencias && datos.sugerencias.length > 0 ? (
                                          datos.sugerencias.map((bebida: any) => (
                                              <div key={bebida.id} className='checkout__contenedor__right__card__bottom__card'>
                                                  <div className="flex items-center	">
                                                      <div className="w-1/2">
                                                          <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                              <p>{`x${bebida.count} ${bebida.name}`}</p>
                                                          </div>
                                                          
                                                      </div>
                                                      <div className="w-1/2">
                                                          <div className='checkout__contenedor__right__card__bottom__card__right  flex  justify-center'>
                                                              <button
                                                                  onClick={() => {openModal(); setbebidasUpdate(bebida);}} 
                                                                  className='flex justify-center	 w-full checkout__contenedor__right__card__bottom__card__right__button'
                                                              >
                                                                  Modificar
                                                              </button>
                                                              <button className='flex justify-end w-full'>
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
                                                              </button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          ))
                                      ) : (
                                          <div className='checkout__contenedor__right__card__bottom__card'>
                                              <div className="flex items-center	">
                                                  <div className="w-1/2">
                                                      <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                          <p>x0 Bebida extra</p>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="w-1/2">
                                                      <div className='checkout__contenedor__right__card__bottom__card__right  flex  justify-center'>
                                                          <button
                                                              onClick={openModal} 
                                                              className='flex justify-center	 w-full checkout__contenedor__right__card__bottom__card__right__button'
                                                          >
                                                              Agregar
                                                          </button>
                                                          <button className='flex justify-end w-full'>
                                                              $0
                                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#E1D4C4" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                              </svg>

                                                          </button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      )}
                                      </article>
                                  )}

                                  <hr />
                                  <div className='checkout__contenedor__right__card__bottom__card checkout__contenedor__right__card__bottom__card--2'>
                                      <div className="flex items-center	">
                                          <div className="w-1/2">
                                              <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                  <p>Nº de personas</p>
                                              </div>
                                              
                                          </div>
                                          <div className="w-1/2">
                                              <div className='checkout__contenedor__right__card__bottom__card__right  '>
                                                
                                                  <p className='text-end'>{datos?.personas || 0}</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='checkout__contenedor__right__card__bottom__card'>
                                      <div className="flex items-center	">
                                          <div className="w-1/2">
                                              <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                  <p>{fechaState.day} de {fechaState.month} de {fechaState.year}</p>
                                              </div>
                                              
                                          </div>
                                          <div className="w-1/2">
                                              <div className='checkout__contenedor__right__card__bottom__card__right  '>
                                                  <p className='text-end'>{datos?.horario}</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <hr />
                                  <div className='checkout__contenedor__right__card__bottom__card checkout__contenedor__right__card__bottom__card--agregar'>
                                      <div className="flex items-center	justify-center">
                                          <div className="w-2/5">
                                              <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                  <p>Total</p>
                                              </div>
                                              
                                          </div>
                                          <div className="w-3/5">
                                              <div className='checkout__contenedor__right__card__bottom__card__right'>
                                                  <p className="text-end">${calcularTotal()}</p>
                                                  
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                              </div>
                              <div className='checkout__contenedor__right__end'>
                                  <div className='checkout__contenedor__right__end__card'>
                                      <div>
                                          <label className="containerCheck">Acepto los {" "}
                                          <a onClick={openAcuerdoModal} className="checkout-p">
                                              términos y condiciones
                                          </a>
                                              <input 
                                                  type="checkbox"
                                                  checked={checkBox}
                                                  onChange={(e) => setcheckBox(e.target.checked)}
                                              />
                                              <span className="checkmark"></span>
                                          </label>
                                          {checkBoxError && (
                                              <p className="Login-error main-page !text-red-600 !text-[1.2rem]  ">
                                                  {String(checkBoxError)}
                                              </p>
                                          )}
                                      </div>
                                      <div>
                                          <label className="containerCheck">Acepto las {" "}
                                          <a onClick={() => setcancelationPoliti(true)} className="checkout-p">
                                              políticas de cancelación
                                          </a>
                                              <input 
                                                  type="checkbox"
                                                  checked={checkBoxTwo}
                                                  onChange={(e) => setcheckBoxTwo(e.target.checked)}
                                              />
                                              <span className="checkmark"></span>
                                          </label>
                                          {checkBoxTwoError && (
                                              <p className="Login-error main-page !text-red-600 !text-[1.2rem]  ">
                                                  {String(checkBoxTwoError)}
                                              </p>
                                          )}
                                      </div>
                                      <div>
                                          <label className="containerCheck">Me gustaría recibir alertas y notificaciones de nuevas experiencias
                                              <input
                                                  type="checkbox"
                                                  checked={checkBoxTree}
                                                  onChange={(e) => setcheckBoxTree(e.target.checked)}
                                              />
                                              <span className="checkmark"></span>
                                          </label>
                                          {checkBoxTreeError && (
                                              <p className="Login-error main-page !text-red-600 !text-[1.2rem]  ">
                                                  {String(checkBoxTreeError)}
                                              </p>
                                          )}
                                          </div>
                                      <div>
                                          <p
                                              onClick={() => setcancelationPoliti(true)}
                                              className="checkout-p cursor-pointer"
                                          >
                                              {" "}
                                              Política de cancelación
                                          </p>
                                      </div>
                                      <div className='boton boton--naranja mt-5'>
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
                                              <>CONFIRMAR</>
                                          )}
                                      </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
          <ModalAcuerdo visible={acuerdoModal} setVisible={setacuerdoModal} />
          <ModalUpdateBebida
              visible={visible}
              setVisible={setVisible}
              bebida={bebidasUpdate}
              reserva={datos}
              setReserva={setDatos}
          />
          <ModalPoliticasCancelacion
            visible1={cancelationPoliti}
            setVisible1={setcancelationPoliti}
          />
          {/* {isMobile &&
            <AlertCard
              content={alertModal}
              visible={visibleAlert}
              setVisible={setVisibleAlert}
            />
          } */}
      </main>
    </SecurityPrivileges>
  );
}
