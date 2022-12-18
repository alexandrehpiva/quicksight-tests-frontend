import { phoneMask } from './phoneMask'

describe('phoneMask', () => {
  it('should format cellphone number', () => {
    expect(phoneMask('11996969696')).toBe('(11) 99696-9696')
  })

  it('should format telefone number', () => {
    expect(phoneMask('1134961199')).toBe('(11) 3496-1199')
  })
})
