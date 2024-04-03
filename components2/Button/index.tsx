import { PropsWithChildren } from 'react'
import style from './style.module.css'

const Button = ({ children }: PropsWithChildren) => {
  return <button className={style.button}>{children}</button>
}

export default Button
