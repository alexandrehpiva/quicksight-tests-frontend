/**
 * Loop into object properties assigning to a new one using predicate function.
 * @param {Object} object Object to loop into properties.
 * @param {Function} predicate Predicate function that will iterate in object properties.
 * @param {Object} outInto Object that will be assigned with new key value pairs from the predicate.
 */
export const objectMap = (
  object,
  predicate = (value, key) => ({ [key]: value }),
  outInto = {}
) => {
  Object.keys(object).forEach((key) =>
    Object.assign(outInto, predicate(object[key], key))
  )
  return outInto
}
