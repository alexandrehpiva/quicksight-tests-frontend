import { awaitableForEach } from './awaitableForEach'

describe('awaitableForEach', () => {
  it('should call the callback function for each item in the array', async () => {
    const array = [1, 2, 3]
    const callback = jest.fn()
    await awaitableForEach(array, callback)
    expect(callback).toHaveBeenCalledTimes(3)
  })

  it('should call the callback function with the correct arguments', async () => {
    const array = [1, 2, 3]
    const callback = jest.fn()
    await awaitableForEach(array, callback)
    expect(callback).toHaveBeenCalledWith(1, 0, array)
    expect(callback).toHaveBeenCalledWith(2, 1, array)
    expect(callback).toHaveBeenCalledWith(3, 2, array)
  })
})
