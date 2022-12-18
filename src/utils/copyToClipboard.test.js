import copyToClipboard from './copyToClipboard'

describe('copyToClipboard', () => {
  it('should copy text to clipboard using navigator.clipboard.writeText function', () => {
    const text = 'a test'
    const mock = jest.fn()
    navigator.clipboard = {
      writeText: mock
    }
    copyToClipboard(text)
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith(text)
  })

  it('should copy text to clipboard using document.execCommand function if navigator.clipboard is not available', () => {
    const text = 'a test'
    const mock = jest.fn()
    navigator.clipboard = undefined
    document.execCommand = mock
    copyToClipboard(text)
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('copy')
  })
})
