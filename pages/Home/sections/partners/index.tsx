import BgDegrade from '@/components2/BgDegrade'
import style from './style.module.css'
import SwiperPartners from './SwiperPartners'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const SectionPartners = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  })

  return (
    <div ref={ref}>
      <div
        className={style.partners}
        style={{
          transform: isInView ? '' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
        }}
      >
        <BgDegrade img_bg='/prueba2.jpg' alt='plato de comida' />
        <h2
          className={style.partners__title}
          style={{
            transform: isInView ? '' : 'TranslateY(400%)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
          }}
        >
          Sibaritta Partners
        </h2>
        <SwiperPartners />
      </div>
    </div>
  )
}

export default SectionPartners
