import SimulacionDatosSibaritta from "@/lib/SimulacionDatosSibaritta.json";


const extractSumDateComparator = (b="b 2024 Febrero 5", a = "2024 Febrero 5") => {
  const fechaInicio = new Date(a);
  const fechaFin = new Date(b);
   
  const resultadosFiltrados = SimulacionDatosSibaritta.filter((reserva) => {
    const fechaDePago = new Date(reserva.fechaDePago);
    return fechaDePago > fechaInicio && fechaDePago < fechaFin;
  });



  const elementosConMonto = resultadosFiltrados.filter(
    (reserva) => !isNaN(Number(reserva.montoPagado))
  );

  const totalMontoPagado = elementosConMonto.reduce(
    (total, reserva) => total + Number(reserva.montoPagado),
    0
  );


  return totalMontoPagado;
};

export default extractSumDateComparator;
