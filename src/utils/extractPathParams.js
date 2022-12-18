/**
 * Extracts parameters from a URL string
 * @param {*} path - path to extract params from
 * @param {*} pathSchema - schema to extract params from
 * @returns [string] - array of extracted parameters
 * @example
 * const path = '/admin/companies/brand/1'
 * const pathSchema = '/admin/companies/brand/:id'
 * const [brandId] = extractPathParams(path, pathSchema)
 * console.log(brandId)
 * // 1
 */
export const extractPathParams = (path, pathSchema) => {
  const pathSchemaParts = pathSchema.split('/')
  const pathParts = path.split('/')
  const values = []

  pathSchemaParts.forEach((pathSchemaPart, index) => {
    if (pathSchemaPart.includes(':')) {
      values.push(pathParts[index])
    }
  })

  return values
}
