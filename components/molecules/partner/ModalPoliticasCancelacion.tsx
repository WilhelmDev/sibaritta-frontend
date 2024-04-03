import React from 'react'
import Modal from '../Modal';

interface ModalCancelacionPoliticasProps {
    visible1: boolean;
    setVisible1: React.Dispatch<React.SetStateAction<boolean>>;
  }


function ModalPoliticasCancelacion({ visible1, setVisible1 }:ModalCancelacionPoliticasProps) {

    const closeModal = () => {
        setVisible1(false);
        // document.body.style.overflow = "";
      };


  return (
    <div>
        <Modal
        visible={visible1}
        closeModal={closeModal}
        width="w-[90%] tablet:w-[60%]   tablet:w-[80%] laptop:w-[45%] h-auto "
        className="cancelacion-politica-checkout"
        >
            <div className='box_cancelation_politica '>
                <h2>POLÍTICAS DE CANCELACIÓN Y REEMBOLSO</h2>
                <p>El Socio entiende y acepta las condiciones de cancelación de reservación y/o compra de la experiencia, productos y/o servicios ofrecidos por los Partner.

El Socio tendrá derecho a cancelar la compra y/o reservación en cualquier momento y hasta veinticuatro (24) Horas antes de la hora reservación y/o entrega de la experiencia, servicio y/o producto cualquiera sea su motivo; en este caso se realizará el reembolso del cien por ciento (100 %) del total de la reservación personal o de grupo, según el caso.

El Socio no recibirá reembolso por la cancelación y/o no asistencia posterior a veinticuatro (24) horas antes de la reservación y/o entrega de la experiencia, servicio y/o producto cualquiera sea su motivo.

Si la experiencia, servicio y/o producto que se cancela por el usuario y/o Socio es para Pick Up, no aplican los Términos y condiciones de cancelación, el plazo y términos, y no procederá la devolución total y/o parcial del dinero. Los usuarios y/o Socios tendrá a su disposición los mecanismos de reclamación establecidos en la cláusula 18 de los presentes Términos y Condiciones.

El Socio también podrá iniciar el derecho de reclamación de la experiencia, productos y/o servicios ofrecidos por los Partner, en el momento de la hora de la reservación y/o entrega si considera que la información relacionada con la experiencia, productos y/o servicios publicada en la plataforma digital y/o aplicación nativa SIBARITTA no corresponde o coincide con la especificada en la experiencia, servicio y/o producto entregado. Esta acción estará sujeta a verificación por parte de la plataforma digital y/o aplicación nativa SIBARITTA y por los Partner. Los Socios tendrán a su disposición los canales de comunicación de la plataforma digital y/o aplicación nativa SIBARITTA, por medio de los cuales deberá informar la eventualidad y, además, anexar evidencia fotográfica a través de los canales de comunicación de Atención al Socio de la plataforma digital y/o aplicación nativa SIBARITTA, Whatsapp y/o correo electrónico socios@sibaritta.com

Previamente a iniciar el derecho de reclamación por el Socio, procederá un mecanismo de conciliación entre el Socio y la plataforma digital y/o aplicación nativa SIBARITTA y/o Partner, donde se ofrecerá, si fuera procedente, subsanar la experiencia, productos y/o servicios con la prestación de productos y/o servicios de similares características a las de la reservación inicial; de no llegar a un acuerdo, el Socio podrá iniciar el derecho de reclamación.

En el evento en que la cancelación sea para grupos de personas, el Administrador de Reservación tendrá la facultad de decidir si la cancelación aplica él mismo, para todo el grupo o para un número determinado de personas. Para que la cancelación sea efectiva, deberá confirmar el código de seguridad de la plataforma digital y/o aplicación nativa SIBARITTA, para que se pueda realizar el reembolso correspondiente, si aplica, según los términos de cancelación y porcentaje de reembolso contenidos en la presente cláusula.


En el caso en el que Administrador de Reservación quiera realizar la cancelación para sí mismo, tendrá la posibilidad de designar a un integrante del grupo como Administrador de Reservación; en el evento en que no lo designara, la plataforma digital y/o aplicación nativa SIBARITTA, elegirá a la siguiente persona que integra el grupo y así sucesivamente. 

En el evento en que la cancelación, sea de forma individual por cada integrante de grupo o individual y/o grupal por parte del Administrador de Reservación, todos los integrantes del grupo recibirán una notificación de cancelación de reservación a través de un pop up con el enunciado “tu reservación y/o servicio ha sido cancelado por Administrador de Reservación”. El enunciado Pop Up estará sujeto a cambios sin previo aviso.

Si la experiencia, servicio y/o producto para el grupo es para Pick Up, aplica el mismo plazo de cancelación y porcentaje de reembolso contenidos en la presente cláusula.

El usuario y/o Socio, de forma individual o en calidad Administrador de Reservación o Integrante de Grupo, entiende y acepta que podrá modificar su propia reservación o la reservación del grupo, según el caso, para adicionar y/o retirar usuario y/ Socio, cambiar de hora, fecha y lugar de reservación, previa verificación de disponibilidad por parte de los Partner. En algunos eventos es posible que se deba realizar una nueva reservación. 

El Socio entiende y acepta que, podrá disponer de los derechos de reclamación cuando así lo considere necesario, conociendo que es un procedimiento posterior a la conciliación. 

La plataforma digital y/o aplicación nativa SIBARITTA no será responsable por situaciones de fuerza mayor o caso fortuito no atribuible a la plataforma digital y/o aplicación nativa SIBARITTA, entre las cuales se encuentran situaciones de orden público, terremotos, inundaciones, disturbios, guerras, huelgas, bloqueos, fallas en el servicio de energía e internet, desastres naturales entre otros; para estos eventos, se dispondrá de cambio de día de la de la reservación, previa verificación de disponibilidad de los Partner.

No serán considerados casos de fuerza mayor la enfermedad, dolores, lesiones inesperadas, asuntos personales y/o familiares, como tampoco condiciones climatológicas normales de la zona, retrasos, averías y/o bloqueos en el transporte aéreo, terrestre, marítimo o cualquier otro utilizado para desplazamiento; para estos eventos, la reservación se dará por perdida y no habrá cambio de día ni reembolso. 

En el evento en que la cancelación se realice por parte de los Partner, por situaciones atribuibles su responsabilidad, se realizará un reembolso completo al Socio, ya sea en calidad de Administrador de Reservación o integrante de grupo de personas, en un plazo máximo diez (10) días hábiles, contados a partir del día siguiente hábil de la compra y/o reservación. Si la cancelación de la experiencia, productos y/o servicios es para Pick Up, aplica el mismo plazo. 

El usuario y/o Socio entiende y acepta que, al momento de una reclamación por devolución de dinero, de ser aprobada, será reintegrado directamente a la entidad bancaria y/o a la Wallet de la plataforma digital y/o aplicación nativa SIBARITTA, según su decisión. En caso de decidir recibir la devolución de dinero en la Wallet, podrá disponer del valor de dinero en créditos para adquirir productos y/o servicios ofrecidos por los Partner. 

Los reembolsos se deberán solicitar a través del Centro de Atención a Socios de la plataforma digital y/o aplicación nativa SIBARITTA, a través de Whatsapp y/o correo electrónico. Para que un reembolso sea abonado en la Wallet, se debe realizar el proceso de confirmación con código de seguridad solicitado por la plataforma digital y/o aplicación nativa SIBARITTA.

En el caso en que la devolución sea bancaria, el Socio entiende y acepta que el reembolso se realizara con un plazo máximo de quince (15) días hábiles y que se pueden generar costos bancarios ajenos a la responsabilidad de la plataforma digital y/o aplicación nativa SIBARITTA  </p>
            </div>

        </Modal>
        
    </div>
  )
}

export default ModalPoliticasCancelacion