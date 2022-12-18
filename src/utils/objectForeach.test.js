import { objectForeach } from './objectForeach'

describe('objectForeach', () => {
  it('should loop into object properties sending key-value pairs to the predicate function', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    }
    const predicate = jest.fn()
    objectForeach(object, predicate)
    expect(predicate).toHaveBeenCalledTimes(3)
    expect(predicate).toHaveBeenCalledWith(1, 'a')
    expect(predicate).toHaveBeenCalledWith(2, 'b')
    expect(predicate).toHaveBeenCalledWith(3, 'c')
  })
})
