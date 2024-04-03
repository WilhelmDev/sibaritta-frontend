import Image from 'next/image'
import { useContext } from 'react'
import { useSwiper } from 'swiper/react'
import { SwiperContext } from '../heroSwiper/SwiperContext'
import style from './style.module.css'

interface ButtonNavProps {
  icon: string
  title: string
  number: number
}

const ButtonNav = ({ icon, title, number }: ButtonNavProps) => {
  const swiper = useSwiper()
  const { itemActive, setItemActive } = useContext(SwiperContext)

  return (
    <button
      className={`${style.button} ${
        itemActive === number && style.button__active
      }`}
      onClick={() => {
        swiper.slideTo(number)
        setItemActive(swiper.activeIndex)
      }}
    >
      <Image src={icon} alt='icon of item' width={45} height={35} />
      <p>{title}</p>
    </button>
  )
}

export default ButtonNav
