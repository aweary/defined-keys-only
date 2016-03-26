# defined-keys-only

> Return a copy of an object with any undefined properties removed


## Install

```
$ npm install --save defined-keys-only
```


## Usage

```js
const definedKeysOnly = require('defined-keys-only')

var someInput = {
  someDefinedValue: 42,
  someUndefinedValue: undefined
}

var output = definedKeysOnly(someInput);
// {someDefinedValue: 42}

```

It can also delete deeply nested undefined values recursively.

```js

var someInput = {
  foo: 42,
  bing: undefined,
  bar: {
    baz: 42,
    biz: undefined
  }
}

var output = definedKeysOnly(someInput, true);
/*
{
  foo: 42,
  bar: {
    baz: 42
  }
}
 */

```


## API

### `definedKeysOnly(input: object, [deep: boolean])`

Returns a new object with the same properties as the `input` object, with
the exception of any properties with a value of `undefined`.

## License

MIT © Brandon Dail
