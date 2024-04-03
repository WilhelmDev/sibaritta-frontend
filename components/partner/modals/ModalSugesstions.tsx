import Modal from '@/components/molecules/Modal';
import React from 'react';

interface PartnerSuggestionsModal {
  visible: boolean;
  closeModal: () => void;
  suggestions?: any;
}

function ModalSugesstions({
  visible,
  closeModal,
  suggestions,
}: PartnerSuggestionsModal) {
  return (
    <div className='partner-sugesstions_lits'>
      <Modal
        visible={visible}
        closeModal={closeModal}
        width='w-[35rem] min-h-[43rem] tablet:w-[38rem] h-[50rem] bg-[url(/partners/maracuya.jpg)] bg-cover bg-center  '
      >
        <div className='box-suggestion-partner '>
          <div className='flex justify-between w-full'>
            <div className='flex gap-[1rem]'>
              <h5 className='texto-color '>producto</h5>
              <h5 className='texto-color'>{suggestions?.name}</h5>
            </div>

            <div className='flex gap-[1rem]'>
              <h5 className='texto-color '>precio</h5>
              <h4 className='texto-color'>{suggestions?.regular_price}</h4>
            </div>
          </div>

          <h5 className='texto-color text-center '>
            {suggestions?.description}
          </h5>
        </div>
      </Modal>
    </div>
  );
}

export default ModalSugesstions;


