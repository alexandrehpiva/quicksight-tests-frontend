export const trimAllStrProps = (obj) => {
  if (obj?.constructor === String) {
    return obj.trim()
  }
  if (obj?.constructor === Object) {
    return Object.keys(obj).reduce((acc, key) => {
      if (typeof obj[key] === 'string') {
        acc[key] = obj[key].trim()
      } else {
        acc[key] = trimAllStrProps(obj[key])
      }
      return acc
    }, {})
  }
  return obj
}
