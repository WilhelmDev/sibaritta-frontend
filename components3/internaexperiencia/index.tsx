'use client'
import Image from 'next/image'
import Link from 'next/link';
import HomeBanner from '@/components/organisms/HomeBanner';
import Footer from "@/components/ui/Footer";
import HomeBusiness from "@/components/organisms/HomeBusiness";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { productsDataTest} from '@/utils/data'
import { newRoutes } from '@/utils/routes';
import AOS from 'aos';
import 'aos/dist/aos.css';



import Carrousel from '@/components/carousel';
import CarouselV2 from '@/components/carousel/v2';
import Eventos from '@/components/carousel/v2';
import ModalExperiencia from '@/pages/v2/modalanyer';
import { Events } from '@/interface/events';
import moment from 'moment';
import { updateDates } from '@/redux/slice/clockSlice';
import { addSugerencia, setAddres, setEventId, setExperiencieId, setFecha, setHorario, setIdReservation, setNameExperience, setPersonas, setPriceExperience, setStartDate, setTimeDate, setTipoReserva } from '@/redux/slice/detalle.slice';
import { createReservations } from '@/services/reservaciones.service';
import { setPolitices } from '@/redux/slice/policeSlice';
import { Sugerencia } from '@/interface/detalle.interface';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import ModalSession from '@/components/molecules/ModalSession';
import ModalRegister from '@/components/molecules/session/ModalRegister';
import RecoveryModal from '@/components/molecules/recovery/RecoveryModal';
import ModalConfirmation from '@/components/molecules/session/ModalConfirmation';
// import Link from 'next/link';
// import { newRoutes } from '@/utils/routes';
import 'moment/locale/es';
import Event from './Event';
moment.locale('es');

interface IDetailsCard {
  data: any;
}

export default function Experiencia ({data}: IDetailsCard) {

  const [selectedEvent, setSelectedEvent] = useState<any>(null); // Nuevo estado
  const [remainingSeats, setRemainingSeats] = useState(0);
  const [addSugestion, setAddSugestion] = useState(0);
  const [person, setPerson] = useState<number>(0);
  const [events, setEvents] = useState<any[]>(data?.events || []);
  const [suggestion, setSuggestion] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [counts, setCounts] = useState<number>(0);
  const [modalPolitica, setmodalPolitica] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [reservaTru, setreservaTru] = useState(false);
  const [fechaTru, setfechaTru] = useState<boolean>(false);
  const [userCan, setuserCan] = useState<boolean>(false);
  const [alerts, setalerts] = useState<boolean>(false);
  const [alertCountUser, setalertCountUser] = useState<boolean>(false);
  const [lackFecha, setlackFecha] = useState<boolean>(false);
  const initReservation = useRef<HTMLDivElement | null>(null);
  const initiDaate = useRef<HTMLDivElement | null>(null);
  const initiCalendario = useRef<HTMLDivElement | null>(null);
  const initiFecha = useRef<HTMLDivElement | null>(null);
  const [ver, setver] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistro, setopenRegistro] = useState(false);
  const [openConfirmacion, setOpenConfirmacion] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [auttenti, setauttenti] = useState(false);
  
  const router = useRouter();
  const typeReservations = useAppSelector((state) => state.reservation);


  
  const scrollFunctionReservation = () => {
    if (initReservation.current) {
      initReservation.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollFunctionDaate = () => {
    if (initiDaate.current) {
      initiDaate.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollFunctionCalendario = () => {
    if (initiCalendario.current) {
      initiCalendario.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollFunctionFecha = () => {
    if (initiFecha.current) {
      initiFecha.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goReservation = () => {
    scrollFunctionReservation();
  };

  let userId: any = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const dispatch = useDispatch();
  const reserva = useSelector((state: any) => state.reservation);
  
  const datePart = reserva.horario;
  const part = datePart?.split(":");

  const horas = parseInt(part[0], 10);
  const minutos = parseInt(part[1]?.split(" ")[0], 10);

  const handleDayClick = (e: Date, data: any[], type: string) => {
    const open_group = data
    const closed_group = data.filter((modi) => modi.seats === modi.total_seats);

    setver(true);
    scrollFunctionFecha();
    setalerts(false);

    if (alerts) {
      goReservation();
    }
    setfechaTru(false);
    if (fechaTru) {
      scrollFunctionDaate();
    }
    setalertCountUser(false);
    setlackFecha(false);

    if (type === "open-group") {
      // let elSlice = e.toString();
      const fecha1 = moment(e).format("YYYY-MM-DD HH:mm:ss");
      const elSlice = moment(fecha1).format("YYYY-MM-DD");
      open_group.forEach((element: any) => {
        let elementSlice1 = moment(element.date).format("YYYY-MM-DD HH:mm:ss");
        let elementSlice = moment(elementSlice1).format("YYYY-MM-DD");
        if (elementSlice === elSlice) {
          dispatch(setFecha(e.toISOString()));
          dispatch(setHorario(""));
        }
      });
    } else if (type === "closed-group") {
      const fecha1 = moment(e).format("YYYY-MM-DD HH:mm:ss");
      const elSlice = moment(fecha1).format("YYYY-MM-DD");
      closed_group.forEach((element: any) => {
        let elementSlice1 = moment(element.date).format("YYYY-MM-DD HH:mm:ss");
        let elementSlice = moment(elementSlice1).format("YYYY-MM-DD");
        if (elementSlice === elSlice) {
          dispatch(setFecha(e.toISOString()));
          dispatch(setHorario(""));
        }
      });
      dispatch(setHorario(""));
    } else {
      setreservaTru(true);
      goReservation();
    }
    setPerson(() => {
      const newPerson = 0;
      dispatch(setPersonas(newPerson));
      return newPerson;
    });
    setSelectedEvent("");
  };

  const formatDate = (date: Date) => {
    const locale = moment.locale('es');
    moment.locale("es")
    const day = moment(date).date();
    const stringMonth = moment(date).format("MMM").replace('.','').toUpperCase();
    let weekDay = moment(date).format("dddd");
    weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
    console.log('day', day)
    console.log('stringMonth', stringMonth)
    console.log('weekDay', weekDay)
    moment.locale('es');
  }

  const bookedStyle = { color: "white", cursor: "pointer" };

  const openModal = () => {
    setVisible(true);
    // document.body.style.overflow = "hidden";
  };

  //add
  const addUser = () => {

    if (
      reserva.tipoReserva === "open-group" ||
      reserva.tipoReserva === "closed-group"
    ) {
      if (reserva.fecha === "") {
        setlackFecha(true);
        scrollFunctionDaate();
      }
      if (reserva.horario === "" && reserva.fecha !== "") {
        setalerts(true);
        scrollFunctionDaate();
      }
      if (fechaTru === true) {
        if (remainingSeats >= 0) {
          setuserCan(false);
          setalertCountUser(false);
          setPerson((prevPerson) => {
            const newPerson = prevPerson + 1;
            dispatch(setPersonas(newPerson));
            return newPerson;
          });
          setalerts(false);
        }
      }
    } else {
      setreservaTru(true);
      goReservation();
    }
  };

  const addMinusUser = () => {
    if (
      reserva.tipoReserva === "open-group" ||
      reserva.tipoReserva === "closed-group"
    ) {
      // setalert(true);

      if (fechaTru === true) {
        setPerson((prevPerson) => {
          const newPerson = prevPerson > 0 ? prevPerson - 1 : 0;
          dispatch(setPersonas(newPerson));
          return newPerson;
        });
        // setalert(false);
      }
      if (person < 2) {
        setalertCountUser(true);
      }
    } else {
      setreservaTru(true);
    }
  };

  const handleTipoReserva = (tipo: string) => {
    // setuserCan(false);
    scrollFunctionCalendario();
    setver(false);
    setlackFecha(false);
    setreservaTru(false);
    dispatch(setTipoReserva(tipo));
    setRemainingSeats(0);
    setPerson(0);
    setSelectedEvent("");
    dispatch(setHorario(""));
    dispatch(setFecha(""));
    setalerts(false);
    setfechaTru(false);
    setalertCountUser(false);
  };
  useEffect(() => {
    dispatch(setTipoReserva('open-group'));
    dispatch(setHorario(""));
    dispatch(setFecha(""));
  }, []);


  const handleHoraClick = (hora: any, el: any, type: "open-group" | "closed-group") => {
    setalerts(false);
    setfechaTru(true);
    dispatch(setEventId(el.id));
    dispatch(setTipoReserva(type));
    dispatch(setHorario(hora));

    const event = events.find(
      (e) => e.hour === parseInt(hora?.split(":")[0]) && e.id === el.id
    );

    if (event) {
      setSelectedEvent(event); // Actualizar el estado con el evento seleccionado
      if(type === "open-group"){
        setPerson(() => {
          const newPerson = 0;
          dispatch(setPersonas(newPerson));
          return newPerson;
        });
        setRemainingSeats(event.seats - person);
      }
      else if(type === "closed-group"){
        setPerson(() => {
          const newPerson = event.seats;
          dispatch(setPersonas(newPerson));
          return newPerson;
        });
        setRemainingSeats(0);
      }
    }
  };

  // useEffect para observar cambios en 'person'
  useEffect(() => {
    // Lógica para recalcular 'remainingSeats' cuando 'person' cambia
    if (selectedEvent) {
      setRemainingSeats(selectedEvent.seats - person);
    }
  }, [person, selectedEvent]);

  const handleAgregarClick = (sugerencia: Sugerencia) => {
    dispatch(addSugerencia(sugerencia));
  };

  const updateLocalStorage = () => {
    localStorage.setItem("reservation", JSON.stringify(reserva));
  };

  useEffect(() => {
    dispatch(setExperiencieId(data.id));
    // Actualizar el localStorage cuando el estado global cambie xd
    dispatch(setNameExperience(data.name));
    dispatch(setPriceExperience(data.regular_price));
    dispatch(setPolitices(data.politica));
    dispatch(setAddres(data?.address));

    updateLocalStorage();
  }, [reserva]);

  const getNum = (num: number) => {
    if (num < 9) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  const openModalPolitica = () => {
    setmodalPolitica(true);
  };

  
  const filterEvents = (tipoReserva: any): any => {
    const filteredEvents = events?.filter((event) => {
      if (tipoReserva === "open-group") {
        let eventTime = new Date(event.date);
        eventTime.setHours(event.hour);
        eventTime.setMinutes(event.minute);
        eventTime.setSeconds(0);
        
        return eventTime >= new Date();
      }
      else if (tipoReserva === "closed-group") {
        return event.seats === event.total_seats
      }
    });
    return filteredEvents?.map((el: any) => new Date(el.date));
  };

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

  const closeModalConfirmacion = () => {
    setOpenConfirmacion(false);
  };

  // confirmarcion
  const openModalConfirmacion = () => {
    setOpenConfirmacion(true);
    closeModalRegistro();
  };

  const createReservation = async () => {
    const price = data.regular_price;
    try {
      const dates = new Date();
      const hours = moment(dates).format("HH:mm:ss");
      const data = {
        //order_comments_checkout: "comentario de la reserva",
        //order_check_terms_checkout: true,
        //order_check_get_more_info_checkout: true,
        //order_id_stripe_checkout: 12345678,
        //order_id_stripe_amount: 12345678,
        order_fk_experience_id: reserva.fk_experience_id,
        order_fk_event_id: reserva.order_fk_event_id,
        order_seats_experience: reserva.personas,
        //order_price_experience: price,
        order_total_experience: person * Number(price),
        order_type_event: "presencial",
        //order_date_event: "24/01/2024",
        //order_hour_event: horas,
        //order_minute_event: minutos,
        order_details: [
          {
            fk_suggestion_id: 1,
            name: "Sugerencia 1",
            quantity: 1,
            price_item: 200,
          },
          {
            name: "Propina",
            quantity: 1,
            price_item: 30,
          },
          {
            name: "Cargo de Servicio",
            quantity: 1,
            price_item: 20,
          },
        ],
      };

      const res = await createReservations(data);

      if (res.success) {
        setTrigger(true);
      }


      const date = {
        startDate: res.data.startDate,
        startTime: res.data.startTime,
        order_code: res.data.order_code,
        order_number: res.data.order_number,
      };

      dispatch(updateDates(date));
      dispatch(setIdReservation(res.data.id));
      dispatch(setStartDate(moment().format("YYYY-MM-DD")));
      dispatch(setTimeDate(hours));

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

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("name_partner", data?.partner?.full_name);
  }, []);


  const imagesLarge = data?.images?.filter(
    (image: any) => image.resolution === "large"
  );

  const imagesview = imagesLarge?.map((image: any) => image.path);

  const [products, setProducts] = useState(productsDataTest);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product:any) => {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };

  const handleCreate = () => {
    if (reserva.tipoReserva === "") {
      setreservaTru(true);
      scrollFunctionReservation();
      return;
    }

    // if (reserva.horario === "" && reserva.fecha !== "") {
    //   setalerts(true);
    // }
    // if (
    //   reserva.fecha === "" ||
    //   reserva.horario === "" ||
    //   reserva.tipoReserva === ""
    // ) {
    //   toast(`Debes seleccionar una opción de reserva`, {
    //     id: "login",
    //     unstyled: true,
    //     classNames: {
    //       toast:
    //         "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center text-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
    //       title: " text-[2rem]  ",
    //     },
    //     position: "top-center",
    //   });
    //   return;
    // }

    //coment
    // if (fechaTru === true) {
    //   setalertCountUser(true);
    // }

    if (reserva.fecha === "") {
      setlackFecha(true);
      scrollFunctionDaate();
      return;
    }

    if (reserva.horario === "" && reserva.fecha !== "") {
      setalerts(true);
      scrollFunctionDaate();
      return;
    }

    if (person == 0) {
      setalertCountUser(true);
      return;
    }

    if (person > 0) {
      setSuggestion(suggestion + 1);
      createReservation();
    }

    // if (userId!) {
    //   setSuggestion(suggestion + 1);

    //   createReservation();
    // } else {
    //   toast(`Debes iniciar Sesión para continuar`, {
    //     id: 'login',
    //     unstyled: true,
    //     classNames: {
    //       toast:
    //         'bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ',
    //       title: ' text-[2rem]  ',
    //     },
    //     position: 'top-center',
    //   });
    //   return;
    // }
  }

  const productTemplate = (product:any) => {
    return (
        <div className="border-1 surface-border p-jc-center border-round m-2 text-center py-5 px-3" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <div className="mb-3">
                <img src={"/abbout/imagenprincipal.png"} alt={product?.name} className="w-full"  />
            </div>
            <div>
                {/* <h4 className="mb-1">{product.name}</h4> */}
                {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
                {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    <Button icon="pi pi-search" rounded />
                    <Button icon="pi pi-star-fill" rounded severity="success" />
                </div> */}
            </div>
        </div>
    );
};

const selectEvent = (el: Events) => {
  handleDayClick(new Date(el.date), events, typeReservations.tipoReserva)
  handleHoraClick(
    `${el.hour}:${el.minute}pm`,
    el,
    reserva.tipoReserva
  )
}

useEffect(() => {
  AOS.init();

  const update = document.querySelector('body')
  update?.classList.add('fondoNosotros')
}, [])

  console.log(data?.seats_free)
  return (
    <main className="internaExperiencia">
        <div className='menuGlobal'>
            <div className='menuGlobal__general menuGlobal--general hidden'>
              <div className='menuGlobal__general__top'>
                <div className='flex items-center'>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__left'>
                      <Link href={newRoutes.nosotros}>
                          <Image src={"/header_partner/logogeneral.png"} width={50} height={50} alt='logo'/>

                      </Link>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__right text-right'>
                      <button>
                        <Image src={"/header_partner/menuright.png"} className='ml-auto' width={50} height={50} alt='logo'/>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='menuGlobal__general__item'>
                <ul>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      ¿Quiénes somos?
                      <span>
                        <img src={"/header_partner/user.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Sibaritta Partners
                      <span>
                        <img src={"/header_partner/sibaritta.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      ¿Cómo funciona?
                      <span>
                        <img src={"/header_partner/funciona.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Insignias
                      <span>
                        <img src={"/header_partner/lock.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                </ul>
              </div>
            </div>
            <div className='menuGlobal__general menuGlobal--perfil hidden'>
              <div className='menuGlobal__general__top'>
                <div className='flex items-center'>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__left'>
                      <Link href={newRoutes.nosotros}>
                        <Image src={"/header_partner/logogeneral.png"} width={50} height={50} alt='logo'/>

                      </Link>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__right text-right'>
                      <button>
                        <Image src={"/header_partner/menuright.png"} className='ml-auto' width={50} height={50} alt='logo'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='menuGlobal__general__item'>
                <ul>
                  <li>
                    <Link href={newRoutes.perfil}>
                      Información personal
                      <span>
                        <img src={"/header_partner/user.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.reservaciones}>
                      Reservaciones
                      <span>
                        <img src={"/header_partner/sibaritta.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Pagos
                      <span>
                        <img src={"/header_partner/funciona.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Seguridad
                      <span>
                        <img src={"/header_partner/lock.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Soporte en línea
                      <span>
                        <img src={"/header_partner/soporte.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.home}>
                      Cerrar sesión
                      <span>
                        <img src={"/header_partner/cerrar.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className="migajaPan">
          <div className="container-general">
            <div className="migajaPan__card ">
                <ul className="flex">
                <li>
                  <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={newRoutes.experiencias} className=' hover:text-yellow-600'>
                    &gt;  Experiencias
                  </Link>
                </li>
                <li className="activeMigaja">
                    &gt;  {data?.slug?.replace(/-/g, ' ')}
                </li>
                </ul>
            </div>
          </div>
        </div>

        <div className="internaExperiencia__slider" data-aos="fade-up" data-aos-duration="3000">
            <div className='flex'>
              <div className='w-full'>
                <CarouselV2 data={data}/>

              </div>
            </div>
        </div>
        <div className="internaExperiencia__titulo" data-aos="fade-up" data-aos-duration="3000">
          <div className="flex">
            <div className="w-full">
              <div className="internaExperiencia__titulo__card text-center">
                <h2  className="tituloh2">{data?.name?.toUpperCase()}</h2>
                <h5  className="tituloh5">PREPARA TU PALADAR PARA VIVIR<br/>UNA EXPERIENCIA INOLVIDABLE</h5>
                <svg className='m-auto mt-5 pt-5' width="3" height="71" viewBox="0 0 3 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.84961 70.4575L2.84961 0.542491C2.84961 0.242881 2.22729 0 1.45961 0L1.38961 0C0.621934 0 -0.000389099 0.242881 -0.000389099 0.542491L-0.000389099 70.4575C-0.000389099 70.7571 0.621934 71 1.38961 71H1.45961C2.22729 71 2.84961 70.7571 2.84961 70.4575Z" fill="#F4A560"/>
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div className="internaExperiencia__intro" data-aos="fade-up" data-aos-duration="3000">
          <div className="container-general">
            <div className="lg:flex justify-center">
              <div className="w-full lg:w-2/5">
                <div className="internaExperiencia__intro__left">
                  <h2 className="tituloh2">
                    CAUTÍVATE CON<br/>CADA DETALLE
                  </h2>
                  <div className="boton ">
                    <Link href={'#'}>RESERVA TU EXPERIENCIA</Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="internaExperiencia__intro__right">
                  {/* <p> <b>{data?.<titulo_expperiencia>}</b> </p> */}
                  <p> <b>EL MAR EN TU PALADAR</b> </p>
                  {/* <p>{data?.<descripción_experiencia>}</p> */}
                  <p>{data?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="internaExperiencia__lugar">
          <div className="container-general">
            <div className="lg:flex">
              <div className="w-full lg:w-3/5">
                <div className="internaExperiencia__lugar__left" data-aos="fade-right" data-aos-duration="3000">
                  <h2 className="tituloh2">EL LUGAR</h2>
                  <p>{data?.description}</p>
                  <div className="boton boton--transparente ">
                    <a href="#">UBICACIÓN</a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="internaExperiencia__lugar__right " data-aos="fade-left" data-aos-duration="3000">
                  <Image width={1000} height={1000} src={"/experiencia/comidaright.png"} alt={'logo'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__colecciona" data-aos="fade-up" data-aos-duration="3000">
          <div className="container-general">
            <div className="flex flex-wrap justify-center">

              <div className="lg:w-2/5 flex w-100 items-center">
                <div className="home__colecciona__right ">
                  <ul className="flex">

                    <li>
                      <Image src={"/home/cart2.png"} width={345} height={345} alt='logo'/>
                    </li>
                    <li>
                      <Image src={"/home/cart3.png"} width={345} height={345} alt='logo'/>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-100 lg:w-2/5">
                <div className="home__colecciona__left">
                  <div className="relative">
                    <h2 className="tituloh2">TU CAMINO SIBARITTA</h2>
                    <p>
                      Con esta experiencia, desbloquearás estas insignias y estarás a un paso menos de convertirte en Maestro Sibaritta
                    </p>
                    <div className="boton ">
                      <Link href={newRoutes.insignias}>INSIGNIAS SIBARITTA</Link>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="internaExperiencia__reserva">
          <div className="container-general">
            <div className="lg:flex justify-center">
              <div className="lg:w-2/5">
                <div className="internaExperiencia__reserva__left">
                  <h2 className="tituloh2">
                    RESERVA TU<br/>EXPERIENCIA
                  </h2>
                  <p>
                    {data?.name.toUpperCase()}<br/>
                    Valor de la experiencia · <span className="textoNaranja">${data?.regular_price}</span><br/>
                    Duración: <span className='textoNaranja'>{data?.duration} Horas</span>
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="internaExperiencia__reserva__right">
                  <div className="internaExperiencia__reserva__right__contenedor">
                    {/* <Eventos data={data}/> */}

                    {
                      data.events &&
                      data.events
                        .map((el:Events, i) => (
                        <Event event={el} key={i} callback={selectEvent} active={selectedEvent} />
                      ))
                    }
                    {/* <div className="internaExperiencia__reserva__right__contenedor__card">
                      <h3 className="tituloh3">
                        FEB
                      </h3>
                      <hr/>
                      <h4>24</h4>
                      <p>
                        SÁBADO
                      </p>
                      <hr/>
                      <h5 className="tituloh5">7:00 pm</h5>
                    </div>
                    <div className="internaExperiencia__reserva__right__contenedor__card active">
                      <h3 className="tituloh3">
                        MAR
                      </h3>
                      <hr/>
                      <h4>7</h4>
                      <p>
                        VIERNES
                      </p>
                      <hr/>
                      <h5 className="tituloh5">7:00 pm</h5>
                    </div> */}

                  </div>
                  <div className="internaExperiencia__reserva__right__limite text-center mt-5">
                    {selectedEvent && (
                    <>
                      {remainingSeats > 0 ? (
                        <p className="">
                          Quedan {remainingSeats} cupos para este día en este
                          horario
                        </p>
                      ) : (
                        <p className="">
                          No hay asientos disponibles para este día en este
                          horario
                        </p>
                      )}
                    </>
                  )}
                  </div>
                  <div className="internaExperiencia__reserva__right__agregar">
                    <div className="internaExperiencia__reserva__right__agregar__left">
                      <p>Elige el número de personas</p>
                    </div>
                    <div className="internaExperiencia__reserva__right__agregar__right flex justify-center items-center">
                      <svg className='mr-4' width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.125 25.4999C31.125 22.6697 28.4119 20.2621 24.625 19.3698M21.375 25.5C21.375 21.9101 17.0098 19 11.625 19C6.24022 19 1.875 21.9101 1.875 25.5M21.375 14.125C24.9649 14.125 27.875 11.2149 27.875 7.625C27.875 4.03515 24.9649 1.125 21.375 1.125M11.625 14.125C8.03515 14.125 5.125 11.2149 5.125 7.625C5.125 4.03515 8.03515 1.125 11.625 1.125C15.2149 1.125 18.125 4.03515 18.125 7.625C18.125 11.2149 15.2149 14.125 11.625 14.125Z" stroke="#F89C53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className='internaExperiencia__reserva__right__agregar__right__botones flex'>
                        <button 
                        onClick={person > 1 || reserva.tipoReserva === "closed-group" ? addMinusUser : undefined}
                        >
                          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.5" width="36" height="36" rx="10" fill="#443E45"/>
                          <path d="M22.5 18.5H13.5" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <input type="text" value={person}/>
                        <button
                        onClick={addUser}>
                          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.5" width="36" height="36" rx="10" fill="#443E45"/>
                          <path d="M18 14V18.5M18 18.5V23M18 18.5H22.5M18 18.5L13.5 18.5" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>

                      </div>
                     
                    </div>
                  </div>
                  <div className="boton   text-center">
                    <button className="m-auto" onClick={() => handleCreate()}>COMPLETA TU RESERVA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ModalExperiencia/> */}
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
    </main>
  );
}



