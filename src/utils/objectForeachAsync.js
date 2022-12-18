/**
 * Loop into object properties asynchronously sending key-value pairs to the predicate function
 * @param {Object} object Object to loop into properties.
 * @param {Function} predicate Predicate function that will iterate in object properties.
 */
export const objectForeachAsync = async (
  object,
  predicate = async (_value, _key) => {}
) => {
  for (const key in object) {
    await predicate(object[key], key)
  }
  return Promise.resolve()
}
