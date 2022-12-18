// Format cellphone and telefone numbers
// e.g. 11996969696 to (11) 99696-9696 and 1134961199 to (11) 3496-1199
export const phoneMask = (value) => {
  const onlyNum = value.replace(/\D/g, '')
  if (onlyNum.length <= 10) {
    return `(${onlyNum.slice(0, 2)}) ${onlyNum.slice(2, 6)}-${onlyNum.slice(6)}`
  }
  return `(${onlyNum.slice(0, 2)}) ${onlyNum.slice(2, 7)}-${onlyNum.slice(
    7,
    11
  )}`
}
