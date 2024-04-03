import React, { useState } from "react";
import PartnerCalendar from "./PartnerCalendar";
import PartnerListEvents from "./PartnerListEvents";

interface PartnerMainCalendar {
  dataPartnerMain: any;
  eventSelected: any;
  finishedExperience: any;
  dataFiltredPaint?: any;
  dateFiltredTotal?: any;
}

const PartnerMainCalendar = ({
  dataPartnerMain,
  eventSelected,
  finishedExperience,
  dataFiltredPaint,
  dateFiltredTotal,
}: PartnerMainCalendar) => {
  const [showCalendar, setshowCalendar] = useState<boolean>(false);

  const handleToggleCalendar = () => {
    setshowCalendar((prevshowCalendar) => !prevshowCalendar);
  };

  return (
    <div className="PartnerMarinCalendar">
      <div className=" PartnerMarinCalendar-Container  flex w-full ">
        <PartnerCalendar
          dataPartnerMain={dataPartnerMain}
          onToggleCalendar={handleToggleCalendar}
          showCalendar={showCalendar}
          finishedExperience={finishedExperience}
          dataFiltredPaint={dataFiltredPaint}
          dateFiltredTotal={dateFiltredTotal}
        />
        <PartnerListEvents
          dataPartnerMain={dataPartnerMain}
          onToggleCalendar={handleToggleCalendar}
          eventSelected={eventSelected}
          finishedExperience={finishedExperience}
        />
      </div>
    </div>
  );
};

export default PartnerMainCalendar;
