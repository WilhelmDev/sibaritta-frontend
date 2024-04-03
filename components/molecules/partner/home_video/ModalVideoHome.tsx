import React from 'react';
import Modal from '../../Modal';

interface ModalVideoProps {
  visible1: boolean;
  setVisible1: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalVideoHome({ visible1, setVisible1 }: ModalVideoProps) {
  const closeModal = () => {
    setVisible1(false);
  };
  return (
    <div>
      <Modal visible={visible1} closeModal={closeModal} width="w-[100%]   "
        bg="#2F2A32"
        className="modal-auto-play">
        <div className='w-full h-auto'>
          <div className=''>
            <video
            className=''
              src={'/home/sibaritta-video-home.mp4'}
              autoPlay
              muted
              loop
              playsInline
              controls
            ></video>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalVideoHome;
