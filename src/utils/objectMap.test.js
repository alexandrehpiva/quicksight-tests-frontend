import { objectMap } from './objectMap'

describe('objectMap', () => {
  it('should loop into object properties assigning to a new one using predicate function', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    }
    const predicate = jest.fn((value, key) => ({ [key]: value }))
    const outInto = {}
    objectMap(object, predicate, outInto)
    expect(predicate).toHaveBeenCalledTimes(3)
    expect(predicate).toHaveBeenCalledWith(1, 'a')
    expect(predicate).toHaveBeenCalledWith(2, 'b')
    expect(predicate).toHaveBeenCalledWith(3, 'c')
    expect(outInto).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
  })
})
