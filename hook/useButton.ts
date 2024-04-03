import { useEffect } from "react";

export const useButton = () => {
  useEffect(() => {
    const options = {
      whatsapp: process.env.NEXT_PUBLIC_WHATSAPP,
      call_to_action: "",
      button_color: "#F89C53",
      position: "top",
      order: "whatsapp",
      zIndex: 9999,
    };

    const proto = document.location.protocol || "https:";
    const host = "getbutton.io";
    const url = proto + "//static." + host;

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";

    s.onload = function () {
      // Inicialización del widget
      // @ts-ignore
      WhWidgetSendButton.init(host, proto, options);

      // Aplicación de estilos personalizados
      const customStyles = document.createElement("style");
      customStyles.innerHTML = `
        .wh-widget-button {
          color: #FFA500 !important; // Cambiar el color del ícono a naranja
        }
      `;
      document.head.appendChild(customStyles);
    };

    const x = document.getElementsByTagName("script")[0];
    x.parentNode!.insertBefore(s, x);

  }, []);
};
