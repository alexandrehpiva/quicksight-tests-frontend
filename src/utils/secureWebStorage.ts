// var Generator = require('generate-js');

// var SecureStorage = Generator.generate(
//     function SecureStorage(storage, options) {
//         var _ = this;

//         _.storage = storage;
//         if (options) {
//             _.hash = options.hash;
//             _.encrypt = options.encrypt;
//             _.decrypt = options.decrypt;
//         }
//     }
// );

// function through(data) {
//     return data;
// }

// SecureStorage.definePrototype({
//     hash: through,
//     encrypt: through,
//     decrypt: through,
// }, {
//     writable: true
// });

// SecureStorage.definePrototype({
//     getItem: function getItem(key) {
//         var _ = this;

//         key = _.hash(key);

//         var value = _.storage.getItem(key);

//         if (typeof value !== 'string') {
//             return value;
//         }

//         value = _.decrypt(value);

//         return JSON.parse(value);
//     },

//     setItem: function setItem(key, value) {
//         var _ = this;

//         key = _.hash(key);

//         value = JSON.stringify(value);

//         value = _.encrypt(value);

//         return _.storage.setItem(key, value);
//     },

//     removeItem: function removeItem(key) {
//         var _ = this;

//         key = _.hash(key);

//         return _.storage.removeItem(key);
//     },

//     clear: function clear() {
//         var _ = this;

//         return _.storage.clear();
//     },

//     key: function key(id) {
//         var _ = this;

//         return _.storage.key(id);
//     },

//     length: {
//         get: function getLength() {
//             var _ = this;
//             return _.storage.length;
//         }
//     }
// });

// module.exports = SecureStorage;

// Above code in TypeScript:

import Generator from "./generateJs";

export class SecureStorage extends Generator {
  storage: any;
  hash: any;
  encrypt: any;
  decrypt: any;

  constructor(storage: any, options: any) {
    super();

    this.storage = storage;
    if (options) {
      this.hash = options.hash;
      this.encrypt = options.encrypt;
      this.decrypt = options.decrypt;
    }
  }

  through(data: any) {
    return data;
  }

  getItem(key: any) {
    const ths = this;
    key = ths.hash(key);
    let value = ths.storage.getItem(key);
    if (typeof value !== "string") {
      return value;
    }
    value = ths.decrypt(value);
    return JSON.parse(value);
  }

  setItem(key: any, value: any) {
    const ths = this;
    key = ths.hash(key);
    value = JSON.stringify(value);
    value = ths.encrypt(value);
    return ths.storage.setItem(key, value);
  }

  removeItem(key: any) {
    const ths = this;
    key = ths.hash(key);
    return ths.storage.removeItem(key);
  }

  clear() {
    const ths = this;
    return ths.storage.clear();
  }

  key(id: any) {
    const ths = this;
    return ths.storage.key(id);
  }

  get length() {
    const ths = this;
    return ths.storage.length;
  }
}

export default SecureStorage;
