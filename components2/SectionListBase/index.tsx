import { v4 as uuid } from 'uuid'
import style from './style.module.css'
import BgDegrade from '@/components2/BgDegrade'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionExampleProps {
  title: string
  items: string[]
  bg_img: string
}

const SectionListBase = ({ title, items, bg_img }: SectionExampleProps) => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  })

  return (
    <div className='section-list-base-container' ref={ref}>
      <div className={style.example_section}>
        <BgDegrade img_bg={bg_img} alt='' />
        <div className={ style.containers}>
          <h3
            style={{
              transform: isInView ? '' : 'translateY(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
            }}
          >
            {title}
          </h3>
          <div
            style={{
              transform: isInView ? '' : 'translateX(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
            }}
          >
            <ul>
              {items.map((item) => (
                <li className='soy-li' key={uuid()}>{item}</li>
              ))}
              <p>¿Y tú, eres un Sibaritta?</p>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionListBase
