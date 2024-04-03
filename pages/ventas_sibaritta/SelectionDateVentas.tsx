import React from 'react'
import Image from "next/image";
import CalendarIcon from "@/public/ventas_sibarita/calendarIcon.png";


// interface SelectionDateVentas {
//   visibleMenu: boolean;
//   setvisibleMenu: React.Dispatch<React.SetStateAction<boolean>>;
//   dataImportGeneral: any;
//   calculateComparador: any;
//   changeViewCalendar: any;
//   selectCanceledOrCompleted: any;
//   hoy: any;
//   semana: any;
//   mes: any;
//   año: any;
// }

const SelectionDateVentas = ({selectionData}:any ) => {

    const changeVisibility = () => {
      selectionData?.setvisibleMenu(!selectionData?.visibleMenu);
      };

      const sendCanceledOrCompleted = (a: number) => {
        selectionData?.selectCanceledOrCompleted(a);
      };

      const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
    
        if (selectedValue === "cancelled") {
          sendCanceledOrCompleted(1);
        } else if (selectedValue === "completed") {
          sendCanceledOrCompleted(2);
        } else {
          sendCanceledOrCompleted(0);
        }
      };

  return (
    <>
    <div className="date-sale-total-container movile">
      <div className="date-sale-total-date">
        <button
          onClick={changeVisibility}
          className="date-sale-total-date-content"
        >
          <div className="date-sale-total-date-left">Fecha</div>
          <p className="date-sale-total-date-right">∨</p>
        </button>
        <div
          className={`date-sale-total-date-menu ease-in-out duration-300 ${
            selectionData?.visibleMenu ? "active" : ""
          }`}
        >
          <button onClick={() => selectionData?.changeViewCalendar()} className="menu-date">
            Fecha personalizada
          </button>
          <button onClick={() => selectionData?.calculateComparador(1)} className="menu-date">
            Hoy
          </button>
          <button onClick={() => selectionData?.calculateComparador(2)} className="menu-date">
            Total semana
          </button>
          <button onClick={() => selectionData?.calculateComparador(3)} className="menu-date">
            Total mes
          </button>
          <button onClick={() => selectionData?.calculateComparador(4)} className="menu-date">
            Total año
          </button>
        </div>
      </div>
      <button className="date-sale-total-sale">
        <p className="date-sale-total-sale-left">Total Ventas</p>
        <div className="date-sale-total-sale-right">{(selectionData?.dataImportGeneral?.total?selectionData?.dataImportGeneral?.total:0)}</div>
      </button>
    </div>
    <div className="dates-tipes-container-general laptop">
      <div className="dates-tipes-container-left">
        <div className="dates-tipes-calendar-image-1 ">
          <Image
            className=" "
            width={100}
            height={100}
            src={CalendarIcon.src}
            alt="calendar imagen"
          />
        </div>
        <button
          onClick={() => selectionData?.changeViewCalendar()}
          className="dates-tipes-2 dates-tipes-child"
        >
          Fecha personalizada
        </button>
        <button
          onClick={() => {
            selectionData?.calculateComparador(1);
          }}
          className={`dates-tipes-3 dates-tipes-child  ${
            selectionData?.hoy && "border border-[#f89c53]"
          } `}
        >
          Hoy
        </button>
        <button
          onClick={() => {
            selectionData?.calculateComparador(2);
          }}
          className={`dates-tipes-4 dates-tipes-child  ${
            selectionData?.semana && "border border-[#f89c53]"
          }`}
        >
          Total semana
        </button>
        <button
          onClick={() => selectionData?.calculateComparador(3)}
          className={`dates-tipes-5 dates-tipes-child ${
            selectionData?.mes && "border border-[#f89c53]"
          }`}
        >
          Total mes
        </button>
        <button
          onClick={() => selectionData?.calculateComparador(4)}
          className={`dates-tipes-6 dates-tipes-child ${
            selectionData?.año && "border border-[#f89c53]"
          }`}
        >
          Total año
        </button>
      </div>
      <div className="dates-tipes-container-right">
        {/* <p className="dates-tipes-container-right-1">Mostrar:</p>
        <button className="dates-tipes-container-right-2">Todos</button> */}
        <div className="dates-tipes-container-right-3">
          <select
            className="dates-tipes-container-right-3-select"
            onChange={handleSelectChange}
          >
            <option
              value=""
              className="dates-tipes-container-right-3-select-1 dates-tipes-container-right-3-select-child"
            >
              Todos
            </option>
            <option
              value="cancelled"
              className="dates-tipes-container-right-3-select-1 dates-tipes-container-right-3-select-child"
            >
              Cancelados
            </option>
            <option
              value="completed"
              className="dates-tipes-container-right-3-select-3 dates-tipes-container-right-3-select-child"
            >
              Completados
            </option>
          </select>
        </div>
      </div>
    </div>
    </>
  )
}

export default SelectionDateVentas