import extractPaths from './extractPaths'

describe('extractPaths', () => {
  it('should extract the paths from a given route', () => {
    const paths = extractPaths('/admin/companies/brand')
    expect(paths).toEqual([
      '/admin',
      '/admin/companies',
      '/admin/companies/brand'
    ])
  })

  it('should extract the paths from a given route transforming ids in paths to :id notation', () => {
    const paths = extractPaths('/admin/companies/1/brand/1')
    expect(paths).toEqual([
      '/admin',
      '/admin/companies',
      '/admin/companies/:id',
      '/admin/companies/:id/brand',
      '/admin/companies/:id/brand/:id'
    ])
  })
})
