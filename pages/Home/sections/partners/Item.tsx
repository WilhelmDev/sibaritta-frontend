import Image from 'next/image'
import style from './style.module.css'

interface ItemProps {
  img: string
  alt: string
}

const Item = ({ img, alt }: ItemProps) => {
  return (
    <article className={style.item_card}>
      <Image src={img} alt={alt} width={150} height={60} />
    </article>
  )
}

export default Item
