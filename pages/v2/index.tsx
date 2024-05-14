 'use client'

import Image from 'next/image'
import HomeBanner from '@/components/organisms/HomeBanner';
import Footer from "@/components/ui/Footer";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ModalAcerudoComp from '@/components/molecules/home/ModalAcuerdo'
import { Toaster, toast } from 'sonner';
import { saveNewSuscriber } from '@/services/suscriptors.service';
import Link from 'next/link';
import { newRoutes } from '@/utils/routes';

export default function Home2 () {
  const [ModalAcuerdo, setModalAcuerdo] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: ''
  })
  const [checkboxs, setCheckboxs] = useState({
    terms: false,
    adult: false,
    aditional: false
  })
  useEffect(() => {
    AOS.init();

    const update = document.querySelector('body')
    update?.classList.add('fondoHome')
  }, [])

  const openModal = () => {
    setModalAcuerdo(!ModalAcuerdo)
  }

  const resetForm = () => {
    setFormData({
      email: '',
      phone: '',
      name: ''
    })
    setCheckboxs({
      aditional: false,
      adult: false,
      terms: false
    })
  }

  const triggerToast = (title: string, error:boolean) => {
    toast(title, {
      duration: 1200,
      id: error ? 'failed-register' : 'register-successfull',
      classNames: {
        toast:
          error 
          ? "bg-[#100a11]  w-full   rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] "
          : "bg-[#100a11]  w-full  rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
        title: " text-[2rem]  ",
      },
    })
  }

  const updatePhoneNumber = (data:any) => {
    const isValid = /^\d*$/.test(data); // Validación con expresión regular

    if (isValid) {
      setFormData({...formData, phone: data});
    }
  }

  const handleSubmit = async () => {

    try {

      //validate fields
      if (Object.values(formData).some((value) => value.trim() === '')) {
        triggerToast('Todos los campos son obligatorios', true)
        return
      }

      //validate terms
      if (!checkboxs.terms) {
        triggerToast('Debes aceptar nuestros terminos y condiciones para continuar', true)
        return
      }

      //validate adult
      if (!checkboxs.adult) {
        triggerToast('Debes ser mayor de edad para continuar', true)
        return
      }

      //save data
      await saveNewSuscriber(formData)
      triggerToast('Registro exitoso', false)
      resetForm()
      return
    } catch (error) {
      triggerToast('Ha ocurrido un error al suscribirse a la plataforma', true)
      return
    }

  }
  return (

    <div className="home">
      <HomeBanner/> 
      <div className="home__intro">
        <div className="container-general ">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5  lg:flex block items-center ">
              <div className="home__intro__left" data-aos="fade-right" data-aos-duration="3000">
                <h2 className="tituloh2">¿Y TÚ, ERES<br/> UN SIBARITA?</h2>
                <p>
                  Para los selectos y curiosos, los sensibles a la estética y el buen gusto … <br/><br/>Aquí te contamos quién es Sibaritta 
                </p>
                <div className="boton ">
                  <Link href={newRoutes.nosotros}>CONÓCEME</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 w-100">
              <div className="home__intro__right" data-aos="fade-left" data-aos-duration="3000">
                <img src={"/home/homeright1.png"}  alt='logo' className="m-auto"/>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="home__colecciona">
        <div className="container-general">
          <div className="flex flex-wrap">
            <div className="w-100 lg:w-2/5">
              <div className="home__colecciona__left" data-aos="fade-right" data-aos-duration="3000">
                <div className="relative">
                  <h2 className="tituloh2">Colecciona momentos, diviértete y sube de nivel</h2>
                  <p>
                    Cada experiencia te recompensa con una insignia única. Acumula insignias,  gana acceso a Experiencias Secretas y mucho más …
                  </p>
                  {/* <div className="boton ">
                    <a href="#">INSIGNIAS SIBARITTA</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 flex w-100 items-center">
              <div className="home__colecciona__right ">
                <ul className="flex">
                  <li>
                    <Image src={"/home/cart1.png"} width={345} height={345} alt='logo' data-aos="fade-left" data-aos-duration="3000"/>
                  </li>
                  <li>
                    <Image src={"/home/cart2.png"} width={345} height={345} alt='logo' data-aos="fade-left" data-aos-duration="2000"/>
                  </li>
                  <li>
                    <Image src={"/home/cart3.png"} width={345} height={345} alt='logo' data-aos="fade-left" data-aos-duration="1000"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__experiencia" id="formulario">
        <div className="container-general ">
          <div className="lg:flex block flex-wrap">
            <div className="lg:w-2/5 w-100  flex items-center ">
              <div className="home__intro__left" data-aos="fade-right" data-aos-duration="3000">
                <h2 className="tituloh2">Descubre Experiencias Sibaritta</h2>
                <p>
                  Redescubre los lugares conocidos a través de experiencias exclusivas que te darán una nueva perspectiva que va más allá de lo común…
                </p>
                {/* <div className="boton ">
                  <a href="#">CONÓCEME</a>
                </div>  */}
              </div>
            </div>
            <div className="w-1/6">
            </div>
            <div className="lg:w-2/5 w-100 	">
              <div className="home__intro__right" data-aos="fade-left" data-aos-duration="3000">
                <div className="home__intro__right__form text-center">
                  <svg  className="m-auto" width="70" height="53" viewBox="0 0 70 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.3316 4.46C36.5632 4.46 37.5616 3.4616 37.5616 2.23C37.5616 0.998405 36.5632 0 35.3316 0C34.1 0 33.1016 0.998405 33.1016 2.23C33.1016 3.4616 34.1 4.46 35.3316 4.46Z" fill="#252127"/>
                  <path d="M69.3981 3.61086H50.8481V52.8109H47.0281V3.61086H43.0781V0.380859H69.3981V3.60086V3.61086Z" fill="#252127"/>
                  <path d="M43.1786 3.60914C42.2886 3.60914 41.5586 2.88914 41.5586 1.98914C41.5586 1.08914 42.2786 0.369141 43.1786 0.369141C44.0786 0.369141 46.4086 1.08914 46.4086 1.98914C46.4086 2.88914 44.0686 3.60914 43.1786 3.60914Z" fill="#252127"/>
                  <path d="M0 0.380859H26.98V3.60086H22.37V52.8009H18.55V3.61086H0V0.380859Z" fill="#252127"/>
                  <path d="M26.8705 3.60914C27.7605 3.60914 28.4905 2.88914 28.4905 1.98914C28.4905 1.08914 27.7705 0.369141 26.8705 0.369141C25.9705 0.369141 22.9805 1.08914 22.9805 1.98914C22.9805 2.87914 25.9805 3.60914 26.8705 3.60914Z" fill="#252127"/>
                  </svg>
                  <h5 className="tituloh5">BIENVENIDO A SIBARITTA</h5>
                  <p className="textoOscuro">Regístrate en nuestra lista de espera y …</p>
                  <br/>
                  <p>
                    Obtén acceso prioritario e información sobre experiencias gastronómicas exclusivas antes de que se abran al público.


                  </p>        
                  <p>Tendrás la oportunidad de ser uno de los primeros en reservar tu experiencia en restaurantes exclusivos de la ciudad de Monterrey.</p>            
                  <br/><br/>

                  <form>
                    <div className="lg:flex lg:space-x-4 mb-5">
                      <div className="lg:w-1/2  w-full mb-5 lg:mb-0">
                        <input
                        type="text" name="name" id="name" className="form-control" 
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="lg:w-1/2 w-full ml-0">
                        <input
                        type="text" className="form-control" name="email" id="email" 
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                    </div>
                    <div className="flex space-x-4">
                      <div className="w-full  ">
                        <input type="tel" name="phone" id="phone"
                        className="form-control"
                        placeholder="Telefono" 
                        value={formData.phone}
                        onChange={(e) => updatePhoneNumber(e.target.value)}
                        />
                      </div>
                     
                    </div>
                    <div className="flex space-x-4 mt-5 pt-5">
                      <div className="w-full ">
                          <label className="containerCheck">Acepto las <span onClick={() => openModal()}>Políticas de privacidad </span>
                            <input type="checkbox" checked={checkboxs.terms} onChange={() => setCheckboxs({...checkboxs, terms: !checkboxs.terms})} />
                            <span className="checkmark"></span>
                          </label>
                          <label className="containerCheck">Soy mayor de edad
                            <input type="checkbox" checked={checkboxs.adult} onChange={() => setCheckboxs({...checkboxs, adult: !checkboxs.adult})} />
                            <span className="checkmark"></span>
                          </label>
                          <label className="containerCheck">Me gustaría recibir alertas y notificaciones de nuevas experiencias
                            <input type="checkbox" checked={checkboxs.aditional} onChange={() => setCheckboxs({...checkboxs, aditional: !checkboxs.aditional})} />
                            <span className="checkmark"></span>
                          </label>
                      </div>
                    </div>
                    <div className="flex  pt-5">
                      <div className="w-full">
                        <div className="boton   text-center boton--transparente cursor-pointer" onClick={() => handleSubmit()}>
                          <span className="m-auto span">CONTINUAR</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
              <Toaster />
              <ModalAcerudoComp setVisible={setModalAcuerdo} visible={ModalAcuerdo} />
            </div>

          </div>
        </div>
      </div>
      <div className='alertaCard'>
        <div className='alertaCard__card'>
          <Image src={"/alerta.png"} width={66} height={61} className='m-auto' alt='logo' data-aos="fade-left" data-aos-duration="3000"/>
          <p>PUEDES SOLICITAR EL REEMBOLSO SOLO HASTA 24 HORAS ANTES DE LA HORA DE TU RESERVACIÓN</p>
          <div className="boton   text-center boton--transparente cursor-pointer" onClick={() => handleSubmit()}>
            <span className="m-auto span">CONTINUAR</span>
          </div>
        </div>
      </div>
      <div className='alertaCard'>
        <div className='alertaCard__card'>
          <Image src={"/alerta2.png"} width={66} height={61} className='m-auto' alt='logo' data-aos="fade-left" data-aos-duration="3000"/>
          <p>ACEPTA TODOS LOS CAMPOS OBLIGATORIOS *</p>

        </div>
      </div>
    </div>
  );
}
