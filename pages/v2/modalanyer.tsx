'use client'
import Image from 'next/image'
import HomeBanner from '@/components/organisms/HomeBanner';
import Footer from "@/components/ui/Footer";
import { useEffect } from 'react';
import HomeBusiness from "@/components/organisms/HomeBusiness";
import { newRoutes } from '@/utils/routes';

import Link from 'next/link';
import Modal from '@/components/molecules/Modal';
import ModalAcuerdo from '@/components/molecules/home/ModalAcuerdo';
export default function ModalExperiencia () {


  return (
    <div>
        <Modal
            visible={true}
            closeModal={() => alert("seCierraElModal")}
            bg="#2F2A32"
            className="modalExperiencia"
            > 
                <div className='modalExperiencia__card'>
                    <img src={"/experiencia/logoexperiencia.png"} alt='logo' className='m-auto'/>
                </div>
                <div className='modalExperiencia__card__scroll'> 
                    <h6>Dirección</h6>
                    <p>Piazza by Storia D Amore Calle 122…</p>
                    <br/>
                    <h6>Parking</h6>
                    <p>Cl. 122 #15a-2 a 15a-34</p>
                    <div className='mt-5'>
                        <img src={"/experiencia/mapa.jpg"} alt='logo' className='m-auto'/>
                    </div>
                    <Link href={newRoutes.nosotros} className='block text-center mt-5'>
                        Políticas del lugar
                    </Link>
                    <div className='modalExperiencia__card__scroll__parrafo'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer at ultriciesLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer at ultriciesLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer.</p>
                    </div>
                </div> 
            </Modal>
    </div>
  );
}
 