import ModalSession from '@/components/molecules/ModalSession';
import { fetchConfirm } from '@/services/login.services';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';



function Index() {
  const router = useRouter();
  const [invalidad, setinvalidad] = useState(false)
 

 






  useEffect(() => {
    const { token: urlToken } = router.query;
  
    if (urlToken) {
      const fetchData = async () => {
        try {
          const data = {
            token: urlToken,
            home_url: `${process.env.NEXT_PUBLIC_URl_BASIC}validate`,
          };
          const response = await fetchConfirm(data);
  
          if (response.success === false) {
            router.push("/");
              localStorage.setItem("modal_validate", "false");
          }
  
          if (response.data.status === "active") {
            const reservationString = localStorage.getItem("reservation");
            const reservation = reservationString ? JSON.parse(reservationString) : null;
  
            if (reservation !== null) {
              localStorage.setItem("userid", response?.data?.id);
              localStorage.setItem("fk_typeuser", response?.data?.fk_typeuser);
              localStorage.setItem("token", response?.data?.token);
              router.push("/checkout");
            } else {
              router.push("/");
              localStorage.setItem("modal_validate", "false");
            }
          }
        } catch (error) {
          console.error("Error en la solicitud al servidor:", error);
        }
      };
  
      fetchData();
    }
  }, [router.query.token]);
  

  return (
    <div className='validate_box'>
      <section className='validate_ '>
        
          {invalidad === true && <h2>Validacion incorrecta</h2>}

          <div className='box-content-register-message '>
          <Image src={"/home/LogoSibaritta.svg"} width={1000} height={1000} alt='logo'/>
        </div>

        <div className='box_animacion-content'>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </section>

          
       
    </div>
  );
}

export default Index;
