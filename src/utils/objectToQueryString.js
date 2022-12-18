export const objectToQueryString = (obj) => {
  const keys = Object.keys(obj)
  if (keys.length === 0) return ''
  return `?${keys
    .map((key) => {
      if (Array.isArray(obj[key])) {
        return obj[key].map((value) => `${key}=${value}`).join('&')
      }
      return `${key}=${obj[key]}`
    })
    .join('&')}`
}
