import style from './style.module.css'

interface BgDegradeProps {
  img_bg: string
  alt: string
  type?: 'mitad' | 'entero'
}

const BgDegrade = ({ img_bg, alt, type = 'entero' }: BgDegradeProps) => {
  return (
    <div className={style.img_bg__container}>
      <img
        src={img_bg}
        alt={alt}
        className={style.image_bg}
        style={{ objectFit: 'cover' }}
      />
      <div
        className={`${style.image_bg__gradient} ${
          type == 'mitad' ? style.degradado_1 : style.degradado_2
        }`}
      ></div>
    </div>
  )
}

export default BgDegrade
