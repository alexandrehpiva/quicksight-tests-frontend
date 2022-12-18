/**
 * objectReduce: Loop into object properties assigning to any other type of variable (third parameter) using predicate function.
 * @param {Object} object Object to loop into properties.
 * @param {any} accumulator Variable that will be assigned with new key value pairs from the predicate.
 * @param {any} current Current key value pair.
 * @param {string | number} key Current key.
 * @param {Object} source Object that will be assigned with new key value pairs from the predicate.
 */
export const objectReduce = (
  object,
  predicate = (acc, curr, key, src) => ({
    ...acc,
    ...predicate(curr, key, src)
  }),
  accumulator = {},
  source = {}
) =>
  Object.keys(object).reduce(
    (acc, key) => predicate(acc, object[key], key, source),
    accumulator
  )
