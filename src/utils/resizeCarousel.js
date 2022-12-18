export const resizeCarousel = (offsetWidth) => {
  if (offsetWidth >= 900) {
    const gap = 20 * 3
    const realWidth = (offsetWidth - gap) / 3
    return realWidth
  }
  if (offsetWidth >= 768 && offsetWidth < 900) {
    const gap = 20 * 2
    const realWidth = (offsetWidth - gap) / 2
    return realWidth
  }
  if (offsetWidth < 768) {
    const gap = 20 * 1
    const realWidth = (offsetWidth - gap) / 1
    return realWidth
  }
}
