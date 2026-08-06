# Leftpad OS

![tests: passing](https://img.shields.io/badge/tests-passing-brightgreen)
[![npm](https://img.shields.io/npm/v/leftpad-os?label=npm)](https://www.npmjs.com/package/leftpad-os)
![OS: yes](https://img.shields.io/badge/OS-yes-blue)

Leftpad OS takes [`left-pad`](https://github.com/left-pad/left-pad) to the next level by making it an operating system. It boots inside Node.js, manages the space to the left of your strings, and ships with fewer background services than any other modern OS.

## It is kind of an Operating System

The OS terminology is not *entirely* marketing. Leftpad OS is analogous to an operating system if you are willing to be *extremely* generous about both words.

Traditional OS | Leftpad OS
--- | ---
kernel | `index.js`
device drivers | the `ch` argument
shell | the Node.js REPL
processes | strings
executables | padding operations
users | npm dependents
ACLs | requested output lengths
bootloader | `require('leftpad-os')`
??? | Unicode outside the BMP

Our "kernel" legitimately performs several kernel-like duties: it accepts system calls, allocates space, schedules a loop, and returns control to the caller. The crucial difference is that all allocated space appears on the left.

Padding characters are like device drivers: they provide a small abstraction over an otherwise bewildering variety of spaces, zeroes, dashes, and asterisks. The third argument selects the hardware.

Traditional operating systems manage memory, processes, and files. Leftpad OS manages strings that are not wide enough yet. This tighter scope is why the entire system can boot synchronously from `node_modules`.

Inspired by Cloudflare OS's [strikingly reasonable version of this comparison](https://github.com/cloudflare/cloudflare-os#it-kind-of-is-an-operating-system).

## Install

```sh
npm install leftpad-os
```

## Usage

```js
const leftPad = require('leftpad-os')

leftPad('foo', 5)
// => '  foo'

leftPad('kernel', 10, '0')
// => '0000kernel'

leftPad(17, 5, 0)
// => '00017'
```

### `leftPad(value, length[, character])`

Returns `value` as a string, padded on the left until it reaches `length`. `character` defaults to a space and should be a single character.

In keeping with upstream behavior, strings that are already at least `length` characters long are returned unchanged. Characters outside the Unicode Basic Multilingual Plane count as two UTF-16 code units. That is not a bug; it is a legacy device interface.

## System requirements

- Node.js
- At least one string that could stand to move a little to the right

## Provenance and license

The runtime implementation and TypeScript declaration are derived from [`left-pad` 1.3.0](https://github.com/left-pad/left-pad/tree/v1.3.0). The original MIT copyright notice is preserved in [LICENSE](LICENSE), and more detailed attribution is in [NOTICE](NOTICE).

The new Leftpad OS documentation, tests, and package metadata are also released under the MIT License.
