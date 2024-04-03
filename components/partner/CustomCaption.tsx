import { es } from "date-fns/locale/es";
import { CaptionProps, useNavigation } from "react-day-picker";
import { FaRegCalendarAlt } from "react-icons/fa";

import React from "react";

import { format } from "date-fns";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const CustomCaption = (props: CaptionProps) => {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <div className="CustomCaption">
      <div className="header_calendar-contentb laptop ">
        <div className=" calendar-content_iconb">
          <FaRegCalendarAlt />
        </div>
        <div className="calendar-content_textb">Calendario</div>
      </div>
      <div className="header_calendar-monthb">
        <button
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
          className="calendar-month_btnb"
        >
          <GrFormPreviousLink />
        </button>
        <div
          style={{
            fontSize: "calc(2.5rem * var(--scale))",
          }}
        >
          {" "}
          {format(props.displayMonth, "MMMM yyy", { locale: es })}
        </div>
        <button
          className="calendar-month_btnb"
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default CustomCaption;
