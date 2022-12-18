import { objectMap2 } from './objectMap2'

describe('objectMap2', () => {
  it('should loop into object properties assigning to a new one using predicate function', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    }
    const predicate = jest.fn((acc, obj, key) => ({ ...acc, [key]: obj }))
    const newObject = objectMap2(object, predicate)
    expect(predicate).toHaveBeenCalledTimes(3)
    expect(predicate).toHaveBeenCalledWith({}, 1, 'a')
    expect(predicate).toHaveBeenCalledWith({ a: 1 }, 2, 'b')
    expect(predicate).toHaveBeenCalledWith({ a: 1, b: 2 }, 3, 'c')
    expect(newObject).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
  })
})
