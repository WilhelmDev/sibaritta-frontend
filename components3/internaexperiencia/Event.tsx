import { Events } from "@/interface/events"
import moment from "moment"
import 'moment/locale/es';

moment.locale('es');

interface eventProps {
  event: Events
  callback: (event:Events) => void
  active: any
}
export default function Event({ event, callback, active }: eventProps) {
  return (
  <div 
  className={`internaExperiencia__reserva__right__contenedor__card cursor-pointer ${(active && active.id) === event.id && 'active'}`} 
  onClick={() => callback(event)} >
    <h3 className="tituloh3">
      { moment(event.date).locale('es').format('MMMM')}
    </h3>
    <hr />
    <h4>{moment(event.date).format('DD')}</h4>
    <p>
      {moment(event.date).locale('es').format('dddd')}
    </p>
    <hr />
    <h5 className="tituloh5">{`${event.hour}:${event.minute}`}</h5>
  </div>
  )
}