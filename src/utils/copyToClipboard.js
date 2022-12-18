const copyToClipboard = (text) => {
  const textField = document.createElement('textarea')
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
    return
  }

  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}

export default copyToClipboard
