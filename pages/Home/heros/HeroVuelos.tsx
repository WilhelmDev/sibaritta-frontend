import HeroBase from '@/components2/HeroBase'

const HeroVuelos = () => {
  return (
    <HeroBase
      img='/assets/vuelos-lt.png'
      alt='Avión blanco con fondo azul'
      content={
        <>
          Descubre la
          <strong>
            {' '}
            variedad
            <br /> de vuelos
          </strong>{' '}
          que <br />
          ofrecemos
        </>
      }
      img_bg='/assets/vuelos-bg.jpg'
      type='mitad'
    />
  )
}

export default HeroVuelos
