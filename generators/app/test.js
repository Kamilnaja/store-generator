var Formatter = require('./Formatter');
var assert = require('assert');

assert.strictEqual(
    Formatter.kebabCase('hello-moto'), 'HELLO_MOTO',
    'kebabCase go wrong'
)
assert.strictEqual(
    Formatter.lowerCamelCase('hello-moto'), 'helloMoto',
    'lowerCamelCase go bad '
);
assert.strictEqual(
    Formatter.upperCamelCase('hello-moto'), 'HelloMoto',
    'upperCamelCase go bad'
);
