import Link from 'next/link'
import Button from '../Button'
import Logo from '../Logo'
import style from './style.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <Logo />
      </div>

      <nav className={style.nav}>
        <Link href='/' className={style.link}>
          Inicio
        </Link>
        <Link href='/' className={style.link}>
          ¿Quienes somos?
        </Link>
        <Link href='/' className={style.link}>
          SIbaritta Business
        </Link>
        <Link href='/' className={style.link}>
          FAQ
        </Link>

        <Button>Iniciar sesión</Button>
      </nav>
    </div>
  )
}

export default Header
