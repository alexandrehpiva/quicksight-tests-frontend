/**
 * Download an image from an endpoint
 * @param {*} url - The url to download the image from
 * @param {*} fileName - The name of the file to save the image as
 * @returns {Promise} - A promise that resolves to the file path of the downloaded image
 * @example
 * downloadImage('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 'google.png')
 * // => '/Users/user/Downloads/google.png'
 */
export const downloadImage = (url, fileName) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        if (this.status > 200 && this.status < 400) {
          resolve(this.response)
        } else {
          reject(this.response)
        }
      }
    })
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.setRequestHeader('Content-type', 'image/*')
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader(
      'Content-Disposition',
      `attachment; filename="${fileName}"`
    )
    xhr.onload = function () {
      const urlCreator = window.URL || window.webkitURL
      const imageUrl = urlCreator.createObjectURL(this.response)
      const tag = document.createElement('a')
      tag.href = imageUrl
      tag.download = fileName
      document.body.appendChild(tag)
      tag.click()
      document.body.removeChild(tag)
    }
    xhr.send()
  })
