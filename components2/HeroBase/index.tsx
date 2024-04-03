import Image from 'next/image'
import style from './style.module.css'
import BgDegrade from '../BgDegrade'
import { useContext, useRef } from 'react'
import { useInView } from 'framer-motion'
import { SwiperContext } from '@/pages/Home/heroSwiper/SwiperContext'

interface HeroProps {
  img: string
  alt: string
  img_bg: string
  content: JSX.Element
  type?: 'mitad' | 'entero'
}

const HeroBase = ({
  img,
  alt,
  content,
  img_bg,
  type = 'entero',
}: HeroProps) => {
  const ref = useRef(null)
  const { activeAnimations } = useContext(SwiperContext)

  const isInView = useInView(ref, {
    margin: '0px -600px 0px -600px',
  })

  return (
    <section className={style.hero} ref={ref}>
      <BgDegrade img_bg={img_bg} alt='Plato de bistec' type={type} />

      <article className={style.image_container}>
        <Image
          src={img}
          width={700}
          height={700}
          alt={alt}
          className={style.image__full}
        />
        <p
          className={style.text}
          style={
            activeAnimations
              ? {
                  transform: isInView ? '' : 'translateY(100%)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
                }
              : {}
          }
        >
          {content}
        </p>
      </article>
    </section>
  )
}

export default HeroBase
