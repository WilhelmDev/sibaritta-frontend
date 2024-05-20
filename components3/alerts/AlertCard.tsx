import Image from "next/image"
import Modal from "@/components/molecules/Modal"
 
interface TimerFunction {
    (closeModal: () => void): React.ReactNode;
}


interface ModalSessionProps {
    visible: boolean;
    className?: string;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    content: string;
    callback?: () => void;
    actionButton?: string;
    closeOnClickOutside?: boolean;
    showCloseButton?: boolean;
    contentFontSize?: string;
    actionButtonWidth?: string;
    closable?: boolean;

}

export default function AlertCard({
    visible,
    setVisible,
    content,
    callback,
    actionButton,
    closeOnClickOutside = false,
    className,
    contentFontSize,
    closable

}: ModalSessionProps) {
    const closeModal = () => {
        setVisible(false);
        // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
    };
    return (
        <div className="">
            <Modal
                visible={visible}
                closeModal={closeModal}
                width="w-[31%] tablet:w-[28rem]  "
                bg="#E9E3DB"
                className={"alertaCard" + (className ? ` ${className}` : "")}
                closeOnClickOutside={closeOnClickOutside}
                closable={closable}
            >
                <div className='alertaCard__card'>
                    <svg className="m-auto" width="67" height="62" viewBox="0 0 67 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.4983 50.9756V52.9987C66.458 53.1364 66.4031 53.2726 66.3789 53.4135C66.0173 55.5601 65.0568 57.4044 63.4458 58.9035C61.4571 60.7541 59.0615 61.5029 56.3415 61.4997C41.1144 61.4807 25.8856 61.4902 10.6584 61.4902C10.2936 61.4902 9.92715 61.4902 9.56395 61.4617C6.01261 61.1863 3.33781 59.5162 1.66706 56.4482C-0.0488776 53.2979 0.201331 50.1587 1.93341 47.0448C9.64627 33.1741 17.3317 19.2859 25.0381 5.41039C25.7661 4.09961 26.754 2.98672 28.0357 2.16353C33.0205 -1.03583 39.2483 0.513986 42.1039 5.65893C49.2001 18.4469 56.2979 31.2348 63.3812 44.0307C64.6145 46.2581 66.0786 48.3936 66.5 50.9756H66.4983ZM29.6306 29.2117C29.6306 29.8227 29.6306 30.4322 29.6306 31.0433C29.6306 33.5698 29.6096 36.0964 29.6371 38.623C29.6661 41.3664 32.1892 43.1663 34.7591 42.3083C36.3814 41.7669 37.3612 40.3501 37.3629 38.4963C37.3677 32.3493 37.3661 26.2007 37.3629 20.0537C37.3629 19.7402 37.3419 19.4205 37.2854 19.1118C36.9028 17.0823 35.04 15.7683 32.9576 16.047C31.006 16.3082 29.6484 17.8706 29.6387 19.927C29.6226 23.0219 29.6339 26.1168 29.6339 29.2117H29.6306ZM33.4983 53.8979C35.6146 53.8979 37.3516 52.2056 37.3596 50.1365C37.3693 48.0833 35.6372 46.3625 33.5274 46.3293C31.4305 46.296 29.6226 48.0643 29.6339 50.1381C29.6451 52.2088 31.3821 53.8995 33.4983 53.8979Z" fill="#FAAB60"/>
                    </svg>


                    <div dangerouslySetInnerHTML={{ __html: content }} style={{ fontSize: contentFontSize ? contentFontSize : '11px' }}></div>

                    {(actionButton && callback) && (
                        <div className="flex  pt-5">
                            <div className="w-full">
                                <div className="w-full w- boton   text-center boton--transparente cursor-pointer" onClick={callback}>
                                    <span className="m-auto span full">IR AL INICIO</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    )
}