import HeroBase from '@/components2/HeroBase'

const HeroDrinks = () => {
  return (
    <div>
      <HeroBase
        img='/assets/drinks-lt.png'
        alt='Dos vinos detras de 2 copas'
        content={
          <>
            Descubre la variedad de
            <br />
            <strong>Catas</strong> que ofrecemos
          </>
        }
        img_bg='/assets/drinks-bg.jpg'
        type='mitad'
      />
    </div>
  )
}

export default HeroDrinks
