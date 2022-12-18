/**
 * For each item in the array, call the callback function.
 * @param {Array} array
 * @param {Function} callback
 * @returns {Promise}
 * @example
 * awaitableForEach([1, 2, 3], (item, index, array) => {
 *  console.log(item, index, array)
 * })
 * // 1 0 [1, 2, 3]
 */
export const awaitableForEach = async (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array)
  }
}
