// formUtils.js o formUtils.ts
export const emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const namePattern =
  /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i;
export const namePattern2 = /^[A-Za-z\s]+$/;

export const namePattern3 = /^[a-zA-Z0-9\s]+$/;

export const onInputNumberOnly = (setValue: any, fieldName: any, e: any) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  setValue(fieldName, e.target.value);
};
