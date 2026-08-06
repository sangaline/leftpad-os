'use strict';

var assert = require('assert');
var leftPad = require('./');

var cases = [
  ['leaves an already-wide string alone', leftPad('foobar', 6), 'foobar'],
  ['pads with spaces by default', leftPad('foo', 5), '  foo'],
  ['pads with a custom character', leftPad('foo', 6, '*'), '***foo'],
  ['treats zero as a padding character', leftPad(17, 5, 0), '00017'],
  ['converts numbers to strings', leftPad(1, 2, 0), '01'],
  ['converts booleans to strings', leftPad(true, 7), '   true'],
  ['handles an empty input string', leftPad('', 2), '  '],
  ['handles a large padding request', leftPad('x', 101, '-').length, 101]
];

cases.forEach(function (testCase) {
  assert.strictEqual(testCase[1], testCase[2], testCase[0]);
});

console.log('ok - booted Leftpad OS and passed ' + cases.length + ' system checks');
