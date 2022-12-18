/**
 * Loop into object properties sending key-value pairs to the predicate function.
 * @param {Object} object Object to loop into properties.
 * @param {Function} predicate Predicate function that will iterate in object properties.
 */
export const objectForeach = (object, predicate = (_value, _key) => {}) => {
  Object.keys(object).forEach((key) => predicate(object[key], key))
}
