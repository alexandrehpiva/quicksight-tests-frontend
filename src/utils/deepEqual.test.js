import { deepEqual } from './deepEqual'

describe('deepEqual', () => {
  // it('should return true if both equal', () => {
  //   const { isEqual, diff } = deepEqual(1, 1)
  //   expect(isEqual).toBe(true)
  //   expect(diff).toBe(null)
  // })
  // it('should return false and show the diff if is not an instance of the same constructor', () => {
  //   const { isEqual, diff } = deepEqual(1, '1')
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'constructor',
  //     a: 1,
  //     b: '1'
  //   })
  // })
  // it('should return false and show the diff if is an array and the length is different', () => {
  //   const { isEqual, diff } = deepEqual([1, 2], [1, 2, 3])
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'length',
  //     a: 2,
  //     b: 3
  //   })
  // })
  // it('should return false and show the diff if is an array and the value at index is different', () => {
  //   const { isEqual, diff } = deepEqual([1, 2], [1, 3])
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'array',
  //     index: 1,
  //     a: 2,
  //     b: 3
  //   })
  // })
  // it('should return true if is array and the length is the same and the values are equal', () => {
  //   const { isEqual, diff } = deepEqual([1, 2], [1, 2])
  //   expect(isEqual).toBe(true)
  //   expect(diff).toBe(null)
  // })
  // it('should return false and show the diff if is an instance of RegExp and the values are different', () => {
  //   const { isEqual, diff } = deepEqual(/a/g, /b/g)
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'regexp',
  //     a: 'a',
  //     b: 'b',
  //     flags: 'g'
  //   })
  // })
  // it('should return false and show the diff if the valueOf is different', () => {
  //   const { isEqual, diff } = deepEqual(1, 2)
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'valueOf',
  //     a: 1,
  //     b: 2
  //   })
  // })
  // it('should return false and show the diff if the toString is different', () => {
  //   const { isEqual, diff } = deepEqual(1, 2)
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'toString',
  //     a: '1',
  //     b: '2'
  //   })
  // })
  // it('should return false and show the diff if the keys are different', () => {
  //   const { isEqual, diff } = deepEqual({ a: 1 }, { b: 1 })
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'keys',
  //     a: ['a'],
  //     b: ['b']
  //   })
  // })
  // it('should behave the same way with sub-objects inside arrays', () => {
  //   const { isEqual, diff } = deepEqual([{ a: 1 }], [{ a: 1 }])
  //   expect(isEqual).toBe(true)
  //   expect(diff).toBe(null)
  // })
  // it('should behave the same way with sub-objects inside arrays', () => {
  //   const { isEqual, diff } = deepEqual([{ a: 1 }], [{ a: 2 }])
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'object',
  //     key: 'a',
  //     a: 1,
  //     b: 2
  //   })
  // })
  // it('should behave the same way with sub-objects inside objects', () => {
  //   const { isEqual, diff } = deepEqual({ a: { b: 1 } }, { a: { b: 1 } })
  //   expect(isEqual).toBe(true)
  //   expect(diff).toBe(null)
  // })
  // it('should behave the same way with sub-objects inside objects', () => {
  //   const { isEqual, diff } = deepEqual({ a: { b: 1 } }, { a: { b: 2 } })
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'object',
  //     key: 'a',
  //     diff: {
  //       type: 'object',
  //       key: 'b',
  //       a: 1,
  //       b: 2
  //     }
  //   })
  // })
  // it('should behave the same way with sub-objects inside objects', () => {
  //   const { isEqual, diff } = deepEqual({ a: { b: 1 } }, { a: { c: 1 } })
  //   expect(isEqual).toBe(false)
  //   expect(diff).toEqual({
  //     type: 'object',
  //     key: 'a',
  //     diff: {
  //       type: 'keys',
  //       a: ['b'],
  //       b: ['c']
  //     }
  //   })
  // })

  it('should return true when the values are different', () => {
    const str1 = 'Instância de string 1'
    const str2 = String(str1)

    expect(deepEqual(str1, str2).isEqual).toBe(true)
    expect(deepEqual(str1, `${str2}`).isEqual).toBe(true)
    expect(deepEqual(str1, str2.toLowerCase()).isEqual).toBe(false)
    expect(deepEqual(str1, `${str2} `).isEqual).toBe(false)
  })

  it('should return true when the values are different numbers', () => {
    expect(deepEqual(10, 10).isEqual).toBe(true)
    expect(deepEqual(10, '10').isEqual).toBe(false)
    expect(deepEqual(Number(10), 10).isEqual).toBe(true)
  })

  it('should return true when the values are different arrays', () => {
    const array1 = [{}, 0, true, '']
    const array2 = [...array1]

    expect(deepEqual(array1, array2).isEqual).toBe(true)

    array2[1] = 2
    expect(deepEqual(array1, array2).isEqual).toBe(false)

    const array3 = [...array1]
    array3[0] = {}
    expect(deepEqual(array1, array3).isEqual).toBe(true)
    array3[0] = { test: true }
    expect(deepEqual(array1, array3).isEqual).toBe(false)
  })

  it('should return true when the values are different objects', () => {
    const obj1 = {
      test: true,
      test2: 'true',
      test3: [0, 1, { a: 'a', b: 'b' }]
    }
    const obj2 = {
      test: true,
      test2: 'true',
      test3: [0, 1, { a: 'a', b: 'b' }]
    }

    expect(deepEqual(obj1, obj2).isEqual).toBe(true)

    obj2.test3[2].b = 'c'
    expect(deepEqual(obj1, obj2).isEqual).toBe(false)
  })
})
