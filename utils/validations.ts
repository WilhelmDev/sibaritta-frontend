export const emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const onInputNumberOnly = (setValue: any, fieldName: any, e: any) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  setValue(fieldName, e.target.value);
};

export const onInputNumberOnly2 = (setValue: any, fieldName: any, e: any) => {
  // Limpiar caracteres no numéricos
  let numericValue = e.target.value.replace(/[^0-9]/g, "");

  // Asegurarse de que el valor esté en el rango de 00 a 31
  const intValue = parseInt(numericValue);
  if (intValue < 0 || intValue > 31) {
    // Si el valor está fuera del rango, ajustarlo
    numericValue = numericValue.slice(0, 2); // Limitar a los primeros dos caracteres
    const numericIntValue = parseInt(numericValue);
    if (numericIntValue < 0 || isNaN(numericIntValue)) {
      // Si después de ajustar es un valor no numérico o menor a 0, establecer a '00'
      numericValue = "00";
    } else if (numericIntValue > 31) {
      // Si después de ajustar es mayor a 31, establecer a '31'
      numericValue = "31";
    }
  }

  // Aquí puedes establecer el valor formateado donde lo necesites, como:
  setValue(fieldName, numericValue);
};

export const onInputNumberOnly1 = (setValue: any, fieldName: any, e: any) => {
  // Limpiar caracteres no numéricos
  let numericValue = e.target.value.replace(/[^0-9]/g, "");

  // Asegurarse de que el valor esté en el rango de 00 a 31
  const intValue = parseInt(numericValue);
  if (intValue < 0 || intValue > 12) {
    // Si el valor está fuera del rango, ajustarlo
    numericValue = numericValue.slice(0, 2); // Limitar a los primeros dos caracteres
    const numericIntValue = parseInt(numericValue);
    if (numericIntValue < 0 || isNaN(numericIntValue)) {
      // Si después de ajustar es un valor no numérico o menor a 0, establecer a '00'
      numericValue = "00";
    } else if (numericIntValue > 12) {
      // Si después de ajustar es mayor a 31, establecer a '31'
      numericValue = "12";
    }
  }

  // Aquí puedes establecer el valor formateado donde lo necesites, como:
  setValue(fieldName, numericValue);
};
