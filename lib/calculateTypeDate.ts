import monthsArray from "@/lib/monthsArray";
import daysArray from "./daysArray";
import moment from "moment";

export const transformDateAFormatHuman = (a: string) => {
  const dateActualFormat = new Date(a);
  const dayActual = dateActualFormat.getDate();
  const monthActualNumber = dateActualFormat.getMonth();
  const monthActualString = monthsArray[monthActualNumber];
  const yearActual = dateActualFormat.getFullYear();

  const dateActualEditedString = `${dayActual} ${monthActualString} ${yearActual}`;

  return dateActualEditedString;
};

export const transformDateAFormatHumanReservation = (a: string) => {
  const dateActualFormat = new Date(a);
  const dayOfWeekNumber = dateActualFormat.getDay();
  const dayOfWeekString = daysArray[dayOfWeekNumber]; // Suponiendo que tienes un array con los nombres de los días de la semana
  const dayActual = dateActualFormat.getDate();
  const monthActualNumber = dateActualFormat.getMonth();
  const monthActualString = monthsArray[monthActualNumber];
  const yearActual = dateActualFormat.getFullYear();

  const dateActualEditedString = `${dayOfWeekString} ${dayActual} de ${monthActualString} ${yearActual}`;

  return dateActualEditedString;
};


export const calculateDateActual = () => {
  moment.tz.setDefault('America/Mexico_City');

  const currentDate = moment();
  const upcomingMonday = currentDate.startOf('week');
  const nextSunday = upcomingMonday.clone().add(6, 'days').format('DD');
  const dateActualFormat = new Date();
  const dayActual = dateActualFormat.getDate();
  const monthActualNumber = dateActualFormat.getMonth();
  let monthActualString = monthsArray[monthActualNumber];
  const yearActual = dateActualFormat.getFullYear();
  const dayPadded = String(dayActual).padStart(2, "0");
  const monthPadded = String(monthActualNumber + 1).padStart(2, "0");

  if (+nextSunday < 7) {
    monthActualString = monthsArray[monthActualNumber + 1]
  }

  const dateActualNewDate = new Date();
  dateActualNewDate.setDate(dateActualNewDate.getDate() + 1);

  const dayNext = dateActualNewDate.getDate();
  const monthNextNumber = dateActualNewDate.getMonth();
  const yearNext = dateActualNewDate.getFullYear();
  const dayNextPadded = String(dayNext).padStart(2, "0");
  const dateActualEditedString = `${nextSunday} ${monthActualString} ${yearActual}`;
  const dateActualEditedNumber = `${yearActual}-${(+nextSunday < 7) ? (+monthPadded + 1) : monthPadded  }-${nextSunday}`;
  const dateNextEditedNumber = `${yearActual}-${monthPadded}-${dayNextPadded}`;
  const actualDate = `${dayPadded} ${monthsArray[monthActualNumber]} ${yearActual}`;
  const actualDateFormat = moment(dateActualFormat).format('YYYY[-]MM[-]DD')

  const dateWeekBeforeEditedArray = [
    dateActualEditedString,
    dateActualEditedNumber,
    dateNextEditedNumber,
    actualDate,
    actualDateFormat
  ];

  return dateWeekBeforeEditedArray;
};

export const calculateDateWeekBefore = () => {
  const dateActual = new Date();
  const dateWeekBefore = new Date(dateActual);
  const actualWeekDay = moment(dateActual).isoWeekday();

  dateWeekBefore.setDate(dateActual.getDate() - (actualWeekDay - 1));

  const dayWeekBefore = dateWeekBefore.getDate();
  const monthWeekBeforeNumber = dateWeekBefore.getMonth();
  const monthWeekBeforeString = monthsArray[monthWeekBeforeNumber];
  const yearWeekBefore = dateWeekBefore.getFullYear();

  const dayPadded = String(dayWeekBefore).padStart(2, "0");
  const monthPadded = String(monthWeekBeforeNumber + 1).padStart(2, "0");

  const dateWeekEditedString = `${dayWeekBefore} ${monthWeekBeforeString} ${yearWeekBefore}`;
  const dateWeekEditedNumber = `${yearWeekBefore}-${monthPadded}-${dayPadded}`;
  const dateWeekBeforeEditedArray = [
    dateWeekEditedString,
    dateWeekEditedNumber,
  ];
  return dateWeekBeforeEditedArray;
};

export const calculateDateMonthBefore = () => {
  const dateMonthBefore = new Date();

  dateMonthBefore.setDate(1);

  const dayMonthBefore = dateMonthBefore.getDate();
  const monthMonthBeforeNumber = dateMonthBefore.getMonth();
  const monthMonthBeforeString = monthsArray[monthMonthBeforeNumber];
  const yearMonthBefore = dateMonthBefore.getFullYear();

  const dayPadded = String(dayMonthBefore).padStart(2, "0");
  const monthPadded = String(monthMonthBeforeNumber + 1).padStart(2, "0");

  const dateMonthEditedString = `${dayMonthBefore} ${monthMonthBeforeString} ${yearMonthBefore}`;
  const dateMonthEditedNumber = `${yearMonthBefore}-${monthPadded}-${dayPadded}`;
  const dateMonthBeforeEditedArray = [
    dateMonthEditedString,
    dateMonthEditedNumber,
  ];

  return dateMonthBeforeEditedArray;
};

export const calculateDateYearBefore = () => {
  const dateYearBefore = new Date();

  dateYearBefore.setMonth(0);
  dateYearBefore.setDate(1);

  const dayYearBefore = dateYearBefore.getDate();
  const monthYearBeforeNumber = dateYearBefore.getMonth();
  const monthYearBeforeString = monthsArray[monthYearBeforeNumber];
  const yearYearBefore = dateYearBefore.getFullYear();

  const dayPadded = String(dayYearBefore).padStart(2, "0");
  const monthPadded = String(monthYearBeforeNumber + 1).padStart(2, "0");

  const dateYearEditedString = `${dayYearBefore} ${monthYearBeforeString} ${yearYearBefore}`;
  const dateYearEditedNumber = `${yearYearBefore}-${monthPadded}-${dayPadded}`;
  const dateYearBeforeEditedArray = [
    dateYearEditedString,
    dateYearEditedNumber,
  ];

  return dateYearBeforeEditedArray;
};

export const calculateDateArrayCalendar = (a: any) => {
  const dateInitial = new Date(a);

  const dayDateArrayCalendar = dateInitial.getDate();
  const monthDateArrayCalendarNumber = dateInitial.getMonth();
  const monthDateArrayCalendarString =
    monthsArray[monthDateArrayCalendarNumber];
  const yearDateArrayCalendarBefore = dateInitial.getFullYear();

  const dayPadded = String(dayDateArrayCalendar).padStart(2, "0");
  const monthPadded = String(monthDateArrayCalendarNumber + 1).padStart(2, "0");

  const dateActualNewDate = new Date(dateInitial);
  dateActualNewDate.setDate(dateActualNewDate.getDate() + 1);

  const dayNext = dateActualNewDate.getDate();
  const monthNextNumber = dateActualNewDate.getMonth();
  const dayNextPadded = String(dayNext).padStart(2, "0");

  const datDateArrayCalendarEditedString = `${dayDateArrayCalendar} ${monthDateArrayCalendarString} ${yearDateArrayCalendarBefore}`;
  const dateDateArrayCalendarEditedNumber = `${yearDateArrayCalendarBefore}-${monthPadded}-${dayPadded}`;
  const dateNextEditedNumber = `${yearDateArrayCalendarBefore}-${monthPadded}-${dayNextPadded}`;

  const DateArrayCalendar = [
    datDateArrayCalendarEditedString,
    dateDateArrayCalendarEditedNumber,
    dateNextEditedNumber,
  ];

  return DateArrayCalendar;
};
