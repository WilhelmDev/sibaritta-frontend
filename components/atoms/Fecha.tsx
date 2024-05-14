import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";

interface DateProps {
  selected?: Date; // Puedes hacer que sea opcional si es posible que esté indefinido al principio
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

function Fecha({ selected, setSelected }: DateProps) {
  const [fechaVisible, setFechaVisible] = useState(false);

  const handleClick = () => {
    setFechaVisible(!fechaVisible);
  };

  return (
    <div className="gastronomy-input ">
      <article
        onClick={handleClick}
        className="w-full h-full text-center font-inter"
      >
        <span className="text-[#E1D4C4]  font-semibold">Fecha</span>
      </article>

      {fechaVisible && (
        <div className="fecha_calendar__ main-page">
          <DayPicker
            className="w-full h-full"
            mode="single"
            selected={selected}
            onSelect={setSelected}
            locale={es}
          />
        </div>
      )}
    </div>
  );
}

export default Fecha;
