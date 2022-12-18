/**
 * Use the actual path path to fill params in the specified pathSchema
 * @param {*} path - actual path with params
 * @param {*} pathSchema - schema to fill params in
 * @returns string - path with params filled
 * @example
 * const path = '/admin/companies/3/brands/3/details'
 * const pathSchema = '/admin/companies/:id/brands'
 * const pathWithParams = fillPathParams(path, pathSchema)
 * console.log(pathWithParams)
 * // /admin/companies/3/brands
 */
export const fillPathParams = (path, pathSchema) => {
  const pathSchemaParts = pathSchema.split('/')
  const pathParts = path.split('/')
  const values = []

  pathSchemaParts.forEach((pathSchemaPart, index) => {
    if (pathSchemaPart.includes(':')) {
      values.push({
        id: index,
        value: pathParts[index]
      })
    }
  })

  return pathSchemaParts.reduce((acc, pathSchemaPart, idx) => {
    if (pathSchemaPart.includes(':')) {
      const value = values.find(({ id }) => id === idx).value
      return `${acc}${idx ? '/' : ''}${value}`
    }
    return `${acc}${idx ? '/' : ''}${pathSchemaPart}`
  }, '')
}
