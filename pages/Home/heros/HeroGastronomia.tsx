import HeroBase from '@/components2/HeroBase'

const HeroGastronomia = () => {
  return (
    <HeroBase
      img='/assets/gastronomia-lt.png'
      alt='plato de bictec'
      content={
        <>
          Descubre la variedad
          <br /> <strong>gastronómica</strong> que
          <br /> ofrecemos
        </>
      }
      img_bg='/assets/gastronomia-bg.jpg'
      type='mitad'
    />
  )
}

export default HeroGastronomia
