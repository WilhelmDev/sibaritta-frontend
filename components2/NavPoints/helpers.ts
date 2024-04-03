const height_visible_viewport = () => window.innerHeight
const height_total_viewPort = () => document.documentElement.scrollHeight
const get_px_top_of_scroll = () => window.scrollY

export const get_porcentaje_of_scroll = () => {
  const totalScroll = height_total_viewPort() - height_visible_viewport()
  const currentScrollPercentage = (get_px_top_of_scroll() / totalScroll) * 100

  return currentScrollPercentage
}

export const px_top_of_circle_container = (percentage: number) => {
  const top_px = 2.7 * percentage
  return top_px
}

const px_top_of_scroll = (percentage: number) => {
  const height = height_total_viewPort() - height_visible_viewport()
  const top_px = (percentage / 100) * height
  return top_px
}

export const moveScroll = (percentage: number) => {
  window.scrollTo({
    top: px_top_of_scroll(percentage),
    behavior: 'smooth',
  })
}
