import { baseApi } from '@/lib/baseApi';
// import getConfig from '@/utils/getConfig';


const clock = "v1/settings" ;


const getClock = async () =>  {
    try {
        const results =  await baseApi.get(clock);
        return results.data
    } catch (error) {
        throw error
    }

}


export { getClock }