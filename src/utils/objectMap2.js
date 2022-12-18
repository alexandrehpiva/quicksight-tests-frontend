/**
 * Loop into object properties assigning to a new one using predicate function.
 * @param {Object} object Object to loop into properties.
 * @param {Function} predicate Predicate function that will iterate in object properties.
 */
export const objectMap2 = (object, predicate) => {
  return Object.keys(object).reduce((acc, key) => {
    acc = predicate(acc, object[key], key)
    return acc
  }, {})
}
