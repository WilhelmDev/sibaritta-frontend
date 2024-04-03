import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroGastronomia from '../heros/HeroGastronomia'
import HeroDrinks from '../heros/HeroDrinks'
import HeroBienestar from '../heros/HeroBienestar'
import HeroVuelos from '../heros/HeroVuelos'

import style from './style.module.css'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper/modules'
import HeroNav from '../heroNav'
import { SwiperContext } from './SwiperContext'
import HomeSibaritaSliders from '@/components/organisms/sibaritaComo/HomeSibaritaSliders'

const HeroSwiper = () => {
  const { setItemActive, activeAnimations, setActiveAnimations } =
    useContext(SwiperContext)

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
        scale: 1,
      }}
      speed={1500}
      modules={[EffectCoverflow, Pagination]}
      slidesPerView={1}
      onActiveIndexChange={(e) => {
        setItemActive(e.activeIndex)
        setActiveAnimations(true)
      }}
      className={style.swiper + ' ' + (activeAnimations && 'fade-container')}
      spaceBetween={100}
    >
      <HomeSibaritaSliders/>
      {/* <HeroNav /> */}
      {/* <SwiperSlide>
        <HeroGastronomia />
      </SwiperSlide>
      <SwiperSlide>
        <HeroDrinks />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBienestar />
      </SwiperSlide>
      <SwiperSlide>
        <HeroVuelos />
      </SwiperSlide> */}
    </Swiper>
  )
}

export default HeroSwiper
