import { INotify } from '@/interface/getCreateMessageInterface';
import { getAllNotyfi } from '@/services/notifyMessage.service';
import { useEffect, useState } from 'react';


export const useNotification = () => {
    const [consultas, setconsultas] = useState<INotify[]>();
    
    useEffect(() => {
        (async () => {
            try {
                const userlogin = localStorage.getItem('userid');
                
                const { data } = await getAllNotyfi(userlogin);
                setconsultas(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    
    return { consultas };
};

export default useNotification;