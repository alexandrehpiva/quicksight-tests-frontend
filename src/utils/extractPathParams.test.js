import { extractPathParams } from './extractPathParams'

describe('extractPathParams', () => {
  it('should return an object with the values from the path', () => {
    const mockPathSchemas = [
      '/admin/companies/:id',
      '/admin/companies/:id/brands',
      '/admin/companies/:id/brands/:id'
    ]

    const mockPaths = [
      '/admin/companies/1',
      '/admin/companies/2/brands',
      '/admin/companies/3/brands/4'
    ]

    const mockValues = [['1'], ['2'], ['3', '4']]

    mockPathSchemas.forEach((pathSchema, index) => {
      const path = mockPaths[index]
      const values = extractPathParams(path, pathSchema)
      expect(values).toEqual(mockValues[index])
    })
  })
})
