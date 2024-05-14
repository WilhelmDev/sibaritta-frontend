import { useEffect, useState } from "react";
import ModalEvent from "@/components/molecules/partner/ModalEvent";
import React from "react";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";
import { setStatePartner } from "@/redux/slice/partnerSlice";
import HomePartnerHeader from "../home_partner/home_partner_header";
import PartnerHeaderImages from "./PartnerHeaderImages";
import PartnerMainCalendar from "../../components/partner/PartnerMainCalendar";
import { getAllSuggestion } from "@/services/suggestion.service";
import CardPartnerExperiencias from "@/components/molecules/cards/CardPartnerExperiencias";
import ModalEventPartnerMovile from "@/components/partner/modals/ModalEventPartnerMovile";
import { createExperience } from "@/services/experiencia/experience.service";
import { getCalendar } from "@/services/calendar/calendar.service";

const Index = () => {
  const [eventSelected, setEventSelected] = useState({});
  const [events, setEvents] = useState<any[]>([]);
  const [visible1, setVisible1] = useState<boolean>(false);
  const [imageFilearr, setImageFilearr] = useState<File[]>([]);
  const [urlAux, setUrlAux] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [auxTitle, setAuxTitle] = useState<boolean>(true);
  const [suggestion, setSuggestion] = useState([]);
  const { experience } = useAppSelector((state) => state.partner);
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageFile1, setImageFil1] = useState<File | null>(null);
  //kevin
  const [viewQuotas, setviewQuotas] = useState<boolean>(false);
  const [selectQuotas, setselectQuotas] = useState<boolean>(false);
  const [viewReservation, setviewReservation] = useState<boolean>(false);
  const [selectReservation, setselectReservation] = useState<boolean>(false);
  const [selectedCalendar, setselectedCalendar] = useState(false);
  //error useState
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [outfitError, setOutfitError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [cancelledError, setCancelledError] = useState("");
  const [addresError, setAddresError] = useState("");
  const [parkingError, setParkingError] = useState("");
  const [aditionalError, setAditionalError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [imageV, setImageV] = useState("");
  const [imageH, setImageH] = useState("");
  const [imageArr, setImageArr] = useState("");

  //capturar data
  const [arrSuggestion, setArrSuggestion] = useState<number[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [outfit, setOutfit] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [cancelled, setCancelled] = useState("");
  const [addres, setAddres] = useState("");
  const [parking, setParking] = useState("");
  const [aditional, setAditional] = useState("");
  const [age, setAge] = useState("");

  //events

  const [calendarData, setcalendarData] = useState([]);

  const validateForm = () => {
    let isValid = true;

    if (!imageFile) {
      setImageV("Debes seleccionar una imagen.");
      isValid = false;
    } else {
      setImageV("");
    }
    if (!imageFile1) {
      setImageH("Debes seleccionar una imagen.");
      isValid = false;
    } else {
      setImageH("");
    }

    if (!imageFilearr.length) {
      setImageArr("Debes seleccionar una imagen.");
      isValid = false;
    } else {
      setImageArr("");
    }

    if (!title) {
      setTitleError("Este campo es requerido");
      isValid = false;
    } else {
      setTitleError("");
    }
    if (!description) {
      setDescriptionError("Este campo es requerido");
      isValid = false;
    } else {
      setDescriptionError("");
    }

    if (!outfit) {
      setOutfitError("Este campo es requerido");
      isValid = false;
    } else {
      setOutfitError("");
    }

    if (!price) {
      setPriceError("Este campo es requerido");
      isValid = false;
    } else {
      setPriceError("");
    }

    if (!duration) {
      setDurationError("Este campo es requerido");
      isValid = false;
    } else {
      setDurationError("");
    }

    if (!cancelled) {
      setCancelledError("Este campo es requerido");
      isValid = false;
    } else {
      setCancelledError("");
    }

    if (!addres) {
      setAddresError("Este campo es requerido");
      isValid = false;
    } else {
      setAddresError("");
    }

    if (!parking) {
      setParkingError("Este campo es requerido");
      isValid = false;
    } else {
      setParkingError("");
    }

    if (!aditional) {
      setAditionalError("Este campo es requerido");
      isValid = false;
    } else {
      setAditionalError("");
    }

    if (!age) {
      setAgeError("Este campo es requerido");
      isValid = false;
    } else {
      setAgeError("");
    }

    return isValid;
  };

  const event = experience.events.map((ev: any) => {
    return {
      type: ev.type,
      seats: ev.seats,
      date: ev.date.slice(0, 10),
      hour: ev.hour,
      minute: ev.minute,
      price: ev.price,
    };
  });
  const data = {
    title: title,
    description: description,
    arrSuggestion: arrSuggestion,
    outfit: outfit,
    price: price,
    duration: duration,
    cancelled: cancelled,
    addres: addres,
    parking: parking,
    aditional: aditional,
    age: age,
    event: event,
    imagenHorizontal: imageFile1,
    imagevertical: imageFile,
    imageFilearr: imageFilearr,
  };


  const send = async () => {
    try {
      const isValid = validateForm();

      if (isValid) {
        const formData = new FormData();

        imageFilearr.forEach((file) => {
          formData.append("multiplefiles", file);
        });
        // formData.append("branch_id", (2).toString());
        formData.append("fk_user_id", (1).toString());
        formData.append("fk_partner_id", (2).toString());
        formData.append("fk_city", (1).toString());
        formData.append("fk_category", (1).toString());
        formData.append("slug", title);
        formData.append("name", title);
        formData.append("description", description);
        formData.append("address", addres);
        formData.append("dress_code", addres);
        formData.append("regular_price", price);
        formData.append("duration", duration);
        formData.append("cancelation", cancelled);
        formData.append("parking", parking);
        formData.append("aditionals", aditional);
        formData.append("age", age);
        formData.append("seats", age);
        formData.append("politica", "dts.commission");
        formData.append("urlmap", "dts.commission");
        formData.append("suggestions", arrSuggestion.toString());
        formData.append("checkin", addres);
        formData.append("smoking_zone", addres);
        formData.append("events", JSON.stringify(event));
        if (imageFile1) {
          formData.append("horizontal_image", imageFile1);
        }
        if (imageFile) {
          formData.append("vertical_image", imageFile);
        }

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: any, title: string) => {
    const value = event.target.value; // Obtén el valor actualizado del campo de entrada

    switch (title) {
      case "outfit":
        setOutfit(value);
        if (!value) {
          setOutfitError(() => "Este campo es requerido");
        } else {
          setOutfitError(() => "");
        }
        break;
      case "price":
        setPrice(value);
        if (!value) {
          setPriceError(() => "Este campo es requerido");
        } else {
          setPriceError(() => "");
        }
        break;
      case "duration":
        setDuration(value);
        if (!value) {
          setDurationError(() => "Este campo es requerido");
        } else {
          setDurationError(() => "");
        }
        break;
      case "cancelled":
        setCancelled(value);
        if (!value) {
          setCancelledError(() => "Este campo es requerido");
        } else {
          setCancelledError(() => "");
        }
        break;
      case "addres":
        setAddres(value);
        if (!value) {
          setAddresError(() => "Este campo es requerido");
        } else {
          setAddresError(() => "");
        }
        break;
      case "parking":
        setParking(value);
        if (!value) {
          setParkingError(() => "Este campo es requerido");
        } else {
          setParkingError(() => "");
        }
        break;
      case "aditional":
        setAditional(value);
        if (!value) {
          setAditionalError(() => "Este campo es requerido");
        } else {
          setAditionalError(() => "");
        }
        break;
      case "age":
        setAge(value);
        if (!value) {
          setAgeError(() => "Este campo es requerido");
        } else {
          setAgeError(() => "");
        }
        break;
      default:
        break;
    }
  };

  const addSuggestion = (id: number) => {
    if (!arrSuggestion.includes(id)) {
      const newArr = [...arrSuggestion, id];
      setArrSuggestion(newArr);
    }
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    let elSlice = date.toISOString().slice(0, 10);
    let auxEvents: any[] = [];
    experience.events.forEach((element: any) => {
      let elementSlice = element.date.slice(0, 10);

      if (elementSlice === elSlice) {
        auxEvents.push(element);
      }
    });
    setEvents(auxEvents);
  };

  const handleNewEvent = () => {
    if (selectedDate === undefined) return;

    let newEvent = {
      date: selectedDate,
      fk_experience_id: experience.id,
      hour: 0,
      id: 0,
      minute: 0,
      price: "0",
      seats: 0,
      status: "",
      type: "",
    };

    setEventSelected(newEvent);

    setVisible1(true);

  };

  const handleNewEventMovil = () => {
    if (selectedDate === undefined) return;

    let newEvent = {
      date: selectedDate,
      fk_experience_id: experience.id,
      hour: 0,
      id: 0,
      minute: 0,
      price: "0",
      seats: 0,
      status: "",
      type: "",
    };

    setEventSelected(newEvent);

  };

  const handleEdit = (el: any) => {
    setEventSelected(el);
    setVisible1(true);
  };

  const handleEditMovil = (el: any) => {
    setEventSelected(el);
  };

  const handleDrop = (acceptedFiles: any) => {
    setImageFile(acceptedFiles);
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setUrlAux((prev: any) => [...prev, base64String]);
      };

      reader.readAsDataURL(file);
    });
  };
  const handlTitle = (e: any) => {
    dispatch(setStatePartner({ ...experience, name: e.target.value }));
  };


  const dataPartnerHeader = {
    experience: experience,
    setAuxTitle: setAuxTitle,
    auxTitle: auxTitle,
    handlTitle: handlTitle,
    urlAux: urlAux,
    handleDrop: handleDrop,
  };

  const dataPartnerMain = {
    selectedDate: selectedDate,
    handleDayClick: handleDayClick,
    experience: experience,
    handleEdit: handleEdit,
    handleNewEvent: handleNewEvent,
    handleNewEventMovil: handleNewEventMovil,
    setviewQuotas: setviewQuotas,
    viewQuotas: viewQuotas,
    setselectQuotas: setselectQuotas,
    selectQuotas: selectQuotas,
    setviewReservation: setviewReservation,
    viewReservation: viewReservation,
    setselectReservation: setselectReservation,
    selectReservation: selectReservation,
    setselectedCalendar: setselectedCalendar,
    selectedCalendar: selectedCalendar,
    handleEditMovil: handleEditMovil,
  };

  console.log("date select", selectedDate);

  const getAllSuggestions = async () => {
    try {
      const { data } = await getAllSuggestion();

      setSuggestion(data);
    } catch (error) {}
  };

  //events

  //events
  const getCalendars = async () => {
    const { data } = await getCalendar(2, {
      status: "active",
    });
    setcalendarData(data.data);
  };

  const filteredExperience = calendarData.map((calendar: any) => {
    const selectedDate = dataPartnerMain?.selectedDate
      ?.toISOString()
      .slice(0, 10);
    const filteredEvents = selectedDate
      ? calendar.events.filter((event: any) => event.date === selectedDate)
      : [];
    const hasEvents = filteredEvents.length > 0;
    return hasEvents ? { ...calendar, events: filteredEvents } : undefined;
  });

  const finishedExperience = filteredExperience.filter(
    (experience: any) => experience
  );

  useEffect(() => {
    getCalendars();
  }, []);

  useEffect(() => {
    getAllSuggestions();
  }, []);

  return (
    <div className="PartnerExperiences">
      <div className="experiencia-homeb-general-container  main-page">
        <div className="experiencia-homeb-container">
          <div className="experiencia-homeb">
            <HomePartnerHeader />
            <div className="w-full">
              <PartnerHeaderImages
                dataPartnerHeader={dataPartnerHeader}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                setImageFile={setImageFile}
                setImageFil1={setImageFil1}
                imageFile1={imageFile1}
                imageFile={imageFile}
                setImageFilearr={setImageFilearr}
                imageFilearr={imageFilearr}
                setTitleError={setTitleError}
                setDescriptionError={setDescriptionError}
                titleError={titleError}
                descriptionError={descriptionError}
                imageV={imageV}
                imageH={imageH}
                imageArr={imageArr}
              />
            </div>
            <PartnerMainCalendar
              dataPartnerMain={dataPartnerMain}
              eventSelected={eventSelected}
              finishedExperience={finishedExperience}
            />

            <div className=" ">
              <div className="content-propiertb">
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem]">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Código de vestimenta:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={outfit}
                      onChange={(event) => handleInputChange(event, "outfit")}
                    />
                    {outfitError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb"></div>
                </div>
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem]">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Precio:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={price}
                      onChange={(event) => handleInputChange(event, "price")}
                    />{" "}
                    {priceError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb">
                    {/* <button>
                      <PiPencilSimpleLineLight />
                    </button> */}
                  </div>
                </div>
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem]">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Duración:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={duration}
                      onChange={(event) => handleInputChange(event, "duration")}
                    />{" "}
                    {durationError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb">
                    {/* <button>
                      <PiPencilSimpleLineLight />
                    </button> */}
                  </div>
                </div>
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem]">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Cancelaciones:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={cancelled}
                      onChange={(event) =>
                        handleInputChange(event, "cancelled")
                      }
                    />{" "}
                    {cancelledError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb">
                    {/* <button>
                      <PiPencilSimpleLineLight />
                    </button> */}
                  </div>
                </div>
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem]">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Dirección:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={addres}
                      onChange={(event) => handleInputChange(event, "addres")}
                    />
                    {addresError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb">
                    {/* <button>
                      <PiPencilSimpleLineLight />
                    </button> */}
                  </div>
                </div>{" "}
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem]">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Parking:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={parking}
                      onChange={(event) => handleInputChange(event, "parking")}
                    />
                    {parkingError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb">
                    {/* <button>
                      <PiPencilSimpleLineLight />
                    </button> */}
                  </div>
                </div>{" "}
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem]">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Adicionales:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={aditional}
                      onChange={(event) =>
                        handleInputChange(event, "aditional")
                      }
                    />
                    {aditionalError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb">
                    {/* <button>
                      <PiPencilSimpleLineLight />
                    </button> */}
                  </div>
                </div>{" "}
                <div className="content-propiert_bodyb">
                  <div className="propiert_body-datab flex flex-col laptop:flex-row gap-[.5rem] ">
                    <span className="body-data_titleb text-[1.2rem] laptop:text-[1.5rem]">
                      Rango de edad:
                    </span>
                    <input
                      className="body-data_valueb"
                      value={age}
                      onChange={(event) => handleInputChange(event, "age")}
                    />{" "}
                    {ageError !== "" && (
                      <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  ">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="propiert_body-actionb">
                    {/* <button>
                      <PiPencilSimpleLineLight />
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="content-sugestionb">
                <span className="sugestion-titleb">Sugerencias Sibaritta</span>
                <div className=" sugestion-cardsb-container-1 ">
                  {suggestion?.map((data: any, index: number) => (
                    <div key={index} className="sugestion-cardsb">
                      <CardPartnerExperiencias
                        data={data}
                        addSuggestion={addSuggestion}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className="data_detail-btnb  addb guardarb  " onClick={send}>
            Guardar
          </button>
          <button className="data_detail-btnb  addb cancelb laptop">
            Cancelar
          </button>
          <ModalEvent
            visible={visible1}
            setVisible={setVisible1}
            eventSelected={eventSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
