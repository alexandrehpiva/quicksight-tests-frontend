export const renderTextInCanvas = (text, canvasId, urlImage) => {
  const img = new Image()
  img.src = urlImage
  img.onload = () => {
    const canvas = document.getElementById(canvasId)
    if (!canvas) {
      console.error(`Canvas ${canvasId} not found`)
    }
    canvas.width = img?.width
    canvas.height = img?.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    ctx.font = '14px sans-serif'
    ctx.fillStyle = '#000000'
    ctx.fillText(text, 35, img?.height - 35)
  }
}
