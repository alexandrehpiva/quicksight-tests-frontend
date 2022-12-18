export const insertBreakWord = (arr) => {
  if (!arr) return
  const BreakWord = arr.map((data) => {
    return { x: data.x.replace(/\s/g, '\n'), y: data.y }
  })

  return BreakWord
}
