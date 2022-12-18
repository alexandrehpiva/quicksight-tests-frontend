/**
 * Transform ids in paths to :id notation
 * e.g. from '/admin/companies/13/brands' return '/admin/companies/:id/brands'
 * @param {string} path
 * @returns {string} - Path with ids in :id notation
 * @example
 * const path = '/admin/companies/13/brands'
 * const transformedPath = transformPath(path)
 * console.log(transformedPath) // '/admin/companies/:id/brands'
 */
const transformPath = (path) => {
  const paths = path.split('/')
  const transformedPath = paths
    .map((p) => (Number.isNaN(Number(p)) ? p : p && ':id'))
    .join('/')
  return transformedPath
}

export default transformPath
