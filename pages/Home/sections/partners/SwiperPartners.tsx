import style from './style.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { v4 as uuid } from 'uuid'
import Item from './Item'

interface Item {
  img: string
  alt: string
}

const items: Item[] = [
  {
    img: '/partners/1.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/2.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/3.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/4.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/5.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/1.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/2.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/3.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/4.svg',
    alt: 'Logo de Seratta',
  },
  {
    img: '/partners/5.svg',
    alt: 'Logo de Seratta',
  },
]

const SwiperPartners = () => {
  return (
    <Swiper
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        630: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        940: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Navigation]}
      className={style.swiper_partners}
    >
      {items.map((item) => (
        <SwiperSlide key={uuid()}>
          <Item img={item.img} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperPartners
