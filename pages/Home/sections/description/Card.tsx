import style from './style.module.css'

interface CardProps {
  number: number
  text: string
}

const Card = ({ number, text }: CardProps) => {
  return (
    <article className={style.card}>
      <h3>+{number}</h3>
      <p>{text}</p>
    </article>
  )
}

export default Card
