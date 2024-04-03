import React from "react";

const Timeline = () => {
  const dates = [
    "Contenido largo que puede extenderse hacia arriba o hacia abajo Contenido largo que puede extenderse hacia arriba o hacia abajo Contenido largo que puede extenderse hacia arriba o hacia abajo",
    "Contenido corto",
    "Contenido medio que se expande",
    "Contenido largo que puede extenderse hacia arriba o hacia abajo",
    "Contenido corto",
    // Agrega más fechas si es necesario
  ];

  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      <div className="timeline-icons">
        {dates.map((date, index) => (
          <div className="timeline-icon" key={index}></div>
        ))}
      </div>
      <div className="timeline-text mt-[5rem]">
        {dates.map((date, index) => (
          <div className="timeline-text-item" key={index}>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
