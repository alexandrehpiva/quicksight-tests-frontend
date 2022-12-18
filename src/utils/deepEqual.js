export const deepEqual = (a, b) => {
  if (a === b)
    return {
      isEqual: true,
      diff: null
    }

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor)
      return {
        isEqual: false,
        diff: {
          type: 'constructor',
          a: a.constructor,
          b: b.constructor
        }
      }

    var length, i, keys
    if (Array.isArray(a)) {
      length = a.length
      if (length != b.length)
        return {
          isEqual: false,
          diff: {
            type: 'length',
            a: length,
            b: b.length
          }
        }
      for (i = length; i-- !== 0; ) {
        const { isEqual, diff } = deepEqual(a[i], b[i])
        if (!isEqual)
          return {
            isEqual: false,
            diff: {
              type: 'array',
              index: i,
              ...diff
            }
          }
      }
      return {
        isEqual: true,
        diff: null
      }
    }

    if (a.constructor === RegExp)
      return {
        isEqual: a.source === b.source && a.flags === b.flags,
        diff: {
          type: 'regexp',
          a: a.source,
          b: b.source,
          flags: a.flags
        }
      }
    if (a.valueOf !== Object.prototype.valueOf)
      return {
        isEqual: a.valueOf() === b.valueOf(),
        diff: {
          type: 'valueOf',
          a: a.valueOf(),
          b: b.valueOf()
        }
      }
    if (a.toString !== Object.prototype.toString)
      return {
        isEqual: a.toString() === b.toString(),
        diff: {
          type: 'toString',
          a: a.toString(),
          b: b.toString()
        }
      }

    keys = Object.keys(a)
    length = keys.length
    if (length !== Object.keys(b).length)
      return {
        isEqual: false,
        diff: {
          type: 'keys',
          a: keys,
          b: Object.keys(b)
        }
      }

    for (i = length; i-- !== 0; ) {
      const key = keys[i]

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue
      }

      const { isEqual, diff } = deepEqual(a[key], b[key])
      if (!isEqual)
        return {
          isEqual: false,
          diff: {
            type: 'object',
            key,
            ...diff
          }
        }
    }

    return {
      isEqual: true,
      diff: null
    }
  }

  if (typeof a === 'function' && typeof b === 'function') {
    const isEqual = a.toString() === b.toString()
    if (!isEqual)
      return {
        isEqual: false,
        diff: {
          type: 'function',
          a: a.toString(),
          b: b.toString()
        }
      }
    return {
      isEqual: true,
      diff: null
    }
  }

  if (typeof a === 'symbol' && typeof b === 'symbol') {
    const isEqual = a.toString() === b.toString()
    if (!isEqual)
      return {
        isEqual: false,
        diff: {
          type: 'symbol',
          a: a.toString(),
          b: b.toString()
        }
      }
    return {
      isEqual: true,
      diff: null
    }
  }

  if (typeof a !== typeof b) {
    return {
      isEqual: false,
      diff: {
        type: 'type',
        a: typeof a,
        b: typeof b
      }
    }
  }

  // TODO: true if both NaN, false otherwise?

  return {
    isEqual: a !== a && b !== b,
    diff: {
      type: 'different',
      a: a,
      b: b
    }
  }
}
