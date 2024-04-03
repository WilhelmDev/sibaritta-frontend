import BgDegrade from '@/components2/BgDegrade'
import Card from './Card'
import style from './style.module.css'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SectionDescription = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  })

  return (
    <div ref={ref}>
      <div
        className={style.description_section}
        style={{
          transform: isInView ? '' : 'translateX(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
        }}
      >
        <BgDegrade img_bg='/prueba.jpg' alt='plato de comida' />
        <section
          className={style.container}
          style={{
            transform: isInView ? '' : 'translateY(200%)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.1, 0.3, 0.5, 1)',
          }}
        >
          <Card number={50} text='Restaurantes aliados' />
          <Card number={50} text='Restaurantes aliados' />
          <Card number={50} text='Restaurantes aliados' />
          <Card number={50} text='Restaurantes aliados' />
        </section>
      </div>
    </div>
  )
}

export default SectionDescription
