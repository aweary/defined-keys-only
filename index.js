var toString = Object.prototype.toString;
var objectPrototype = '[object Object]';

function definedKeys(obj, deep) {
  return Object.keys(obj).reduce(function(acc, key) {
    var value = obj[key]
    if (value === undefined) return acc
    if (deep && (toString.call(value) === objectPrototype)) {
      value = definedKeys(value, true)
    }
    acc[key] = value;
    return acc
  }, {})
}

module.exports = definedKeys;
