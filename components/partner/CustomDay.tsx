import { useEffect, useState } from "react";
import { DayProps, useDayRender } from "react-day-picker";
import data from "@/json/partner.json";
import { PiForkKnifeLight } from "react-icons/pi";
import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/router";

const CustomDay = (
  props: DayProps & {
    finishedExperience?: any;
    transformedData: any;
    dateFiltredTotal?: any;
  }
) => {
  const { experience } = useAppSelector((state) => state.partner);
  const [sumPresence, setSumPresence] = useState();
  const [sumPickus, setSumPickus] = useState();
  const [personPresence, setPersonPresence] = useState();
  const [personPickus, setPersonPickus] = useState();
  const buttonRef = React.useRef<any>();
  const { asPath } = useRouter();
  const filteredExperience = props.finishedExperience?.map((calendar: any) => {
    const filteredEvents = calendar.events.filter((event: any) => {
      const dates = event.date;
      return dates;
    });
    return filteredEvents.map((fil: any) => fil);
  });

  const dateConcat = [].concat(...filteredExperience);

  let dayExperience = (
    asPath === "/calendar" ? dateConcat : experience?.events
  )?.map((el: any) => {
    return el.date?.slice(0, 10);
  });

  //color
  const filteredExperienceColor = props.finishedExperience?.map(
    (calendar: any) => {
      const filteredEvents = calendar.events.filter((event: any) => {
        return event.date === props.date.toISOString().slice(0, 10);
      });
      const formattedEvents = filteredEvents.map((event: any) => {
        return {
          ...event,
          date: new Date(event.date + "T05:00:00.000Z").toISOString(),
        };
      });
      return formattedEvents;
    }
  );
  const filteredExperienceColorConcat = [].concat(...filteredExperienceColor);

  let eventColor = (
    asPath === "/calendar" ? filteredExperienceColorConcat : experience?.events
  )?.filter((el: any) => {
    return el.date?.slice(0, 10) === props.date.toISOString().slice(0, 10);
  });

  useEffect(() => {
    if (eventColor.length > 0) {
      let auxPickus = eventColor.filter((el: any) => el.type === "pickup");
      let auxPresence = eventColor.filter(
        (el: any) => el.type === "presencial"
      );

      let auxSumPre = auxPresence.reduce((a: any, b: any) => a + b.seats, 0);
      let auxSumauxPickusPre = auxPickus.reduce(
        (a: any, b: any) => a + b.seats,
        0
      );
      setSumPresence(auxPresence.length);
      setSumPickus(auxPickus.length);
      setPersonPresence(auxSumPre);
      setPersonPickus(auxSumauxPickusPre);
    }
  }, [eventColor]);

  const dayRender = useDayRender(props.date, props.displayMonth, buttonRef);

  const handleClick = (e: any) => {
    dayRender.buttonProps?.onClick?.(e);
  };

  return (
    <>
      {asPath === "/calendar" &&
        (props.dateFiltredTotal?.includes(
          props?.date?.toISOString().slice(0, 10)
        ) ? (
          <button
            {...dayRender.buttonProps}
            ref={buttonRef}
            onClick={handleClick}
          >
            <div className="content-day_dateb"> {props?.date?.getDate()}</div>
            <div className="contetn-day_datab-container">
              <div className="contetn-day_datab ">
                <div className="day_data-amountb">{`${
                  props?.transformedData[
                    props?.date?.toISOString().slice(0, 10)
                  ].sumPresence
                }x`}</div>

                <div className="day_data-iconb">
                  <PiForkKnifeLight />
                </div>

                <div className="day_data-numberb">
                  {
                    props?.transformedData[
                      props?.date?.toISOString().slice(0, 10)
                    ].personPresence
                  }
                </div>
              </div>
              <div className="contetn-day_datab">
                <div className="day_data-amountb">
                  {`${
                    props?.transformedData[
                      props?.date?.toISOString().slice(0, 10)
                    ].sumPickus
                  }x`}{" "}
                </div>

                <div className="day_data-iconb">
                  <MdOutlineShoppingBag />
                </div>
                <div className="day_data-numberb">
                  {
                    props?.transformedData[
                      props?.date?.toISOString().slice(0, 10)
                    ].personPickus
                  }
                </div>
              </div>
            </div>
          </button>
        ) : (
          <button
            {...dayRender.buttonProps}
            ref={buttonRef}
            onClick={handleClick}
            className="content-day_simpleb"
          >
            <div className="content-day_dateb"> {props?.date.getDate()}</div>{" "}
          </button>
        ))}
      {asPath === "/partner" &&
        (dayExperience?.includes(props?.date?.toISOString().slice(0, 10)) ? (
          <button
            {...dayRender.buttonProps}
            ref={buttonRef}
            onClick={handleClick}
          >
            <div className="content-day_dateb"> {props?.date?.getDate()}</div>
            <div className="contetn-day_datab-container">
              <div className="contetn-day_datab ">
                <div className="day_data-amountb">{`${sumPresence}x`}</div>

                <div className="day_data-iconb">
                  <PiForkKnifeLight />
                </div>

                <div className="day_data-numberb">{personPresence}</div>
              </div>
              <div className="contetn-day_datab">
                <div className="day_data-amountb">{`${sumPickus}x`} </div>

                <div className="day_data-iconb">
                  <MdOutlineShoppingBag />
                </div>
                <div className="day_data-numberb">{personPickus}</div>
              </div>
            </div>
          </button>
        ) : (
          <button
            {...dayRender.buttonProps}
            ref={buttonRef}
            onClick={handleClick}
            className="content-day_simpleb"
          >
            <div className="content-day_dateb"> {props?.date.getDate()}</div>{" "}
          </button>
        ))}
    </>
  );
};

export default CustomDay;
