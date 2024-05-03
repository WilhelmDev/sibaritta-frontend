import React from 'react'
import Modal from '../Modal';

interface ModalSessionProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }



function ModalAcuerdo({ visible, setVisible }: ModalSessionProps) {

    const data = [
      {
        id: 1,
        title: "1.	ASPECTOS GENERALES ",
        content:
        `
          La plataforma digital y/o aplicación nativa para dispositivos móviles, computadores y tablet denominada SIBARITTA, marca de la empresa MEAL MATES, S. DE R.L. DE C.V. con Registro Federal de Contribuyentes RFC MMA230405V58 MMA230405V58, debidamente constituida bajo la legislación de los Estados Unidos Mexicanos, con domicilio fiscal en Torre Vórtice, Frida Kahlo 195, Col Valle Oriente, 66269, San Pedro Garza García, Nuevo León, México y que para efectos de los siguientes Términos y Condiciones (en adelante “Términos y Condiciones”) se denominará SIBARITTA

          El Partner (en adelante “Partner ”), son los restaurantes, establecimientos de comercio, bares centros de entretenimiento y demás personas físicas y/o morales que pueden celebrar contratos, Términos, colaboraciones, vínculos, B2B (business to business), B2C (business to consumer) o cualquier otra forma de unión que genere derechos y obligaciones con SIBARITTA, para vender, consolidar, crear, ofrecer, disponer, mostrar y/o cualquier otro relacionado con el ofrecimiento y/o venta de experiencias, productos y/o servicios a los usuarios y/o socios.
          
          El usuario (en adelante “Usuario”) tendrá a su disposición una plataforma virtual (en adelante “Servicio”) que le permitirá acceder a diferentes experiencias, productos y/o servicios ofrecidos por el Partner.
          
          El comprador (en adelante “Socio”) tendrá a su disposición una plataforma virtual (en adelante “Servicio”) que le permitirá acceder, adquirir, comprar y/o reservaciónr diferentes productos y/o servicios ofrecidos por los Partner. 
          
          Los siguientes Términos y Condiciones son aceptados por el usuario y/o Socio en el momento de inscribir sus datos en la plataforma digital y/o aplicación nativa SIBARITTA y al realizar una reservación a través de SIBARITTA, acogiéndose a las disposiciones legales vigentes. 
          
          El usuario y/o Socio acepta que ha leído, entendido y aceptado los Términos y Condiciones, Aviso de Privacidad y Tratamiento de Datos Personales y Aviso de Propiedad Intelectual y demás anexos de la plataforma digital y/o aplicación nativa SIBARITTA.
          `,
      },
      {
        id: 2,
        title: "2.	DEFINICIONES",
        content:
        `
        SIBARITTA: La plataforma digital y/o aplicación nativa que muestra a los usuarios y/o socios productos y/o servicios, exhibidos, ofrecidos y comercializados por los Partner.

        Términos y Condiciones: Parámetros de uso de la plataforma digital y/o aplicación nativa SIBARITTA

        Perfil de Empresa: Es el perfil que crea cada uno de los Partner, una vez se haya consolidado y formalizado un contrato, colaboración, vinculo, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones con SIBARITTA, para que exhiban, ofrezcan y comercialicen la experiencia, productos y/o servicios a los usuarios y/o socios.

        Usuario: Persona física que accede a SIBARITTA para conocer la experiencia, productos y/o servicios ofrecidos por los Partner.

        Socio: Persona física que usa los servicios de SIBARITTA, y paga por la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, conociendo y aceptando los Términos y Condiciones al momento de la compra.

        Experiencia: Lo ofrece el Partner por medio de SIBARITTA, y se refiere a las experiencias de alta calidad ya sea en productos y/o servicios.

        Calificación: La otorga el socio a través de SIBARITTA al finalizar una experiencia ofrecida por el Partner.

        Las calificaciones se muestran por estrellas de una (1) a cinco (5) de la siguiente manera:

        * DESAFORTUNADA (NO ESTUVO A LA ALTURA DE LAS EXPECTATIVAS, SERVICIO Y CALIDAD MUY POR DEBAJO DE LO ESPERADO)
        ** REGULAR (DEFICIENCIAS EN EL SERVICIO Y LA CALIDAD)
        *** ACEPTABLE (UNA EXPERIENCIA ACEPTABLE, AÚN QUEDA ESPACIO PARA ELEVARLA A UN NIVEL SUPERIOR)
        
        **** DESTACADA (REFLEJA UN SERVICIO DE CALIDAD Y DE ALTO NIVEL, PEQUEÑAS MEJORAS PODRÍAN PERFECCIONARLA, PERO EN GENERAL, SOBRESALIENTE)
        ***** ÉPICA (SUPERÓ TODAS LAS EXPECTATIVAS, UN STANDART EXCEPCIONAL)

        Servicio: La prestación que ofrece SIBARITTA, en la que muestra la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner para que el Socio pueda acceder a ellos. 

        Partner: Persona física y/o moral que exhibe, ofrece y comercializa la experiencia, productos y/o servicios en SIBARITTA, para el usuario y/o socio pueda acceder a ellos.

        Productos y/o servicios exhibidos, ofrecidos y comercializados: Son la experiencia, productos y/o servicios que ofrecen los Partner a los usuarios y/o socios a través de SIBARITTA.

        Pick Up: Servicio de entrega de productos y/o servicios para una persona de forma individual o grupo de personas, que ofrecen los Partner para que los usuarios y/o Socios recojan la experiencia, productos y/o servicios directamente en el lugar que se disponga para hacerlo.

        Wallet: Es una herramienta de pago integrada a cada cuenta, diferente a la plataforma bancaria que elija el usuario y/o Socio para la tarjeta de crédito/débito y/o Stripe, en donde el usuario y/o Socio, podrá recargar dinero desde el banco a la Wallet de la plataforma digital y/o aplicación nativa SIBARITTA, que se representará en créditos con los que podrá adquirir la experiencia, productos y/o servicios ofrecidos por los Partner.

        Créditos: Es la representación de dinero en la Wallet con la que el usuario y/o Socio cuenta en la plataforma digital y/o aplicación nativa SIBARITTA, con los que podrá adquirir la experiencia, productos y/o servicios ofrecidos por los Partner.

        Administrador de Reservación: Persona natural que realiza una reservación inicial personal y/o para grupo de personas y es quien tiene la facultad de administrar, modificar o cancelar la reservación. 

        Integrantes de Grupo: Persona natural que hace parte de un grupo de personas que tienen una reservación asignada un Administrador de Reservación. 

        Confirmación de Reservación: Cuando todos los Integrantes de Grupo realizan el pago que corresponde a cada uno.


        `,
      },
      {
        id: 3,
        title: "3.	AUTORIZACIÓN",
        content:
        `
        La aplicación SIBARITTA autoriza al Socio y/o usuario para que ingrese a la plataforma digital y/o aplicación nativa SIBARITTA, conozca, acceda y adquiera la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner.

        El Socio y/o usuario comprende y acepta de manera libre y voluntaria los Términos y condiciones.
        `,
      },
      {
        id: 4,
        title: "4.	PLATAFORMA DIGITAL Y/O APLICACIÓN NATIVA SIBARITTA",
        content:
        `
        La plataforma digital y/o aplicación nativa SIBARITTA, es una aplicación por medio de la cual los Partner y el Socio, se conectan para, de una parte, ofrecer y comercializar productos y/o servicios y por la otra, acceder y adquirir productos y/o servicios exhibidos. 

        La plataforma digital y/o aplicación nativa SIBARITTA es un medio de comunicación y/o portal de contacto entre los Partner y el Socio y, en ningún caso, se puede considerar que la plataforma digital y/o aplicación nativa SIBARITTA comercializa productos y/o servicios propios. Las características, disponibilidad de la experiencia, detalles de productos y/o servicios son establecidos directamente por los Partner y no por plataforma digital y/o aplicación nativa SIBARITTA.

        El Socio podrá acceder a la plataforma digital y/o aplicación nativa SIBARITTA y realizar una compra y/o reservación de una experiencia, servicio y/o producto; una vez el Partner acepte la compra y/o reservación, se generan compromisos y obligaciones entre ambos que en ningún momento comprometen ni responsabilizan a la plataforma SIBARITTA, ni genera vinculo contractual con esta.
        `,
      },
      {
        id: 5,
        title: "5.	COMPROMISOS Y OBLIGACIONES",
        content:
        `
        5.1 De la plataforma digital y/o aplicación nativa SIBARITTA

        1.1	A aceptar que ha leído, entendido y aceptado los Términos y Condiciones, Aviso de Privacidad y Tratamiento de Datos Personales y Aviso de Propiedad Intelectual y demás anexos de la plataforma digital y/o aplicación nativa SIBARITTA.

        1.1	A disponer de una página web www.sibaritta.com y/o aplicación nativa completa que cumpla con estándares de calidad.

        1.2	A celebrar contratos, Términos, colaboraciones, vínculos, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones, con los Partner, para que ofrezcan, comercialicen y/o exhiban experiencias, productos y/o servicios a los usuarios y/o socios.

        1.3	A mostrar a los usuarios y/o socios, las experiencias, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, que sean autorizados por la plataforma digital y/o aplicación nativa SIBARITTA

        1.4	A revisar la información de registro del Partner y los documentos que se requieran para seleccionar y crear el perfil de empresa.

        1.5	A mostrar a los usuarios y/o socios, los productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner, previa autorización. 

        1.6	A tener información actualizada sobre la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner, de acuerdo con la información que suministren a SIBARITTA.

        1.7	A ser un portal de comunicación entre el usuario y/o socio con el Partner

        1.8	A gestionar la compra y/o reservación de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner.

        1.9	A informar de forma inmediata, precisa y clara a los Partner, sobre las reservaciones que se realicen a través de la plataforma SIBARITTA, por medio de notificaciones, correo electrónico, alertas y/o mensajes.

        1.10	A cobrar el valor de la compra y/o reservación de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner, según los parámetros contenidos en los Términos y Condiciones

        1.11	A establecer de manera clara y precisa las comisiones y demás que se consideren adicionales al valor determinado por el Partner, por cada experiencia, servicio y/o producto exhibidos, ofrecidos y comercializados, por concepto del uso de SIBARITTA y otros.

        1.12	A entregar, transferir, pagar, reconocer u otro que represente el pago por la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, según los Términos y cláusulas acordadas en el contrato, colaboración, acuerdo, vinculo, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones con SIBARITTA

        1.13	A dar un correcto uso de los datos personales y/o comerciales otorgados por el Partner, respetando los parámetros de privacidad, usando los datos personales y/o comerciales para los fines de SIBARITTA.

        1.14	A dar un correcto uso de los datos personales y/o comerciales otorgados por el usuario y/o socio, respetando los parámetros de privacidad, usando los datos personales y/o comerciales para los fines de SIBARITTA.


        1.15	A cumplir con el periodo de facturación que será por el mes vencido completo.

        1.16	A cumplir con el periodo de pago correspondiente para el Partner, que se realizará a los quince (15) días del mes siguiente del período de facturación de los servicios y/o productos ofrecidos y vendidos a través de la plataforma SIBARITTA


        PARAGRAFO: En el evento en que la fecha de pago se presente en una fecha festiva y/o no hábil laboral, el pago se efectuará el día siguiente hábil. 

        5.2 Del usuario y/o Socio.

        5.21 A aceptar los Términos y Condiciones, para usuarios y/o socios, en lo que corresponda a su competencia, Aviso de Privacidad y Uso de la Información y Propiedad Intelectual y demás anexos de la plataforma digital y/o aplicación nativa SIBARITTA.
        5.22 A aceptar Términos y condiciones al momento de inscribir sus datos en la plataforma digital y/o aplicación nativa SIBARITTA, para realizar compras y/o reservaciones de cualquier experiencia, servicio y/o producto exhibidos, ofrecidos y comercializados por los Partner.

        5.23 A registrar su método de pago ya sea tarjeta de crédito/débito, Stripe o recarga de créditos para la Wallet, en el momento de adquirir la experiencia, servicio y/o producto de su elección que son exhibidos, ofrecidos y comercializados por los Partner.

        5.24 Acepta permitir que, al momento de la reservación y/o compra, la plataforma digital y/o aplicación nativa SIBARITTA acceda a su ubicación geográfica para establecer los Partner más cercanos. 

        5.25 A recibir la experiencia, servicio y/o producto, de forma presencial en el establecimiento o remoto, en horario aproximado y características presentadas en la plataforma digital y/o aplicación nativa SIBARITTA y adquiridas al momento de la compra.

        5.26 A presentarse en el establecimiento del Partner, en el lugar y la hora elegidas. 

        5.27 A solicitar información a la plataforma y/o aplicación nativa SIBARITTA sobre cualquier inquietud que tenga sobre la experiencia, servicio y/o producto, su preparación, ingredientes, manipulación y cualquier otro que se refiera a la experiencia, servicio y/o producto, ya sea previo a la orden, durante su elaboración o una vez lo reciba.

        5.28   El usuario y/o Socio tendrá la posibilidad de calificar la experiencia, servicio y/o producto directamente en la plataforma digital y/o aplicación nativa SIBARITTA.

        5.29   A dar un correcto uso de los datos personales y/o comerciales suministrados al usuario y/o Socio desde el momento de ingreso a la plataforma digital y/o aplicación nativa SIBARITTA respetando los parámetros de privacidad y cumpliendo con los fines de la plataforma digital y/o aplicación nativa SIBARITTA, entendiendo que es un canal de comunicación entre el usuario y/o Socio y los Partner para mostrar una experiencia, servicio y/o producto. En ningún caso la plataforma digital y/o aplicación nativa SIBARITTA se hace responsable por el uso indebido o fraudulento de datos personales y/o comerciales por parte de los usuarios y/o Socios.


        5.30 De los Partner.

        5.31 A aceptar los Términos y Condiciones, para Partner y/o socios, en lo que corresponda a su competencia, Aviso de Privacidad y Tratamiento de Datos Personales y Aviso de Propiedad Intelectual y demás anexos de la plataforma digital y/o aplicación nativa SIBARITTA.

        5.32 A reconocer que los derechos de propiedad intelectual y demás derivados, pertenecen a la plataforma digital y/o aplicación nativa SIBARITTA; en ningún caso el Partner podrá hacer uso de nombre, logo, ideas, publicidad, promociones, textos, anuncios, marcas comerciales, patentes, derechos de autor o de cualquier otro derecho de propiedad industrial o intelectual, que no sea expresamente autorizado por La plataforma digital y/o aplicación nativa SIBARITTA, en un contrato, acuerdo, colaboración, vínculo, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones.

        5.33	A completar el formulario de registro de Partner que estará disponible única y exclusivamente en la página web www.sibaritta.com

        5.34	A aceptar que cualquier actividad de ingreso, modificación, publicidad, cancelación u otro que refiera al perfil de empresa y la experiencia, productos y/o servicios ofrecidos, será para administrar directamente desde un computador de escritorio y/o Tablet en la página web www.sibaritta.com y no desde la aplicación nativa de SIBARITTA.

        5.35	A aceptar que SIBARITTA, tiene el derecho autónomo de modificar, cambiar, anexar, ingresar u otro, la imagen, colores, tipo de letra, tamaño, dibujos, textos y demás, relacionados con el manejo de marca de SIBARITTA.

        5.36	A ofrecer la experiencia, productos y/o servicios por medio de SIBARITTA, según los Términos y clausulas acordadas en el contrato, colaboración, vinculo, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones con SIBARITTA

        5.37	A subir la experiencia, servicio y/o producto a la plataforma SIBARITTA con un término no inferior a siete (7) días antes de la realización del evento y/o la venta de la experiencia, servicio y/o producto.

        PARÁGRAFO: SIBARITTA recibirá la información y tendrá un plazo máximo de veinticuatro (24) horas para su aprobación o sugerencia de cambio, modificación y/o edición.

        5.38 A cumplir con los parámetros establecidos en el formato de imagen y fotografía.

        5.39	A realizar un mínimo de tres (3) eventos por mes, con disponibilidad mínima de diez (10) cupos por evento.

        5.40	A cumplir de manera excepcional con la experiencia, servicio, entrega del producto o cualquier obligación que se genere con el usuario y/o socio.

        5. 41	A recibir de manera oportuna información por parte de SIBARITTA cuando exista algún reconocimiento, inquietud, observación y/o queja relacionada con la experiencia, servicio y/o producto por parte del socio. En el último evento en el que el socio no se haya sentido conforme con la experiencia, servicio y/o producto y se haya obtenido una calificación aceptable, regular o desafortunada, se debe establecer método de seguimiento con el socio entre SIBARITTA y el Partner.

        5.42	A cumplir con parámetros de seguimiento equivalentes a la presentación de un servicio igual o similar cuando exista mala calificación por deficiencia de la experiencia, servicio y/o producto. y/o incumplimiento de la experiencia, servicio y/o producto.

        5.43	A informar de forma clara, diligente y pronta a SIBARITTA, sobre cambios de productos y/o servicios, características, precios y demás, ofrecidos en SIBARITTA, para ser mostrados al usuario y/o socio de manera actualizada. Los cambios en cualquier experiencia, servicio y/o producto son responsabilidad directa del Partner y deben ser aprobados previamente por SIBARITTA.

        5.44	A informar de manera clara, detallada y precisa a SIBARITTA, la experiencia, productos y/o servicios que exhibe, ofrece y comercializa, destacando los ingredientes y componentes principales, itinerarios, duración y/o características.

        5.45 A entregar el producto al socio en las condiciones, estado, forma, ya sea presencial en el establecimiento o Pick Up, con las características presentadas en la plataforma digital y/o aplicación nativa SIBARITTA y adquiridas al momento de la compra, sin requerir algún valor y/o condición adicional que no se encuentre especificado en el detalle de compra presentado en la plataforma digital y/o aplicación nativa SIBARITTA

        5.46 A dar un correcto uso de los datos personales y/o comerciales, si los hubiere, suministrados al Partner por parte de usuarios y/o socios que usen la plataforma digital y/o aplicación nativa SIBARITTA, respetando los parámetros de privacidad y cumpliendo con los fines de la plataforma digital y/o aplicación nativa SIBARITTA, entendiendo que es un canal de comunicación entre el usuario y/o socios y El Partner para mostrar un producto y/o servicio. En ningún caso La plataforma digital y/o aplicación nativa SIBARITTA, se hace responsable por el uso indebido o fraudulento de datos personales y/o comerciales que el Partner pudiera obtener de usuarios y/o socios de manera irregular y/o no autorizada.

        5.47 A reconocer que los derechos de propiedad intelectual y demás derivados pertenecen a SIBARITTA; en ningún caso los Partner podrán hacer uso de nombre, logo, ideas, publicidad, promociones, textos, anuncios, marcas comerciales, patentes, derechos de autor o de cualquier otro derecho de propiedad industrial o intelectual, que no sea expresamente autorizado por SIBARITTA, en un contrato, colaboración, vínculo, B2B, B2C o cualquier otra forma de unión que genere derechos y responsabilidades.

        PÁRAGRAFO. Se entiende excluido del presente acuerdo cualquier experiencia, reservación y/o venta de producto y/o servicios por fuera de la plataforma digital y/o aplicación nativa SIBARITTA; o experiencia, reservación y/o producto de la cual no se emita factura electrónica legal.
        `,
      },
      {
        id: 6,
        title: "6.	DERECHOS",
        content:
        `
        Los derechos de consumidor serán regidos por la legislación vigente en los Estados Unidos Mexicanos, en especial lo contenido en la Ley Federal de Protección al Consumidor y demás normas relacionadas.
        `,
      },
      {
        id: 7,
        title: "7.	ACEPTACIÓN Y REGISTRO",
        content:
        `
        En el momento de registro en la plataforma digital y/o aplicación nativa SIBARITTA, el usuario y/o Socio acepta que:

        7.1	Los presentes Términos y condiciones del uso de la plataforma digital y/o aplicación nativa SIBARITTA

        7.2	Tiene la mayoría de edad cumplida 

        7.3	Cuenta con capacidad legal para adquirir derechos y obligaciones en la relación que surja de la compra de productos y/o servicios ofrecidos por los Partner

        7.4	Tiene capacidad de pago y puede efectuar transacciones por medio de tarjeta de crédito/débito, Stripe o créditos recargados en la Wallet. 

        7.5	Posee teléfono celular con acceso a datos móviles, computador, e-mail, teléfono fijo o tiene acceso a cualquier otro medio de comunicación donde pueda ser informado sobre el registro en la plataforma digital y/o aplicación nativa SIBARITTA, el estado de las ordenes de productos y/o servicios y cualquier otra información relacionada con plataforma digital y/o aplicación nativa SIBARITTA.

        7.6  Tiene una cuenta con Facebook, Gmail y/o Apple y/o correo electrónico para el registro del usuario para inicio de sesión.

        7.7	Tendrá una única cuenta registrada, personal e individual. 

        7.8  Cada usuario con cuenta registrada en la plataforma digital y/o aplicación nativa SIBARITTA, está autorizado para tener una sola cuenta individual, registrada con Facebook, Gmail y/o Apple y/o correo electrónico.

        7.9  En el evento en que un usuario tenga más de una cuenta registrada en la plataforma digital y/o aplicación nativa SIBARITTA, con diferentes cuentas de Facebook, Gmail y/o Apple, incurrirá en una violación a los Términos y Condiciones, y podría ser susceptible de incurrir en procedimientos judiciales en su contra por parte de plataforma digital y/o aplicación nativa SIBARITTA.

        1.10	Llenar el formulario de registro con sus datos personales y demás que se requieran para la identificación del usuario y/o Socio. La plataforma digital y/o aplicación nativa SIBARITTA no es responsable por información errónea, falsa, mal intencionada y/o fraudulenta que el usuario y/o Socio, suministre a la misma.

        7.11	Validar en el correo electrónico, la confirmación de registro.

        7.12	Conoce y acepta la cláusula 5 “de los Términos y condiciones” denominado “Compromisos y Obligaciones”, del “Usuario y/o Socio”

        7.13	La plataforma digital y/o aplicación nativa SIBARITTA accederá a su ubicación geográfica para reconocer los Partner más cercanos, previa autorización. 

        7.14	La plataforma digital y/o aplicación nativa SIBARITTA, podrá realizar actualizaciones sin previo aviso y que el usuario y/o Socio deberá aceptar la actualización para poder realizar reservaciones y/o compras en la misma. 

        7.15	La plataforma digital y/o aplicación nativa SIBARITTA se reservación el derecho a revisar, modificar y/o cambiar los Términos y condiciones en el momento en que lo considere necesario y sin previa autorización de los usuarios y/o Socios y Partner.
        `,
      },
      {
        id: 8,
        title: "8	EXPERIENCIAS, PRODUCTOS Y/O SERVICIOS",
        content:
        `
        La plataforma digital y/o aplicación nativa SIBARITTA, únicamente muestra la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner y en ningún momento fabrica, procesa, elabora, marca, prepara, manipula, almacena, empaca, entrega u otra actividad relacionada con la creación experiencia, servicio y/o producto; por lo tanto, la plataforma digital y/o aplicación nativa SIBARITTA no tiene responsabilidad por el incumplimiento de los derechos y obligaciones que surjan entre el usuario y/o Socio con el Partner, respecto de la compra de productos y/o servicios, su calidad, presentación, preparación, sabor, ingredientes, imagen, condiciones de entrega y cualquier otra que esté relacionada con la experiencia, servicio y/o producto. En el evento que surja alguna controversia en relación con los productos y/o servicios, el usuario y/o Socio tendrá a su disposición los derechos de reclamación, contenidos en los presentes Términos y Condiciones.
        `,
      },
      {
        id: 9,
        title: "9	PRECIO",
        content:
        `
        Los precios establecidos e informados en la plataforma digital y/o aplicación nativa SIBARITTA, se indicarán en la moneda local de cada país en donde se encuentre su funcionamiento y los Partner exhiban, ofrezcan y comercialicen los productos y/o servicios, entendiendo que al valor final se incluirán comisiones y demás que se consideren adicionales al valor determinado por el Partner los cuales se entenderán exclusivos de la plataforma digital y/o aplicación nativa SIBARITTA
        `,
      },
      {
        id: 10,
        title: "10	MEDIOS DE PAGO",
        content:
        `
        La plataforma digital y/o aplicación nativa SIBARITTA no guarda, almacena o reservación información relacionada con las tarjetas de crédito/débito y/o Stripe, no obstante, el uso, almacenamiento o reservación de estos datos por parte de los servidores de pago se manejará bajo los Términos y condiciones de estos.

        El usuario y/o socio entienden y aceptan que el pago que realicen por los productos y/o servicios, estará sujeto a verificación bancaria y/o de La plataforma digital y/o aplicación nativa SIBARITTA.

        La información relacionada con datos personales y tarjetas de crédito/débito y/o Stripe, suministrada por el usuario y/o Socio al momento de la inscripción y al momento de compra de créditos para adquirir una experiencia, servicio y/o producto, será directamente su responsabilidad y en ningún caso la plataforma digital y/o aplicación nativa SIBARITTA será responsable por no poder efectuar el pago.

        La plataforma digital y/o aplicación nativa SIBARITTA podría estar en constante actualización y, por lo tanto, se informaría a los usuarios y/o socios sobre la imposibilidad de pago u otros que no permitieran transacciones en la plataforma digital y/o aplicación nativa SIBARITTA

        En caso de ser una actualización de los servidores de pago, bloqueos de tarjetas, cupo disponible u otra que sean directamente responsabilidad del usuario y/o de la entidad bancaria, la plataforma digital y/o aplicación nativa SIBARITTA no será responsable. 

        El usuario y/o Socio entiende y acepta que, cualquier cobro adicional efectuado por la entidad bancaria por el uso propio de sus productos y/o servicios, es ajena a la plataforma digital y/o aplicación nativa SIBARITTA y la exonera de responsabilidad.
        `,
      },
      {
        id: 11,
        title: "11	RESERVACIÓN Y GRUPOS DE RESERVACIÓN",
        content:
        `
        La plataforma digital y/o aplicación nativa SIBARITTA es de uso personal e intransferible, por lo tanto, cada usuario y/o Socio deberá tener una cuenta registrada y activa para poder realizar reservaciones y/o compras de los diferentes productos y/o servicios ofrecidos por los Partner.

        El usuario y/o Socio entiende y acepta que la aplicación funcionará en un (1) solo dispositivo a la vez y la cuenta no podrá ser compartida, transferida, cedida o cualquier otra forma que se considere duplicidad de la plataforma digital y/o aplicación nativa SIBARITTA en diferentes dispositivos con una única cuenta. 

        El usuario y/o Socio entiende y acepta que podrá hacer reservaciones personales y/o para grupos de personas dependiendo de la disponibilidad de experiencia, servicio y/o producto de cada Partner, teniendo previo conocimiento que cada integrante de la reservación debe contar con una cuenta registrada y activa para poder realizar el pago que le corresponda.

        Una vez realizada la reservación personal y/o para grupos de personas, el Administrador de Reservación tendrá la facultad para modificar y/o cancelar la reservación, para sí mismo o para cualquiera de los Integrantes de Grupo, independientemente si han realizado o no el pago por la experiencia, servicio y/o producto, en cualquier momento antes de la fecha y hora de reservación. Lo anterior, acogiéndose a lo establecido en la cláusula 16 de los presentes Términos y Condiciones.

        El usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo, entiende y acepta que es su responsabilidad personal, tener la aplicación actualizada, acceder a permisos de ubicación activo, tener tarjeta de crédito/débito, Stripe y/o créditos en la Wallet para realizar el pago de la reservación.

        Cada usuario y/o Socio entiende y acepta que el Administrador de Reservación y los Integrantes de Grupo, deben aceptar la invitación  y realizar el pago de manera individual por cada integrante,  por parte de otro integrante o total por parte del Administrador de Reservación, para que el Partner reciba y confirme la reservación, cada integrante del grupo tienen trinta (30) minutos para realizar el pago, a partir del inicio de solicitud de reservación, de no hacerlo se libera la reservación y se cancela de forma automática para esa persona o grupo de personas, según el caso. 

        El Administrador de Reservación o cualquier otro integrante del grupo, tendrá la posibilidad de pagar por la reservación de otro integrante de grupo o de sugerir un integrante nuevo, quien deberá tener cuenta registrada y activa. 

        El usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo entiende y acepta que el cobro total de la reservación se hará desde la tarjeta de crédito/débito, Stripe o los créditos contenidos en la Wallet, a cada uno de integrantes que se encuentren en el grupo que hubieran aceptado la invitación a la reservación, cuando todos los integrantes del grupo hayan realizado el pago por cada reservación o el Administrador de Reservación, haya realizado el pago por la totalidad del grupo.

        En el evento en que uno o varios usuarios hayan aceptado la invitación al grupo y tengan o no tarjeta de crédito/débito, Stripe registrado o créditos en la wallet, y que se encuentren en espera de pago de reservación, pero no lo realicen, no se les cobrará ningún cargo, pero su reservación será cancelada inmediatamente y deberá iniciar una reservación de manera individual y/o unirse a otro grupo, según disponibilidad de los Partner.

        El usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo, acepta recibir notificaciones sobre la reservación, el listado de reservación, pedidos activos y cuando la reservación se haya completado por todos los miembros del grupo. 

        El usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo, recibirá notificaciones como “reservaciones activas” o “invitaciones recibidas”, dependiendo de la calidad en que se encuentre. 

        El usuario y/o Socio, en calidad de Administrador de Reservación podrá realizar el pago personal de su reservación o el pago parcial o total de la reservación incluyendo a los demás Integrante de Grupo, si así lo eligiera.

        El usuario y/o Socio, en calidad de Integrante de Grupo, solo podrá aportar el pago personal de su reservación que ha sido iniciado por el Administrador de Reservación. El integrante de grupo solo podrá modificar o cancelar su propia reservación, acogiéndose a lo establecido en la cláusula 16 de los presentes Términos y Condiciones. 

        Al realizar la reservación, el usuario y/o Socio en calidad de Administrador de Reservación o Integrante de Grupo, recibirán un mensaje emergente en la plataforma digital y/o aplicación nativa SIBARITTA con las políticas de cancelación y reembolso, además de un enlace para revisarlas en detalle.

        Para compras en Pick Up, el usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo podrá solicitar el servicio de manera individual, o para el grupo, según el caso y tendrá la facultad de decidir quién recoge la experiencia, servicio y/o producto.

        El usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo, entiende y acepta que cualquier otra experiencia, servicio y/o producto que no se encuentre especificado en la reservación, o que no haya sido especificado en promociones y/o colaboraciones por parte de la plataforma digital y/o aplicación nativa SIBARITTA y los Partner, será asumido en costo, disposición, entrega, manejo, cuidado y cualquier acción que se realice con la experiencia, servicio y/o producto, directamente por el usuario y/o Socio.

        El usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo, acepta y entiende que cualquier experiencia, servicio y/o producto que solicite a un Partner, que no se encuentre en la reservación, será asumido por completo bajo su responsabilidad, y no tendrá derecho a reclamación, devolución y/o reembolso alguno ante la plataforma digital y/o aplicación nativa SIBARITTA.

        La plataforma digital y/o aplicación nativa SIBARITTA, no tendrá responsabilidad alguna sobre la experiencia, productos y/o servicios que no se encuentre especificado en la reservación, los Partner en este caso serán autónomos con la experiencia, productos y/o servicios que ofrezcan y/o comercialicen por fuera de lo ofrecido en la reservación inicial y serán responsables en lo que corresponda. 

        El usuario y/o Socio, en calidad de Administrador de Reservación o Integrante de Grupo y los Partner no tendrán que asumir ningún pago y/o comisión a la plataforma digital y/o aplicación nativa SIBARITTA, cuando se dispongan productos y/o servicios por fuera de la reservación.
        `,
      },
      {
        id: 12,
        title: "12	COMPRA /RESERVACIÓN",
        content:
        `
        El usuario y/o Socio entiende y acepta que el método de pago autorizado por la plataforma digital y/o aplicación nativa SIBARITTA, son las tarjetas de crédito/débito, Stripe y los créditos que se recargan en la Wallet, en ningún caso, la plataforma digital y/o aplicación nativa SIBARITTA cobrará por otro medio.

        El usuario y/o Socio entiende y acepta que, para comprar productos y/o servicios o recargar los créditos, la plataforma digital y/o aplicación nativa SIBARITTA lo direccionará de manera externa a la plataforma transaccional.

        La cantidad de dinero que el usuario y/o Socio pague por créditos, se verá reflejada en la Wallet en exactitud con el dinero que ha pagado por los créditos.

        El Socio podrá realizar compra y/o reservación de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner a través de la plataforma digital y/o aplicación nativa SIBARITTA

        La experiencia, productos y/o servicios estarán disponibles en la plataforma digital y/o aplicación nativa SIBARITTA, en donde el usuario y/o Socio tendrá información relacionada con cada tipo de experiencia, servicio y/o producto, su precio, sobre los cuales podrá realizar una compra y/o reservación, y se detallará el producto y numero de productos y/o servicios adquiridos, valor final, hora de reservación, fecha y/o tiempo de entrega.

        El usuario y/o Socio, dispondrá de una herramienta digital que le permite revisar sus transacciones e historial de créditos.

        El Socio deberá otorgar permiso de ubicación al momento de realizar la compra y/o reservación, y la plataforma digital y/o aplicación nativa SIBARITTA mostrará la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner más cercanos a su ubicación y dispondrá de un buscador de Partner. En el evento en que el Socio no permita el acceso a su ubicación, la plataforma digital y/o aplicación nativa SIBARITTA no se hace responsable por la información suministrada, los Partner disponibles y productos exhibidos, ofrecidos y comercializados, ni de su reservación, ni su entrega.

        Ante cualquier inquietud sobre compra y/o reservación, ubicación, número de asistentes, instalaciones, preparación, ingredientes y manipulación de alimentos, o cualquier otro que se refiera a la experiencia, servicio y/o producto, antes, durante o posterior a la reservación o previo a la orden, durante su elaboración o una vez lo reciba, el usuario y/o Socio deberá solicitar la información a la plataforma digital y/o aplicación nativa SIBARITTA.
        `,
      },
      {
        id: 13,
        title: "13	CONFIRMACIÓN DE COMPRA/RESERVACIÓN",
        content:
        `
        En el momento en que la compra y/o reservación se confirme por el usuario y/o Socio, regirán los compromisos y obligaciones establecidos en la cláusula 5 “de los usuarios y/o Socios” y “de los Partner” y, por lo tanto, el Socio acepta pagar el valor y recibir y/o recoger la experiencia, servicio y/o producto, en el momento y la hora especificada y/o asistir al Partner de su preferencia en la fecha y hora elegida, y por otro lado, el Partner, se compromete a entregar el producto y/o prestar el servicio, en el momento y la hora especificada y en las condiciones acordadas al momento de la compra y/o reservación.

        La plataforma digital y/o aplicación nativa SIBARITTA no será responsable por por el incumplimiento, retraso, preparación, ingredientes, manipulación, almacenamiento, calidad y cualquier otro que se refiera a la experiencia, servicio y/o producto, no obstante, el usuario y/o socio disponen de los mecanismos de reclamación contenidos en la cláusula 18 de los presentes Términos y Condiciones.
        `,
      },
      {
        id: 14,
        title: "14	COLABORACIONES",
        content:
        `
        El usuario y/o Socio entiende y acepta que pueden surgir colaboraciones entre los diferentes Partner por medio de la plataforma digital y/o aplicación nativa SIBARITTA, para ofrecer sus productos en compañía. A través de la plataforma digital y/o aplicación nativa SIBARITTA se informará sobre la colaboración, así como de los productos y/o servicios, los horarios y condiciones. 

        El usuario y/o Socio entiende y acepta que las colaboraciones son realizadas por los Partner y que no comprometen a la plataforma digital y/o aplicación nativa SIBARITTA; no obstante, disponen de los mecanismos de reclamación contenidos en la cláusula 18 de los presentes Términos y Condiciones.
        `,
      },
      {
        id: 15,
        title: "15	PROMOCIONES",
        content:
        `
        El usuario y/o Socio entiende y acepta que la plataforma digital y/o aplicación nativa SIBARITTA, en colaboración con los Partner o, colaboración entre los Partner, pueden publicitar promociones en la plataforma digital y/o aplicación nativa SIBARITTA, las cuales serán anunciadas a los usuarios y/o Socios, con las condiciones y requisitos para adquirirlos.

        Las promociones están sujetas a cambios sin previo aviso por parte de la plataforma digital y/o aplicación nativa SIBARITTA y no obligan a la plataforma digital y/o aplicación nativa SIBARITTA ni a los Partner a publicitarlas de forma recurrente o permanente. 

        Cada promoción tendrá condiciones y requisitos específicos, y son facultad exclusiva de la plataforma digital y/o aplicación nativa SIBARITTA y/o de los Partner.
        `,
      },
      {
        id: 16,
        title: "16	CANCELACIÓN Y REEMBOLSO",
        content:
        `
        El Socio entiende y acepta las condiciones de cancelación de reservación y/o compra de la experiencia, productos y/o servicios ofrecidos por los Partner.

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

        En el caso en que la devolución sea bancaria, el Socio entiende y acepta que el reembolso se realizara con un plazo máximo de quince (15) días hábiles y que se pueden generar costos bancarios ajenos a la responsabilidad de la plataforma digital y/o aplicación nativa SIBARITTA
        `,
      },
      {
        id: 17,
        title: "17	CAMBIOS EN LA RESERVACIÓN Y NO ASISTENCIA",
        content:
        `
        Cualquier modificación a la reservación, será notificada en la plataforma digital y/o aplicación nativa SIBARITTA al Socio de forma personal o en calidad de Administrador de Reservación y a cada uno de los integrantes del grupo, en donde se verá reflejado el valor de la reservación, según el caso.

        
        En el evento en que el Socio de forma personal o en calidad de Administrador de Reservación, cuando se trate de grupos, o cualquier integrante del grupo no se presente al establecimiento del Partner, en la fecha y hora de la compra y/o reservación, sin haber cancelado en las condiciones establecidas en la cláusula 16 de los presentes Términos y Condiciones o por eventos de fuerza mayor o caso fortuito, no tendrá derecho a reembolso alguno y se retendrá el cien por ciento (100 %) del total de la reservación personal o de grupo, según el caso.
        `,
      },
      {
        id: 18,
        title: "18	DERECHO DE RECLAMACIÓN",
        content:
        `
        Todas las reclamaciones que tenga el usuario y/o Socio respecto de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, serán tramitados por la plataforma digital y/o aplicación nativa SIBARITTA, en el aparte “Atención al Socio”, en el cual se hará una revisión del caso y se dará respuesta dentro de los diez (10) días hábiles siguientes o se informará dentro de este término, la fecha de la respuesta que no podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.

        Las reclamaciones que tenga el Socio respecto de la experiencia, productos y/o servicios adquiridos, serán tramitados por la plataforma digital y/o aplicación nativa SIBARITTA y su respuesta será exclusiva de la plataforma digital y/o aplicación nativa SIBARITTA.

        En caso de reclamación, el Socio deberá informar inmediatamente su inconformidad al momento de recibir la experiencia, servicio y/o producto, comunicarse con la plataforma digital y/o aplicación nativa SIBARITTA y expresar los motivos de inconformidad. En caso de ser necesario, la plataforma digital y/o aplicación nativa SIBARITTA podrá solicitar apoyo y/o información al Partner para dar una respuesta al Socio. Los Socios tendrán a su disposición los canales de comunicación de la plataforma digital y/o aplicación nativa SIBARITTA, por medio de los cuales deberá informar la eventualidad y, además, anexar evidencia fotográfica a través de WhatsApp y/o correo electrónico socios@sibaritta.com

        El derecho de reclamación es un mecanismo previo a cualquier proceso ante la autoridad competente y protección al consumidor correspondiente, por lo tanto, el usuario acepta que, ante cualquier inconformidad, deberá informar la situación inmediatamente a la plataforma digital y/o aplicación nativa SIBARITTA

        El usuario y/o Socio entiende y acepta que el derecho de reclamación solo puede ser presentado dentro de los tres (3) días siguientes al día de la reservación y/o compra, después de haber cumplido con el proceso de conciliación. El término para su resolución empezará a regir a partir del primer día hábil desde la radicación.
        `,
      },
      {
        id: 19,
        title: "19	RECUPERACIÓN DE CUENTA",
        content:
        `
        El usuario y/o Socio entiende y acepta que, en el momento de registro en la plataforma digital y/o aplicación nativa SIBARITTA, deberá contar con Facebook, Gmail y/o Apple y/o correo electrónico para poder recuperar su cuenta. En el momento de la solicitud, se generará un código de verificación de seis (6) dígitos deberá confirmar en la plataforma digital y/o aplicación nativa SIBARITTA
        `,
      },
      {
        id: 20,
        title: "20	RESPONSABILIDAD DE LA PLATAFORMA DIGITAL Y/O APLICACIÓN NATIVA SIBARITTA",
        content:
        `
        La plataforma digital y/o aplicación nativa SIBARITTA no será responsable por aspectos relacionados con terceros u otros que no fueran de manejo directo de plataforma digital y/o aplicación nativa SIBARITTA, como en los que el establecimiento es directamente responsable, fallas de internet, datos móviles, uso de datos y tarjetas fraudulentas, cuentas falsas entre otros, que enlacen directamente con la plataforma digital y/o aplicación nativa SIBARITTA

        La plataforma digital y/o aplicación nativa SIBARITTA no será responsable por situaciones de fuerza mayor o caso fortuito no atribuible a la plataforma digital y/o aplicación nativa SIBARITTA, entre las cuales se encuentran situaciones de orden público, terremotos, inundaciones, disturbios, guerras, huelgas, bloqueos, fallas en el servicio de energía e internet, desastres naturales entre otros.
        `,
      },
      {
        id: 21,
        title: "21	RÉGIMEN JURÍDICO",
        content:
        `
        Los presentes Términos y Condiciones se regirán, ejecutará e interpretará de acuerdo con la legislación aplicable en los Estados Unidos Mexicanos, y toda controversia judicial que se presente se sujetará a la jurisdicción y competencia de los Tribunales del lugar de residencia de la plataforma digital y/o aplicación nativa SIBARITTA, y su sociedad dueña de los derechos y la marca MEAL MATES, S. DE R.L. DE C.V. en S.P.G.G, Nuevo León.

        Así mismo, cualquier controversia que se suscite por la vía administrativa se regirá bajo la Ley Federal de Protección al Consumidor, siendo competente para conocer por esta vía la Procuraduría Federal del Consumidor.

        En todo caso, el usuario y/o Socio podrá interponer una reclamación formal ante la autoridad competente si lo considera necesario, entendiendo que es un mecanismo posterior a la conciliación y al requerimiento inicial a la plataforma digital y/o aplicación nativa SIBARITTA.
        `,
      },
      {
        id: 22,
        title: "22	DERECHOS INTELECTUALES",
        content:
        `
        Los presentes Términos y Condiciones le proporcionan al usuario y/o Socio, información necesaria para conocer y adquirir la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, el usuario y/o Socio solo podrá usar la información suministrada para uso personal en ningún caso podrá usarla de manera comercial, o con fines lucrativos que no estén autorizados por la plataforma digital y/o aplicación nativa SIBARITTA.

        La información compartida contiene derechos intelectuales, imágenes, aplicaciones móviles, nombres de Partner y demás que hagan parte la plataforma digital y/o aplicación nativa SIBARITTA.
        `,
      },
      {
        id: 23,
        title: "23	SOPORTE Y CONTACTO DE LA PLATAFORMA DIGITAL Y/O APLICACIÓN NATIVA SIBARITTA",
        content:
        `
        El usuario y/o Socio tendrá a su disposición la herramienta de “Soporte en línea”, en la que puede encontrar el enlace directo al chat en línea para Atención de Socios, donde deberá completar datos requeridos para atender su solicitud.

        La plataforma digital y/o aplicación nativa SIBARITTA, dispone de una sección denominada “Atención al Socio”, donde el usuario y/o Socio podrá ejercer su derecho a reclamación.

        El usuario y/o Socio tendrá a su disposición la página de FAQ, en donde en encontrará “preguntas frecuentes”. En el evento en que el usuario y/o Socio no resuelvan sus inquietudes, deberá remitirse a un agente especial en línea por WhatsApp donde podrá continuar con la consulta.


        -	Dirección física RICARDO MARGAIN 440, COL VALLE DEL CAMPESTRE en la ciudad de SAN PEDRO GARZA GARCÍA, NL

        -	Correo electrónico para información general socios@sibaritta.com
        -	Correo electrónico para solicitudes de Partner  partners@sibaritta.com 

        -	País MEXICO 

        `,
      },
    ];
    const restricciones = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non, tenetur maiores esse alias laudantium ipsa porro doloremque quasi iste vero assumenda dolore laboriosam accusantium quos natus ullam quae dolorem?"

    const closeModal = () => {
        setVisible(false);
        document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
      };


  return (
    <div>
        <Modal
        visible={visible}
        closeModal={closeModal}
        bg="#2F2A32"
        className="restricciones-modal"
      >

      {/* <div className="conten-restricciones">
        <h2>Términos y Condiciones</h2>
          {data.map((dat) => (
            <div key={dat.id}>
              <p>{dat.title}</p>
              <p>{dat.content}</p>
            </div>
          ))}
        </div> */}
        <div className='container-question'>
          <div className='question-card'>
            <h5 className='Questions-title'>1. ASPECTOS GENERALES</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
                La plataforma digital y/o aplicación nativa para dispositivos
                móviles, computadores y tablet denominada{' '}
                <strong>SIBARITTA</strong> , marca de la empresa MEAL MATES, S.
                DE R.L. DE C.V. con Registro Federal de Contribuyentes RFC
                MMA230405V58 MMA230405V58, debidamente constituida bajo la
                legislación de los Estados Unidos Mexicanos, con domicilio
                fiscal en Torre Vórtice, Frida Kahlo 195, Col Valle Oriente,
                66269, <strong>San Pedro Garza García, Nuevo León</strong> ,
                México y que para efectos de los siguientes Términos y
                Condiciones (en adelante{' '}
                <strong>“Términos y Condiciones”</strong> ) se denominará{' '}
                <strong>SIBARITTA</strong>`
              </p>
              <p>
                El Partner (en adelante <strong>“Partner ”</strong> ), son los
                restaurantes, establecimientos de comercio, bares centros de
                entretenimiento y demás personas físicas y/o morales que pueden
                celebrar contratos, Términos, colaboraciones, vínculos, B2B
                (business to business), B2C (business to consumer) o cualquier
                otra forma de unión que genere derechos y obligaciones con
                SIBARITTA, para vender, consolidar, crear, ofrecer, disponer,
                mostrar y/o cualquier otro relacionado con el ofrecimiento y/o
                venta de experiencias, productos y/o servicios a los usuarios
                y/o socios.
              </p>
              <p>
                El usuario (en adelante <strong>“Usuario”</strong>) tendrá a su
                disposición una plataforma virtual (en adelante{' '}
                <strong>“Servicio”</strong>) que le permitirá acceder a
                diferentes experiencias, productos y/o servicios ofrecidos por
                el <strong>Partner</strong>.
              </p>
              <p>
                {' '}
                El comprador (en adelante <strong>“Socio”</strong>) tendrá a su
                disposición una plataforma virtual (en adelante{' '}
                <strong>“Servicio”</strong>) que le permitirá acceder, adquirir,
                comprar y/o reservaciónr diferentes productos y/o servicios
                ofrecidos por los Partner.{' '}
              </p>
              <p>
                Los siguientes <strong>Términos y Condiciones</strong> son
                aceptados por el usuario y/o Socio en el momento de inscribir
                sus datos en la{' '}
                <strong>
                  plataforma digital y/o aplicación nativa SIBARITTA{' '}
                </strong>{' '}
                y al realizar una reservación a través de{' '}
                <strong>SIBARITTA</strong> , acogiéndose a las disposiciones
                legales vigentes.
              </p>
              <p>
                El usuario y/o Socio acepta que ha leído, entendido y aceptado
                los{' '}
                <strong>
                  Términos y Condiciones, Aviso de Privacidad y Tratamiento de
                  Datos Personales y Aviso de Propiedad Intelectual y demás
                  anexos de la plataforma digital y/o aplicación nativa
                  SIBARITTA.
                </strong>
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>2. DEFINICIONES</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
                <strong>SIBARITTA</strong>: La plataforma digital y/o aplicación
                nativa que muestra a los usuarios y/o socios productos y/o
                servicios, exhibidos, ofrecidos y comercializados por los
                Partner.
              </p>

              <p>
                <strong>Términos y Condiciones</strong>: Parámetros de uso de la
                plataforma digital y/o aplicación nativa{' '}
                <strong>SIBARITTA</strong>
              </p>

              <p>
                <strong>Perfil de Empresa</strong>: Es el perfil que crea cada
                uno de los Partner, una vez se haya consolidado y formalizado un
                contrato, colaboración, vinculo, B2B, B2C o cualquier otra forma
                de unión que genere derechos y obligaciones con SIBARITTA, para
                que exhiban, ofrezcan y comercialicen la experiencia, productos
                y/o servicios a los usuarios y/o socios.
              </p>

              <p>
                <strong>Usuario</strong>: Persona física que accede a SIBARITTA
                para conocer la experiencia, productos y/o servicios ofrecidos
                por los Partner.
              </p>

              <p>
                <strong>Socio</strong>: Persona física que usa los servicios de
                SIBARITTA, y paga por la experiencia, productos y/o servicios
                exhibidos, ofrecidos y comercializados por los Partner,
                conociendo y aceptando los{' '}
                <strong>Términos y Condiciones</strong> al momento de la compra.
              </p>

              <p>
                <strong>Experiencia</strong>: Lo ofrece el Partner por medio de
                SIBARITTA, y se refiere a las experiencias de alta calidad ya
                sea en productos y/o servicios.
              </p>

              <p>
                <strong>Calificación</strong>: La otorga el socio a través de
                SIBARITTA al finalizar una experiencia ofrecida por el Partner.
              </p>
              <p>
                Las calificaciones se muestran por estrellas de una (1) a cinco
                (5) de la siguiente manera:
              </p>

              <p>
                <strong>DESAFORTUNADA</strong> (NO ESTUVO A LA ALTURA DE LAS
                EXPECTATIVAS, SERVICIO Y CALIDAD MUY POR DEBAJO DE LO ESPERADO)
              </p>

              <p>
                <strong>REGULAR</strong> (DEFICIENCIAS EN EL SERVICIO Y LA
                CALIDAD)
              </p>

              <p>
                <strong>ACEPTABLE</strong> (UNA EXPERIENCIA ACEPTABLE, AÚN QUEDA
                ESPACIO PARA ELEVARLA A UN NIVEL SUPERIOR)
              </p>

              <p>
                <strong>DESTACADA</strong> REFLEJA UN SERVICIO DE CALIDAD Y DE
                ALTO NIVEL, PEQUEÑAS MEJORAS PODRÍAN PERFECCIONARLA, PERO EN
                GENERAL, SOBRESALIENT
              </p>

              <p>
                <strong>ÉPICA</strong> (SUPERÓ TODAS LAS EXPECTATIVAS, UN
                STANDART EXCEPCIONAL)
              </p>

              <p>
                <strong>Servicio</strong>: La prestación que ofrece SIBARITTA,
                en la que muestra la experiencia, productos y/o servicios
                exhibidos, ofrecidos y comercializados por los Partner para que
                el Socio pueda acceder a ellos.
              </p>

              <p>
                <strong>Partner</strong>: Persona física y/o moral que exhibe,
                ofrece y comercializa la experiencia, productos y/o servicios en
                SIBARITTA, para el usuario y/o socio pueda acceder a ellos.
              </p>

              <p>
                <strong>
                  Productos y/o servicios exhibidos, ofrecidos y comercializados
                </strong>
                : Son la experiencia, productos y/o servicios que ofrecen los
                Partner a los usuarios y/o socios a través de SIBARITTA.
              </p>

              <p>
                <strong>Pick</strong> Up: Servicio de entrega de productos y/o
                servicios para una persona de forma individual o grupo de
                personas, que ofrecen los <strong>Partner</strong> para que los
                usuarios y/o Socios recojan la experiencia, productos y/o
                servicios directamente en el lugar que se disponga para hacerlo.
              </p>
              <p>
                <strong>Wallet</strong>: Es una herramienta de pago integrada a
                cada cuenta, diferente a la <strong>plataforma</strong> bancaria
                que elija el usuario y/o Socio para la tarjeta de crédito/débito
                y/o Stripe, en donde el usuario y/o Socio, podrá recargar dinero
                desde el banco a la Wallet de la plataforma digital y/o
                aplicación nativa <strong>SIBARITTA</strong>, que se
                representará en créditos con los que podrá adquirir la
                experiencia, productos y/o servicios ofrecidos por los{' '}
                <strong>Partner</strong>.
              </p>

              <p>
                <strong>Créditos</strong>: Es la representación de dinero en la
                Wallet con la que el usuario y/o Socio cuenta en la{' '}
                <strong>plataforma</strong> digital y/o aplicación nativa{' '}
                <strong>SIBARITTA</strong>, con los que podrá adquirir la
                experiencia, productos y/o servicios ofrecidos por los{' '}
                <strong>Partner</strong>.
              </p>
              <p>
                <strong>Administrador de Reservación</strong>: Persona natural
                que realiza una reservación inicial personal y/o para grupo de
                personas y es quien tiene la facultad de administrar, modificar
                o cancelar la reservación.{' '}
              </p>

              <p>
                <strong>Integrantes de Grupo</strong>: Persona natural que hace
                parte de un grupo de personas que tienen una reservación
                asignada un <strong>Administrador de Reservación</strong>.{' '}
              </p>

              <p>
                <strong>Confirmación de Reservación</strong>: Cuando todos los
                Integrantes de Grupo realizan el pago que corresponde a cada
                uno.
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>AUTORIZACIÓN</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
                La aplicación <strong>SIBARITTA</strong> autoriza al Socio y/o
                usuario para que ingrese a la plataforma digital y/o aplicación
                nativa <strong>SIBARITTA</strong>, conozca, acceda y adquiera la
                experiencia, productos y/o servicios exhibidos, ofrecidos y
                comercializados por los Partner.
              </p>
              <p>
                El Socio y/o usuario comprende y acepta de manera libre y
                voluntaria los <strong>Términos y condiciones</strong>.
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>
              <strong>COMPROMISOS Y OBLIGACIONES</strong>
            </h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
                <strong>5.1 De la plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
              
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
              A aceptar que ha leído, entendido y aceptado los Términos y Condiciones, Aviso de Privacidad y Tratamiento de Datos Personales y Aviso de Propiedad Intelectual y demás anexos de la plataforma digital y/o aplicación nativa SIBARITTA.
              </p>
              </div>

              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A disponer de una página web <a className='text-[#4545f0]' href="www.sibaritta.com" target='_blank'>www.sibaritta.com</a> y/o aplicación nativa completa que cumpla con estándares de calidad.
              </p>
              </div>

              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A celebrar contratos, Términos, colaboraciones, vínculos, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones, con los Partner, para que ofrezcan, comercialicen y/o exhiban experiencias, productos y/o servicios a los usuarios y/o socios..
              </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A mostrar a los usuarios y/o socios, las experiencias, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, que sean autorizados por la plataforma digital y/o aplicación nativa SIBARITTA
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A revisar la información de registro del Partner y los documentos que se requieran para seleccionar y crear el perfil de empresa.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A mostrar a los usuarios y/o socios, los productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner, previa autorización
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem] '>
                <p>.</p>
                <p>
                A tener información actualizada sobre la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner, de acuerdo con la información que suministren a SIBARITTA.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A ser un portal de comunicación entre el usuario y/o socio con el Partner
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A gestionar la compra y/o reservación de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A informar de forma inmediata, precisa y clara a los Partner, sobre las reservaciones que se realicen a través de la plataforma SIBARITTA, por medio de notificaciones, correo electrónico, alertas y/o mensajes.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A cobrar el valor de la compra y/o reservación de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por el Partner, según los parámetros contenidos en los Términos y Condiciones
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A establecer de manera clara y precisa las comisiones y demás que se consideren adicionales al valor determinado por el Partner, por cada experiencia, servicio y/o producto exhibidos, ofrecidos y comercializados, por concepto del uso de SIBARITTA y otros
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A entregar, transferir, pagar, reconocer u otro que represente el pago por la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, según los Términos y cláusulas acordadas en el contrato, colaboración, acuerdo, vinculo, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones con SIBARITTA
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A dar un correcto uso de los datos personales y/o comerciales otorgados por el Partner, respetando los parámetros de privacidad, usando los datos personales y/o comerciales para los fines de SIBARITTA.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A dar un correcto uso de los datos personales y/o comerciales otorgados por el usuario y/o socio, respetando los parámetros de privacidad, usando los datos personales y/o comerciales para los fines de SIBARITTA.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A cumplir con el periodo de facturación que será por el mes vencido completo.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                A cumplir con el periodo de pago correspondiente para el Partner, que se realizará a los quince (15) días del mes siguiente del período de facturación de los servicios y/o productos ofrecidos y vendidos a través de la plataforma SIBARITTA
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                
                <p>
                <strong>PARAGRAFO</strong>: En el evento en que la fecha de pago se presente en una fecha festiva y/o no hábil laboral, el pago se efectuará el día siguiente hábil. 
                </p>
              </div>
              <p>5.2 Del usuario y/o Socio.</p>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.21 A aceptar los Términos y Condiciones, para usuarios y/o socios, en lo que corresponda a su competencia, Aviso de Privacidad y Uso de la Información y Propiedad Intelectual y demás anexos de la plataforma digital y/o aplicación nativa SIBARITTA. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.22 A aceptar Términos y condiciones al momento de inscribir sus datos en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> , para realizar compras y/o reservaciones de cualquier experiencia, servicio y/o producto exhibidos, ofrecidos y comercializados por los Partner. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.23 A registrar su método de pago ya sea tarjeta de crédito/débito, Stripe o recarga de créditos para la Wallet, en el momento de adquirir la experiencia, servicio y/o producto de su elección que son exhibidos, ofrecidos y comercializados por los <strong>Partner</strong>. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.24 Acepta permitir que, al momento de la reservación y/o compra, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> acceda a su ubicación geográfica para establecer los <strong>Partner</strong> más cercanos.  
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.25 A recibir la experiencia, servicio y/o producto, de forma presencial en el establecimiento o remoto, en horario aproximado y características presentadas en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> y adquiridas al momento de la compra. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.26 A presentarse en el establecimiento del Partner, en el lugar y la hora elegidas. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.27 A solicitar información a la plataforma y/o aplicación nativa SIBARITTA sobre cualquier inquietud que tenga sobre la experiencia, servicio y/o producto, su preparación, ingredientes, manipulación y cualquier otro que se refiera a la experiencia, servicio y/o producto, ya sea previo a la orden, durante su elaboración o una vez lo reciba 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.28   El usuario y/o Socio tendrá la posibilidad de calificar la experiencia, servicio y/o producto directamente en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.29   A dar un correcto uso de los datos personales y/o comerciales suministrados al usuario y/o Socio desde el momento de ingreso a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> respetando los parámetros de privacidad y cumpliendo con los fines de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, entendiendo que es un canal de comunicación entre el usuario y/o Socio y los Partner para mostrar una experiencia, servicio y/o producto. En ningún caso la <strong>plataforma digital y/o aplicación nativa SIBARITTA </strong> se hace responsable por el uso indebido o fraudulento de datos personales y/o comerciales por parte de los usuarios y/o Socios.
                </p>
              </div>
              <p>5.30 De los Partner.</p>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.31 A aceptar los Términos y Condiciones, para <strong>Partner</strong> y/o socios, en lo que corresponda a su competencia, Aviso de Privacidad y Tratamiento de Datos Personales y Aviso de Propiedad Intelectual y demás anexos de la plataforma digital y/o aplicación nativa SIBARITTA.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.32 A reconocer que los derechos de propiedad intelectual y demás derivados, pertenecen a la plataforma digital y/o aplicación nativa SIBARITTA; en ningún caso el Partner podrá hacer uso de nombre, logo, ideas, publicidad, promociones, textos, anuncios, marcas comerciales, patentes, derechos de autor o de cualquier otro derecho de propiedad industrial o intelectual, que no sea expresamente autorizado por La plataforma digital y/o aplicación nativa SIBARITTA, en un contrato, acuerdo, colaboración, vínculo, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.33	A completar el formulario de registro de Partner que estará disponible única y exclusivamente en la página web <a className='text-[blue]' href="www.sibaritta.com">www.sibaritta.com</a>
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.34	A aceptar que cualquier actividad de ingreso, modificación, publicidad, cancelación u otro que refiera al perfil de empresa y la experiencia, productos y/o servicios ofrecidos, será para administrar directamente desde un computador de escritorio y/o Tablet en la página <a className='text-[blue]' href="www.sibaritta.com">www.sibaritta.com</a> y no desde la aplicación nativa de SIBARITTA.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.35	A aceptar que SIBARITTA, tiene el derecho autónomo de modificar, cambiar, anexar, ingresar u otro, la imagen, colores, tipo de letra, tamaño, dibujos, textos y demás, relacionados con el manejo de marca de SIBARITTA.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.36	A ofrecer la experiencia, productos y/o servicios por medio de SIBARITTA, según los Términos y clausulas acordadas en el contrato, colaboración, vinculo, B2B, B2C o cualquier otra forma de unión que genere derechos y obligaciones con SIBARITTA
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.37	A subir la experiencia, servicio y/o producto a la plataforma SIBARITTA con un término no inferior a siete (7) días antes de la realización del evento y/o la venta de la experiencia, servicio y/o producto.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                <strong>PARÁGRAFO</strong>: SIBARITTA recibirá la información y tendrá un plazo máximo de veinticuatro (24) horas para su aprobación o sugerencia de cambio, modificación y/o edición.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.38 A cumplir con los parámetros establecidos en el formato de imagen y fotografía.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.39	A realizar un mínimo de tres (3) eventos por mes, con disponibilidad mínima de diez (10) cupos por evento
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.40	A cumplir de manera excepcional con la experiencia, servicio, entrega del producto o cualquier obligación que se genere con el usuario y/o socio.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5. 41	A recibir de manera oportuna información por parte de SIBARITTA cuando exista algún reconocimiento, inquietud, observación y/o queja relacionada con la experiencia, servicio y/o producto por parte del socio. En el último evento en el que el socio no se haya sentido conforme con la experiencia, servicio y/o producto y se haya obtenido una calificación aceptable, regular o desafortunada, se debe establecer método de seguimiento con el socio entre SIBARITTA y el Partner
                </p>
              </div>

              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.43	A informar de forma clara, diligente y pronta a SIBARITTA, sobre cambios de productos y/o servicios, características, precios y demás, ofrecidos en SIBARITTA, para ser mostrados al usuario y/o socio de manera actualizada. Los cambios en cualquier experiencia, servicio y/o producto son responsabilidad directa del Partner y deben ser aprobados previamente por SIBARITTA
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.44	A informar de manera clara, detallada y precisa a SIBARITTA, la experiencia, productos y/o servicios que exhibe, ofrece y comercializa, destacando los ingredientes y componentes principales, itinerarios, duración y/o características.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.45 A entregar el producto al socio en las condiciones, estado, forma, ya sea presencial en el establecimiento o Pick Up, con las características presentadas en la plataforma digital y/o aplicación nativa SIBARITTA y adquiridas al momento de la compra, sin requerir algún valor y/o condición adicional que no se encuentre especificado en el detalle de compra presentado en la plataforma digital y/o aplicación nativa SIBARITTA.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.46 A dar un correcto uso de los datos personales y/o comerciales, si los hubiere, suministrados al Partner por parte de usuarios y/o socios que usen la plataforma digital y/o aplicación nativa SIBARITTA, respetando los parámetros de privacidad y cumpliendo con los fines de la plataforma digital y/o aplicación nativa SIBARITTA, entendiendo que es un canal de comunicación entre el usuario y/o socios y El Partner para mostrar un producto y/o servicio. En ningún caso La plataforma digital y/o aplicación nativa SIBARITTA, se hace responsable por el uso indebido o fraudulento de datos personales y/o comerciales que el Partner pudiera obtener de usuarios y/o socios de manera irregular y/o no autorizada.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                5.47 A reconocer que los derechos de propiedad intelectual y demás derivados pertenecen a SIBARITTA; en ningún caso los Partner podrán hacer uso de nombre, logo, ideas, publicidad, promociones, textos, anuncios, marcas comerciales, patentes, derechos de autor o de cualquier otro derecho de propiedad industrial o intelectual, que no sea expresamente autorizado por SIBARITTA, en un contrato, colaboración, vínculo, B2B, B2C o cualquier otra forma de unión que genere derechos y responsabilidades.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>
                <strong>PÁRAGRAFO</strong>. Se entiende excluido del presente acuerdo cualquier experiencia, reservación y/o venta de producto y/o servicios por fuera de la plataforma digital y/o aplicación nativa SIBARITTA; o experiencia, reservación y/o producto de la cual no se emita factura electrónica legal.
                </p>
              </div>
              
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>DERECHOS </h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              Los derechos de consumidor serán regidos por la legislación vigente en los Estados Unidos Mexicanos, en especial lo contenido en la Ley Federal de Protección al Consumidor y demás normas relacionadas.
              </p>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                Los presentes Términos y condiciones del uso de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                LTiene la mayoría de edad cumplida 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                Cuenta con capacidad legal para adquirir derechos y obligaciones en la relación que surja de la compra de productos y/o servicios ofrecidos por los <strong>Partner</strong>
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                Tiene capacidad de pago y puede efectuar transacciones por medio de tarjeta de crédito/débito, Stripe o créditos recargados en la Wallet. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
                <p>.</p>
                <p>
                Posee teléfono celular con acceso a datos móviles, computador, e-mail, teléfono fijo o tiene acceso a cualquier otro medio de comunicación donde pueda ser informado sobre el registro en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, el estado de las ordenes de productos y/o servicios y cualquier otra información relacionada con <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               
                <p>
                7.6  Tiene una cuenta con Facebook, Gmail y/o Apple y/o correo electrónico para el registro del usuario para inicio de sesión
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                Tendrá una única cuenta registrada, personal e individual. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                7.8  Cada usuario con cuenta registrada en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, está autorizado para tener una sola cuenta individual, registrada con Facebook, Gmail y/o Apple y/o correo electrónico.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                7.9  En el evento en que un usuario tenga más de una cuenta registrada en la  <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, con diferentes cuentas de Facebook, Gmail y/o Apple, incurrirá en una violación a los Términos y Condiciones, y podría ser susceptible de incurrir en procedimientos judiciales en su contra por parte de  <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                Llenar el formulario de registro con sus datos personales y demás que se requieran para la identificación del usuario y/o Socio. La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no es responsable por información errónea, falsa, mal intencionada y/o fraudulenta que el usuario y/o Socio, suministre a la misma.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                Validar en el correo electrónico, la confirmación de registro.
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                Conoce y acepta la cláusula 5 “de los Términos y condiciones” denominado “Compromisos y Obligaciones”, del “Usuario y/o Socio”
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> accederá a su ubicación geográfica para reconocer los Partner más cercanos, previa autorización. 
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, podrá realizar actualizaciones sin previo aviso y que el usuario y/o Socio deberá aceptar la actualización para poder realizar reservaciones y/o compras en la misma.  
                </p>
              </div>
              <div className='flex gap-[1rem] px-[1rem]'>
               <p>.</p>
                <p>
                La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> se reservación el derecho a revisar, modificar y/o cambiar los Términos y condiciones en el momento en que lo considere necesario y sin previa autorización de los usuarios y/o Socios y Partner.  
                </p>
              </div>
            </div>
          </div>
              
          <div className='question-card'>
            <h5 className='Questions-title'>EXPERIENCIAS, PRODUCTOS Y/O SERVICIOS </h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, únicamente muestra la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los <strong>Partner</strong> y en ningún momento fabrica, procesa, elabora, marca, prepara, manipula, almacena, empaca, entrega u otra actividad relacionada con la creación experiencia, servicio y/o producto; por lo tanto, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no tiene responsabilidad por el incumplimiento de los derechos y obligaciones que surjan entre el usuario y/o Socio con el Partner, respecto de la compra de productos y/o servicios, su calidad, presentación, preparación, sabor, ingredientes, imagen, condiciones de entrega y cualquier otra que esté relacionada con la experiencia, servicio y/o producto. En el evento que surja alguna controversia en relación con los productos y/o servicios, el usuario y/o Socio tendrá a su disposición los derechos de reclamación, contenidos en los presentes Términos y Condiciones.
              </p>
            
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>PRECIO</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              Los precios establecidos e informados en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, se indicarán en la moneda local de cada país en donde se encuentre su funcionamiento y los Partner exhiban, ofrezcan y comercialicen los productos y/o servicios, entendiendo que al valor final se incluirán comisiones y demás que se consideren adicionales al valor determinado por el Partner los cuales se entenderán exclusivos de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>MEDIOS DE PAGO</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              La plataforma digital y/o aplicación nativa SIBARITTA no guarda, almacena o reservación información relacionada con las tarjetas de crédito/débito y/o Stripe, no obstante, el uso, almacenamiento o reservación de estos datos por parte de los servidores de pago se manejará bajo los Términos y condiciones de estos.
              </p>
            </div>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El usuario y/o socio entienden y aceptan que el pago que realicen por los productos y/o servicios, estará sujeto a verificación bancaria y/o de La plataforma digital y/o aplicación nativa SIBARITTA.
              </p>
            </div>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              La información relacionada con datos personales y tarjetas de crédito/débito y/o Stripe, suministrada por el usuario y/o Socio al momento de la inscripción y al momento de compra de créditos para adquirir una experiencia, servicio y/o producto, será directamente su responsabilidad y en ningún caso <strong>la plataforma digital y/o aplicación nativa SIBARITTA</strong> será responsable por no poder efectuar el pago.
              </p>
            </div>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> podría estar en constante actualización y, por lo tanto, se informaría a los usuarios y/o socios sobre la imposibilidad de pago u otros que no permitieran transacciones en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
            </div>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              En caso de ser una actualización de los servidores de pago, bloqueos de tarjetas, cupo disponible u otra que sean directamente responsabilidad del usuario y/o de la entidad bancaria, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no será responsable. 
              </p>
            </div>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El usuario y/o Socio entiende y acepta que, cualquier cobro adicional efectuado por la entidad bancaria por el uso propio de sus productos y/o servicios, es ajena a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> y la exonera de responsabilidad. 
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>RESERVACIÓN Y GRUPOS DE RESERVACIÓN</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> es de uso personal e intransferible, por lo tanto, cada usuario y/o Socio deberá tener una cuenta registrada y activa para poder realizar reservaciones y/o compras de los diferentes productos y/o servicios ofrecidos por los <strong>Partner</strong>.
              </p>
              <p>El usuario y/o Socio entiende y acepta que la aplicación funcionará en un (1) solo dispositivo a la vez y la cuenta no podrá ser compartida, transferida, cedida o cualquier otra forma que se considere duplicidad de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> en diferentes dispositivos con una única cuenta. </p>
              <p>
              El usuario y/o Socio entiende y acepta que podrá hacer reservaciones personales y/o para grupos de personas dependiendo de la disponibilidad de experiencia, servicio y/o producto de cada Partner, teniendo previo conocimiento que cada integrante de la reservación debe contar con una cuenta registrada y activa para poder realizar el pago que le corresponda
              </p>
              <p>
              Una vez realizada la reservación personal y/o para grupos de personas, el <strong>Administrador de Reservación</strong> tendrá la facultad para modificar y/o cancelar la reservación, para sí mismo o para cualquiera de los <strong>Integrantes de Grupo</strong>, independientemente si han realizado o no el pago por la experiencia, servicio y/o producto, en cualquier momento antes de la fecha y hora de reservación. Lo anterior, acogiéndose a lo establecido en la cláusula 16 de los presentes Términos y Condiciones.
              </p>
              <p>El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrante de Grupo</strong>, entiende y acepta que es su responsabilidad personal, tener la aplicación actualizada, acceder a permisos de ubicación activo, tener tarjeta de crédito/débito, Stripe y/o créditos en la Wallet para realizar el pago de la reservación.</p>
              <p>Cada usuario y/o Socio entiende y acepta que el <strong>Administrador de Reservación</strong> y los <strong>Integrantes de Grupo</strong>, deben aceptar la invitación  y realizar el pago de manera individual por cada integrante,  por parte de otro integrante o total por parte del <strong>Administrador de Reservación</strong>, para que el Partner reciba y confirme la reservación, cada integrante del grupo tienen trinta (30) minutos para realizar el pago, a partir del inicio de solicitud de reservación, de no hacerlo se libera la reservación y se cancela de forma automática para esa persona o grupo de personas, según el caso. </p>
              <p>El <strong>Administrador de Reservación</strong> o cualquier otro integrante del grupo, tendrá la posibilidad de pagar por la reservación de otro integrante de grupo o de sugerir un integrante nuevo, quien deberá tener cuenta registrada y activa. </p>
              <p>El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong> entiende y acepta que el cobro total de la reservación se hará desde la tarjeta de crédito/débito, Stripe o los créditos contenidos en la Wallet, a cada uno de integrantes que se encuentren en el grupo que hubieran aceptado la invitación a la reservación, cuando todos los integrantes del grupo hayan realizado el pago por cada reservación o el <strong>Administrador de Reservación</strong>, haya realizado el pago por la totalidad del grupo</p>
              <p>En el evento en que uno o varios usuarios hayan aceptado la invitación al grupo y tengan o no tarjeta de crédito/débito, Stripe registrado o créditos en la wallet, y que se encuentren en espera de pago de reservación, pero no lo realicen, no se les cobrará ningún cargo, pero su reservación será cancelada inmediatamente y deberá iniciar una reservación de manera individual y/o unirse a otro grupo, según disponibilidad de los <strong>Partner</strong>.</p>
              <p>El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong>, acepta recibir notificaciones sobre la reservación, el listado de reservación, pedidos activos y cuando la reservación se haya completado por todos los miembros del grupo. </p>
              <p>El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong>, recibirá notificaciones como “reservaciones activas” o “invitaciones recibidas”, dependiendo de la calidad en que se encuentre. </p>
              <p>El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> podrá realizar el pago personal de su reservación o el pago parcial o total de la reservación incluyendo a los demás <strong>Integrantes de Grupo</strong>, si así lo eligiera.</p>
              <p>El usuario y/o Socio, en calidad de <strong>Integrantes de Grupo</strong>, solo podrá aportar el pago personal de su reservación que ha sido iniciado por el <strong>Administrador de Reservación. El integrante de grupo</strong> solo podrá modificar o cancelar su propia reservación, acogiéndose a lo establecido en la cláusula 16 de los presentes Términos y Condiciones. </p>
              <p>Al realizar la reservación, el usuario y/o Socio en calidad de  <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong>, recibirán un mensaje emergente en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> con las políticas de cancelación y reembolso, además de un enlace para revisarlas en detalle</p>
              <p>Para compras en Pick Up, el usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong> podrá solicitar el servicio de manera individual, o para el grupo, según el caso y tendrá la facultad de decidir quién recoge la experiencia, servicio y/o producto.</p>
              
              <p>El usuario y/o Socio, en calidad de ,<strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong> entiende y acepta que cualquier otra experiencia, servicio y/o producto que no se encuentre especificado en la reservación, o que no haya sido especificado en promociones y/o colaboraciones por parte de la plataforma digital y/o aplicación nativa SIBARITTA y los Partner, será asumido en costo, disposición, entrega, manejo, cuidado y cualquier acción que se realice con la experiencia, servicio y/o producto, directamente por el usuario y/o Socio.</p>
              
              <p>
              El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong>, entiende y acepta que cualquier otra experiencia, servicio y/o producto que no se encuentre especificado en la reservación, o que no haya sido especificado en promociones y/o colaboraciones por parte de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> y los Partner, será asumido en costo, disposición, entrega, manejo, cuidado y cualquier acción que se realice con la experiencia, servicio y/o producto, directamente por el usuario y/o Socio.
              </p>
              
              <p>
              El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong>, acepta y entiende que cualquier experiencia, servicio y/o producto que solicite a un Partner, que no se encuentre en la reservación, será asumido por completo bajo su responsabilidad, y no tendrá derecho a reclamación, devolución y/o reembolso alguno ante la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
              <p>
              La  <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, no tendrá responsabilidad alguna sobre la experiencia, productos y/o servicios que no se encuentre especificado en la reservación, los <strong>Partner</strong> en este caso serán autónomos con la experiencia, productos y/o servicios que ofrezcan y/o comercialicen por fuera de lo ofrecido en la reservación inicial y serán responsables en lo que corresponda
              </p>
              <p>
              El usuario y/o Socio, en calidad de <strong>Administrador de Reservación</strong> o <strong>Integrantes de Grupo</strong> y los <strong>Partner</strong> no tendrán que asumir ningún pago y/o comisión a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, cuando se dispongan productos y/o servicios por fuera de la reservación. 
              </p>
            </div>
          </div>


          <div className='question-card'>
            <h5 className='Questions-title'>COMPRA /RESERVACIÓN</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El usuario y/o Socio entiende y acepta que el método de pago autorizado por la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, son las tarjetas de crédito/débito, Stripe y los créditos que se recargan en la Wallet, en ningún caso, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> cobrará por otro medio.
              </p>
              <p>
              El usuario y/o Socio entiende y acepta que, para comprar productos y/o servicios o recargar los créditos, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> lo direccionará de manera externa a la plataforma transaccional.
              </p>
              <p>
              La cantidad de dinero que el usuario y/o Socio pague por créditos, se verá reflejada en la Wallet en exactitud con el dinero que ha pagado por los créditos.
              </p>
              <p>
              El Socio podrá realizar compra y/o reservación de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los <strong>Partner</strong> a través de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
              <p>
              La experiencia, productos y/o servicios estarán disponibles en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, en donde el usuario y/o Socio tendrá información relacionada con cada tipo de experiencia, servicio y/o producto, su precio, sobre los cuales podrá realizar una compra y/o reservación, y se detallará el producto y numero de productos y/o servicios adquiridos, valor final, hora de reservación, fecha y/o tiempo de entrega.
              </p>
              <p>
              El usuario y/o Socio, dispondrá de una herramienta digital que le permite revisar sus transacciones e historial de créditos.
              </p>
              <p>
              El Socio deberá otorgar permiso de ubicación al momento de realizar la compra y/o reservación, y la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> mostrará la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner más cercanos a su ubicación y dispondrá de un buscador de <strong>Partner</strong>. En el evento en que el Socio no permita el acceso a su ubicación, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no se hace responsable por la información suministrada, los Partner disponibles y productos exhibidos, ofrecidos y comercializados, ni de su reservación, ni su entrega.
              </p>
              <p>
              Ante cualquier inquietud sobre compra y/o reservación, ubicación, número de asistentes, instalaciones, preparación, ingredientes y manipulación de alimentos, o cualquier otro que se refiera a la experiencia, servicio y/o producto, antes, durante o posterior a la reservación o previo a la orden, durante su elaboración o una vez lo reciba, el usuario y/o Socio deberá solicitar la información a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>.
              </p>
            </div>
          </div>
          
          <div className='question-card'>
            <h5 className='Questions-title'>CONFIRMACIÓN DE COMPRA/RESERVACIÓN</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              En el momento en que la compra y/o reservación se confirme por el usuario y/o Socio, regirán los compromisos y obligaciones establecidos en la cláusula 5 “de los usuarios y/o Socios” y “de los Partner” y, por lo tanto, el Socio acepta pagar el valor y recibir y/o recoger la experiencia, servicio y/o producto, en el momento y la hora especificada y/o asistir al Partner de su preferencia en la fecha y hora elegida, y por otro lado, el Partner, se compromete a entregar el producto y/o prestar el servicio, en el momento y la hora especificada y en las condiciones acordadas al momento de la compra y/o reservación
              </p>
              <p>
              La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no será responsable por por el incumplimiento, retraso, preparación, ingredientes, manipulación, almacenamiento, calidad y cualquier otro que se refiera a la experiencia, servicio y/o producto, no obstante, el usuario y/o socio disponen de los mecanismos de reclamación contenidos en la cláusula 18 de los presentes <strong>Términos y Condiciones</strong>.  
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>COLABORACIONES</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El usuario y/o Socio entiende y acepta que pueden surgir colaboraciones entre los diferentes <strong>Partner</strong> por medio de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, para ofrecer sus productos en compañía. A través de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> se informará sobre la colaboración, así como de los productos y/o servicios, los horarios y condiciones.  
              </p>
              <p>
              El usuario y/o Socio entiende y acepta que las colaboraciones son realizadas por los Partner y que no comprometen a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>; no obstante, disponen de los mecanismos de reclamación contenidos en la cláusula 18 de los presentes <strong>Términos y Condiciones</strong>.    
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>PROMOCIONES</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El usuario y/o Socio entiende y acepta que la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, en colaboración con los <strong> Partner</strong> o,  <strong>colaboración entre los Partner</strong>, pueden publicitar promociones en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, las cuales serán anunciadas a los usuarios y/o Socios, con las condiciones y requisitos para adquirirlos.  
              </p>
              <p>
              El usuario y/o Socio entiende y acepta que las colaboraciones son realizadas por los Partner y que no comprometen a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>; no obstante, disponen de los mecanismos de reclamación contenidos en la cláusula 18 de los presentes <strong>Términos y Condiciones</strong>.    
              </p>
              
              <p>
              Cada promoción tendrá condiciones y requisitos específicos, y son facultad exclusiva de la <strong> plataforma digital y/o aplicación nativa SIBARITTA</strong> y/o de los <strong>Partner</strong>.
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>CANCELACIÓN Y REEMBOLSO</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El Socio entiende y acepta las condiciones de cancelación de reservación y/o compra de la experiencia, productos y/o servicios ofrecidos por los <strong>Partner</strong>.  
              </p>
              <p>
              El Socio tendrá derecho a cancelar la compra y/o reservación en cualquier momento y hasta veinticuatro (24) Horas antes de la hora reservación y/o entrega de la experiencia, servicio y/o producto cualquiera sea su motivo; en este caso se realizará el reembolso del cien por ciento (100 %) del total de la reservación personal o de grupo, según el caso.    
              </p>
              <p>
              El Socio no recibirá reembolso por la cancelación y/o no asistencia posterior a veinticuatro (24) horas antes de la reservación y/o entrega de la experiencia, servicio y/o producto cualquiera sea su motivo.
              </p>
              <p>
              Si la experiencia, servicio y/o producto que se cancela por el usuario y/o Socio es para Pick Up, no aplican los Términos y condiciones de cancelación, el plazo y términos, y no procederá la devolución total y/o parcial del dinero. Los usuarios y/o Socios tendrá a su disposición los mecanismos de reclamación establecidos en la cláusula 18 de los presentes Términos y Condiciones.
              </p>
              <p>
              El Socio también podrá iniciar el derecho de reclamación de la experiencia, productos y/o servicios ofrecidos por los Partner, en el momento de la hora de la reservación y/o entrega si considera que la información relacionada con la experiencia, productos y/o servicios publicada en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no corresponde o coincide con la especificada en la experiencia, servicio y/o producto entregado. Esta acción estará sujeta a verificación por parte de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> y por los Partner. Los Socios tendrán a su disposición los canales de comunicación de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, por medio de los cuales deberá informar la eventualidad y, además, anexar evidencia fotográfica a través de los canales de comunicación de Atención al Socio de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, Whatsapp y/o correo electrónico socios@sibaritta.com
              </p>
              <p>
              Previamente a iniciar el derecho de reclamación por el Socio, procederá un mecanismo de conciliación entre el Socio y la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> y/o Partner, donde se ofrecerá, si fuera procedente, subsanar la experiencia, productos y/o servicios con la prestación de productos y/o servicios de similares características a las de la reservación inicial; de no llegar a un acuerdo, el Socio podrá iniciar el derecho de reclamación.
              </p>
              <p>
              En el evento en que la cancelación sea para grupos de personas, el <strong>Administrador de Reservación</strong> tendrá la facultad de decidir si la cancelación aplica él mismo, para todo el grupo o para un número determinado de personas. Para que la cancelación sea efectiva, deberá confirmar el código de seguridad de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, para que se pueda realizar el reembolso correspondiente, si aplica, según los términos de cancelación y porcentaje de reembolso contenidos en la presente cláusula.
              </p>
              <p>
              En el caso en el que <strong>Administrador de Reservación</strong> quiera realizar la cancelación para sí mismo, tendrá la posibilidad de designar a un integrante del grupo como <strong>Administrador de Reservación</strong>; en el evento en que no lo designara, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, elegirá a la siguiente persona que integra el grupo y así sucesivamente
              </p>
              <p>
              En el evento en que la cancelación, sea de forma individual por cada integrante de grupo o individual y/o grupal por parte del <strong>Administrador de Reservación</strong>, todos los integrantes del grupo recibirán una notificación de cancelación de reservación a través de un pop up con el enunciado “tu reservación y/o servicio ha sido cancelado por <strong>Administrador de Reservación</strong>”. El enunciado Pop Up estará sujeto a cambios sin previo aviso.
              </p>
              <p>
              Si la experiencia, servicio y/o producto para el grupo es para Pick Up, aplica el mismo plazo de cancelación y porcentaje de reembolso contenidos en la presente cláusula.
              </p>
              <p>
              El usuario y/o Socio, de forma individual o en calidad <strong>Administrador de Reservación o Integrante de Grupo</strong>, entiende y acepta que podrá modificar su propia reservación o la reservación del grupo, según el caso, para adicionar y/o retirar usuario y/ Socio, cambiar de hora, fecha y lugar de reservación, previa verificación de disponibilidad por parte de los <strong>Partner</strong>. En algunos eventos es posible que se deba realizar una nueva reservación. 
              </p>
              <p>
              El Socio entiende y acepta que, podrá disponer de los derechos de reclamación cuando así lo considere necesario, conociendo que es un procedimiento posterior a la conciliación. 
              </p>
              <p>
              La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no será responsable por situaciones de fuerza mayor o caso fortuito no atribuible a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, entre las cuales se encuentran situaciones de orden público, terremotos, inundaciones, disturbios, guerras, huelgas, bloqueos, fallas en el servicio de energía e internet, desastres naturales entre otros; para estos eventos, se dispondrá de cambio de día de la de la reservación, previa verificación de disponibilidad de los Partner.
              </p>
              <p>
              No serán considerados casos de fuerza mayor la enfermedad, dolores, lesiones inesperadas, asuntos personales y/o familiares, como tampoco condiciones climatológicas normales de la zona, retrasos, averías y/o bloqueos en el transporte aéreo, terrestre, marítimo o cualquier otro utilizado para desplazamiento; para estos eventos, la reservación se dará por perdida y no habrá cambio de día ni reembolso. 
              </p>
              <p>
              En el evento en que la cancelación se realice por parte de los <strong>Partner</strong>, por situaciones atribuibles su responsabilidad, se realizará un reembolso completo al Socio, ya sea en calidad de Administrador de Reservación o integrante de grupo de personas, en un plazo máximo diez (10) días hábiles, contados a partir del día siguiente hábil de la compra y/o reservación. Si la cancelación de la experiencia, productos y/o servicios es para Pick Up, aplica el mismo plazo. 
              </p>
              <p>
              El usuario y/o Socio entiende y acepta que, al momento de una reclamación por devolución de dinero, de ser aprobada, será reintegrado directamente a la entidad bancaria y/o a la Wallet de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, según su decisión. En caso de decidir recibir la devolución de dinero en la Wallet, podrá disponer del valor de dinero en créditos para adquirir productos y/o servicios ofrecidos por los <strong>Partner</strong>. 
              </p>
              <p>
              Los reembolsos se deberán solicitar a través del Centro de Atención a Socios de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, a través de Whatsapp y/o correo electrónico. Para que un reembolso sea abonado en la Wallet, se debe realizar el proceso de confirmación con código de seguridad solicitado por la <strong>plataforma digital y/o aplicación nativa SIBARITTA.</strong>
              </p>
              <p>
              En el caso en que la devolución sea bancaria, el Socio entiende y acepta que el reembolso se realizara con un plazo máximo de quince (15) días hábiles y que se pueden generar costos bancarios ajenos a la responsabilidad de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>  
              </p>
            </div>
          </div>


          <div className='question-card'>
            <h5 className='Questions-title'>CAMBIOS EN LA RESERVACIÓN Y NO ASISTENCIA</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              Cualquier modificación a la reservación, será notificada en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> al Socio de forma personal o en calidad de <strong>Administrador de Reservación</strong> y a cada uno de los integrantes del grupo, en donde se verá reflejado el valor de la reservación, según el caso.
              </p>
              <p>
              En el evento en que el Socio de forma personal o en calidad de <strong>Administrador de Reservación</strong>, cuando se trate de grupos, o cualquier integrante del grupo no se presente al establecimiento del <strong>Partner</strong>, en la fecha y hora de la compra y/o reservación, sin haber cancelado en las condiciones establecidas en la cláusula 16 de los presentes Términos y Condiciones o por eventos de fuerza mayor o caso fortuito, no tendrá derecho a reembolso alguno y se retendrá el cien por ciento (100 %) del total de la reservación personal o de grupo, según el caso
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>DERECHO DE RECLAMACIÓN </h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              Todas las reclamaciones que tenga el usuario y/o Socio respecto de la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, serán tramitados por la <strong> plataforma digital y/o aplicación nativa SIBARITTA</strong>, en el aparte “Atención al Socio”, en el cual se hará una revisión del caso y se dará respuesta dentro de los diez (10) días hábiles siguientes o se informará dentro de este término, la fecha de la respuesta que no podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.
              </p>
              <p>
              Las reclamaciones que tenga el Socio respecto de la experiencia, productos y/o servicios adquiridos, serán tramitados por la plataforma digital y/o aplicación nativa SIBARITTA y su respuesta será exclusiva de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>.
              </p>
              <p>
              En caso de reclamación, el Socio deberá informar inmediatamente su inconformidad al momento de recibir la experiencia, servicio y/o producto, comunicarse con la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> y expresar los motivos de inconformidad. En caso de ser necesario, la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> podrá solicitar apoyo y/o información al Partner para dar una respuesta al Socio. Los Socios tendrán a su disposición los canales de comunicación de la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, por medio de los cuales deberá informar la eventualidad y, además, anexar evidencia fotográfica a través de WhatsApp y/o correo electrónico socios@sibaritta.com
              </p>
              <p>
              El derecho de reclamación es un mecanismo previo a cualquier proceso ante la autoridad competente y protección al consumidor correspondiente, por lo tanto, el usuario acepta que, ante cualquier inconformidad, deberá informar la situación inmediatamente a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
              <p>
              El usuario y/o Socio entiende y acepta que el derecho de reclamación solo puede ser presentado dentro de los tres (3) días siguientes al día de la reservación y/o compra, después de haber cumplido con el proceso de conciliación. El término para su resolución empezará a regir a partir del primer día hábil desde la radicación.
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>RECUPERACIÓN DE CUENTA</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El usuario y/o Socio entiende y acepta que, en el momento de registro en la plataforma digital y/o aplicación nativa SIBARITTA, deberá contar con Facebook, Gmail y/o Apple y/o correo electrónico para poder recuperar su cuenta. En el momento de la solicitud, se generará un código de verificación de seis (6) dígitos deberá confirmar en la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
              
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>RESPONSABILIDAD DE LA PLATAFORMA DIGITAL Y/O APLICACIÓN NATIVA SIBARITTA</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no será responsable por aspectos relacionados con terceros u otros que no fueran de manejo directo de <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, como en los que el establecimiento es directamente responsable, fallas de internet, datos móviles, uso de datos y tarjetas fraudulentas, cuentas falsas entre otros, que enlacen directamente con la <strong> plataforma digital y/o aplicación nativa SIBARITTA</strong>
              </p>
              <p>
              La <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong> no será responsable por situaciones de fuerza mayor o caso fortuito no atribuible a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>, entre las cuales se encuentran situaciones de orden público, terremotos, inundaciones, disturbios, guerras, huelgas, bloqueos, fallas en el servicio de energía e internet, desastres naturales entre otros
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>RÉGIMEN JURÍDICO </h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>Los presentes Términos y Condiciones se regirán, ejecutará e interpretará de acuerdo con la legislación aplicable en los Estados Unidos Mexicanos, y toda controversia judicial que se presente se sujetará a la jurisdicción y competencia de los Tribunales del lugar de residencia de la plataforma digital y/o aplicación nativa <strong> SIBARITTA</strong>, y su sociedad dueña de los derechos y la marca <strong>MEAL MATES, S. DE R.L. DE C.V. en S.P.G.G, Nuevo León.</strong>
              </p>
              <p>
              Así mismo, cualquier controversia que se suscite por la vía administrativa se regirá bajo la Ley Federal de Protección al Consumidor, siendo competente para conocer por esta vía la Procuraduría Federal del Consumidor.
              </p>
              <p>
              En todo caso, el usuario y/o Socio podrá interponer una reclamación formal ante la autoridad competente si lo considera necesario, entendiendo que es un mecanismo posterior a la conciliación y al requerimiento inicial a la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>. 
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>DERECHOS INTELECTUALES </h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              Los presentes Términos y Condiciones le proporcionan al usuario y/o Socio, información necesaria para conocer y adquirir la experiencia, productos y/o servicios exhibidos, ofrecidos y comercializados por los Partner, el usuario y/o Socio solo podrá usar la información suministrada para uso personal en ningún caso podrá usarla de manera comercial, o con fines lucrativos que no estén autorizados por la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>.
              </p>
              <p>
              La información compartida contiene derechos intelectuales, imágenes, aplicaciones móviles, nombres de Partner y demás que hagan parte la <strong>plataforma digital y/o aplicación nativa SIBARITTA</strong>.
              </p>
            </div>
          </div>

          <div className='question-card'>
            <h5 className='Questions-title'>SOPORTE Y CONTACTO DE LA PLATAFORMA DIGITAL Y/O APLICACIÓN NATIVA SIBARITTA</h5>
            <div className='Questions-content flex flex-col gap-[1.5rem]'>
              <p>
              El usuario y/o Socio tendrá a su disposición la herramienta de “Soporte en línea”, en la que puede encontrar el enlace directo al chat en línea para Atención de Socios, donde deberá completar datos requeridos para atender su solicitud
              </p>
              <p>
              La plataforma digital y/o aplicación nativa SIBARITTA, dispone de una sección denominada “Atención al Socio”, donde el usuario y/o Socio podrá ejercer su derecho a reclamación
              </p>
              <p>
              El usuario y/o Socio tendrá a su disposición la página de FAQ, en donde en encontrará “preguntas frecuentes”. En el evento en que el usuario y/o Socio no resuelvan sus inquietudes, deberá remitirse a un agente especial en línea por WhatsApp donde podrá continuar con la consulta
              </p>
              <div className='flex flex-col gap-1 px-[1rem]'>
                <div className='flex'>
                  <p>.</p>
                  <p>Dirección física RICARDO MARGAIN 440, COL VALLE DEL CAMPESTRE en la ciudad de <strong>SAN PEDRO GARZA GARCÍA, NL</strong></p>
                </div>

                <div className='flex'>
                  <p>.</p>
                  <p>Correo electrónico para información general socios@sibaritta.com</p>
                </div>

                <div className='flex'>
                  <p>.</p>
                  <p>Correo electrónico para solicitudes de Partner  <a href="partners@sibaritta.com">partners@sibaritta.com</a> </p>
                </div>
                <div className='flex'>
                  <p>.</p>
                  <p>País MEXICO </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default ModalAcuerdo;