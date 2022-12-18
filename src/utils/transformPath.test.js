import transformPath from './transformPath'

describe('transformPath', () => {
  it('should transform ids in paths to :id notation', () => {
    const tests = [
      {
        path: '/admin/companies/13/brands',
        expected: '/admin/companies/:id/brands'
      },
      {
        path: '/admin/companies//brands',
        expected: '/admin/companies//brands'
      },
      {
        path: '/admin/companies/13/',
        expected: '/admin/companies/:id/'
      },
      {
        path: '/admin/companies/13',
        expected: '/admin/companies/:id'
      },
      {
        path: '/admin/companies/54/brands/1',
        expected: '/admin/companies/:id/brands/:id'
      },
      {
        path: '',
        expected: ''
      },
      {
        path: '1',
        expected: ':id'
      }
    ]

    tests.forEach((test) => {
      expect(transformPath(test.path)).toEqual(test.expected)
    })
  })
})
