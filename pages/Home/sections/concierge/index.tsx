import { v4 as uuid } from 'uuid'
import style from './style.module.css'
import BgDegrade from '@/components2/BgDegrade'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const items = [
  'El Concierge te brindará asistencia personalizada y detallada para tus eventos privados',
  'Proporciona recomendaciones y orientación según tu solicitud especial',
  'Llena el formulario con información sobre tu evento y el concierge sibaritta se comunicará a la brevedad para hacer realidad tu evento especial',
]

const SectionConcierge = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  })

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <div
        className={style.concierge}
        style={{
          transform: isInView ? '' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
        }}
      >
        <BgDegrade img_bg='/prueba5.jpg' alt='' />
        <div className={style.container}>
          <div
            style={{
              transform: isInView ? '' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
            }}
          >
            <h3>Concierge Sibaritta</h3>
            <div>
              <ul>
                {items.map((item) => (
                  <li key={uuid()}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{
              transform: isInView ? '' : 'translateX(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
            }}
          >
            <Image
              src='/telefono.jpg'
              alt=''
              width={300}
              height={450}
              className={style.image}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionConcierge
