var definedKeysOnly = require('./index')
var expect = require('chai').expect;


describe('defined-keys-only', () => {

  var input = {
    first: undefined,
    second: '42',
    third: {key: 42, another: false, last: undefined},
    fourth: undefined,
    fifth: null,
    sixth: 42,
    seventh: [1, 2, 3, 4, 5]
  }

  it('should delete any top-level keys that have a `undefined` value', () => {

    var output = {
      second: '42',
      third: {key: 42, another: false, last: undefined},
      fifth: null,
      sixth: 42,
      seventh: [1, 2, 3, 4, 5],
    }

    expect(definedKeysOnly(input)).to.deep.equal(output)
  })

  it('should call recursively if deep argument is true', () => {
    var output = {
      second: '42',
      third: {key: 42, another: false},
      fifth: null,
      sixth: 42,
      seventh: [1, 2, 3, 4, 5],
    }
    expect(definedKeysOnly(input, true)).to.deep.equal(output)
  })

})
