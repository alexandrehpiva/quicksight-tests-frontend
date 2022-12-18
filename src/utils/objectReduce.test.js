import { objectReduce } from './objectReduce'

describe('objectReduce', () => {
  it('should loop into object properties assigning to any other type of variable (third parameter) using predicate function.', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    }
    const predicate = (acc, curr, key) => ({
      ...acc,
      [key]: curr
    })
    const accumulator = {}
    const source = {}
    expect(objectReduce(object, predicate, accumulator, source)).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
  })

  it('should loop into object properties sending key-value pairs to the predicate function.', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    }
    let predicate = (acc, curr) => [...acc, curr]
    expect(objectReduce(object, predicate, [])).toEqual([1, 2, 3])

    predicate = (acc, _, key) => [...acc, key]
    expect(objectReduce(object, predicate, [])).toEqual(['a', 'b', 'c'])
  })
})
