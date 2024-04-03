import HeroBase from '@/components2/HeroBase'

const HeroBienestar = () => {
  return (
    <HeroBase
      img='/assets/bienestar-lt.png'
      alt='Recepcionista entregando una tarjeta'
      content={
        <>
          Hacemos realidad cada
          <br /> solicitud especial que
          <br /> tengas para tus eventos
          <br /> privados
        </>
      }
      img_bg='/assets/bienestar-bg.jpg'
      type='mitad'
    />
  )
}

export default HeroBienestar
