import React from 'react';

interface MediumProps {
  handleOptionClick: (option: string) => void;
}
const Questions = ({ handleOptionClick }: MediumProps) => {
  const data = 
    {
      id: 1,
      title: '¿Qué es?',
      content: `¿Qué Significa la palabra Sibaritta?
        `,
      content2:
        'La palabra “Sibarita” viene del griego Síbari, una antigua colonia griega reconocida por sus habitantes y su afición por los placeres refinados.  Los Sibarittas somos personas que buscamos superar nuestras expectativas a través de nuestra pasión por descubrir experiencias que van más allá de lo común, así como disfrutamos de alta calidad y excelencia por el servicio. ',
      content3: '¿Qué es Sibaritta?',
      content4:
        'Es una plataforma digital de experiencias selectas, exclusivas, con sentido y propósito que perduran en la memoria y el recuerdo de cada Sibaritta',
    };

    const somos = {
      id: 2,
   title: '¿Quiénes somos?',
  content: `¿Quiénes están detrás de Sibaritta?`,
  content2:
     'Somos una empresa mexicana, conformada por un equipo apasionado de entusiastas de la alta cocina y experiencias únicas. Nuestra misión es conectar a los amantes del buen vivir con las experiencias más exclusivas en la ciudad y dejar un recuerdo memorable cada vez que vives una experiencia Sibaritta.',
    }

    const socio = {
      id: 3,
        title: 'Socios Sibaritta',
       content: `¿Quién es un Socio Sibaritta?`,
        content2:
          'Son todos los usuarios registrados en la plataforma, que hacen parte de la comunidad Sibaritta y han reservado al menos una experiencia. ',
        content3:
          '  ¿Cómo puedo ser Socio y registrarme en Sibaritta para comenzar a utilizar sus servicios?',
        content4:
          'Puedes iniciar tu registro de forma gratuita con tu correo electrónico o Facebook.',
    }

    const reservacion = {
        id: 4,
  title: 'Proceso de Reservación',
  content: `¿Cómo puedo Reservar una experiencia Sibaritta? `,
  content2:
    'Es muy sencillo, para reservar solo necesitas ser Socio y haberte registrado previamente en nuestra plataforma, luego podrás elegir entre las diferentes experiencias exclusivas ofrecidas por nuestros Partners.',
  content3: '¿Cómo inicio mi reserva?',
  content4:
    '1.	En la página de Inicio vas a seleccionar la experiencia de tu elección, esto te llevará a una nueva página donde podrás ver todos los detalles e itinerarios de la experiencia.',
  content5:
    '2.	En la parte Derecha de la página, vas a encontrar un botón que dice “Inicia tu Reservación”. Allí seleccionas el número de personas que asistirán, fecha, día y hora y luego de oprimir “Continuar” la plataforma te llevará por el proceso de Reserva hasta finalizar tu Check out donde podrás elegir diferentes opciones de Pago.',
    }
    const comunicacion = {
        id: 5,
  title: 'Identificación y Comunicación',
  content: `¿Cómo me identifican en el establecimiento?`,
  content2:
    ' Al completar la reservación, recibirás un QR único. Muestra este código en el establecimiento para ser identificado y acceder a tu experiencia en la fecha y hora del evento.',
  content3:
    ' ¿Cómo puedo comunicarme con Sibaritta si tengo alguna duda? ',
    content4:'Puedes comunicarte a través de WhatsApp y también puedes llenar un formulario de contacto ubicado en la opción “Soporte en línea” de la plataforma Sibaritta.'
    }
    const experiencia = {
      id: 6,
        title: '¿Cómo puedo enterarme de las nuevas experiencias?',
  content: `¿En dónde recibo la información de nuevas experiencias?     
  `,
   content2:
     'Al registrarte con tu correo, recibirás un News Letter donde podrás ver las nuevas experiencias que subimos a la plataforma de forma inmediata.',
   content3:
     'Síguenos en nuestras redes sociales para ver en tiempo real actualizaciones, noticias, historias, curiosidades, entrevistas con los protagonistas de cada experiencia, entre mucho más.  ',
    }
    const pagos = {
      id: 7,
   title: 'Pagos',
   content: `¿Cuál pasarela de pagos utilizan?     
   `,
   content2: '  Todas tus compras serán realizadas a través de Stripe. ',
    }

    const reembolso = {
      id: 8,
         title: 'Cancelación y Reembolso',
        content: `¿Puedo Cancelar mi reservación?`,
        content2:
           'Si, puedes cancelar con al menos 24 horas antes de la hora de tu evento para realizar la cancelación ',
         content3: '¿Cómo funcionan los reembolsos?,',
         content4:
           'Puedes recibir el 100% del reembolso de tu reservación, cancelando hasta 24 horas de la hora de tu evento. ',
    }
    const plataforma = {
        id: 9,
  title: 'Sobre la Plataforma',
  content: `
  ¿Qué significan los círculos de color Naranja que tiene cada experiencia?
  
 
  `,
  content2:'Es el número de cupos/plazas disponibles para esa experiencia.',
  content3:
    '¿Por qué aparece un reloj con cuenta regresiva al iniciar la reservación? ',
    content4:'Debido a la limitación de cupos, tienes 10 minutos para completar tu reserva y garantizar el número de cupos que seleccionaste al inicio de tu reservación. Después de esos 10 minutos se liberan los cupos y deberás iniciar nuevamente el proceso de reserva.',
    content5:'¿Quiero hacer una reservación, pero no hay suficientes cupos?',
  content6:
    ' Dado que nuestras experiencias son exclusivas, la disponibilidad es limitada y varía según cada partner y la experiencia',
  content7:
    ' Regístrate con correo para recibir la primicia de nuevos eventos en la plataforma, te sugerimos registrarte con el correo para recibir las alertas y notificaciones y hacer la reservación',
    }

    const partner = {
      id: 10,
  title: 'Partners Sibaritta',
  content: `
  ¿Quiénes son los Partner’s Sibaritta?`,
  content2:
    'Son todas las marcas y establecimientos aliados que ofrecen sus experiencias en la plataforma',
  content3: '¿Cómo ser un Partner?',
  content4:
    'Si eres dueño o administras un establecimiento que ofrece un alto nivel en calidad y servicio y quieres promover experiencias exclusivas, puedes solicitar un estudio de Sibaritta para revisar si tu establecimiento cumple con los requisitos para ser parte de nuestra comunidad de Partners.',
  content5: '¿Cualquier establecimiento puede ser Partner?',
  content6:
    'No, en Sibaritta nos esforzamos por elegir cuidadosamente cada establecimiento y sus experiencias que cumplen nuestros estándares de calidad y exclusividad.',
  content7: '¿Cualquier experiencia es aceptada?',
  content8:
    'No, nos aseguramos de mantener la coherencia con nuestra visión y seleccionamos aquellas que se alinean con la excelencia que buscamos. Trabajamos con los mejores aliados para ofrecerte experiencias inolvidables y de alta calidad.',
  content9:
    '¿Cómo se gestionan las reservas en línea y cómo se notifican al partner?',
  content10:
    ' Las reservas en línea se gestionan a través de la plataforma de Sibaritta para Partners, y el partner recibe notificaciones en tiempo real tanto en la plataforma como en el correo electrónico registrado para estar al tanto de las reservas y proporcionar un servicio eficiente.',
  content11:
    '¿Cuál es el costo asociado con el uso de Sibaritta y cómo se estructuran las tarifas?',
  content12:
    'Las tarifas de Sibaritta pueden variar según la negociación con el partner. Te recomendamos ponerte en contacto con nuestro equipo de ventas para obtener información detallada sobre los costos y las opciones disponibles.',
    }
  return (
    <div className='main-page'>
      <div className='Questions'>
        <div className='flex flex-col gap-[1rem]   laptop:justify-between laptop:flex-row-reverse'>
          <div
            className='question-buttoms'
            onClick={() => handleOptionClick('Formulario de contacto')}
          >
            Volver
            <i className='icon-more laptop:hidden'></i>
          </div>
          <div className='relative'>
            <input
              type='text'
              className='profile-input question-input'
              placeholder='Buscar por palabra clave'
            />
            <i className='icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]'></i>
          </div>
        </div>
        <div className='container-question'>
         
            <div className='question-card' key={data.id}>
              <h5 className='Questions-title'>{data.title}</h5>
              <div className='Questions-content flex flex-col gap-[1.5rem]'>
                <p className={`${data.content.length < 0 && "hidden" }`}>{data.content}</p>
                <p>{data.content2}</p>
                <p>{data.content3}</p>
                <p>{data.content4}</p>
              </div>
            </div>
          
            <div className='question-card' key={somos.id}>
              <h5 className='Questions-title'>{somos.title}</h5>
              <div className='Questions-content flex flex-col'>
                <p >{somos.content}</p>
                <p>{somos.content2}</p>
              </div>
            </div>

            <div className='question-card' key={socio.id}>
              <h5 className='Questions-title'>{socio.title}</h5>
              <div className='Questions-content flex flex-col gap-[1rem]'>
                <div>
                <p >{socio.content}</p>
                <p>{socio.content2}</p>
                </div>

                <div>
                <p>{socio.content3}</p>
                <p>{socio.content4}</p>
                </div>
              </div>
            </div>

            <div className='question-card' key={reservacion.id}>
              <h5 className='Questions-title'>{reservacion.title}</h5>
              <div className='Questions-content flex flex-col gap-[1rem]'>
                <div>
                <p >{reservacion.content}</p>
                <p>{reservacion.content2}</p>
                </div>

                <div >
                <p>{reservacion.content3}</p>
                <p className='px-[2rem] pt-[.5rem]'>{reservacion.content4}</p>
                <p className='px-[2rem]'>{reservacion.content5}</p>
                </div>
              </div>
            </div>

            <div className='question-card' key={comunicacion.id}>
              <h5 className='Questions-title'>{comunicacion.title}</h5>
              <div className='Questions-content flex flex-col gap-[1rem]'>
                <div>
                <p >{comunicacion.content}</p>
                <p>{comunicacion.content2}</p>
                </div>

                <div>
                <p>{comunicacion.content3}</p>
                <p>{comunicacion.content4}</p>
                </div>
              </div>
            </div>

            <div className='question-card' key={experiencia.id}>
              <h5 className='Questions-title'>{experiencia.title}</h5>
              <div className='Questions-content flex flex-col gap-[1rem]'>
                <div>
                <p >{experiencia.content}</p>
                <p>{experiencia.content2}</p>
                </div>

                <div>
                <p>{experiencia.content3}</p>
                </div>
              </div>
            </div>

            <div className='question-card' key={pagos.id}>
              <h5 className='Questions-title'>{pagos.title}</h5>
              <div className='Questions-content flex flex-col gap-[1rem]'>
                <div>
                <p >{pagos.content}</p>
                <p>{pagos.content2}</p>
                </div>
              </div>
            </div>

            <div className='question-card' key={reembolso.id}>
              <h5 className='Questions-title'>{reembolso.title}</h5>
              <div className='Questions-content flex flex-col gap-[1rem]'>
                <div>
                <p >{reembolso.content}</p>
                <p>{reembolso.content2}</p>
                </div>

                <div>
                <p>{reembolso.content3}</p>
                <p>{reembolso.content4}</p>
                </div>
              </div>
            </div>

            <div className='question-card' key={plataforma.id}>
              <h5 className='Questions-title'>{plataforma.title}</h5>
              <div className='Questions-content flex flex-col gap-[1.3rem]'>
                <div>
                <p >{plataforma.content}</p>
                <p>{plataforma.content2}</p>
                </div>

                <div>
                <p>{plataforma.content3}</p>
                <p>{plataforma.content4}</p>
                </div>
                <div>
                <p>{plataforma.content5}</p>
                <p>{plataforma.content6}</p>
                </div>
                <p>{plataforma.content7}</p>
              </div>
            </div>

            <div className='question-card' key={partner.id}>
              <h5 className='Questions-title'>{partner.title}</h5>
              <div className='Questions-content flex flex-col gap-[1.3rem]'>
                <div>
                <p >{partner.content}</p>
                <p>{partner.content2}</p>
                </div>

                <div>
                <p>{partner.content3}</p>
                <p>{partner.content4}</p>
                </div>
                <div>
                <p>{partner.content5}</p>
                <p>{partner.content6}</p>
                </div>
                <div>
                <p>{partner.content7}</p>
                <p>{partner.content8}</p>
                </div>
                <div>
                <p>{partner.content9}</p>
                <p>{partner.content10}</p>
                </div>
                <p>{partner.content11}</p>
                <p>{partner.content12}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;