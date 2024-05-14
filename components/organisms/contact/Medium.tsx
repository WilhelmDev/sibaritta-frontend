import { fetchSupport } from '@/services/support.service';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Medium = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const createContact = async (data: any) => {
    try {
      const dataSuport = {
        first_name: data.name,
        last_name: data.lastname,
        phone: data.phone,
        email: data.email,
        subject: data.affair,
        message: data.message,
      };
      const response = await fetchSupport(dataSuport);
      toast('Mensaje enviado correctamente', {
        unstyled: true,
        classNames: {
          toast:
            'bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ',
          title: ' text-[2rem]  ',
        },
        position: 'top-center',
      });
      reset({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        affair: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className=' Medium main-page boton' onSubmit={handleSubmit(createContact)}>
      <h2 className='contact-h2'>¿En qué podemos ayudarte?</h2>
      <div className='container-form'>
        <div className='conta-inpu'>
          <div className='contact-input'>
            <label>Nombre</label>
            <input
              type='text'
              className='profile-input '
              placeholder='Nombre(s)
'
              {...register('name')}
            />
          </div>
          <div className='contact-input'>
            <label>Apellidos</label>
            <input
              type='text'
              className='profile-input '
              placeholder='Apellidos'
              {...register('lastname')}
            />
          </div>
        </div>
        <div className='conta-inpu'>
          <div className='contact-input'>
            <label>Teléfono</label>
            <input
              type='text'
              className='profile-input '
              placeholder='Teléfono'
              {...register('phone')}
            />
          </div>
          <div className='contact-input'>
            <label>Correo electrónico</label>
            <input
              type='text'
              className='profile-input '
              placeholder='example@gmail.com'
              {...register('email')}
            />
          </div>
        </div>
        <div className='contact-input'>
          <label>Asunto</label>
          <input
            type='text'
            className='profile-input '
            placeholder='Asunto'
            {...register('affair')}
          />
        </div>
        <div className='contact-input'>
          <label>Mensaje</label>
          <textarea
            className='profile-input profile-textarea'
            placeholder='Por favor, escribe tu mensaje aquí...'
            {...register('message')}
          />
        </div>
        <button className='contact-button'>Enviar</button>
      </div>
    </form>
  );
};

export default Medium;
