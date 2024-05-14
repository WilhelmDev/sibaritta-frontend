import Image from "next/image";
import React, { useState } from "react";
interface Encuesta {
  pregunta: string;
}
interface EditingState {
  [key: string]: boolean;
}

type EncuestaOption = {
  id: number;
  img: string;
  loren: string;
  pregunta: string;
};

function Encuesta() {
  const encuestaOption: EncuestaOption[] = [
    {
      id: 1,
      img: "/profile/encuesta/Users.png",
      loren: "Lorem ipsum dolor sit amet,",
      pregunta: "Pregunta 1",
    },
    {
      id: 2,
      img: "/profile/encuesta/Users.png",
      loren: "Lorem ipsum dolor sit amet,",
      pregunta: "Pregunta 1",
    },
    {
      id: 3,
      img: "/profile/encuesta/Users.png",
      loren: "Lorem ipsum dolor sit amet,",
      pregunta: "Pregunta 1",
    },
    {
      id: 4,
      img: "/profile/encuesta/Users.png",
      loren: "Lorem ipsum dolor sit amet,",
      pregunta: "Pregunta 1",
    },
  ];

  const [encuesta, setEncuesta] = useState<number>(0);
  const [dataEncuesta, setDataEncuesta] = useState<Encuesta[] | null>(null);

  const capturaEncuesta = (datas: Encuesta) => {
    setDataEncuesta((prevDataEncuesta) => [...(prevDataEncuesta || []), datas]);
  };

  return (
    <div>
      {encuesta === 0 && (
        <div className="profile-card main-page overflow-hidden" >
          <div>
            <div>
              <Image
                alt=""
                src={"/img/card.jpg"}
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
            <div className="container-card perfil__contenedor__right__card">
              <h5 className="tituloh5">Perfil Sibaritta</h5>
              <p className="text-card">
                Nos gustaría conocer tus gustos y preferencias para brindarte notificaciones exclusivas y actualizaciones de experiencias cuidadosamente seleccionadas para ti y tu estilo de vida Sibaritta.
              </p>
              <div className="boton">
                <button
                  onClick={() => setEncuesta(1)}
                  className="profile-button cursor pointer m-auto"
                >
                  Realizar encuesta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {encuesta === 1 && (
        <section className="survey-One rounded-[1rem] main-page">
          <article className="w-full h-[17.1rem]">
            <Image
              src={"/profile/encuesta/gastronomy.jpg"}
              alt="imagen_gastronomy"
              width={500}
              height={500}
              className="w-full h-full rounded-t-[1rem]"
            />
          </article>
          <article className="survey_options">
            <p>¿Cuál es tu comida favorita?</p>
            <ul className="option-survey">
              {encuestaOption?.map((options: any) => (
                <div key={options?.id}>
                  <article
                    onClick={() => capturaEncuesta(options)}
                    key={options?.id}
                    className="option_card  "
                  >
                    <div className="grid place-items-center w-[8.9rem] h-[8.9rem] bg-[#F0EFEB]">
                      <Image
                        alt={options.img}
                        src={options.img}
                        width={50}
                        height={50}
                      />
                    </div>
                    <p>{options?.loren} </p>
                  </article>
                </div>
              ))}
            </ul>
            <article className="survey_btns boton">
              <button
                onClick={() => {
                  setEncuesta(0), setDataEncuesta([]);
                }}
                className="servery_btn_one"
              >
                Cancelar
              </button>
              <div>{encuesta}/3</div>
              <button
                onClick={() => setEncuesta(2)}
                className="servery_btn_two"
              >
                Siguiente
              </button>
            </article>
          </article>
        </section>
      )}
      {encuesta === 2 && (
        <section className="survey-One rounded-[1rem] main-page">
          <article className="w-full h-[17.1rem]">
            <Image
              src={"/profile/encuesta/gastronomy.jpg"}
              alt="imagen_gastronomy"
              width={500}
              height={500}
              className="w-full h-full rounded-t-[1rem]"
            />
          </article>
          <article className="survey_options">
            <p>¿Cuál es tu comida favorita?</p>
            <ul className="option-survey">
              {encuestaOption?.map((options: any) => (
                <div key={options?.id}>
                  <article
                    onClick={() => capturaEncuesta(options)}
                    className="option_card  "
                  >
                    <div className="grid place-items-center w-[8.9rem] h-[8.9rem] bg-[#F0EFEB]">
                      <Image
                        alt={options.img}
                        src={options.img}
                        width={50}
                        height={50}
                      />
                    </div>
                    <p>{options?.loren} </p>
                  </article>
                </div>
              ))}
            </ul>
            <article className="survey_btns boton">
              <button
                onClick={() => {
                  setEncuesta(0), setDataEncuesta([]);
                }}
                className="servery_btn_one"
              >
                Cancelar
              </button>
              <div>{encuesta}/3</div>
              <button
                onClick={() => setEncuesta(3)}
                className="servery_btn_two"
              >
                Siguiente
              </button>
            </article>
          </article>
        </section>
      )}
      {encuesta === 3 && (
        <section className="survey-One rounded-[1rem] main-page">
          <article className="w-full h-[17.1rem]">
            <Image
              src={"/profile/encuesta/gastronomy.jpg"}
              alt="imagen_gastronomy"
              width={500}
              height={500}
              className="w-full h-full rounded-t-[1rem]"
            />
          </article>
          <article className="survey_options">
            <p>¿Cuál es tu comida favorita?</p>
            <ul className="option-survey">
              {encuestaOption?.map((options: any) => (
                <div key={options?.id}>
                  <article
                    onClick={() => capturaEncuesta(options)}
                    className="option_card  "
                  >
                    <div className="grid place-items-center w-[8.9rem] h-[8.9rem] bg-[#F0EFEB]">
                      <Image
                        alt={options.img}
                        src={options.img}
                        width={50}
                        height={50}
                      />
                    </div>
                    <p>{options?.loren} </p>
                  </article>
                </div>
              ))}
            </ul>
            <article className="survey_btns boton">
              <button
                onClick={() => {
                  setEncuesta(0), setDataEncuesta([]);
                }}
                className="servery_btn_one"
              >
                Cancelar 
              </button>
              <div>{encuesta}/3</div>
              <button
                onClick={() => setEncuesta(4)}
                className="servery_btn_two"
              >
                Siguiente
              </button>
            </article>
          </article>
        </section>
      )}
      {encuesta === 4 && (
        <section className="survey-finis rounded-[1rem] main-page">
          <article className="survey_box_info">
            <h2>Gracias por confirmar tu encuesta</h2>
            <button
              onClick={() => {
                setEncuesta(0);
              }}
            >
              Finalizar
            </button>
          </article>
        </section>
      )}
    </div>
  );
}

export default Encuesta;
