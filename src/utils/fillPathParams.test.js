import { fillPathParams } from './fillPathParams'

describe('fillPathParams', () => {
  it('should fill params in the specified pathSchema', () => {
    const mockPaths = [
      '/admin/companies/1',
      '/admin/companies/2/brands',
      '/admin/companies/3/brands/4',
      '/admin/companies/5/brands/6/details',
      '/admin/companies/7/brands/8/details/9',
      '/admin/companies/10/brands/11/details'
    ]

    const mockPathSchemas = [
      '/admin/companies/:id',
      '/admin/companies/:id/brands',
      '/admin/companies/:id/brands/:id',
      '/admin/companies/:id/brands/:id/details',
      '/admin/companies/:id/brands/:id',
      '/admin/companies/:id'
    ]

    const mockValues = [
      '/admin/companies/1',
      '/admin/companies/2/brands',
      '/admin/companies/3/brands/4',
      '/admin/companies/5/brands/6/details',
      '/admin/companies/7/brands/8',
      '/admin/companies/10'
    ]

    mockPaths.forEach((path, index) => {
      const pathSchema = mockPathSchemas[index]
      const pathWithParams = fillPathParams(path, pathSchema)
      expect(pathWithParams).toBe(mockValues[index])
    })
  })
})
