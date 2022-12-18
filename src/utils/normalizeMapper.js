import { objectMap2 } from './objectMap2'

export const normalizeMapper = (
  obj,
  options = { normalizeKey: true, normalizeValue: true }
) =>
  objectMap2(obj, (acc, value, key) => ({
    ...acc,
    [options.normalizeKey ? key.toLowerCase() : key]: options.normalizeValue
      ? value.toLowerCase()
      : value
  }))
