import transformPath from './transformPath'

/**
 * Extracts the paths from a given route transforming ids in paths to :id notation
 * e.g. from '/admin/companies/brand/1' return ['/admin', '/admin/companies', '/admin/companies/brand', '/admin/companies/brand/:id']
 * @param {string} path
 * @returns {string[]} - Array of paths
 * @example
 * const path = '/admin/companies/brand/1'
 * const transformedPath = extractPaths(path)
 * console.log(transformedPath)
 * // ['/admin', '/admin/companies', '/admin/companies/brand', '/admin/companies/brand/:id']
 */
const extractPaths = (path) => {
  const paths = path
    .split('/')
    .filter(Boolean)
    .map((p) => transformPath(p))
  const extractedPaths = []
  for (let i = 0; i < paths.length; i++) {
    extractedPaths.push(`/${paths.slice(0, i + 1).join('/')}`)
  }
  return extractedPaths
}

export default extractPaths
