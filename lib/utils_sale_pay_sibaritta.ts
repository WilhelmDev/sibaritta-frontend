import moment from "moment";

export const capitalizeFirstLetter = (text: string) => {
  return text?.charAt(0).toUpperCase() + text?.slice(1);
};

export const filterForDateCardsCompared = (
  minDate: string,
  maxDate: string,
  dataGeneral: any
) => {
  if (minDate > maxDate) {
    [minDate, maxDate] = [maxDate, minDate];
  }

  const cardsFiltred = dataGeneral?.filter((object: any) => {
    const dateObject = object.date;

    return dateObject >= minDate && dateObject <= maxDate;
  });

  return cardsFiltred;
};

export const filterForDateCardsToday = (
  targetDate: string,
  dataGeneral: any
) => {
  const cardsFiltered = dataGeneral?.filter((object: any) => {
    const dateObject = object.date;

    return dateObject === targetDate;
  });

  return cardsFiltered;
};

export const comparateDateMajorDate = (a: string, b: string) => {
  const dateA = moment(a, "DD MMMM YYYY");
  const dateB = moment(b, "DD MMMM YYYY");

  if (dateA.isAfter(dateB)) {
    return `${b} - ${a}`;
  } else {
    return `${a} - ${b}`;
  }
};                                                        


export const filtredByString = (a: string, b: any) => {
  return b.filter((item: any) => item.status === a);
};


export const transformDateToString = (fechaString:string) =>{

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const fecha = new Date(fechaString);
  const diaSemana = diasSemana[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();

  return `${diaSemana} ${dia} de ${mes} de ${año}`;
}