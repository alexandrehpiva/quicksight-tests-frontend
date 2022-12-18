export const assertTypeError = (value: any, type: string) => {
  if (typeof value !== type) {
      throw new TypeError(`Expected ${type} but got ${typeof value}`);
  }
}

export const defineObjectProperties = (object: any, descriptor: any, properties: any) => {
  for (const key in properties) {
      if (properties.hasOwnProperty(key)) {
          Object.defineProperty(object, key, Object.assign({}, descriptor, properties[key]));
      }
  }
}

export class Generation {
  static isGeneration(generator: any) {
      assertTypeError(generator, 'function');

      return this.prototype.isPrototypeOf(generator.prototype);
  }

  static generate(construct: any) {
      assertTypeError(construct, 'function');

      defineObjectProperties(
          construct, {
              configurable: false,
              enumerable: false,
              writable: false
          }, {
              prototype: Object.create(this.prototype)
          }
      );

      defineObjectProperties(
          construct, {
              configurable: false,
              enumerable: false,
              writable: false
          },
          Generation
      );

      defineObjectProperties(
          construct.prototype, {
              configurable: false,
              enumerable: false,
              writable: false
          }, {
              constructor: construct,
              generator: construct,
          }
      );

      return construct;
  }

  static definePrototype(descriptor: any, properties: any) {
      defineObjectProperties(this.prototype, descriptor, properties);
      return this;
  }
}

export class Generator extends Generation {
  static isGenerator(generator: any) {
      return this.isGeneration(generator);
  }

  static toGenerator(extendFrom: any, create: any) {
      console.warn('Generator.toGenerator is depreciated please use Generator.generateFrom');
      return this.generateFrom(extendFrom, create);
  }

  static generateFrom(extendFrom: any, create: any) {
      assertTypeError(extendFrom, 'function');
      assertTypeError(create, 'function');

      defineObjectProperties(
          create, {
              configurable: false,
              enumerable: false,
              writable: false
          }, {
              prototype: Object.create(extendFrom.prototype),
          }
      );

      defineObjectProperties(
          create, {
              configurable: false,
              enumerable: false,
              writable: false
          },
          Generation
      );

      defineObjectProperties(
          create.prototype, {
              configurable: false,
              enumerable: false,
              writable: false
          }, {
              constructor: create,
              generator: create,
          }
      );

      return create;
  }
}

export default Generator;
