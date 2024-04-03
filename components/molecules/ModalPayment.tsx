import React, { useEffect } from 'react'
import { Dialog } from 'primereact/dialog'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

interface ModalPaymentProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  addCard: any
}

const ModalPayment = ({ visible, setVisible, addCard }: ModalPaymentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: 'onChange', shouldUnregister: false })

  const onSubmit = async (data: any) => {
    addCard(data)
    reset()
    setVisible(false)
  }

  const numberPattern = /^\d{16}$/

  return (
    <div className='ModalPayment'>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        className='!bg-[#252127] w-[95%] laptop:w-[52%] py-[1.5rem] px-[2rem] rounded-[1rem]'
      >
        <h2 className='ModalPayment-title'>Nuevo método de pago</h2>
        <p className='ModalPayment-text'>
          Agregar una tarjeta de crédito o débito.
        </p>
        <div className='ModalPayment-container'>
          <div className='ModalPayment-container-img'>
            <Image
              alt=''
              src={'/img/credit-card.png'}
              width={1000}
              height={1000}
              className=' w-full h-full'
            />
          </div>
          <form
            className='ModalPayment-container-form'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='relative '>
              <input
                className='payment-input'
                {...register('name', { required: true })}
                placeholder='Nombre en la tarjeta'
              />
            </div>

            <div className='relative '>
              <input
                className='payment-input'
                {...register('number', {
                  required: true,
                  pattern: {
                    value: numberPattern,
                    message: 'El número proporcionado es incorrecto.',
                  },
                })}
                placeholder='0000 0000 0000 0000'
              />
              {errors.number && (
                <p className='input-error' role='alert'>
                  {String(errors.number?.message)}
                </p>
              )}
            </div>

            <div className='flex gap-[1.1rem]'>
              <div className='relative '>
                <input
                  className='payment-input'
                  {...register('date', { required: true })}
                  placeholder='MM / YYYY'
                />
              </div>

              <div className='relative '>
                <input
                  className='payment-input'
                  {...register('cvv', { required: true })}
                  placeholder='CVV'
                />
              </div>
            </div>
            <button type='submit'>Agregar</button>
          </form>
        </div>
      </Dialog>
    </div>
  )
}

export default ModalPayment
