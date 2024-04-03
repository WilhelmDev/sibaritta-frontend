import React from "react";

const Inputs = ({ value, handleInputChange, validationErrors, name }: any) => {
  const error = validationErrors.find((error: any) => error.campo === name); // Busca el error para este campo

  return (
    // Add a return statement here
    <div>
      <input
        className="body-data_valueb"
        value={value}
        onChange={handleInputChange}
      />
      {error && <span className="text-red">{error.mensaje}</span>}
    </div>
  );
};

export default Inputs;
