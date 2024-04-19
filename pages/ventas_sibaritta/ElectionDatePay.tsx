import React from 'react'
import Link from "next/link";
import Image from "next/image";
import CalendarIcon from "@/public/ventas_sibarita/calendarIcon.png";


const ElectionDatePay = ( {electionData}:any ) => {

  const changeVisibility = () => {
    electionData?.setvisibleMenu(!electionData?.visibleMenu);
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
            electionData?.visibleMenu ? "active" : ""
          }`}
        >
          <button className="menu-date">
            Fecha personalizada
          </button>
          <button onClick={() => {
            electionData?.calculateComparador(2);
            changeVisibility();
          }} className="menu-date">
            Total semana
          </button>
          <button onClick={() => {
            electionData?.calculateComparador(3);
            changeVisibility();
          }} className="menu-date">
            Total mes
          </button>
          <button onClick={() => {
            electionData?.calculateComparador(4);
            changeVisibility();
          }} className="menu-date">
            Total año
          </button>
        </div>
      </div>
      <button className="date-sale-total-sale">
        <p className="date-sale-total-sale-left">Total Pagos</p>
        <div className="date-sale-total-sale-right">5.000</div>
      </button>
    </div> 
    <div className="dates-tipes-pay laptop">
        <div className="dates-tipes-calendar-image-1-pay ">
          <Image
            className=" "
            width={100}
            height={100}
            src={CalendarIcon.src}
            alt="calendar imagen"
          />
        </div>
        <button className="dates-tipes-2 dates-tipes-child-pay">
          Fecha personalizada
        </button>
        <button onClick={() => electionData?.calculateComparador(2)} className="dates-tipes-4 dates-tipes-child-pay">
          Total semana
        </button>
        <button onClick={() => electionData?.calculateComparador(3)} className="dates-tipes-5 dates-tipes-child-pay">Total mes</button>
        <button onClick={() => electionData?.calculateComparador(4)} className="dates-tipes-6 dates-tipes-child-pay">Total año</button>
      </div>
    </>
  )
}

export default ElectionDatePay