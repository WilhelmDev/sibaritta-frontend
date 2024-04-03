import { PropsWithChildren, useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionProps {
  direction: 'left' | 'right' | 'top' | 'bottom'
}

const directions = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)',
}

const SectionBase = ({
  children,
  direction,
}: PropsWithChildren<SectionProps>) => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  })

  return (
    <div className='you-are-sibaritta-container' ref={ref}>
      <div
        style={{
          transform: isInView ? '' : directions[direction],
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.1, 0.3, 0.5, 1)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SectionBase
