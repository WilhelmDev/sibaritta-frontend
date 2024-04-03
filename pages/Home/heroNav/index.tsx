import style from './style.module.css'
import ButtonNav from './ButtonNav'

const HeroNav = () => {
  return (
    <nav className={style.nav}>
      <ButtonNav icon='/icons/comida.svg' title='Gastronomía' number={0} />
      <ButtonNav icon='/icons/bebidas.svg' title='Drinks & Cattas' number={1} />
      <ButtonNav icon='/icons/bienestar.svg' title='Bienestar' number={2} />
      <ButtonNav icon='/icons/avion.svg' title='Vuelos privados' number={3} />
    </nav>
  )
}

export default HeroNav
