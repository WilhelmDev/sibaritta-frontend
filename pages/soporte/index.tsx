import Conditions from "@/components/organisms/contact/Conditions";
import Legal from "@/components/organisms/contact/Legal";
import Medium from "@/components/organisms/contact/Medium";
import Questions from "@/components/organisms/contact/Questions";
import Image from "next/image";
import { classNames } from "primereact/utils";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


const Index = () => {
  const [submenu, setSubmenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Contáctanos"
  );
  const openSubmenu = () => {
    setSubmenu(!submenu);
  };
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSubmenu(false);
  };

  const item = [
    { id: 1, items: "Contáctanos" },
    { id: 2, items: "FAQ's" },
    { id: 3, items: "Acuerdos y condiciones" },
    { id: 4, items: "Aviso de privacidad" },
  ];

  const selectedComponent = () => {
    switch (selectedOption) {
      case "Contáctanos":
        return <Medium />;
      case "FAQ's":
        return <Questions handleOptionClick={handleOptionClick} />;
      case "Acuerdos y condiciones":
        return <Conditions />;
      case "Aviso de privacidad":
        return <Legal />;
      default:
        return <Medium />;
    }
  };

  const router = useRouter();

const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    // user_id === "1" ? router.push("/") : "";
    user_id === "2"?router.push("/home_partner"):"";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    SecurityPrivileges();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="contact-general-container">
      <div className="contact">
      <div className="contact-container main-page">
        <div className="relative">
          <div className=" laptop:hidden">
            <div className="contact-select" onClick={openSubmenu}>
              <span>{selectedOption || "Soporte en línea"} </span>
              <i className={`icon-arrow ${submenu && "rotate-active"}`}></i>
            </div>
            {submenu && (
              <div className="submenu absolute z-[101] main-page1">
                <div className="flex flex-col    w-full">
                  <div className="container-submenu flex justify-center items-center">
                    {item.map((label) => (
                      <span
                        key={label.id}
                        className={`cursor-pointer block w-full text-center ${
                          selectedOption === label.items && "bg-[#4D3452]"
                        }`}
                        onClick={() => handleOptionClick(label.items)}
                      >
                        {label.items}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="contact-destok">
            <div className="container-buttom ">
              <h2 className="contact-title">Soporte en línea</h2>

              {item.map((i) => (
                <button
                  key={i.id}
                  className={`contact-buttom ${
                    selectedOption === i.items &&
                    "bg-[#F89C53] duration-500  ease-in-out"
                  }`}
                  onClick={() => handleOptionClick(i.items)}
                >
                  {i.items}
                </button>
              ))}
              {/*
              <button className="contact-buttom">Formulario de contacto</button>
              <button className="contact-buttom">Preguntas frecuentes</button>
              <button className="contact-buttom">Legal</button>
              <button className="contact-buttom">Condiciones</button> */}
            </div>
            <div className="contac-imagedesk">
              <Image
                alt=""
                src={"/img/img-destok.jpg"}
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div>{selectedComponent()}</div>
      </div>
      <div className="contact-image">
        <Image
          alt=""
          src={"/img/contacto.jpg"}
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
    </div>
    </div>
  );
};

export default Index;
