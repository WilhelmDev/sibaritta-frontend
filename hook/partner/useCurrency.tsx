import { ICurrencyPartner } from '@/interface/partner/currencyInterface'
import { getCurrencyPartner } from '@/services/partner/currencyPartner.service'
import React, { useEffect, useState } from 'react'

export const useCurrency =  () => {
    const [currency, setcurrency] = useState<ICurrencyPartner | null>()

    useEffect(() => {
       ( async  () => {
        try {
            const {data} = await getCurrencyPartner();
            setcurrency(data)
        } catch (error) {
            console.log(error)
        }
       })()
    }, [])
    return  { currency }
}

export default useCurrency