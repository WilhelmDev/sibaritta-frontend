import { useState, useEffect } from "react";

import Image from "next/image";
export const CustomLoading = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Deshabilitar el scroll cuando el componente se monta
    // document.body.style.overflow = "hidden";

    // Simular un tiempo de carga
    setTimeout(() => {
      setLoading(false);
    }, 90000);

    // Revertir el deshabilitar el scroll cuando el componente se desmonta
    return () => {
      // document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="loader z-[999] relative h-[100vh]">
      {loading && (
        <div className="global-loading">
          <div className="global-loading__shine">
            <Image
              priority
              src="/logo.png"
              alt=""
              width={500}
              height={500}
              className="global-loading__logo"
            />
          </div>
        </div>
      )}
    </div>
  );
};
