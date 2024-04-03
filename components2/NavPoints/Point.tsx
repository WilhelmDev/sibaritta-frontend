import style from './style.module.css'

interface PointProps {
  isActive?: boolean
  onClick?: () => void
  styles?: React.CSSProperties
}

const Point = ({ isActive = false, onClick, styles }: PointProps) => {
  return (
    <button
      className={`${style.point} ${isActive && style.point__active}`}
      onClick={onClick}
      style={styles}
    >
      {isActive ? <div style={{top:"1px"}}>◯</div> : <span className={`${style.inactivePoint}`}>●</span>}
    </button>
  )
}
export default Point
