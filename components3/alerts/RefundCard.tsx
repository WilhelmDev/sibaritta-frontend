import Image from "next/image"
import Modal from "@/components/molecules/Modal"

interface ModalSessionProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    cancelar: () => void;
  }

export default function RefundCard({
    visible,
    setVisible,
    cancelar,
  }: ModalSessionProps) {
    const closeModal = () => {
      setVisible(false);
      // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
    };
    return(
        <div className="">
            <Modal
                visible={visible}
                closeModal={closeModal}
                width="w-[40%] tablet:w-[30rem]  "
                bg="#2F2A32"
                className="alertaCard alertaCard__resize"
            >
                <div className='alertaCard__card'>
                    <Image src={"/alert.png"} width={66} height={61} className='m-auto' alt='logo' data-aos="fade-left" data-aos-duration="3000"/>
                    <p className="title-alert">ESTÁS A PUNTO DE CANCELAR LA RESERVACIÓN</p>
                    <p>El reembolso se hace efectivo dentro de los 15 días hábiles de la cancelación</p>
                    <div onClick={cancelar} className="boton text-center boton--transparente cursor-pointer boton--resize">
                        <span className="m-auto span">CONFIRMAR CANCELACIÓN</span>
                    </div>
                    <div onClick={closeModal} className="boton text-center boton--outline cursor-pointer ">
                        <span className="m-auto span">CANCELAR</span>
                    </div>
                </div>
            </Modal>
        </div>
    )
}