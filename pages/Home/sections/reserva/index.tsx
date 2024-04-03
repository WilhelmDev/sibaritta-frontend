import SectionListBase from '@/components2/SectionListBase'
import SectionListBaseReservation from '@/components2/SectionListBaseReservation.tsx'
import { v4 as uuid } from 'uuid'

const items = [
  'Para reservar debes registrate y convertirte en Socio Sibsaritta Aquí',
  'Ahora que ya estás registrado, explora todas las experiencias que tenemos en nuestra página de Inicio',
  'Ingresa a la página de la experiencia de tu elección donde podrás ver los detalles de la experiencia y del establecimiento',
  'Selecciona la opción de “Inicia tu Reservación” y elije: --Número de personas, fecha, día y hora ',
  'Selecciona “Continuar” y la plataforma te llevará por el proceso de Reserva hasta finalizar tu Check out donde podrás elegir diferentes opciones de Pago',
]

const SectionReserva = () => {
  return (
    <div>
      <SectionListBaseReservation
        bg_img='/partner_home/cardBackground2.jpg'
        title='¿Cómo reservo una 
        Experiencia ?'
        items={items}
        key={uuid()}
      />
    </div>
  )
}

export default SectionReserva
