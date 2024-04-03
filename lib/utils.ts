export const convertToHtml = (text: string) => {
  return text.replace("/", "</br>");
};
export const convertSpan = (text: string) => {
  // const letter = text.split(' ')[0]
  return text.replace("/", "<span> </br>");
};
export const convert = (text: string) => {
  return text.replace("/", "");
};
export const formatPhoneNumber = (value: string) => {
  // if input value is false eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, "");

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less than four digits
  // this is to avoid weird behavior that occurs if you  format the area code too early
  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 9)}`;
};

export const currency = (num: number) =>
  num.toLocaleString("en-Us", {
    style: "currency",
    currency: "USD",
  });
export const goToSection = (sectionName: string) => {
  let offsetTop: number = 0;
  if (sectionName !== "/") {
    const section = document.querySelector(
      `[data-section="${sectionName}"]`
    ) as Element;
    offsetTop =
      section?.getBoundingClientRect().top +
      window.scrollY -
      +`${sectionName !== "/" ? 80 : 130}`;
  }

  window.scrollTo({
    behavior: "smooth",
    top: offsetTop,
  });
};


export const validate0To24 = () =>{



}

export const validate0To59 = () =>{

  

}