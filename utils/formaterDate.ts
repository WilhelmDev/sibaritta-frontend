const moment = require("moment");
import "moment/locale/es";

export function formatearFecha(fechaOriginal: Date) {
  return moment(fechaOriginal).format("DD/MM/YYYY");
}

export const formateDateText = (fechaOriginal: string): string => {
  return moment(fechaOriginal).format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
};

export const formatDates = (fechaOriginal: string) => {
  // Parsear la fecha utilizando Moment.js
  const fechaMoment = moment(fechaOriginal);
  fechaMoment.locale("es");

  // Formatear la fecha en el formato deseado (por ejemplo, 'DD [de] MMMM [de] YYYY')
  return fechaMoment.format("DD [de] MMMM [de] YYYY");
};




export function formatearFechaReserva(fechaOriginal: string) {
  return moment(fechaOriginal).format('DD/MM/YYYY -- HH:mm:ss');
}

export function formatearFechaReservaHoursMinutes(date:string,hour:number ,minute:number ) {

  const fecha = moment(date);

  const fechaFormateada = fecha.format('dddd D [de] MMMM [del] YYYY');

  return `${fechaFormateada}, ${hour}:${minute} `
}


export function formatearHoraotification(fechaOriginal: string, currentTime: number) {
  const timeDifference = currentTime - new Date(fechaOriginal).getTime();

  const minutes = Math.floor(timeDifference / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `Hace ${days} ${days === 1 ? 'día' : 'días'}`;
  } else if (hours > 0) {
    return `Hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  } else {
    return `Hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
  }
}



export function formatearReservaFecha(fechaOriginal: string) {
  // Parsea la fecha original
  const fechaMoment = moment(fechaOriginal);

  // Obtiene el nombre del día de la semana
  const nombreDia = fechaMoment.format('dddd');

  // Obtiene el día del mes
  const dia = fechaMoment.format('DD');

  // Obtiene el nombre del mes
  const nombreMes = fechaMoment.format('MMMM');

  // Obtiene el año
  const año = fechaMoment.format('YYYY');

  // Obtiene la hora en formato de 12 horas
  const hora = fechaMoment.format('h:mma');

  // Combina la información para formar la cadena final
  const fechaFormateada = `${nombreDia} ${dia} de ${nombreMes} del ${año}, ${hora}`;

  return fechaFormateada;
}


export function formatearDataPartner(fechaOriginal: string) {
  // Parsea la fecha original
  const fechaMoment = moment(fechaOriginal);

  // Obtiene el nombre del día de la semana
  const nombreDia = fechaMoment.format('dddd');

  // Obtiene el día del mes
  const dia = fechaMoment.format('DD');

  // Obtiene el nombre del mes
  const nombreMes = fechaMoment.format('MMMM');


  // Obtiene la hora en formato de 12 horas
  const hora = fechaMoment.format('h:mma');

  // Combina la información para formar la cadena final
  const fechaFormateada = `${nombreDia} ${dia} de ${nombreMes}`;

  return fechaFormateada;
}




export function monthFormater(fechaOriginal: Date | undefined | any) {

  if (fechaOriginal === undefined) return ('');

  let nombresMeses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];
  let formattedDate = fechaOriginal?.getDate() + ' ' + nombresMeses[fechaOriginal.getMonth()];

  return formattedDate;
} 
