export const filtredDataOfDate = (especificDate?: any, data?: any) => {
  const fechaObjetivo = new Date(especificDate);
  fechaObjetivo.setHours(0, 0, 0, 0);

  const resultadosFiltrados = data?.filter((reserva: any) => {
    const fechaDePago = new Date(reserva.createdAt);
    fechaDePago.setHours(0, 0, 0, 0);

    return fechaDePago.getTime() === fechaObjetivo.getTime();
  });

  return resultadosFiltrados;
};

export const filtredDataOfDateComparator = (
  a: string,
  b: string,
  data: any
) => {
  let fechaInicio = new Date(a);
  let fechaFin = new Date(b);

  if (fechaInicio > fechaFin) {
    [fechaInicio, fechaFin] = [fechaFin, fechaInicio];
  }

  fechaInicio.setHours(0, 0, 0, 0);
  fechaFin.setHours(0, 0, 0, 0);

  const resultadosFiltrados = data?.filter((reserva: any) => {
    const fechaDePago = new Date(reserva.createdAt);
    fechaDePago.setHours(0, 0, 0, 0);

    return fechaDePago >= fechaInicio && fechaDePago <= fechaFin;
  });

  return resultadosFiltrados;
};
