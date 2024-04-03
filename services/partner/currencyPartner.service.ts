import { baseApi } from '@/lib/baseApi';

const currency = "v1/settings"

const getCurrencyPartner = async () => {
    try {
        const result = await baseApi.get(currency);
        return result.data
    } catch (error) {
        throw error
    }
}

export { getCurrencyPartner}