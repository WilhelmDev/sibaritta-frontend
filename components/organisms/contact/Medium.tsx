'use client'
import Dropdown from '@/components/atoms/Drowpdon';
import { fetchSupport } from '@/services/support.service';
import React, { useRef, useState } from 'react';
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import { FieldError, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface FormData {
  name: string,
  lastname: string,
  phone: string,
  email: string,
  affair: string,
  message: string,
  captcha: string,
}

const Medium = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const captchaRef = useRef<ReCAPTCHAType>(null);
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA as string;
  const [captchaResponse, setCaptchaResponse] = useState("");
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const [code, setCode] = useState('')


  const createContact = async (data: any) => {
    try {
      const dataSuport = {
        first_name: data.name,
        last_name: data.lastname,
        phone: data.phone,
        email: data.email,
        subject: data.affair,
        message: data.message,
        captcha: data.captcha,
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

  const onSubmit = () => {
    try{
      if (!captchaResponse) {
        setShowCaptchaError(true);
        return;
      }
    }catch(error){
      setShowCaptchaError(true);
      setCaptchaResponse("");
      if(captchaResponse) 
        captchaRef.current?.reset() // Resetear solo si hay token almacenado
    }
  }

  type NewType = FieldError;
  
  const triggerAlert = (err: NewType | undefined) => {
    if (err && typeof err.message === 'string')
      return <span className='Login-error main-page !text-red-600 !text-[1.2rem] font-lato'>{err.message}</span>;
    return null;
  };
  
  const onChangeRecaptcha = (response: any) => {
    setCaptchaResponse(response);
    setShowCaptchaError(false); // Resetea el estado de error del reCAPTCHA
  };

  return (
    <form className=' Medium boton boton--naranja' onSubmit={handleSubmit(createContact)}>
      <div className=''>
        <div className='conta-inpu'>
          <div className='contact-input'>
            <label>Nombre</label>
            <input
              type='text'
              className='profile-input '
              placeholder='Nombre(s)'
              {...register('name',{
                required:'El nombre es requerido',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Formato no válido'
                }
              })}
            />
              {triggerAlert(errors.name)}
          </div>
          <div className='contact-input'>
            <label>Apellidos</label>
            <input
              type='text'
              className='profile-input '
              placeholder='Apellidos'
              {...register('lastname',{
                required:'El apellido es requerido',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Formato no valido'
                }
              })}
            />
              {triggerAlert(errors.lastname)}
          </div>
        </div>
        <div className='conta-inpu'>
          <div className='contact-input'>
            <label>Teléfono</label>
            <div className='!flex gap-2'>
              <Dropdown reference={setCode} color={'!bg-[#252127]'}/>
              <input
                type='tel'
                className='profile-input w-[80%] lx:w-4/5'
                placeholder='Teléfono'
                {...register('phone',{
                  required:'Número de teléfono requerido',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Formato no válido'
                  }
                })}
                />
            </div>
              {triggerAlert(errors.phone)}
          </div>

          <div className='contact-input'>
            <label>Correo electrónico</label>
            <input
              type='email'
              className={`profile-input`}
              placeholder='example@gmail.com'
              {...register('email',{
                required:'El correo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Formato no valido'
                }
              })}
            />
            {triggerAlert(errors.email)}
          </div>
        </div>
        <div className='contact-input'>
          <label>Asunto</label>
          <input
            type='text'
            className='profile-input '
            placeholder='Asunto'
            {...register('affair',{
              required:'El asunto es requerido',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Formato no valido'
              }
            })}
          />
          {triggerAlert(errors.affair)}
        </div>
        <div className='contact-input'>
          <label>Mensaje</label>
          <textarea
            className='profile-input profile-textarea'
            placeholder='Por favor, escribe tu mensaje aquí...'
            {...register('message',{
              required:'El mensaje es requerido',
            })}
          />
          {triggerAlert(errors.message)}
        </div>
        <div className="flex  flex-col justify-center pt-[1.5rem]">
            <ReCAPTCHA
              sitekey={captchaKey}
              ref={captchaRef}
              onChange={onChangeRecaptcha}
            />
            {showCaptchaError && (
              <p className="Login-error main-page !text-red-600 !text-[1.2rem] font-lato">
                Completa el captcha
              </p>
            )}
        </div>
        <button type='submit' className='contact-button' onClick={onSubmit}>Enviar</button>
      </div>
    </form>
  );
};

export default Medium;
