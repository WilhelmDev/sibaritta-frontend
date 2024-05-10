import { baseApi, generalBaseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';


const allSuggestionPartner = async (id:any,pages:any,sizes:any) => {
    const getSuggetions = "v1/suggestion_partner/"+id + "?page=" + pages + "&size=" + sizes;
  
     try {
        const result = await baseApi.get(getSuggetions, getConfig());
        return result.data
     } catch (error) {
        throw error;
     }
}

const activeAndInactiveSuggestionPartner = async (id:any,pages:any,sizes:any) => {
    const getSuggetions = "v1/all_suggestion_partner/"+id + "?page=" + pages + "&size=" + sizes;
  
     try {
        const result = await generalBaseApi.get(getSuggetions, getConfig());
        return result.data
     } catch (error) {
        throw error;
     }
}


export { allSuggestionPartner, activeAndInactiveSuggestionPartner };