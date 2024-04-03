import {  useState } from 'react';


export const useOpenModal = () => {
    const [visible, setvisible] = useState<boolean>(false);
    
    const opeModals = () => {
        setvisible(true)
    }
    
    const closeModals = () => {
        setvisible(false)
    }

    return { visible , closeModals , opeModals }
};

export default useOpenModal;