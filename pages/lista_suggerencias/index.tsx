import ModalSugesstions from '@/components/partner/modals/ModalSugesstions';
import { allSuggestionPartner } from '@/services/partner/partnerSugesstion.service';
import React, { useEffect, useState } from 'react'

export default function Index() {
    const [suggestions, setsuggestions] = useState<any>();
    const [dataModal, setdataModal] = useState<any>()
    const [cantidad, setcantidad] = useState<number>(3);
    const [suggestionsModal, setsuggestionsModal] = useState<boolean>(false);

    const closetModal = () => {
    setsuggestionsModal(false)
    }

const sugesstionAllPartner = async () => {
    let partner_Id = null;
  if (typeof window !== "undefined") {
    const storedPartnerId = localStorage.getItem("fk_partner_id");
    partner_Id = storedPartnerId ? parseInt(storedPartnerId, 10) : null;
  }
    try {
        const {data} = await allSuggestionPartner(partner_Id,0,cantidad);
        setsuggestions(data)
        
    } catch (error) {
        console.log(error)
    }
}


useEffect(() => {
    sugesstionAllPartner()
}, [cantidad])

// console.log(suggestions)

  return (
    <div className='list_suggestions_box main-page'>
        <div className='box_suggestion_list_box '>

            <div className='list_suggestion_title '>
                <h2 className=' '>Sugerencias Sibaritta</h2>
                <div className='list_suggestion_btn '>
                    <span >+</span>
                    <p>Sugerencias</p>
                </div>
            </div>

            <div className='box_all_suggestion_and_dates'>
               
               {
                suggestions?.map( (sugges:any) => 
                <div key={sugges?.id} className='suggestion-asset_all main-page'>
                <h2 className='h2-h2'>{sugges?.name}</h2>
                <div className='suggestion-asset_all-price_btns'>
                    <div className='suggestion_asset-price'>
                        <h2>Precio</h2>
                        <h3>${sugges?.regular_price}</h3>
                    </div>

                    <div className='suggestion-asset_btns_all'>
                        <button onClick={() => {
                            setsuggestionsModal(true),
                            setdataModal(sugges)
                    }}
                        >Ver</button>
                        <div className='suggestion_activo '>
                            <p>{sugges?.status}</p>
                            <div className='w-[1rem] h-[1rem] rounded-full bg-[#07FD11] tablet:w-[1.5rem] tablet:h-[1.5rem]'>

                            </div>
                        </div>
                    </div>
                </div>
               </div>
                )
               }
               
            </div>
            <div className='paginations_list_sugessstion '>
                <h3 onClick={() => setcantidad(cantidad + 3)}
                className=''>Ver más</h3>
            </div>
            
        </div>

        <ModalSugesstions suggestions={dataModal} visible={suggestionsModal} closeModal={closetModal}/>
    </div>
  )
}
