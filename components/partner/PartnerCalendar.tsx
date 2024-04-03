import { es } from "date-fns/locale/es";
import { useEffect } from "react";
import { CaptionProps, DayPicker, DayProps } from "react-day-picker";
import React from "react";
import { useRouter } from "next/router";
import CustomDay from "./CustomDay";
import CustomCaption from "./CustomCaption";
import Image from "next/image";
import moment from "moment";

interface PartnerMainCalendar {
  dataPartnerMain: any;
  showCalendar: boolean;
  onToggleCalendar: any;
  finishedExperience: any;
  dataFiltredPaint: any;
  dateFiltredTotal: any;
}

const PartnerCalendar = ({
  dataPartnerMain,
  showCalendar,
  onToggleCalendar,
  finishedExperience,
  dataFiltredPaint,
  dateFiltredTotal,
}: PartnerMainCalendar) => {
  const eventsExperienceTotal = dataPartnerMain.experience.events.map(
    (e: any) => e.date
  );
  const eventsExperienceSolo = eventsExperienceTotal.filter(
    (e: any, index: number) => {
      return eventsExperienceTotal.indexOf(e) === index;
    }
  );

  const eventsExperienceSoloDate = eventsExperienceSolo.map(
    (e: string) => new Date(e)
  );

  const selectDay = dataPartnerMain.selectedDate;
  const ObjectEventsPrecencial = dataPartnerMain?.experience?.events.filter(
    (e: any) => {
      const date1 = moment(e.date);
      const date2 = moment(selectDay?.toString());

      return e.type === "presencial" && date1.isSame(date2, "day");
    }
  );
  const ObjectEventPickup = dataPartnerMain?.experience?.events.filter(
    (e: any) => {
      const date1 = moment(e.date);
      const date2 = moment(selectDay?.toString());

      return e.type === "pickup" && date1.isSame(date2, "day");
    }
  );
  const EventsPrecencial = ObjectEventsPrecencial.length;
  const EventPickup = ObjectEventPickup.length;
  const eventsPrecencialAmount = ObjectEventsPrecencial.reduce(
    (acumulator: number, data: { seats: number }) => acumulator + data.seats,
    0
  );
  const eventsPickupAmount = ObjectEventPickup.reduce(
    (acumulator: number, data: { seats: number }) => acumulator + data.seats,
    0
  );

  const router = useRouter();

  const bookedStyle = { color: "#E1D4C4" };

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    user_id === "1" ? router.push("/") : "";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    SecurityPrivileges();
  }, []);

  const dataPaint = dataFiltredPaint?.flatMap(
    (calendar: any) => calendar?.events
  );

  const transformData = (data: any[]) => {
    const newData: {
      [date: string]: {
        personPresence: number;
        personPickus: number;
        sumPresence: number;
        sumPickus: number;
      };
    } = {};

    data?.forEach((entry: any) => {
      const { date, type, seats } = entry;

      if (!newData[date]) {
        newData[date] = { 
          personPresence: 0,
          personPickus: 0,
          sumPresence: 0,
          sumPickus: 0,
        };
      }

      if (type === "presencial") {
        newData[date].personPresence += seats;
        newData[date].sumPresence++;
      } else if (type === "pickup") {
        newData[date].personPickus += seats;
        newData[date].sumPickus++;
      }
    });

    return newData;
  };

  const transformedData = transformData(dataPaint);
  console.log("Soy transformedData ", transformedData);

  return (
    <div className="PartnerCalendar">
      <div className="partner-calendar-day-picker-laptop content-calendar_bodyb laptop">
        <DayPicker
          components={{
            Day: (props: DayProps) => (
              <CustomDay
                {...props}
                finishedExperience={finishedExperience}
                transformedData={transformedData}
                dateFiltredTotal={dateFiltredTotal}
              />
            ),
            Caption: (props: CaptionProps) => <CustomCaption {...props} />,
          }}
          selected={dataPartnerMain?.selectedDate}
          mode="single"
          locale={es}
          onDayClick={dataPartnerMain?.handleDayClick}
        />
      </div>

      {showCalendar && (
        <div className="partner-calendar-day-picker-movile movile">
          <DayPicker
            components={{
              Day: (props: DayProps) => (
                <CustomDay
                  {...props}
                  finishedExperience={finishedExperience}
                  transformedData={transformedData}
                  dateFiltredTotal={dateFiltredTotal}
                />
              ),
              Caption: (props: CaptionProps) => <CustomCaption {...props} />,
            }}
            selected={dataPartnerMain?.selectedDate}
            mode="single"
            locale={es}
            onDayClick={dataPartnerMain?.handleDayClick}
            modifiers={{ booked: eventsExperienceSoloDate }}
            modifiersStyles={{ booked: bookedStyle }}
          />
          <div className="partner-calendar-movil-footer">
            <div className="partner-calendar-movil-footer-top">
              {EventsPrecencial != 0 && eventsPrecencialAmount != 0 && (
                <button className="button-left footer-button">
                  <h5 className="text-3x">{EventsPrecencial}x</h5>
                  <div className="image">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full"
                      src={"/partners/pick3.png"}
                      alt="Logo de la marca"
                    />
                  </div>
                  <h5 className="text-36">{eventsPrecencialAmount}</h5>
                </button>
              )}
              {eventsPickupAmount != 0 && EventPickup != 0 && (
                <button className="button-right footer-button">
                  <h5 className="text-3x">{eventsPickupAmount}x</h5>
                  <div className="image">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full"
                      src={"/datils/bagBlackmain.png"}
                      alt="Logo de la marca"
                    />
                  </div>
                  <h5 className="text-36">{EventPickup}</h5>
                </button>
              )}
            </div>
            <button
              onClick={() => {
                dataPartnerMain?.setviewReservation((prev: boolean) => !prev);
                dataPartnerMain?.setselectReservation((prev: boolean) => !prev);
                dataPartnerMain?.setselectedCalendar((prev: boolean) => !prev);
                onToggleCalendar();
              }}
              className="partner-calendar-movil-footer-bot"
            >
              Ver
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerCalendar;
