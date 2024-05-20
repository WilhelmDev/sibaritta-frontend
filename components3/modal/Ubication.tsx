import { newRoutes } from '@/utils/routes';

import Link from 'next/link';
import Modal from '@/components/molecules/Modal';
export default function ModalUbication ({ isOpen, closeCallback}) {
  return (
    <div>
        <Modal
            visible={isOpen}
            closeModal={() => closeCallback()}
            bg="#2F2A32"
            className="modalExperiencia"
            > 
                <div className='modalExperiencia__card !overflow-y-hidden'>
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