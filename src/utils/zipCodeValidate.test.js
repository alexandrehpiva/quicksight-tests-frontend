import { zipCodeValidate } from './zipCodeValidate'

describe('zipCodeValidate', () => {
  it('should return false when cep is empty', () => {
    expect(zipCodeValidate('')).toBeFalsy()
  })

  it('should return the state when cep is valid', () => {
    const mockValidCEPs = [
      '01000-300', // SP
      '19000-300', // SP
      '20000-300', // RJ
      '28000-300', // RJ
      '29000-300', // ES
      '29900-300', // ES
      '30000-300', // MG
      '39000-300', // MG
      '40000-300', // BA
      '48900-300', // BA
      '49000-300', // SE
      '49900-300', // SE
      '50000-300', // PE
      '56900-300', // PE
      '57000-300', // AL
      '57900-300', // AL
      '58000-300', // PB
      '58900-300', // PB
      '59000-300', // RN
      '59900-300', // RN
      '60000-300', // CE
      '63900-300', // CE
      '64000-300', // PI
      '64900-300', // PI
      '65000-300', // MA
      '65900-300', // MA
      '66000-300', // PA
      '68800-300', // PA
      '69000-300', // AM
      '69200-300', // AM
      '69400-300', // AM
      '69800-300', // AM
      '68900-300', // AP
      '69300-300', // RR
      '69900-300', // AC
      '70000-300', // DF
      '76900-300', // DF
      '77000-300', // TO
      '77900-300', // TO
      '78000-300', // MT
      '78800-300', // MT
      '79000-300', // MS
      '79900-300', // MS
      '78900-300', // RO
      '80000-300', // PR
      '87900-300', // PR
      '88000-300', // SC
      '89900-300', // SC
      '90000-300', // RS
      '99900-300' // RS
    ]

    const mockExpectStates = [
      'SP',
      'SP',
      'RJ',
      'RJ',
      'ES',
      'ES',
      'MG',
      'MG',
      'BA',
      'BA',
      'SE',
      'SE',
      'PE',
      'PE',
      'AL',
      'AL',
      'PB',
      'PB',
      'RN',
      'RN',
      'CE',
      'CE',
      'PI',
      'PI',
      'MA',
      'MA',
      'PA',
      'PA',
      'AM',
      'AM',
      'AM',
      'AM',
      'AP',
      'RR',
      'AC',
      'DF',
      'DF',
      'TO',
      'TO',
      'MT',
      'MT',
      'MS',
      'MS',
      'RO',
      'PR',
      'PR',
      'SC',
      'SC',
      'RS',
      'RS'
    ]

    mockValidCEPs.forEach((mockValidCEP, index) => {
      expect(
        `${zipCodeValidate(mockValidCEP)} : ${index} : ${mockValidCEPs[index]}`
      ).toBe(`${mockExpectStates[index]} : ${index} : ${mockValidCEPs[index]}`)
    })
  })

  it('should return false when cep is invalid', () => {
    const mockInvalidCEPs = [
      '00000-000',
      '00000-00',
      '00000-100',
      '00000-1000',
      '1234567',
      '123456789',
      '1234567890'
    ]

    mockInvalidCEPs.forEach((mockInvalidCEP, index) => {
      expect(
        `${zipCodeValidate(mockInvalidCEP)} : ${index} : ${
          mockInvalidCEPs[index]
        }`
      ).toBe(`false : ${index} : ${mockInvalidCEPs[index]}`)
    })
  })
})
