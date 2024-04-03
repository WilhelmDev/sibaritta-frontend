import { useEffect, useState } from "react";
import ModalEvent from "@/components/molecules/partner/ModalEvent";
import React from "react";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";
import { setStatePartner } from "@/redux/slice/partnerSlice";
import PartnerMainCalendar from "../../components/partner/PartnerMainCalendar";
import { getAllSuggestion } from "@/services/suggestion.service";
import { getCalendar } from "@/services/calendar/calendar.service";
import HomePartnerHeader from "../home_partner/home_partner_header";


const Index = () => {
  const [eventSelected, setEventSelected] = useState({});
  const [events, setEvents] = useState<any[]>([]);
  const [visible1, setVisible1] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [suggestion, setSuggestion] = useState([]);
  const { experience } = useAppSelector((state) => state.partner);
  const [viewQuotas, setviewQuotas] = useState<boolean>(false);
  const [selectQuotas, setselectQuotas] = useState<boolean>(false);
  const [viewReservation, setviewReservation] = useState<boolean>(false);
  const [selectReservation, setselectReservation] = useState<boolean>(false);
  const [selectedCalendar, setselectedCalendar] = useState(false);
  const [calendarData, setcalendarData] = useState([]);

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

  const getAllSuggestions = async () => {
    try {
      const { data } = await getAllSuggestion();

      setSuggestion(data);
    } catch (error) {}
  };

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

  const dateFiltredTotal = calendarData
    ?.flatMap((calendar: any) =>
      calendar?.events?.map((event: any) => event?.date)
    )
    ?.filter((date, index, self) => self?.indexOf(date) === index);

  const dataFiltredPaint = calendarData?.map((calendar: any) => {
    const filteredEvents = calendar.events.filter((event: any) => event.date);

    const hasEvents = filteredEvents.length > 0;

    return hasEvents ? { events: filteredEvents } : undefined;
  });

  useEffect(() => {
    getCalendars();
  }, []);

  useEffect(() => {
    getAllSuggestions();
  }, []);

  return (
    <div className="Calendar">
      <div className="partner-main-calendar">
        <div className="partner-main-calendar-header-buttons">
          <button className="button-1">
            <h5>Calendario</h5>
          </button>
          <button className="button-2">
            <h5>Últimas Reservas</h5>
          </button>
        </div>
      </div>
      <div className="PartnerExperiences">
        <div className="experiencia-homeb-general-container  main-page">
          <div className="experiencia-homeb-container">
            <div className="experiencia-homeb">
            <HomePartnerHeader />
              <PartnerMainCalendar
                dataPartnerMain={dataPartnerMain}
                eventSelected={eventSelected}
                finishedExperience={finishedExperience}
                dataFiltredPaint={dataFiltredPaint}
                dateFiltredTotal={dateFiltredTotal}
              />
            </div>
            <ModalEvent
              visible={visible1}
              setVisible={setVisible1}
              eventSelected={eventSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
