import { objectForeachAsync } from './objectForeachAsync'

describe('objectForeachAsync', () => {
  it('should loop into object properties sending key-value pairs to the predicate function', async () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    }
    const predicate = jest.fn(async (value, key) => {
      await new Promise((resolve) => setTimeout(resolve, 100))
      return value + key
    })
    await objectForeachAsync(object, predicate)

    // jest wait for all promises to resolve
    // await new Promise(process.nextTick)

    expect(predicate).toHaveBeenNthCalledWith(1, 1, 'a')
    expect(predicate).toHaveBeenNthCalledWith(2, 2, 'b')
    expect(predicate).toHaveBeenNthCalledWith(3, 3, 'c')
  })
})
